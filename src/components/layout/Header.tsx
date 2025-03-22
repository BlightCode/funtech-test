"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";

import logoBlack from "@/../public/logo/logo-black.svg";
import menuIcon from "@/../public/icons/menu.svg";

export const navLinks: string[] = ["discover", "сreators", "sell", "stats"];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const headerPaddingTop = useTransform(scrollY, [0, 200], ["32px", "0px"]);
  const headerColor = useTransform(
    scrollY,
    [0, 200],
    ["rgba(255, 255, 255, 0)", "#FFF"]
  );

  const mobileBorder = useTransform(
    scrollY,
    [0, 200],
    ["#CBCBCB", "#CBCBCB00"]
  );

  return (
    <>
      <header
        id="header"
        className="sticky top-0 z-30 flex w-full justify-center"
      >
        <motion.section
          style={{
            paddingTop: headerPaddingTop,
            backgroundColor: headerColor,
          }}

          className="w-full mobile-header"
        >
          <motion.div
            style={{
              borderColor: mobileBorder,
            }}
            className="flex w-full items-center justify-between gap-8 border-b-[0.5px] pb-[30px] md:border-none md:py-4"
          >
            <div className="flex items-center gap-10 lg:gap-16">
              <Link href="#hero" className="flex items-center gap-2">
                <Image
                  src={logoBlack}
                  alt="Logo"
                  className="w-[46px] min-w-[46px] md:w-[38px] md:min-w-[38px] lg:w-[53px] lg:min-w-[53px]"
                />
                <h3 className="text-[22px] leading-6 md:hidden">DiveSea</h3>
              </Link>
              <div className="hidden gap-8 md:flex lg:gap-[50px]">
                {navLinks.map((link, linkIndex) => (
                  <Link
                    href={`#${link}`}
                    className="text-text uppercase md:text-sm lg:text-lg"
                    key={`link-${linkIndex}`}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>
            <button className="bg-foreground hidden h-10 w-[140px] min-w-[140px] items-center justify-center rounded-xl text-xs text-white uppercase transition-colors duration-200 hover:bg-[#222222] md:flex lg:h-fit lg:w-[200px] lg:rounded-2xl lg:py-4 lg:text-base">
              Connect Wallet
            </button>
            <button className="size-10 min-w-10 md:hidden">
              <Image src={menuIcon} alt="menu" />
            </button>
          </motion.div>
        </motion.section>
      </header>
    </>
  );
}
