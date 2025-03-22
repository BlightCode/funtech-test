"use client";

import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

import logoWhite from "@/../public/logo/logo-white.svg";

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
        <div className="flex flex-col justify-between gap-[30px] md:flex-row">
          <Link href="#hero" className="flex items-center gap-2.5">
            <Image
              src={logoWhite}
              alt="Logo"
              className="w-[46px] min-w-[46px] md:w-[38px] md:min-w-[38px] lg:w-[53px] lg:min-w-[53px]"
            />
            <h3 className="text-[22px] leading-6 lg:text-3xl">DiveSea</h3>
          </Link>
          <div className="flex flex-col gap-[30px] md:flex-row md:gap-[50px] lg:gap-[70px]">
            {navLinks.map((link, linkIndex) => (
              <Link
                key={`footer-link-${linkIndex}`}
                href={`#${link.tag}`}
                className="font-medium text-[#B9B9B9]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </footer>
  );
}
