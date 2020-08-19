import React from "react";

import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import CameraAltIcon from "@material-ui/icons/CameraAlt";

import "./Header.css";

export default function Header() {
  return (
    <div className="video-header">
      <ArrowBackIosIcon />
      <h3>Reel</h3>
      <CameraAltIcon />
    </div>
  );
}
