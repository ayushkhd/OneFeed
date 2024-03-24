import React from "react";
import Page from '../components/page'
import Tweet from "../components/tweet"
import getTweets from '../lib/get-tweets'
import Image from 'next/image';

const tweet = {
  fullname: "John Doe",
  username: "@johndoe",
  content: "Funding secured.",
  timestamp: "6h",
};
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
  return (
    <Page>
      {
        Object.keys(data).map((key) => {
          return (
            <div key={data[key].id}>
              <div className="tweet">
                <img width={50} height={50} src={data[key].avatar_url} alt={data[key].handle + " avatar"} />
                <div className="tweet-body">
                  <div className="tweet-header">
                    {data[key].handle}
                    <div className="tweet-username">
                      <strong>{data[key].handle}</strong>
                    </div>
                    <span className="tweet-timestamp">&nbsp; &#8226; 6h</span>
                  </div>
                  <div className="tweet-content">{data[key].content}</div>
                </div>
              </div>
              <style jsx>{`
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
                    margin-right: 5px;
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
            </div>
          )
        })
      }
    </Page>
  )
}
