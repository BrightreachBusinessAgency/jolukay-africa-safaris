type LogoProps = {
  dark?: boolean;
};

export default function Logo({ dark = false }: LogoProps) {
  return (
    <h1
      className={`text-3xl font-bold tracking-wide ${
        dark ? "text-white" : "text-green-700"
      }`}
    >
      JOLUKAY
    </h1>
  );
}