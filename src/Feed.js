import React, { useEffect, useState } from "react";
import "./Feed.css";
import TweetBox from "./TweetBox";
import Post from "./Post";
import db from "./Firebase";
import FlipMove from "react-flip-move";

function Feed() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setposts(snapshot.docs.map((doc) => doc.data()));
      });
  }, []);

  return (
    <div className="feed">
      {/* Header */}
      <div className="feed_header">
        <h2>Home</h2>
      </div>

      {/* TweetBox */}
      <TweetBox />
      <FlipMove>
        {posts.map((post) => (
          <Post
            key={post.text}
            displayName={post.displayName}
            username={post.username}
            verified={post.verified}
            timestamp={post.timestamp}
            text={post.text}
            image={post.image}
            avatar={post.avatar}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
