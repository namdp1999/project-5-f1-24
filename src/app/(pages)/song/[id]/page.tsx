import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { getSongDetail } from "@/app/helpers/getSongs";
import { notFound } from "next/navigation";

export default async function SongDetailPage({ params }: { params: { id: string } }) {
  const data: any = await getSongDetail(params.id);

  if (!data) {
    notFound();
  }

  return (
    <>
      {/* CardInfo */}
      <CardInfo
        image={data.image}
        title={data.title}
        description={""}
      />

      {/* Lời Bài Hát */}
      <Section2 lyrics={data.lyric} />

      {/* Bài Hát Cùng Danh Mục */}
      <Section3 categoryId={data.categoryId} />
    </>
  );
}