import { ISongItem } from "@/app/interfaces/ISongItem";
import SongItem2 from "./SongItem2";

export default function SongList2(props: {
  data: ISongItem[]
}) {
  const { data } = props;

  return (
    <>
      <div className="grid grid-cols-1 gap-[10px]">
        {data.map((item, index) => (
          <SongItem2
            key={index}
            id={item.id}
            image={item.image}
            title={item.title}
            singer={item.singer}
            time={item.time}
            audio={item.audio}
            wishlist={item.wishlist}
          />
        ))}
      </div>
    </>
  )
}