import React from "react";
import Page from '../components/page'
import Tweet from "../components/tweet"
import getTweets from '../lib/get-tweets'

const tweet = {
  fullname: "John Doe",
  username: "@johndoe",
  content: "Funding secured.",
  timestamp: "6h",
};

export default function Twitter() {
  // let tweets = getTweets();
  return (
    <Page>
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} />
      <Tweet tweet={tweet} />
    </Page>
  )
}
