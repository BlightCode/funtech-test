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
      className="bg-foreground mt-20 flex w-full justify-center rounded-t-4xl md:mt-40 md:rounded-t-[64px]"
    >
      <section className="text-background flex w-full flex-col py-10 md:py-16">
        <Image src={logoWhite} className="h-16" alt="Logo" />
      </section>
    </footer>
  );
}
