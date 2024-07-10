import { ICardItem } from "@/app/interfaces/ICardItem";
import CardItem from "./CardItem";

export default function CardList(props: {
  data: ICardItem[]
}) {
  const { data } = props;

  return (
    <>
      <div className="grid grid-cols-5 gap-[20px]">
        {data.map((item, index) => (
          <CardItem
            key={index}
            image={item.image}
            title={item.title}
            description={item.description}
            link={item.link}
          />
        ))}
      </div>
    </>
  )
}