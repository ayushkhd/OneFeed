import React from "react";
import Page from '../components/page'
import Tweet from "../components/tweet"

const tweet = {
  fullname: "John Doe",
  username: "@johndoe",
  content: "Funding secured.",
  timestamp: "2023-04-03T12:00:00Z",
};

export default function Twitter() {
  return (
    <Page>
      <Tweet tweet={tweet} />
    </Page>
  )
}
