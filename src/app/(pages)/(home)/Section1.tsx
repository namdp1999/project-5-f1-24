import BannerHome from "@/app/components/banner/BannerHome";
import SongList from "@/app/components/song/SongList";
import Title from "@/app/components/title/Title";
import { getSongList } from "@/app/helpers/getSongs";

export default async function Section1() {
  const dataSongList: any[] = await getSongList(3);

  return (
    <>
      <div className="flex items-start">
        <div className="w-[534px]">
          <BannerHome />
        </div>
        <div className="flex-1 ml-[20px]">
          <Title text="Nghe Nhiều" />
          <SongList data={dataSongList} />
        </div>
      </div>
    </>
  )
}