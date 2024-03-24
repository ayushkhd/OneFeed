from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/')
def home():
    return "Welcome to the Flask API!"

# Return JSON data
@app.route('/api/data')
def data():
    sample_data = {"name": "OneFeed", "type": "AI News Model"}
    return jsonify(sample_data)


if __name__ == '__main__':
    app.run(debug=True)


