import CardInfo from "@/app/components/card/CardInfo";
import Section2 from "./Section2";
import { getCategoryDetail } from "@/app/helpers/getCategories";

/* eslint-disable @next/next/no-img-element */
export default async function SongsByCategoryPage({ params }: { params: { id: string } }) {
  const data: any = await getCategoryDetail(params.id);

  return (
    <>
      {/* CardInfo */}
      <CardInfo
        image={data.image}
        title={data.title}
        description={data.description}
      />

      {/* Section 2 */}
      <Section2 id={params.id} />
    </>
  );
}