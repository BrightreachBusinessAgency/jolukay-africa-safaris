type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  onClick?: () => void;
};

export default function Button({
  children,
  variant = "primary",
  onClick,
}: ButtonProps) {
  const baseStyle =
    "px-6 py-3 rounded-lg font-semibold transition duration-300";

  const variants = {
    primary:
      "bg-green-700 text-white hover:bg-green-800",
    secondary:
      "border border-green-700 text-green-700 hover:bg-green-700 hover:text-white",
  };

  return (
    <button
      onClick={onClick}
      className={`${baseStyle} ${variants[variant]}`}
    >
      {children}
    </button>
  );
}