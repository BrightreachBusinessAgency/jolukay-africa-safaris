import { useState } from "react";

interface AccordionProps {
  question: string;
  answer: string;
}

export default function Accordion({
  question,
  answer,
}: AccordionProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-2xl mb-5 overflow-hidden bg-white shadow-sm">

      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <h3 className="text-lg font-semibold text-slate-900">
          {question}
        </h3>

        <span className="text-3xl font-light text-green-700">
          {open ? "−" : "+"}
        </span>
      </button>

      {open && (
        <div className="px-6 pb-6 text-gray-600 leading-8">
          {answer}
        </div>
      )}

    </div>
  );
}