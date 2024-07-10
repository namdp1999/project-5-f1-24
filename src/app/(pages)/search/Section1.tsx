"use client"

import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { getSongList } from "@/app/helpers/getSongs";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Section1() {
  const searchParams = useSearchParams();
  const keywordDefault = searchParams.get('keyword') || "";
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchApi = async () => {
      const data: any[] = await getSongList();
      const regex = new RegExp(keywordDefault, "i");
      const dataFilter: any[] = data.filter((item: any) => regex.test(item.title));
      setData(dataFilter);
    }
    fetchApi();
  }, [keywordDefault]);

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Kết Quả Tìm Kiếm" />
        <SongList2 data={data} />
      </div>
    </>
  )
}