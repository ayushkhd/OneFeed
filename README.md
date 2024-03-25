# OneFeed

## Inspiration

Inspired by the desire for a more meaningful digital experience, we envisioned OneFeed to filter the noise, delivering only what truly matters to you. With OneFeed, there's no need to spend time scrolling through irrelevant content. OneFeed gives you true control over the content you consume. 

## What it does

OneFeed uses AI to consume content from your Twitter, YouTube shorts, and Instagram reels to filter posts that align to topics and goals you care about. It gives you complete control over the content you consume through social media, and gives you the ability to ask questions about specific pieces of content you might have consumed over time. 

OneFeed also lets you create a custom news briefings to cover the posts relevant to you, so you can consume content on the go.  

## How we built it

We built it using Mistral's AI model, MultiOn's information gathering API, MongoDB's Vector Database, ElevenLabs to generate a news briefing, and Next.JS. 


### RAG + LLM:

#### Install requirements

`pip install -r llm_requirements.txt`

#### Set Mistral, MongoDB keys, and X user and password

Set the API keys in `.env`
```
ATLAS_URI=""
MISTRAL_API_KEY=""
USERNAME=""
PASSWORD=""
```

#### Query

Pass the query to `main.py` and execute <br />

python3 main.py()
