import { Avatar } from "@material-ui/core";
import React, { forwardRef } from "react";
import "./Post.css";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleIcon from "@material-ui/icons/ChatBubble";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublicIcon from "@material-ui/icons/Public";
import RepeatIcon from "@material-ui/icons/Repeat";

const Post = forwardRef(
  (
    { displayName, username, verified, timestamp, text, image, avatar },
    ref
  ) => {
    return (
      <div className="post" ref={ref}>
        <div className="post__avatar">
          <Avatar src={avatar} />
        </div>
        <div className="post__body">
          <div className="post__header">
            <div className="post__headerText">
              <h3>
                {displayName}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text} </p>
            </div>
          </div>

          <img src={image} alt="" />
          <div className="post__footer">
            <ChatBubbleIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublicIcon fontSize="small" />
          </div>
        </div>
      </div>
    );
  }
);

export default Post;