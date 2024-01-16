export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="text-9xl font-bold text-brand-yellow">
        <div className="bg-white w-screen h-[1000px]"></div>
        <div className="bg-white w-screen h-[1000px]" id="goals"></div>
        <div className="bg-pink-300 w-screen h-[1000px]" id="what-we-do"></div>
        <div className="bg-pink-200 w-screen h-[1000px]" id="risk-free"></div>
      </div>
    </main>
  );
}
