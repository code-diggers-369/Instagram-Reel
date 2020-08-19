import React from "react";

import { Button } from "@material-ui/core";

import { Favorite, Comment, Send } from "@material-ui/icons";

import "./Footer.css";

export default function Footer({ channel, song, likes, comment, shares }) {
  return (
    <div className="video-footer">
      <div className="video-text">
        <h3>
          {channel} . ({song})
          <Button>
            <h4 style={{ color: "white" }}>Follow</h4>
          </Button>
        </h3>
      </div>
      {/*  */}
      <div className="footer-buttons">
        <div className="flex-box">
          <Favorite />
          {likes}
        </div>
        {/*  */}
        <div className="flex-box">
          <Comment />
          {comment}
        </div>
        {/*  */}
        <div className="flex-box">
          <Send />
          {shares}
        </div>
      </div>
    </div>
  );
}
