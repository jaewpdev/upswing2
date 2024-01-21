import Contact from "./sections/Contact";
import Goals from "./sections/Goals";
import Hero from "./sections/Hero";
import RiskFree from "./sections/RiskFree";
import WhatWeDo from "./sections/WhatWeDo";

export default function Home() {
  return (
    <main>
      <Hero />
      <Goals />
      <WhatWeDo />
      <RiskFree />
      <Contact />
    </main>
  );
}
