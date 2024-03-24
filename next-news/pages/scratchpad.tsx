import React from "react";
import Page from '../components/page'
import styles from "../styles.module.css";

const Tweet = ({ tweet }) => {
  const { username, content, timestamp } = tweet;

  return (
    <div className={styles.tweet}>
      <div className={styles.tweetHeader}>
        <strong>{username}</strong>
        <span className={styles.tweetTimestamp}> - {timestamp}</span>
      </div>
      <div className={styles.tweetContent}>{content}</div>
    </div>
  );
};

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
