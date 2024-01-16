"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { animate } from "framer-motion";
import { useEffect, useState } from "react";

import Logo from "./Logo";
import Button from "./Button";
import useResponsive from "../hooks/useResponsive";
import HamburgerMenu from "./Hamburger";

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
      id: "#goals",
      route: "/",
    },
    {
      label: "What We Do",
      id: "#what-we-do",
      route: "/",
    },
    {
      label: "Risk Free",
      id: "#risk-free",
      route: "/",
    },
    {
      label: "Contact",
      id: "#contact",
      route: "/",
    },
  ];

  function getOffsetTop(element: HTMLElement): number {
    let offset = element.offsetTop;
    let parent = element.offsetParent as HTMLElement | null;

    while (parent) {
      offset += parent.offsetTop;
      parent = parent.offsetParent as HTMLElement | null;
    }

    return offset;
  }

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: string | undefined,
    route: string
  ) => {
    if (route === pathname && id && typeof window !== "undefined") {
      e.preventDefault();
      const section = document.querySelector(id) as HTMLElement | null;
      if (section) {
        const targetY = getOffsetTop(section);
        animate(window.scrollY, targetY, {
          type: "tween",
          ease: [0.77, -0.02, 0.4, 0.87],
          duration: 0.8,
          onUpdate: (latest) => {
            window.scrollTo(0, latest);
          },
        });
      }
    } else {
      push(route + id);
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
      className={`fixed bottom-0 h-screen w-screen  z-40 duration-200 flex flex-col pt-[72px] bg-white ${
        mobileNavigationSliderIsOpen ? "right-0" : "right-full"
      }`}
    >
      <nav className="w-full flex flex-col container">
        {navItems.map(({ label, id, route }) => (
          <Link
            key={label}
            href={route}
            className="bg-hover group py-2 px-4 -mx-4"
            passHref
          >
            <button
              onClick={(e) => handleClick(e, id, route)}
              className="text-gray-500 text-lg group-hover:text-black transition-200"
            >
              {label}
            </button>
          </Link>
        ))}
      </nav>
      <div className="border-t py-4 mt-auto flex px-4 justify-center">
        <Button className=" py-3 px-4 w-full max-w-[350px]" variant="primary" href="/contact">
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
          <Logo />
          <nav className="gap-2 ml-4 items-center hidden lg:flex">
            {navItems.map(({ label, id, route }) => (
              <Link
                key={label}
                href={route}
                className="bg-hover group py-4 px-4"
                passHref
              >
                <button
                  onClick={(e) => handleClick(e, id, route)}
                  className="text-gray-700 group-hover:text-black transition-200 tracking-tight"
                >
                  {label}
                </button>
              </Link>
            ))}
          </nav>
          <Button
            className="ml-auto py-3 lg:py-4 px-4"
            variant="primary"
            href="/contact"
          >
            Connect with us
          </Button>
        </div>
      </div>
      {MobileSlideMenu}
    </>
  );
}
