"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/src/components/Button";
import { Routes } from "@/src/models/routes";

export default function Hero() {
  const dynamicTextAndColors: {
    text: string;
    bgColor: string;
    textColor: string;
  }[] = [
    {
      text: "Grow fast",
      bgColor: "bg-green-200",
      textColor: "text-green-500",
    },
    {
      text: "Boost sales",
      bgColor: "bg-violet-200",
      textColor: "text-violet-500",
    },
    {
      text: "Save time",
      bgColor: "bg-blue-200",
      textColor: "text-blue-500",
    },
    {
      text: "Get known",
      bgColor: "bg-yellow-200",
      textColor: "text-yellow-500",
    },
  ];
  const [currentTextColorSet, setCurrentTextColorSet] = useState(
    dynamicTextAndColors[0]
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % dynamicTextAndColors.length);
      setCurrentTextColorSet(dynamicTextAndColors[index]);
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  return (
    <section
      className="container pt-20 lg:pt-40 flex flex-col items-center"
      id="hero"
    >
      <h1 className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-tight relative text-center">
        {/* <div
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -z-10 -translate-y-1/2 w-[100% + 2rem] transition-200 aspect-square rounded-full ${currentTextColorSet.bgColor}`}
        /> */}
        <motion.span
          className={`${currentTextColorSet.textColor} transition-200`}
          key={currentTextColorSet.text}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {currentTextColorSet.text}
        </motion.span>{" "}
        <br /> with Upswing
      </h1>
      <p className="mt-10 text-center max-w-[40ch]">
        Reach the customers who matter most. Upswing helps you connect with
        quality leads to grow your roofing business effortlessly.
      </p>

      <Button variant="primary" className="py-4 px-4 mt-10" href={Routes.SCHEDULE}>
        Connect with us
      </Button>
    </section>
  );
}
