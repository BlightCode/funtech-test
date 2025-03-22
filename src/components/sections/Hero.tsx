import * as motion from "motion/react-client";

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
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="flex w-full items-center justify-center gap-2 md:justify-normal"
              >
                <hr className="w-full max-w-[33px] border border-[#201F1F]/20 md:max-w-[138px] lg:max-w-[195px]" />
                <p className="font-poppins text-[10px] leading-3 font-semibold text-[#201F1F]/20 uppercase md:hidden">
                  OVER 1M CREATORS
                </p>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="font-poppins text-center text-5xl leading-14 tracking-[-2px] md:text-start md:text-[54px] md:leading-16 lg:text-7xl lg:leading-[84px] lg:tracking-[-3px]"
              >
                Discover And <br />
                Create NFTs
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-text text-center text-lg text-[11px] md:text-start md:text-[13px]"
            >
              Discover, Create and Sell NFTs On Our NFT Marketplace <br />
              With Over Thousands Of NFTs And Get a{" "}
              <span className="text-foreground">$20 bonus.</span>
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex gap-4 md:gap-5.5"
          >
            <button className="font-poppins h-12 w-[128px] rounded-[10px] bg-black text-xs font-medium text-white uppercase transition-colors duration-200 hover:bg-[#222222] md:h-15 md:w-[180px] md:rounded-2xl md:text-base">
              Explore More
            </button>
            <button className="border-foreground font-poppins h-12 w-[100px] rounded-[10px] border-2 text-xs font-medium text-black uppercase transition-colors duration-200 hover:bg-[#D7D7D7] md:h-15 md:w-[140px] md:rounded-2xl md:text-base">
              create NFT
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="hidden gap-15 md:flex"
        >
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
        </motion.div>
      </div>

      <div className="flex min-h-full w-full items-start gap-5 md:max-w-[555px] lg:absolute lg:left-1/2 lg:max-w-[780px] lg:gap-10">
        <motion.div
          initial={{ x: "50vw", opacity: 0 }}
          animate={{ x: "0vw", opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0, 0.6, 0.3, 1] }}
          className="relative z-10 aspect-square min-w-[210px] md:min-w-[280px] lg:min-w-[390px]"
        >
          <Image src={image1} alt="Cool image 1" className="rounded-[25px]" />
          <Image
            src={image1}
            alt="Cool image background 1"
            className="absolute top-6 -z-10 rounded-lg opacity-70 blur-3xl"
          />
        </motion.div>

        <div className="relative flex flex-col justify-between">
          <motion.div
            initial={{ opacity: 0, rotate: 15 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 1, ease: [0, 0.6, 0.3, 1] }}
          >
            <Image
              src={arrowImage}
              alt="Arrow image"
              className="w-14 -rotate-3 rounded-[25px] md:w-[90px] lg:w-32"
            />
          </motion.div>

          <motion.div
            initial={{ x: "50vw", opacity: 0 }}
            animate={{ x: "0vw", opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0, 0.6, 0.3, 1] }}
            className="relative z-10 aspect-square min-w-[170px] md:min-w-[230px] lg:min-w-[320px]"
          >
            <Image src={image2} alt="Cool image 2" className="rounded-[22px]" />
            <Image
              src={image2}
              alt="Cool image 2"
              className="absolute top-6 -z-10 rounded-lg opacity-70 blur-3xl"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0, 0.6, 0.3, 1] }}
            className="absolute right-0 -mt-2.5 mr-2.5 md:-mt-5 md:-mr-7"
          >
            <Image
              src={backgroundImage}
              alt="Hero background"
              className="h-52 w-fit md:h-70 lg:h-100"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
