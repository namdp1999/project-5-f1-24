import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { getSingerDetail } from "@/app/helpers/getSingers";

export default async function SingerDetailPage({ params }: { params: { id: string } }) {
  const data: any = await getSingerDetail(params.id);

  return (
    <>
      {/* CardInfo */}
      <CardInfo
        image={data.image}
        title={data.title}
        description={data.description}
      />

      {/* Danh Sách Bài Hát */}
      <Section2 singerId={data.id} />
    </>
  );
}