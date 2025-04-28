"use client";

import Container from "@/components/utils/Container";
import { navigationData } from "@/data";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { twMerge } from "tailwind-merge";
import WhiteLogo from "@/public/img/whiteLogo.webp";
import DesktopNavbar from "./components/DesktopNavbar";
import MobileNavbar from "./components/MobileNavbar";

export default function Navbar() {
  const { navigation } = navigationData;
  const [bg, setBg ] = useState(false);
  const [mobileNav, setMobileNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 80 ? setBg(true) : setBg(false);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    }
  }, [])

  const staticBgClasses = "fixed left-0 w-full py-8 z-10 transition-all duration-500";
  const conditionalBgStyles = {
    "bg-primary-500 py-4": bg === true,
    "bg-none": bg === false,
  };

  const staticMobileClasses = "md:hidden fixed bottom-0 w-full max-w-xs h-screen transition-all duration-300";
  const conditionalMobileStyles = {
    "left-0": mobileNav === true,
    "-left-full": mobileNav === false,
  }

  const headerClasses = twMerge(clsx(staticBgClasses, conditionalBgStyles));
  const mobileClasses = twMerge(clsx(staticMobileClasses, conditionalMobileStyles));

  return (
    <header className={headerClasses}>
      <Container>
        <div className="flex justify-between items-center pl-4 pr-6 md:pl-6">
          <Link href="/">
            <Image
              src={WhiteLogo}
              width={250}
              height={250}
              alt="logo"
            />
          </Link>

          <div 
            onClick={() => setMobileNav(!mobileNav)}
            className="text-2xl text-white md:hidden lg:text-3xl cursor-pointer"
          >
            {mobileNav ? <CgClose /> : <CgMenuRight />}
          </div>

          <DesktopNavbar navigation={navigation} />

          <div 
            onClick={() => setMobileNav(!mobileNav)}
            className={mobileClasses}
          >
            <MobileNavbar navigation={navigation} />
          </div>

        </div>
      </Container>
    </header>
  )
}