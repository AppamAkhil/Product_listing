"use client";

import FilterSection from "./FilterSection";

export default function Filters({ category, setCategory }) {
  const clearSelection = () => setCategory("all");

  return (
    <aside className="text-sm">

      {/* CUSTOMIZABLE */}
      <div className="flex items-center gap-2 py-4 border-b">
        <input type="checkbox" className="accent-black" />
        <span className="uppercase text-[13px] font-medium">
          Customizable
        </span>
      </div>

      {/* IDEAL FOR */}
      <FilterSection title="Ideal For">
        <p className="mb-2 text-gray-500">All</p>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={category === "men's clothing"}
            onChange={() => setCategory("men's clothing")}
          />
          Men
        </label>

        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={category === "women's clothing"}
            onChange={() => setCategory("women's clothing")}
          />
          Women
        </label>

        <div className="flex flex-col ml-6 mt-1">
    <label className="flex items-center gap-2 text-gray-400 cursor-not-allowed">
      <input type="checkbox" disabled />
      Baby & Kids
    </label>

    {/* 👇 ADD THIS HERE */}
    <p className="text-xs text-gray-400 ml-6">
      Coming soon
    </p>
  </div>

        {/* UNSELECT */}
        <button
          onClick={clearSelection}
          className="mt-2 text-xs underline text-gray-500"
        >
          Unselect all
        </button>
      </FilterSection>

      {/* REMAINING FILTERS */}
      {[
        "Occasion",
        "Work",
        "Fabric",
        "Segment",
        "Suitable For",
        "Raw Materials",
        "Pattern",
      ].map(section => (
        <FilterSection key={section} title={section}>
          <p className="text-gray-500">All</p>
        </FilterSection>
      ))}
    </aside>
  );
}
