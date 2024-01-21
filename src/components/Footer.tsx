import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t bg-neutral-100 w-screen">
      <div className="container py-6 flex justify-center">
        <div className="flex flex-col items-center w-fit mt-auto">
          <div className="flex items-center mb-2">
            <Logo logoClassName="h-10 -ml-4" />
            <span className="text-3xl font-medium tracking-tighter ">upswing</span>
          </div>
          <p className="tracking-tight">Copyright 	&#169; 2023</p>
          <p className="text-sm tracking-tight font-light">for your success</p>
        </div>
      </div>
    </footer>
  );
}
