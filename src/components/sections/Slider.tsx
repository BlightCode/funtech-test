"use client";

import Image from "next/image";
import { ReactNode, useCallback, useEffect, useState } from "react";
import dynamic from "next/dynamic";
import useEmblaCarousel from "embla-carousel-react";

import arrowRight from "@/../public/icons/arrow-right.svg";
import arrowLeft from "@/../public/icons/arrow-left.svg";
import etheriumImage from "@/../public/icons/ethereum.svg";
import image1 from "@/../public/slider/image-1.svg";
import image2 from "@/../public/slider/image-2.svg";
import image3 from "@/../public/slider/image-3.svg";
import image4 from "@/../public/slider/image-4.svg";
import image5 from "@/../public/slider/image-5.svg";

const Timer = dynamic(() => import("../Timer"), { ssr: false });

const sliderCards: SliderCardProps[] = [
  {
    title: "Sun-Glass",
    image: (
      <Image
        src={image1}
        alt="NFT 1"
        className="aspect-square w-full rounded-3xl object-cover"
      />
    ),
  },
  {
    title: "Sun-Glass",
    image: (
      <Image
        src={image2}
        alt="NFT 2"
        className="aspect-square w-full rounded-3xl object-cover"
      />
    ),
  },
  {
    title: "Sun-Glass",
    image: (
      <Image
        src={image3}
        alt="NFT 3"
        className="aspect-square w-full rounded-3xl object-cover"
      />
    ),
  },
  {
    title: "Sun-Glass",
    image: (
      <Image
        src={image4}
        alt="NFT 4"
        className="aspect-square w-full rounded-3xl object-cover"
      />
    ),
  },
  {
    title: "Sun-Glass",
    image: (
      <Image
        src={image5}
        alt="NFT 5"
        className="aspect-square w-full rounded-3xl object-cover"
      />
    ),
  },
];

export default function Slider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-background-dark flex w-full flex-col items-center gap-[50px] py-[50px] lg:gap-[70px] lg:py-[70px]">
      <h2 className="text-3xl text-[#C5C5C5] md:text-[32px] lg:text-5xl">
        Weekly - Top NFT
      </h2>

      <div id="embla" className="relative m-auto w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-8 pl-8 lg:gap-10">
            {sliderCards.map((card, cardIndex) => (
              // Loop effect can be done by duplicating slides and reInit() embla, but this requires additional logic
              <div
                className="max-w-full min-w-0 flex-[0_0_210px] lg:flex-[0_0_280px]"
                key={`slider-card-${cardIndex}`}
              >
                <SliderCard card={card} />
              </div>
            ))}
            {sliderCards.map((card, cardIndex) => (
              <div
                className="max-w-full min-w-0 flex-[0_0_210px] lg:flex-[0_0_280px]"
                key={`slider-card-${cardIndex}`}
              >
                <SliderCard card={card} />
              </div>
            ))}
            {sliderCards.map((card, cardIndex) => (
              <div
                className="max-w-full min-w-0 flex-[0_0_210px] lg:flex-[0_0_280px]"
                key={`slider-card-${cardIndex}`}
              >
                <SliderCard card={card} />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex items-center rounded-2xl bg-white">
        <div className="cursor-pointer px-8 py-5" onClick={onPrevButtonClick}>
          <Image
            src={arrowLeft}
            alt="Arrow left"
            className="size-[18px] min-h-[18px] min-w-[18px] lg:size-6 lg:min-h-6 lg:min-w-6"
          />
        </div>
        <div className="h-[18px] w-[2px] bg-[#E6E8EC] lg:h-6" />
        <div className="cursor-pointer px-8 py-5" onClick={onNextButtonClick}>
          <Image
            src={arrowRight}
            alt="Arrow right"
            className="size-[18px] min-w-[18px] lg:size-6 lg:min-w-6"
          />
        </div>
      </div>
    </div>
  );
}

type SliderCardProps = {
  title: string;
  image: ReactNode;
};

const SliderCard = ({ card }: { card: SliderCardProps }) => {
  const { title, image } = card;

  const [bid, setBid] = useState<number>();

  useEffect(() => {
    setBid(Math.round(Math.random() * 1000) / 100);
  }, []);

  return (
    <div className="flex min-w-[210px] flex-col gap-4 rounded-[18px] bg-white p-2.5 select-none lg:min-w-[280px] lg:gap-5 lg:rounded-3xl lg:p-[14px]">
      <div className="relative">
        {image}
        <div className="absolute top-3 right-3 rounded-lg border border-[#1C1D20]/8 bg-[#1C1D20]/35 px-2.5 py-2 text-[10px] text-white backdrop-blur-lg lg:px-[14px] lg:py-2.5 lg:text-[14px]">
          <Timer />
        </div>
      </div>

      <div className="flex flex-col gap-4 lg:gap-5">
        <p>{title}</p>
        <div className="flex items-center justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xs text-[#94A3B8] lg:text-sm">Current bid</p>
            <div className="flex items-center gap-1">
              <Image
                src={etheriumImage}
                alt="Etherium"
                className="size-4 min-w-4 lg:size-5.5 lg:min-w-5.5"
              />
              <p className="text-xs font-medium">{bid}</p>
            </div>
          </div>
          <button className="bg-foreground font-poppins h-[38px] w-[90px] rounded-lg text-[10px] font-semibold text-white uppercase transition-colors duration-200 hover:bg-[#222222] lg:h-[50px] lg:w-[120px] lg:px-[14px]">
            PLACE BID
          </button>
        </div>
      </div>
    </div>
  );
};
