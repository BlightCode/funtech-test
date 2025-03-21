import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const fontInter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fontPoppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
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
    <html lang="en">
      <body
        className={`${fontInter.variable} ${fontPoppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
