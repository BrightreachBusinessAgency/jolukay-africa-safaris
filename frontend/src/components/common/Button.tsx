type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  type?: "button" | "submit" | "reset";
  onClick?: () => void;
  disabled?: boolean;
  className?: string;
};

export default function Button({
  children,
  variant = "primary",
  type = "button",
  onClick,
  disabled = false,
  className = "",
}: ButtonProps) {
  const base =
    "px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg inline-flex items-center justify-center";

  const styles = {
    primary:
      "bg-green-700 text-white hover:bg-green-800 hover:scale-105 hover:shadow-2xl",

    secondary:
      "bg-white border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white hover:scale-105",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${base} ${styles[variant]} ${
        disabled ? "opacity-50 cursor-not-allowed" : ""
      } ${className}`}
    >
      {children}
    </button>
  );
}