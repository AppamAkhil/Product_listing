"use client";

import { useState } from "react";

export default function FilterSection({ title, children }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="border-b py-4">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center uppercase text-[13px] font-medium"
      >
        {title}
        <span
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        >
          ▾
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden pt-3 space-y-2 text-gray-600">
          {children}
        </div>
      </div>
    </div>
  );
}
