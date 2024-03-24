import React from "react";
import styles from "../styles.module.css";
import Image from 'next/image';

const Tweet = ({ tweet }) => {
    const { username, content, timestamp } = tweet;

    return (
        <div className={styles.tweet}>
            <Image
                className={styles.avatar}
                src="/elon.jpeg"
                width={50}
                height={50}
                alt="Picture of the author"
            />
            <div className={styles.tweetBody}>
                <div className={styles.tweetHeader}>
                    <strong>{username}</strong>
                    <span className={styles.tweetTimestamp}>&nbsp; &#8226; {timestamp}</span>
                </div>
                <div className={styles.tweetContent}>{content}</div>
            </div>
        </div>
    );
};

export default Tweet
