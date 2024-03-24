import React from "react";
import Page from '../components/page'
import Tweet from "../components/tweet"

const tweet = {
  username: "JohnDoe",
  content: "This is a sample tweet.",
  timestamp: "2023-04-03T12:00:00Z",
};

export default function Scratchpad() {
  return (
    <Page>
      <Tweet tweet={tweet} />
    </Page>
  )
}
