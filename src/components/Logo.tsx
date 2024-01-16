import Link from "next/link";
import LogoSVG from "../../public/upswing--logo.svg";

export default function Logo({ className }: { className?: string }) {
  return (
    <Link href="/" className={`${className} flex items-center py-2 px-4 bg-hover`}>
      <LogoSVG className="h-9" />
    </Link>
  );
}
