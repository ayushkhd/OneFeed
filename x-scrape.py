from twikit.client import Client
import time
import random
import os
from dotenv import load_dotenv

class TwitterScraper:
    def __init__(self, language='en-US'):
        # Load environment variables
        load_dotenv()
        self.username = os.getenv('USERNAME')
        self.password = os.getenv('PASSWORD')
        self.client = Client(language)
        self.cookies_file = 'cookies.json'
        self.num_get_requests = 5
        self.load_cookies()

    def save_cookies(self):
        self.client.save_cookies(self.cookies_file)

    def load_cookies(self):
        if os.path.exists(self.cookies_file):
            self.client.load_cookies(self.cookies_file)
        else:
            self.login_and_save_cookies()

    def login_and_save_cookies(self):
        try:
            _ = self.client.user_id()
        except Exception as e:
            print('Cookies expired, invalid, or not found. Attempting to log in.')
            self.client.login(auth_info_1=self.username, password=self.password)
            self.save_cookies()

    def collect_tweets(self):
        all_tweets = []
        for _ in range(self.num_get_requests):
            tweets = self.client.get_timeline()
            for tweet in tweets:
                tweet_info = {
                    'user': tweet.user['legacy']['screen_name'],
                    'content': tweet.text,
                    'id': tweet.id,
                    'avatar_url': tweet.user['legacy']['profile_image_url_https']
                }
                all_tweets.append(tweet_info)
            
            time.sleep(random.randint(3, 8))
        
        return all_tweets

# Usage
scraper = TwitterScraper()
collected_tweets = scraper.collect_tweets()
for tweet in collected_tweets:
    print('------')
    print(f"User: {tweet['user']}")
    print(f"Content: {tweet['content']}")
    print(f"Id: {tweet['id']}")
    print('------')
