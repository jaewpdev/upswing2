import Link from "next/link";

export default function Button({
  variant = "primary",
  href,
  onClick,
  className,
  children,
  buttonType = "button",
  disabled = false,
}: {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  onClick?: () => void;
  className?: string;
  children: React.ReactNode;
  buttonType?: "button" | "submit";
  disabled?: boolean;
}) {
  const classes = {
    shared: "transition-200 flex items-center justify-center",
    primary: "bg-green-500 hover:bg-green-600 text-white rounded",
    secondary: "",
    outline: "",
  };
  return href ? (
    <Link
      className={`${className} ${classes[variant]} ${classes.shared}`}
      href={href}
    >
      {children}
    </Link>
  ) : (
    <button
      type={buttonType}
      className={`${className} ${classes[variant]} ${classes.shared}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
