from flask import Flask, jsonify
from xScrape import TwitterScraper
from config import Config
from database import DatabaseClient
from document_processor import DocumentProcessor
from retriever import NodeRetriever


app = Flask(__name__)


# Return TEST JSON data for testing
@app.route('/api/test_data')
def data():
    scraper = TwitterScraper()
    collected_tweets = scraper.collect_tweets()
    for tweet in collected_tweets:
        print('------')
        print(f"User: {tweet['user']}")
        print(f"Content: {tweet['content']}")
        print(f"Id: {tweet['id']}")
        print('------')

    sample_data = {"name": "OneFeed", "type": "AI News Model"}
    return jsonify(sample_data)

'''
Feed Update - 
Ranks the top content to display on the feed 
Currently, returns the top K tweet 
Nothing needs to be provided for this
Returns a structured JSON for UI 
Returns a list of top 5 categories 
“Broad categories sorted by top industries” 
'''
@app.route('/')
def feedupdate():
    query = "most important tweets"
    scraper = TwitterScraper()
    tweets = scraper.collect_tweets()
    refreshed_index = doc_processor.process_documents(tweets)
    print("Index refreshed and documents processed.")
    # Retrieve
    retriever = NodeRetriever(refreshed_index, top_k=10)
    retr_doc = retriever.retrieve_nodes(query)
    print(retr_doc)
    # Return the list of categories 
    return jsonify(retr_doc)


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
 
    app.run(debug=True)
