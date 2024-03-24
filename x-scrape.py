from twikit.client import Client
import time
import random
import os
from dotenv import load_dotenv  # Import the load_dotenv function

# Load environment variables
load_dotenv()

USERNAME = os.getenv('USERNAME')  # Load USERNAME from .env
PASSWORD = os.getenv('PASSWORD')  # Load PASSWORD from .env

COOKIES_FILE = 'cookies.json'
NUM_GET_REQUESTS = 1

# Initialize the client
client = Client('en-US')

def save_cookies():
    client.save_cookies(COOKIES_FILE)

def load_cookies():
    if os.path.exists(COOKIES_FILE):
        client.load_cookies(COOKIES_FILE)

# Attempt to use cached cookies
load_cookies()

# Try to perform an action that requires authentication
try:
    # This is a placeholder for a simple authenticated action, replace it with an actual call
    # For example, trying to fetch a small piece of data that requires login
    _ = client.user_id()
    # If the above line does not raise an exception, assume we're logged in
except Exception as e:
    print('cookies expired, invalid or not found. Attempting to log in')
    # If an exception is caught, assume it's because we're not logged in
    # Log in and save cookies
    client = Client('en-US')
    client.login(auth_info_1=USERNAME, password=PASSWORD)
    save_cookies()

# Function to collect tweets
def collect_tweets():
    all_tweets = []  # List to store all tweets
    for _ in range(NUM_GET_REQUESTS):  # Loop to run get_timeline() 5 times
        tweets = client.get_timeline()
        for tweet in tweets:
            # Assuming tweet object has 'username', 'text', and 'url' attributes
            tweet_info = {
                'user': tweet.user['legacy']['screen_name'],
                'content': tweet.text,
                'id': tweet.id
            }
            all_tweets.append(tweet_info)
        
        # Sleep for a random time between 3 and 8 seconds to avoid being banned
        time.sleep(random.randint(3, 8))
    
    return all_tweets

# Collect tweets
collected_tweets = collect_tweets()

# Print collected tweets
for tweet in collected_tweets:
    print('------')
    print(f"User: {tweet['user']}")
    print(f"Content: {tweet['content']}")
    print(f"Id: {tweet['id']}")
    print('------')
