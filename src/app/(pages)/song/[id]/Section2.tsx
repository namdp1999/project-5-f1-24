import Title from "@/app/components/title/Title";

export default function Section2(props: {
  lyrics: string
}) {
  const { lyrics = "" } = props;

  return (
    <>
      <div className="mt-[30px]">
        <Title text="Lời Bài Hát" />
        <div className="bg-[#212121] rounded-[15px] p-[20px] text-white font-[500] text-[14px] whitespace-pre-line">
          {lyrics}
        </div>
      </div>
    </>
  )
}