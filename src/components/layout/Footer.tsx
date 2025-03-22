"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

import logoWhite from "@/../public/logo/logo-white.svg";
import socialIcon1 from "@/../public/icons/social/social-1.svg";
import socialIcon2 from "@/../public/icons/social/social-2.svg";
import socialIcon3 from "@/../public/icons/social/social-3.svg";
import socialIcon4 from "@/../public/icons/social/social-4.svg";

const navLinks = [
  {
    tag: "privacy",
    name: "Privacy Policy",
  },
  {
    tag: "terms",
    name: "Term & Conditions",
  },
  {
    tag: "about",
    name: "About Us",
  },
  {
    tag: "contact",
    name: "Contact",
  },
];

export default function Footer() {
  return (
    <footer
      id="footer"
      className="bg-foreground mt-20 flex w-full justify-center text-white md:mt-0"
    >
      <section className="flex w-full flex-col py-10 md:py-16">
        <div className="flex flex-col gap-6 md:gap-10 lg:gap-14">
          <div className="flex flex-col items-center justify-between gap-[30px] border-b border-[#818181]/25 pb-12 md:flex-row md:pb-5 lg:pb-6">
            <div className="flex w-full items-center justify-between md:w-auto">
              <Link href="#hero" className="flex items-center gap-2.5">
                <Image
                  src={logoWhite}
                  alt="Logo"
                  className="w-[46px] min-w-[46px] md:w-[38px] md:min-w-[38px] lg:w-[53px] lg:min-w-[53px]"
                />
                <h3 className="text-[22px] leading-6 lg:text-3xl">DiveSea</h3>
              </Link>
              <div className="md:hidden">
                <SocialIcons />
              </div>
            </div>
            <div className="flex w-full flex-col gap-[30px] md:w-auto md:flex-row md:gap-[50px] lg:gap-[70px]">
              {navLinks.map((link, linkIndex) => (
                <Link
                  key={`footer-link-${linkIndex}`}
                  href={`#${link.tag}`}
                  className="text-sm font-medium text-[#B9B9B9] md:text-xs lg:text-base"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <p className="w-full text-center font-medium text-[#999999] md:w-auto md:text-start">
              © 2023
              <span className="md:hidden"> DiveSea All Rights Reserved.</span>
            </p>
            <div className="hidden md:block">
              <SocialIcons />
            </div>
          </div>
        </div>
      </section>
    </footer>
  );
}

const SocialIcons = () => {
  return (
    <div className="flex items-center gap-2.5 md:gap-7 lg:gap-10">
      <Image
        src={socialIcon1}
        alt="social-1"
        className="size-4 min-w-4 cursor-pointer transition-all duration-150 hover:brightness-0 hover:invert md:size-6 md:min-w-6"
      />
      <Image
        src={socialIcon2}
        alt="social-2"
        className="size-4 min-w-4 cursor-pointer transition-all duration-150 hover:brightness-0 hover:invert md:size-6 md:min-w-6"
      />
      <Image
        src={socialIcon3}
        alt="social-3"
        className="size-4 min-w-4 cursor-pointer transition-all duration-150 hover:brightness-0 hover:invert md:size-6 md:min-w-6"
      />
      <Image
        src={socialIcon4}
        alt="social-4"
        className="size-4 min-w-4 cursor-pointer transition-all duration-150 hover:brightness-0 hover:invert md:size-6 md:min-w-6"
      />
    </div>
  );
};
