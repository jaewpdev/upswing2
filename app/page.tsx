import Goals from "./sections/Goals";
import Hero from "./sections/Hero";
import RiskFree from "./sections/RiskFree";
import WhatWeDo from "./sections/WhatWeDo";

export default function Home() {
  return (
    <main className="mt-[73px]">
      <Hero />
      <Goals />
      <WhatWeDo />
      <RiskFree />
    </main>
  );
}
