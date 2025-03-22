import Banner from "@/components/sections/Banner";
import Hero from "@/components/sections/Hero";
import Slider from "@/components/sections/Slider";
import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
      }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-[70px] pt-18 md:gap-[90px] md:pt-25 md:pb-30 lg:gap-30">
        <Hero />
        <Slider />
        <Banner />
      </div>
    </ReactLenis>
  );
}
