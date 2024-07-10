import SongList2 from "@/app/components/song/SongList2";
import Title from "@/app/components/title/Title";
import { getSongList } from "@/app/helpers/getSongs";

export default async function Section2(props: { id: string }) {
  const { id } = props;

  const data: any[] = await getSongList(undefined, id);

  console.log(data);

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Bài Hát" />
        <SongList2 data={data} />
      </div>
    </>
  )
}