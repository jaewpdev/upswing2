"use client";

import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

import IconColumn from "../../public/icon--column.svg";
import IconCoins from "../../public/icon--coins.svg";
import IconGraphIncrease from "../../public/icon--graph-increase.svg";
import IconSaveTime from "../../public/icon--save-time.svg";

export default function Goals() {
  const goals: {
    image: string;
    alt: string;
    label: string;
    Icon: any;
    heading: string;
    content: string;
  }[] = [
    {
      image: "/graph--revenue.png",
      alt: "Revenue increase graph",
      label: "Revenue",
      Icon: IconGraphIncrease,
      heading: "Maximize Your Earnings",
      content:
        "Watch your earnings soar as we bring in high-quality leads that are ready to convert. Our targeted ad campaigns are all about boosting your bottom line, making sure you see a significant jump in profitability.",
    },
    {
      image: "/graph--time.png",
      alt: "Save time graph",
      label: "Save time",
      Icon: IconSaveTime,
      heading: "Streamline Your Marketing Efforts",
      content:
        "Imagine having more time to focus on what you do best, while we take care of driving your marketing forward. We streamline your digital advertising efforts, saving you hours and stress, and bringing in results you can see.",
    },
    {
      image: "/graph--reputation.png",
      alt: "Build your brand",
      label: "Build brand",
      Icon: IconColumn,
      heading: "Strengthen Your Market Presence",
      content:
        "Building a strong brand in today's market can be tough, but we're here to make it easier. Our approach is all about creating a lasting impression for your business, making sure your brand stands out and sticks with your audience.",
    },
    {
      image: "/graph--cpl.png",
      alt: "Save your money",
      label: "Save money",
      Icon: IconCoins,
      heading: "Optimize Your Ad Spend",
      content:
        "Let's make every advertising dollar work harder for you. We're all about optimizing your ad spend, ensuring you get the maximum impact for your budget. It's not just about spending less, but about spending smarter.",
    },
  ];
  const [currentGoal, setCurrentGoal] = useState(goals[0]);

  return (
    <section className="container flex flex-col items-center mt-32" id="goals">
      <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tighter text-center mb-6">
        Surpass your <span className="text-green-500">goals</span> and look
        beyond
      </h2>
      <div className="flex gap-4 items-center mb-4 md:mb-20 overflow-auto flex-wrap justify-center ">
        {goals.map((goal) => {
          const { Icon, label } = goal;
          return (
            <div key={goal.label}>
              <button
                type="button"
                onClick={() => setCurrentGoal(goal)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full border whitespace-nowrap ${
                  currentGoal.label === goal.label
                    ? "bg-black outline-button text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="hidden md:inline">{label}</span>
              </button>
            </div>
          );
        })}
      </div>

      <motion.div
        className="flex flex-col items-center md:items-start md:flex-row gap-6 w-full max-w-[800px]"
        key={currentGoal.label}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="mt-4 md:mt-10">
          <h3 className="text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-8 font-medium">
            {currentGoal.heading}
          </h3>
          <p className="max-w-[45ch]">{currentGoal.content}</p>
        </div>
        <Image
          src={currentGoal.image}
          width={400}
          height={400}
          quality={100}
          alt={currentGoal.alt}
        ></Image>
      </motion.div>
    </section>
  );
}
