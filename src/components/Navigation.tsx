"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { animate } from "framer-motion";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import Button from "./Button";
import useResponsive from "../hooks/useResponsive";
import HamburgerMenu from "./Hamburger";
import { Routes } from "../models/routes";

export default function Navigation() {
  const pathname = usePathname();
  const { push } = useRouter();
  const breakpoint = useResponsive();

  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileNavigationSliderIsOpen, setMobileNavigationSliderIsOpen] =
    useState(false);

  const navItems: { label: string; id?: string; route: string }[] = [
    {
      label: "Goals",
      id: "goals",
      route: "/",
    },
    {
      label: "What We Do",
      id: "what-we-do",
      route: "/",
    },
    {
      label: "Risk Free",
      id: "risk-free",
      route: "/",
    },
    {
      label: "Contact",
      id: "contact",
      route: "/",
    },
  ];

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string | undefined,
    route: string
  ) => {
    setMobileNavigationSliderIsOpen(false);
    e.preventDefault();
    // Check if the current route is the same as the clicked link's route
    if (pathname === route) {
      // If on the same route, scroll smoothly to the section
      if (id) {
        const section = document.getElementById(id);
        if (section) {
          const yOffset = -72; // Offset value
          const y =
            section.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    } else {
      // If on a different route, navigate to that route
      push(`${route}#${id}`);
    }
  };

  const checkScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  useEffect(() => {
    if (breakpoint > 2 && mobileNavigationSliderIsOpen) {
      setMobileNavigationSliderIsOpen(false);
    }
  }, [breakpoint, mobileNavigationSliderIsOpen]);

  useEffect(() => {
    if (mobileNavigationSliderIsOpen) {
      const originalStyle = window.getComputedStyle(document.body).overflow;
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.overflow = originalStyle;
      };
    }
  }, [mobileNavigationSliderIsOpen]);

  const MobileSlideMenu = (
    <div
      className={`fixed bottom-0 h-full w-screen  z-40 duration-200 flex flex-col pt-[72px] bg-white ${
        mobileNavigationSliderIsOpen ? "right-0" : "right-full"
      }`}
    >
      <nav className="w-full flex flex-col container">
        {navItems.map(({ label, id, route }) => (
          <button
            key={label}
            type="button"
            onClick={(e) => handleClick(e, id, route)}
            className="text-gray-500 text-lg group-hover:text-black transition-200 bg-hover py-2 px-4 -mx-4 text-start"
          >
            {label}
          </button>
        ))}
      </nav>
      <div className="border-t py-4 mt-auto flex px-4 justify-center">
        <Button
          className=" py-3 px-4 w-full max-w-[350px]"
          variant="primary"
          onClick={() => {
            setMobileNavigationSliderIsOpen(false);
            push(Routes.SCHEDULE)
          }}
        >
          Connect with us
        </Button>
      </div>
    </div>
  );

  return (
    <>
      <div
        className={`fixed top-0 left-0 py-2 w-screen transition-200 border-b bg-white z-50 ${
          isScrolled ? "border-b-gray-200" : "border-b-transparent"
        }`}
      >
        <div className="container flex items-center">
          <HamburgerMenu
            isOpen={mobileNavigationSliderIsOpen}
            setIsOpen={setMobileNavigationSliderIsOpen}
          />
          <Logo logoClassName="h-9"/>
          <nav className="gap-2 ml-4 items-center hidden lg:flex">
            {navItems.map(({ label, id, route }) => (
              <button
                key={label}
                className="bg-hover py-4 px-4 text-gray-700 hover:text-black transition-200 tracking-tight"
                onClick={(e) => handleClick(e, id, route)}
              >
                {label}
              </button>
            ))}
          </nav>
          <Button
            className="ml-auto py-3 lg:py-4 px-4"
            variant="primary"
            href={Routes.SCHEDULE}
          >
            Connect with us
          </Button>
        </div>
      </div>
      {MobileSlideMenu}
    </>
  );
}
