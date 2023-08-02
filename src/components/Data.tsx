import React from "react";
import "../App.css";

export const creatorName = () => {
  const name = "Sadra Daneshmand";

  const getYouTubeVideoId = (url:any) => {
    const videoId = url.split("v=")[1];
    const ampersandPosition = videoId.indexOf("&");
    if (ampersandPosition !== -1) {
      return videoId.substring(0, ampersandPosition);
    }
    return videoId;
  };
  return (
    <a
      className="creatorName"
      href="https://github.com/Sadraw"
      target="_blank"
      rel="noopener noreferrer"
    >
      <h1>{name}</h1>
    </a>
  );
};
