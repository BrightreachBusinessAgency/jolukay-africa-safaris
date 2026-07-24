export default function Logo() {
  return (
    <div className="flex items-center gap-3">
      <img
        src="/logo.png"
        alt="JOLUKAY Africa Safaris"
        className="h-14 w-14 object-contain"
      />

      <div>
        <h1 className="text-2xl font-bold text-green-700">
          JOLUKAY
        </h1>

        <p className="text-xs uppercase tracking-[0.3em] text-gray-300">
          AFRICA SAFARIS
        </p>
      </div>
    </div>
  );
}