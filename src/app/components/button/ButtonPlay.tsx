"use client"

import { ISongItem } from "@/app/interfaces/ISongItem";
import { FaPlay } from "react-icons/fa6";

export default function ButtonPlay(props: ISongItem) {
  const {
    id = "",
    image = "",
    title = "",
    singer = "",
    listen = 0,
    audio = "",
    className = ""
  } = props;

  const handlePlay = () => {
    const elementPlayAudio: any = document.querySelector(".play-audio");
    if(elementPlayAudio) {
      // Thêm id bài hát vào elementPlayAudio
      elementPlayAudio.setAttribute("song-id", id);

      // Phát nhạc
      const elementAudio = elementPlayAudio.querySelector(".inner-audio");
      const elementSource = elementAudio.querySelector(".inner-source");
      elementSource.src = audio;
      elementAudio.load();
      elementAudio.play();

      // Lấy ra tổng thời gian
      const boxPlayTime: any = document.querySelector(".box-play-time");
      const boxPlayTimeTotal = boxPlayTime?.querySelector(".inner-total");
      const boxPlayTimeCurrent = boxPlayTime?.querySelector(".inner-current");

      elementAudio.onloadedmetadata = () => {
        const totalTime = elementAudio.duration;
        boxPlayTimeTotal.max = totalTime;

        // Lấy ra thời gian hiện tại
        elementAudio.ontimeupdate = () => {
          const currentTime = elementAudio.currentTime;
          boxPlayTimeTotal.value = currentTime;
          const percent = currentTime * 100 / totalTime;
          boxPlayTimeCurrent.style.width = `${percent}%`;
        }
      }

      // Hiển thị khối Play
      elementPlayAudio.classList.remove("hidden");

      // Hiển thị ảnh
      const elementImage = elementPlayAudio.querySelector(".inner-image");
      elementImage.src = image;
      elementImage.alt = title;

      // Hiển thị tiêu đề bài hát
      const elementTitle = elementPlayAudio.querySelector(".inner-title");
      elementTitle.innerHTML = title;

      // Hiển thị tên ca sĩ (Tự làm)
      
      // Thêm class play cho box-button-play
      const boxButtonPlay = document.querySelector(".box-button-play");
      boxButtonPlay?.classList.add("play");
    }
  }

  return (
    <>
      <button 
        className={className}
        onClick={handlePlay}
        button-play=""
      >
        <FaPlay />
      </button>
    </>
  )
}