"use client"

import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { authFirebase } from "@/app/firebaseConfig";
import { getSongListWishList } from "@/app/helpers/getSongs";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";

export default function Section1() {
  const [data, setData] = useState<any>();

  useEffect(() => {
    onAuthStateChanged(authFirebase, async (user) => {
      if(user) {
        const userId = user.uid;
        const dataFinal: any[] = await getSongListWishList(userId);
        setData(dataFinal);
      }
    })
  }, []);

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Bài Hát Yêu Thích" />
        {data && (
          <SongList2 data={data} />
        )}
      </div>
    </>
  )
}