"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "motion/react";

import logoBlack from "@/../public/logo/logo-black.svg";
import menuIcon from "@/../public/icons/menu.svg";

import socialIcon1 from "@/../public/icons/social/social-1.svg";
import socialIcon2 from "@/../public/icons/social/social-2.svg";
import socialIcon3 from "@/../public/icons/social/social-3.svg";
import socialIcon4 from "@/../public/icons/social/social-4.svg";

export const navLinks: string[] = ["discover", "сreators", "sell", "stats"];

export default function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { scrollY } = useScroll();
  const headerPaddingTop = useTransform(scrollY, [0, 200], ["32px", "0px"]);
  const headerColor = useTransform(
    scrollY,
    [0, 200],
    ["rgba(255, 255, 255, 0)", "#F9F9F9"]
  );

  const mobileBorder = useTransform(
    scrollY,
    [0, 200],
    ["#CBCBCB", "#CBCBCB00"]
  );

  return (
    <AnimatePresence>
      <motion.header
        style={{
          backgroundColor: headerColor,
        }}
        id="header"
        className="sticky top-0 z-30 flex w-full flex-col items-center justify-center"
      >
        <motion.section
          style={{
            paddingTop: headerPaddingTop,
          }}
          className="mobile-header w-full"
        >
          <motion.div
            style={{
              borderColor: isOpen ? "#CBCBCB" : mobileBorder,
            }}
            className="flex w-full items-center justify-between gap-8 border-b-[0.5px] pb-[30px] md:border-none md:py-4"
          >
            <div className="flex items-center gap-8 lg:gap-10">
              <Link href="#hero" className="flex items-center gap-2">
                <Image
                  src={logoBlack}
                  alt="Logo"
                  className="w-[46px] min-w-[46px] md:w-[38px] md:min-w-[38px] lg:w-[53px] lg:min-w-[53px]"
                />
                <h3 className="text-[22px] leading-6 md:hidden">DiveSea</h3>
              </Link>
              <div className="hidden gap-3 md:flex lg:gap-4">
                {navLinks.map((link, linkIndex) => (
                  <Link
                    href={`#${link}`}
                    className="text-text rounded-[10px] px-5 py-2 font-medium uppercase transition-colors duration-200 hover:bg-[#C3C3C3] hover:text-black md:text-sm lg:text-lg"
                    key={`link-${linkIndex}`}
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/*
              There is an overflow issue here on 600px - 750px tablets.
              Can't fix without design changes.
            */}
            <button className="bg-foreground hidden h-10 w-[140px] min-w-[140px] items-center justify-center rounded-xl text-xs text-white uppercase transition-colors duration-200 hover:bg-[#222222] md:flex lg:h-fit lg:w-[200px] lg:rounded-2xl lg:py-4 lg:text-base">
              Connect Wallet
            </button>
            <button className="size-10 min-w-10 md:hidden">
              <Image
                src={menuIcon}
                alt="menu"
                onClick={() => setIsOpen(!isOpen)}
              />
            </button>
          </motion.div>
        </motion.section>
        <AnimatePresence>
          {isOpen && (
            <motion.section
              initial={{ y: "-100vh" }}
              animate={{ y: "0vh" }}
              exit={{ y: "-100vh" }}
              transition={{
                ease: "easeInOut",
                duration: 0.5,
              }}
              className="bg-background fixed top-0 -z-20 flex h-[calc(100vh)] w-full flex-col justify-between px-[30px] pt-[calc(44px+107px)] pb-10 md:hidden"
            >
              <div className="flex flex-col gap-11">
                <div className="flex flex-col gap-5">
                  {navLinks.map((link, linkIndex) => (
                    <motion.div
                      key={`mobile-link-${linkIndex}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{
                        delay: linkIndex / 10 + 0.6,
                        duration: 0.6,
                      }}
                    >
                      <Link
                        href={`#${link}`}
                        className="text-text text-[40px] leading-10 font-medium uppercase"
                      >
                        {link}
                      </Link>
                    </motion.div>
                  ))}
                </div>

                <div className="flex items-center gap-10">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 1,
                      duration: 0.6,
                    }}
                  >
                    <Image
                      src={socialIcon1}
                      alt="social-1"
                      className="size-6 min-w-6 cursor-pointer transition-all duration-150 hover:brightness-0"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 1.1,
                      duration: 0.6,
                    }}
                  >
                    <Image
                      src={socialIcon2}
                      alt="social-2"
                      className="size-6 min-w-6 cursor-pointer transition-all duration-150 hover:brightness-0"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 1.2,
                      duration: 0.6,
                    }}
                  >
                    <Image
                      src={socialIcon3}
                      alt="social-3"
                      className="size-6 min-w-6 cursor-pointer transition-all duration-150 hover:brightness-0"
                    />
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{
                      delay: 1.3,
                      duration: 0.6,
                    }}
                  >
                    <Image
                      src={socialIcon4}
                      alt="social-4"
                      className="size-6 min-w-6 cursor-pointer transition-all duration-150 hover:brightness-0"
                    />
                  </motion.div>
                </div>
              </div>

              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  delay: 1.4,
                  duration: 0.6,
                }}
                className="bg-foreground h-15 w-full rounded-2xl text-xl leading-6 font-semibold text-white transition-colors duration-200 hover:bg-[#222222]"
              >
                Connect Wallet
              </motion.button>
            </motion.section>
          )}
        </AnimatePresence>
      </motion.header>
    </AnimatePresence>
  );
}
