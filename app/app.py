from flask import Flask, jsonify, request
from xScrape import TwitterScraper
from config import Config
from database import DatabaseClient
from document_processor import DocumentProcessor
from retriever import NodeRetriever


app = Flask(__name__)


# Return TEST JSON data for testing
# @app.route('/api/test_data')
# def data():
#     collected_tweets = scraper.collect_tweets()
#     for tweet in collected_tweets:
#         print('------')
#         print(f"User: {tweet['user']}")
#         print(f"Content: {tweet['content']}")
#         print(f"Id: {tweet['id']}")
#         print('------')

#     sample_data = {"name": "OneFeed", "type": "AI News Model"}
#     return jsonify(sample_data)

'''
Feed Update - 
Ranks the top content to display on the feed 
Currently, returns the top K tweet 
Nothing needs to be provided for this
Returns a structured JSON for UI 
Returns a list of top 5 categories 
“Broad categories sorted by top industries” 
'''
@app.route('/api/refresh')
def feedupdate():
    tweets = scraper.collect_tweets()
    _ = doc_processor.process_documents(tweets)
    print("Index refreshed and documents processed.")
    # Return the list of categories
    # TODO: Does this work?
    return 'Success', 200

@app.route('/api/retrieve')
def retrieve_top_k():
    query = request.args.get('query', "most important tweets")
    top_k_str = request.args.get('top_k', "5")  # Arguments are returned as strings

    try:
        top_k = int(top_k_str)  # Convert top_k to an integer
    except ValueError:
        return jsonify({"error": "Invalid value for top_k, please provide an integer."}), 400

    # Ensure top_k is positive
    if top_k <= 0:
        return jsonify({"error": "top_k must be greater than 0."}), 400
    # Retrieve
    refreshed_index = doc_processor.process_documents([], create=False)
    # don't remove the *2 multiplier. There is a bug in LlamaIndex gives 1/2 of top_k
    retriever = NodeRetriever(refreshed_index, top_k=2*top_k)
    retr_doc = retriever.retrieve_nodes(query)
    payload = {}
    for i, doc in enumerate(retr_doc):
        data = doc.metadata
        data['content'] = doc.get_content()
        data['retrieval_score'] = doc.get_score()
        payload[i] = data
    # Sort the payload by the retrieval_score in descending order
    sorted_payload = sorted(payload.items(), key=lambda x: x[1]['retrieval_score'], reverse=True)
    # Create a new dictionary with the sorted payload
    ranked_payload = {}
    for idx, (key, value) in enumerate(sorted_payload):
        ranked_payload[idx] = value
    return jsonify(payload)


'''
Voice Gen - 
It takes in all the tweets that are relevant + calls Mistral to generate a script + calls 11Labs to generate audio.
Returns an audio link to play in the website 
'''
@app.route('/audio')
def audio_recording():
    # call 11labs with feedupdate data 
    return jsonify("link_to_audio")

'''
Categorizing:
Feed Update for a category [“AI”, “Health”] 
Returns a structured JSON for UI 
'''
@app.route('/api/category')
def category_update():
    # call feedupdate with category
    return jsonify("data_to_return")



if __name__ == '__main__':
   # Load config
    config = Config()
    # Initialize MongoDB client
    db_client = DatabaseClient(config.ATLAS_URI, config.DB_NAME, config.COLLECTION_NAME).client
    # Initialize Document Processor
    doc_processor = DocumentProcessor(config, db_client)
    # Create index and embed documents
    scraper = TwitterScraper()
 
    app.run(debug=True)
