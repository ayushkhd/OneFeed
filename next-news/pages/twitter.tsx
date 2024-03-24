import React from "react";
import Page from '../components/page'

export async function getStaticProps() {
  const res = await fetch(`http://127.0.0.1:5000/api/retrieve?top_k=4`); // Replace with your data source
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}

export default function Twitter({ data }) {
  const links = [
    "https://www.youtube.com/shorts/W9rzhC_9fok",
    "https://www.youtube.com/shorts/ekpqh0YCylg",
    "https://www.youtube.com/shorts/34YIp_yydQc",
    "https://www.youtube.com/shorts/JdwF-poYdOQ",
    "https://www.youtube.com/shorts/hV8dNhvHu0I",
    "https://www.youtube.com/shorts/CaTC22eZ2EE",
    "https://www.youtube.com/shorts/IQnUfYQ4z0Y",
    "https://www.youtube.com/shorts/qutE08XLgkY",
    "https://www.youtube.com/shorts/0kIhwa1e_5M",
    "https://www.youtube.com/shorts/8g58yrV6B3g",
    "https://www.youtube.com/shorts/dewj742C5Ow",
    "https://www.youtube.com/shorts/vtHlbnEWOlI",
    "https://www.youtube.com/shorts/-IR_81aqeLQ",
    "https://www.youtube.com/shorts/LGxhWkqWtZ0",
    "https://www.youtube.com/shorts/O21NCOZeI1Q",
    "https://www.youtube.com/shorts/hwKwbhQ0ZRE",
    "https://www.youtube.com/shorts/KquLnUzFC0Y"
  ];

  return (
    <Page>
      <audio
        controls
        autoPlay={false}
      // Add other event handlers as needed
      >
        <source src="/elevenlabs.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <iframe width="100" height="200"
        src="https://www.youtube.com/embed/W9rzhC_9fok"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
gyroscope; picture-in-picture;
web-share"
        allowfullscreen></iframe>
      <iframe width="100" height="200"
        src="https://www.youtube.com/embed/ekpqh0YCylg"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
  gyroscope; picture-in-picture;
  web-share"
        allowfullscreen></iframe>
      <iframe width="100" height="200"
        src="https://www.youtube.com/embed/34YIp_yydQc"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
    gyroscope; picture-in-picture;
    web-share"
        allowfullscreen></iframe>
      <iframe width="100" height="200"
        src="https://www.youtube.com/embed/JdwF-poYdOQ"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
      gyroscope; picture-in-picture;
      web-share"
        allowfullscreen></iframe>

      <iframe width="100" height="200"
        src="https://www.youtube.com/embed/hV8dNhvHu0I"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
      gyroscope; picture-in-picture;
      web-share"
        allowfullscreen></iframe>

      <iframe width="100" height="200"
        src="https://www.youtube.com/embed/CaTC22eZ2EE"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
        gyroscope; picture-in-picture;
        web-share"
        allowfullscreen></iframe>

      {/* <iframe width="100" height="200"
        src="https://www.youtube.com/embed/IQnUfYQ4z0Y"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
          gyroscope; picture-in-picture;
          web-share"
        allowfullscreen></iframe>

      <iframe width="100" height="200"
        src="https://www.youtube.com/embed/qutE08XLgkY"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture;
            web-share"
        allowfullscreen></iframe>

      <iframe width="100" height="200"
        src="https://www.youtube.com/embed/0kIhwa1e_5M"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
              gyroscope; picture-in-picture;
              web-share"
        allowfullscreen></iframe>

      <iframe width="100" height="200"
        src="https://www.youtube.com/embed/8g58yrV6B3g"
        title="YouTube video player" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media;
                gyroscope; picture-in-picture;
                web-share"
        allowfullscreen></iframe> */}
      {
        Object.keys(data).map((key) => {
          const tweetContent = data[key].content;
          // let tweetUrl = data[key].content?.match(/(https?:\/\/[^\s]+)$/)
          // if (tweetUrl.size > 0) {
          //   tweetUrl = tweetUrl[0];
          // } else {
          //   tweetUrl = "";
          // }
          return (
            <div key={data[key].id}>
              <div className="tweet">
                <img width={50} height={50} src={data[key].avatar_url} alt={data[key].handle + " avatar"} />
                <div className="tweet-body">
                  <div className="tweet-header">
                    {data[key].username}
                    <div className="tweet-username">
                      <strong>{data[key].handle}</strong>
                    </div>
                    <span className="tweet-timestamp">&nbsp; &#8226; {data[key].timestamp}</span>
                  </div>
                  {/* <div className="tweet-score">Retrieval score: {data[key].retrieval_score}</div> */}
                  <div className="tweet-content">
                    {tweetContent}
                    {/* {tweetContent.slice(0, -tweetUrl.length)} */}
                    {/* <a href={tweetUrl} target="_blank" rel="noopener noreferrer">
                      {tweetUrl}
                    </a> */}
                  </div>

                </div>
              </div>
            </div>
          )
        })
      }

      <style jsx>{`
                audio {
                  width: 100%;
                }
                iframe {
                  margin-right: 5px;
                  margin-bottom: 5px;
                }
                .tweet {
                    display: flex;
                    flex-direction: row;
                    border: 1px solid #ccc;
                    padding: 10px;
                    margin-bottom: 10px;
                    border-radius: 5px;
                }

                img {
                    border-radius: 50%;
                    margin-right: 15px;
                }

                .tweet-header {
                    display: flex;
                    align-items: center;
                    margin-bottom: 5px;
                }

                .tweet-username {
                    font-weight: bold;
                    margin-right: 5px;
                    margin-left: 5px;
                }

                .tweet-timestamp {
                    color: #666;
                    font-size: smaller;
                }

                .tweet-content {
                    white-space: pre-wrap;
                    /* Preserve line breaks */
                }
            `}</style>
    </Page>
  )
}
