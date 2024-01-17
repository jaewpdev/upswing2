import IconAirplane from "../../public/icon--airplane.svg";
import IconClipboard from "../../public/icon--clipboard.svg";
import IconEye from "../../public/icon--eye.svg";
import IconMagicWand from "../../public/icon--magic-wand.svg";
import IconSunrisex from "../../public/icon--sunrise.svg";

export default function WhatWeDo() {
  const whatWeDoList: {
    heading: string;
    content: string;
    Icon: any;
    iconColor: string;
    bgColor: string;
  }[] = [
    {
      heading: "Close more clients",
      content:
        "Regularly attract high-quality leads tailored to your business, ensuring a steady flow of ready-to-convert clients.",
      Icon: IconClipboard,
      iconColor: "yellow-svg",
      bgColor: "bg-yellow-200",
    },
    {
      heading: "Increase your reputation",
      content:
        "Significantly enhance your online presence and credibility with a surge of positive reviews on your Google Business Profile.",
      Icon: IconMagicWand,
      iconColor: "rose-svg",
      bgColor: "bg-rose-200",
    },
    {
      heading: "Attract more eyes",
      content:
        "Gain a competitive edge in your local market. We make sure you're seen and chosen over competitors.",
      Icon: IconEye,
      iconColor: "green-svg",
      bgColor: "bg-green-200",
    },
    {
      heading: "Save yourself the headache",
      content:
        "Leave the complex details of client acquisition to us. Focus on your work while we efficiently manage your marketing needs.",
      Icon: IconSunrisex,
      iconColor: "sky-svg",
      bgColor: "bg-sky-200",
    },
    {
      heading: "Expand your goals",
      content:
        "Think bigger and achieve more. Whether it's boosting revenue or expanding operations, we're here to help you scale new heights.",
      Icon: IconAirplane,
      iconColor: "violet-svg",
      bgColor: "bg-violet-200",
    },
  ];

  return (
    <section className="bg-white relative -z-10 -mt-20" id="what-we-do">
      <div className=" h-[300px] bg-gradient-to-b to-gray-50 from-white" />
      <div className="bg-gray-50  pb-32">
        <div className="container">
          <h2 className="text-center mb-10 sm:mb-16 md:mb-20">
            How we <span className="text-green-500">elevate</span> your business
          </h2>
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-x-6 gap-y-6 sm:gap-y-20 justify-center">
            {whatWeDoList.map(
              ({ heading, content, Icon, iconColor, bgColor }) => (
                <div
                  key={heading}
                  className="flex flex-row sm:flex-col items-start sm:items-center sm:max-w-[250px] md:max-w-[300px] lg:max-w-[400px] sm:text-center"
                >
                  <div
                    className={`flex items-center justify-center rounded-full aspect-square min-w-[60px] w-[60px] md:w-[80px] mr-4 sm:mr-0  sm:mb-4 ${bgColor}`}
                  >
                    <Icon className={`w-7 md:w-10 ${iconColor}`} />
                  </div>
                  <div>
                    <h4 className="text-lg sm:text-xl text-gray-900 sm:mb-4">{heading}</h4>
                    <p className="text-gray-600 text-base">{content}</p>
                  </div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
