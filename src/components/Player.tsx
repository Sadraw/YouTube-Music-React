import React, { useState } from "react";
import Youtube from 'react-youtube';
import Playlist from "./Playlist";
import Song from "./Song";
import "../App.css";
import "../MusicPlayer.css";
import { MusicData } from "./MusicData";
import getYouTubeVideoId from "./GetYouTubeId";

const Player = () => {
  
  const [index, setIndex] = useState(0);
  const currentSong = MusicData[index];

  function handleClick() {
    if (index < MusicData.length - 1) {
      setIndex(index + 1);
      console.log("Next Song");
      console.log(currentSong.name);
    } else {
      setIndex(0);
    }
  }

  const youtubeOpts = {
    height: "350",
    width: "700",
    playerVars: {
      autoplay: 1,
    },
  };

  function handlePlayerReady(event:any) {
    // Access the player instance here
    console.log("Player is ready:", event.target);
  }

  function handlePlayerStateChange(event:any) {
    // Handle player state change events here
    console.log("Player state changed:", event.data);
  }

  const videoId = getYouTubeVideoId(currentSong.url);

  return (
    <div>
      <h2 className="Musics">
        <i>{currentSong?.name}</i>
        <p>{currentSong?.artist}</p>
        <p />
        <p />

        <button className="nextbutton" onClick={handleClick}>Next</button>

        <p />

        <Youtube
          videoId={videoId}
          opts={youtubeOpts}
          onReady={handlePlayerReady}
          onStateChange={handlePlayerStateChange}
        />
      </h2>

      <p />
      <p />

      <p />
    </div>
  );
};

export default Player;

/* The Player component can be responsible for managing the overall playback
      functionality and the control buttons. It could include: 
       */

/* Play/Pause button  */

/* Stop Button */

/* Next Button */

/* Previous Button */

/* Volume Button  */

/* Display of Current Song Information: Title, etc ps: using Song.tsx for this  */

/* <a className="YouTubeLink" href={currentSong.url} target="_blank" rel="noopener noreferrer">
          {"Music Video "}
        </a> */
