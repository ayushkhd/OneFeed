import os
from flask import Flask, jsonify, request
from xScrape import TwitterScraper
from config import Config
from database import DatabaseClient
from document_processor import DocumentProcessor
from retriever import NodeRetriever
from ScriptGen import ScriptGenerator
from dotenv import load_dotenv
from elevenlabs import Voice, VoiceSettings, play
from elevenlabs.client import ElevenLabs
from llama_index.llms.mistralai import MistralAI

load_dotenv()  # take environment variables from .env.

global payload
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
    #tweets = scraper.collect_tweets()
    #_ = doc_processor.process_documents(tweets)
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

@app.route('/api/scriptgen')
def scriptgen():
    content = ''
    for key in payload.keys():
        text = data[key]["content"]
        content = str(content) + '\n\n'
    
    script = script_gen.complete(content)

'''
Voice Gen:
It takes in all the tweets that are relevant + calls Mistral to generate a script + calls 11Labs to generate audio.
Returns an audio link to play in the website 
'''
@app.route('/audio')
def audio_recording():
    # call 11labs with feedupdate data 
    data = retrieve_top_k()

    # audio = client.generate(
    # text="Hello! My name is Bella.",
    # voice=Voice(
    #     voice_id='EXAVITQu4vr4xnSDxMaL',
    #     settings=VoiceSettings(stability=0.71, similarity_boost=0.5, style=0.0, use_speaker_boost=True)
    #     )
    # )


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
    #scraper = TwitterScraper()
    # Initialize LLM for generating script
    llm = MistralAI(model="mistral-small-latest", temperature=0.1, api_key=config.MISTRAL_API_KEY)
    script_gen = ScriptGenerator(llm)

    client = ElevenLabs(
    api_key=os.environ['ELEVEN_LABS_API_KEY']
    )
 
    app.run(debug=True)
