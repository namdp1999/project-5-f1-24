/* eslint-disable @next/next/no-img-element */
export default function BannerHome () {
  return (
    <>
      <div 
        className="w-full bg-cover rounded-[15px] flex items-center" 
        style={{ backgroundImage: "url('/demo/background-1.png')" }}
      >
        <div className="flex-1 mr-[34px] ml-[30px]">
          <div className="font-[700] text-[32px] mb-[6px] text-white">
            Nhạc EDM
          </div>
          <div className="font-[500] text-[14px] text-white">
            Top 100 Nhạc Electronic/Dance Âu Mỹ là danh sách 100 ca khúc hot nhất hiện tại của thể loại Top 100 Nhạc Electronic/Dance Âu Mỹ
          </div>
        </div>
        <div className="w-[215px] mr-[23px] mt-[48px]">
          <img 
            src="/demo/image-2.png" 
            alt="Nhạc EDM"
            className="w-full h-auto"
          />
        </div>
      </div>
    </>
  )
}