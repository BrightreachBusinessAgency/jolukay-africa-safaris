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

  const base =
    "px-8 py-4 rounded-full font-semibold duration-300 transition-all";

  const styles = {
    primary:
      "bg-green-700 text-white hover:bg-green-800 hover:scale-105 shadow-lg",

    secondary:
      "bg-white border-2 border-green-700 text-green-700 hover:bg-green-700 hover:text-white hover:scale-105",
  };

  return (
    <button
      onClick={onClick}
      className={`${base} ${styles[variant]}`}
    >
      {children}
    </button>
  );
}