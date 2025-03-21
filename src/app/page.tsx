import ReactLenis from "lenis/react";

export default function Home() {
  return (
    <ReactLenis
      root
      options={{
        lerp: 0.1,
      }}
    >
      <div className="flex w-full flex-col items-center justify-center gap-20 md:gap-30"></div>
    </ReactLenis>
  );
}
