import CardList from "@/app/components/card/CardList";
import Title from "@/app/components/title/Title";
import { getSingers } from "@/app/helpers/getSingers";

export default async function Section1() {
  const dataSingers: any[] = await getSingers();

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Danh Sách Ca Sĩ" />
        <CardList data={dataSingers} />
      </div>
    </>
  )
}