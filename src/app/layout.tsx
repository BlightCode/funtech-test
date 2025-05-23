import type { Metadata } from "next";
import { Inter, Outfit, Poppins, Public_Sans } from "next/font/google";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontPoppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  subsets: ["latin"],
});

const fontPublicSans = Public_Sans({
  variable: "--font-public-sans",
  subsets: ["latin"],
});

const fontOutfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "funtech Detinkin Oleg",
  description: "funtech test by Detinkin Oleg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontInter.variable} ${fontPoppins.variable} ${fontPublicSans.variable} ${fontOutfit.variable} h-full min-h-screen scroll-pt-[74px] scroll-smooth`}
    >
      <body className="flex flex-col items-center justify-between overflow-x-hidden">
        <Header />
        <main className="bg-background flex min-h-screen w-full flex-col items-center xl:mb-150 xl:origin-top xl:scale-125 2xl:mb-280 2xl:scale-150">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
