import { Avatar, Button } from "@material-ui/core";
import React, { useState } from "react";
import firebase from "firebase";
import db from "./Firebase";
import "./TweetBox.css";

function TweetBox() {
  const [tweetMessage, settweetMessage] = useState("");
  const [tweetImage, settweetImage] = useState("");
  return (
    <div className="tweetBox">
      <form>
        <div className="tweetBox__input">
          <Avatar src="" />
          <input
            placeholder="What's happening "
            type="text"
            value={tweetMessage}
            onChange={(e) => settweetMessage(e.target.value)}
          />
        </div>
        <input
          value={tweetImage}
          onChange={(e) => settweetImage(e.target.value)}
          placeholder="Enter image Url"
          className="tweetBox_imageInput"
          type="text"
        />

        <Button
          type="submit"
          onClick={sendTweet}
          className="tweetBox__tweetButton"
        >
          Tweet
        </Button>
      </form>
    </div>
  );
  function sendTweet(e) {
    e.preventDefault();
    db.collection("posts").add({
      displayName: "Shirshak kandel",
      username: "Kdc",
      verified: true,
      text: tweetMessage,
      image: tweetImage,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      avatar:
        "https://lh5.googleusercontent.com/-bm6JSbcbR74/AAAAAAAAAAI/AAAAAAAAAAA/AMZuucnbZw5RpV62yROhtONoeNakqAJwkQ/photo.jpg",
    });

    settweetMessage("");
    settweetImage("");
  }
}

export default TweetBox;
