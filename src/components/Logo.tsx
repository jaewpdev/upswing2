import Link from "next/link";
import LogoSVG from "../../public/upswing--logo.svg";

export default function Logo({ className, logoClassName }: { className?: string; logoClassName?: string }) {
  return (
    <Link href="/" className={`${className} flex items-center py-2 px-4 bg-hover w-fit`}>
      <LogoSVG className={`aspect-[100/120] ${logoClassName}`} />
    </Link>
  );
}
