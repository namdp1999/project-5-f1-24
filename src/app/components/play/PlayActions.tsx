"use client"

import { FaBackwardStep, FaForwardStep, FaPause, FaPlay } from "react-icons/fa6";

export default function PlayActions() {
  const handlePlay = (event: any) => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    const elementAudio = elementPlayAudio.querySelector(".inner-audio");
    const boxButtonPlay = elementPlayAudio.querySelector(".box-button-play");

    if(boxButtonPlay.classList.contains("play")) {
      boxButtonPlay.classList.remove("play");
      elementAudio.pause();
    } else {
      boxButtonPlay.classList.add("play");
      elementAudio.play();
    }
  }

  const handleNextPrev = (action: string) => {
    console.log(action);

    const elementPlayAudio: any = document.querySelector(".play-audio");
    const idSongCurrent = elementPlayAudio.getAttribute("song-id");
    const elementSongCurrent = document.querySelector(`[song-list] [song-id='${idSongCurrent}']`);
    
    if(elementSongCurrent) {
      switch (action) {
        case "next":
          const elementSongNext = elementSongCurrent.nextElementSibling;
          if(elementSongNext) {
            const buttonPlay: any = elementSongNext.querySelector("button[button-play]");
            buttonPlay.click();
          }
          break;
        case "prev":
          const elementSongPrev = elementSongCurrent.previousElementSibling;
          if(elementSongPrev) {
            const buttonPlay: any = elementSongPrev.querySelector("button[button-play]");
            buttonPlay.click();
          }
          break;
      }
    }
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <button 
          className="text-white text-[16px]"
          onClick={() => handleNextPrev("prev")}
        >
          <FaBackwardStep />
        </button>
        <button 
          className="text-white text-[16px] w-[32px] h-[32px] bg-primary rounded-full mx-[42px] inline-flex items-center justify-center box-button-play play"
          onClick={handlePlay}
        >
          <FaPlay className="inner-icon-play" />
          <FaPause className="inner-icon-pause" />
        </button>
        <button 
          className="text-white text-[16px]"
          onClick={() => handleNextPrev("next")}
        >
          <FaForwardStep />
        </button>
      </div>
    </>
  )
}