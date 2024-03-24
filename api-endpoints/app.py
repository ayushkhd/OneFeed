from flask import Flask, jsonify
from xScrape import TwitterScraper

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Flask API!"

# Return JSON data
@app.route('/api/data')
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


if __name__ == '__main__':
    app.run(debug=True)


