from pydantic import BaseModel, Field
from typing import List
from datetime import datetime
import instructor
from openai import OpenAI


# openAI compatible API with custom base url
openai.api_key = os.environ['MISTRAL_API_KEY']
openai.base_url = "https://api.mistral.ai/v1/chat/completions"

# Assuming you have already configured your OpenAI client with the necessary API key
client = instructor.patch(OpenAI())


def fetch_tweets(query: str) -> List[Tweet]:
    response = client.chat.completions.create(
        model="mistral-small",  # Replace with your actual Mistral model name
        messages=[
            {"role": "user", "content": query}
        ],
        response_model=List[Tweet],  # This instructs the client to validate the response against your model
        stream=False,
    )
    return response

class Tweet(BaseModel):
    username: str = Field(..., description="The Twitter username")
    content: str = Field(..., description="The content of the tweet")
    avatar_url: str = Field(..., description="URL to the user's avatar")
    creation_timestamp: datetime = Field(..., description="When the tweet was created")
    tweet_id: str = Field(..., description="The unique identifier for the tweet")

# example usage
query = "Fetch recent tweets related to technology and AI"
tweets = fetch_tweets(query)
for tweet in tweets:
    print(f"{tweet.username}: {tweet.content} (Posted on {tweet.creation_timestamp})")
