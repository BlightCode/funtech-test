import bannerImage from "@/../public/banner/image.svg";
import Image from "next/image";

export default function Banner() {
  return (
    <section>
      <div className="bg-foreground relative flex w-full flex-col justify-between gap-5 rounded-4xl p-8 pb-22 text-white md:flex-row md:pb-8 md:overflow-clip">
        <div className="flex w-full flex-col items-center gap-5 p-4 md:w-auto md:items-start md:gap-10 lg:gap-14">
          <div className="font-poppins flex flex-col gap-2 text-center md:gap-4 md:text-start lg:gap-5">
            <h2 className="text-2xl md:text-4xl lg:text-5xl">
              Create and Sell NFTs
            </h2>
            <p className="text-[10px] font-medium text-[#D4D4D4]/60 md:text-[15px] lg:text-[20px]">
              World’s Largest NFT Place
            </p>
          </div>

          <div className="font-outfit flex gap-6 font-semibold">
            <button className="text-foreground h-8 w-[90px] min-w-[90px] rounded-lg bg-white text-[10px] transition-colors duration-200 hover:bg-[#F2F2F2] md:h-12 md:w-[135px] md:min-w-[135px] md:text-base lg:h-17 lg:w-[180px] lg:min-w-[180px] lg:rounded-xl">
              Explore More
            </button>
            <button className="h-8 w-[90px] min-w-[90px] rounded-lg border-2 border-white text-[10px] transition-colors duration-200 hover:bg-[#D7D7D7] hover:text-[#1A1A1A] md:h-12 md:w-[135px] md:min-w-[135px] md:text-base lg:h-17 lg:w-[180px] lg:min-w-[180px] lg:rounded-xl">
              Sell Artwork
            </button>
          </div>
        </div>

        <div className="left-1/2 -mb-50 flex w-full justify-center px-8 md:mb-0 md:w-auto md:px-0">
          <Image
            src={bannerImage}
            alt="Cool banner image"
            className="min-h-[130px] min-w-[250px] object-contain md:flex md:h-[250px] md:w-full"
          />
        </div>
      </div>
    </section>
  );
}
