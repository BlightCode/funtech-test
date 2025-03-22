import image1 from "@/../public/hero/image-1.svg";
import image2 from "@/../public/hero/image-2.svg";
import arrowImage from "@/../public/hero/arrow.svg";
import backgroundImage from "@/../public/hero/background.svg";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative flex w-full flex-col justify-between gap-12 md:flex-row">
      <div className="flex w-full flex-col gap-20 pt-2 pb-3 md:max-w-[350px] lg:max-w-[calc(50%-40px)]">
        <div className="flex flex-col items-center gap-11 md:items-start">
          <div className="flex flex-col gap-7">
            <div className="flex flex-col gap-2">
              <div className="flex w-full items-center justify-center gap-2 md:justify-normal">
                <hr className="w-full max-w-[33px] border border-[#201F1F]/20 md:max-w-[138px] lg:max-w-[195px]" />
                <p className="font-poppins text-[10px] leading-3 font-semibold text-[#201F1F]/20 uppercase md:hidden">
                  OVER 1M CREATORS
                </p>
              </div>
              <h1 className="font-poppins text-center text-5xl leading-14 tracking-[-2px] md:text-start md:text-[54px] md:leading-16 lg:text-7xl lg:leading-[84px] lg:tracking-[-3px]">
                Discover And <br />
                Create NFTs
              </h1>
            </div>
            <p className="text-text text-center text-lg text-[11px] md:text-start md:text-[13px]">
              Discover, Create and Sell NFTs On Our NFT Marketplace <br />
              With Over Thousands Of NFTs And Get a{" "}
              <span className="text-foreground">$20 bonus.</span>
            </p>
          </div>

          <div className="flex gap-4 md:gap-5.5">
            <button className="font-poppins h-12 w-[128px] rounded-[10px] bg-black text-xs font-medium text-white uppercase transition-colors duration-200 hover:bg-[#222222] md:h-15 md:w-[180px] md:rounded-2xl md:text-base">
              Explore More
            </button>
            <button className="border-foreground font-poppins h-12 w-[100px] rounded-[10px] border-2 text-xs font-medium text-black uppercase transition-colors duration-200 hover:bg-[#D7D7D7] md:h-15 md:w-[140px] md:rounded-2xl md:text-base">
              create NFT
            </button>
          </div>
        </div>

        <div className="hidden gap-15 md:flex">
          <div className="flex flex-col gap-2 lg:gap-2.5">
            <h3 className="text-[26px] lg:text-4xl">430K+</h3>
            <p className="text-text text-[9px] font-medium lg:text-xs">
              Art Works
            </p>
          </div>

          <div className="flex flex-col gap-2 lg:gap-2.5">
            <h3 className="text-[26px] lg:text-4xl">159K+</h3>
            <p className="text-text text-[9px] font-medium lg:text-xs">
              Creators
            </p>
          </div>

          <div className="flex flex-col gap-2 lg:gap-2.5">
            <h3 className="text-[26px] lg:text-4xl">87K+</h3>
            <p className="text-text text-[9px] font-medium lg:text-xs">
              Collections
            </p>
          </div>
        </div>
      </div>

      <div className="flex min-h-full w-full items-start gap-5 md:max-w-[555px] lg:absolute lg:left-1/2 lg:max-w-[780px] lg:gap-10">
        <div className="relative z-10 aspect-square min-w-[210px] md:min-w-[280px] lg:min-w-[390px]">
          <Image src={image1} alt="Cool image 1" className="rounded-[25px]" />
          <Image
            src={image1}
            alt="Cool image background 1"
            className="absolute top-6 -z-10 rounded-lg opacity-70 blur-3xl"
          />
        </div>

        <div className="relative flex flex-col justify-between">
          <Image
            src={arrowImage}
            alt="Arrow image"
            className="w-14 -rotate-3 rounded-[25px] md:w-[90px] lg:w-32"
          />

          <div className="relative z-10 aspect-square min-w-[170px] md:min-w-[230px] lg:min-w-[320px]">
            <Image src={image2} alt="Cool image 2" className="rounded-[22px]" />
            <Image
              src={image2}
              alt="Cool image 2"
              className="absolute top-6 -z-10 rounded-lg opacity-70 blur-3xl"
            />
          </div>
          <Image
            src={backgroundImage}
            alt="Hero background"
            className="absolute right-0 -mt-2.5 mr-2.5 h-52 w-fit md:-mt-5 md:-mr-7 md:h-70 lg:h-100"
          />
        </div>
      </div>
    </section>
  );
}
