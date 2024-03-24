import React from "react";
import Image from 'next/image';

const Tweet = ({ tweet }) => {
    const { fullname, username, content, timestamp } = tweet;

    return (
        <div>
            <div className="tweet">
                <Image
                    className={styles.avatar}
                    src="/elon.jpeg"
                    width={50}
                    height={50}
                    alt="Picture of the author"
                />
                <div className="tweet-body">
                    <div className="tweet-header">
                        {fullname}
                        <div className="tweet-username">
                            <strong>{username}</strong>
                        </div>
                        <span className="tweet-timestamp">&nbsp; &#8226; {timestamp}</span>
                    </div>
                    <div className="tweet-content">{content}</div>
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

                .avatar {
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
    );
};

export default Tweet
