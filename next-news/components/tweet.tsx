import React from "react";
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

export default Tweet
