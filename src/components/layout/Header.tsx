"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import logoBlack from "@/../public/logo/logo-black.svg";

export const navLinks: string[] = ["discover", "сreators", "sell", "stats"];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const headerColor = useTransform(
    scrollY,
    [0, 200],
    ["rgba(255, 255, 255, 0)", "#FFF"]
  );

  return (
    <>
      <header
        id="header"
        className="sticky top-0 z-30 flex w-full justify-center"
      >
        <motion.section
          style={{
            backgroundColor: headerColor,
          }}
          className="mt-8 flex items-center justify-between rounded-b-[20px] py-4"
        >
          <div className="flex items-center gap-16">
            <Image src={logoBlack} alt="Logo" />
            <div className="flex gap-[50px]">
              {navLinks.map((link, linkIndex) => (
                <Link
                  href={`#${link}`}
                  className="text-text uppercase"
                  key={`link-${linkIndex}`}
                >
                  {link}
                </Link>
              ))}
            </div>
          </div>
          <button className="bg-foreground w-[200px] rounded-2xl px-[25px] py-4 text-white uppercase transition-colors duration-200 hover:bg-[#222222]">
            Connect Wallet
          </button>
        </motion.section>
      </header>
    </>
  );
}
