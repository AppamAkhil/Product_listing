
"use client";
export default function SortDropdown({ sort, setSort }) {
  return (
    <select onChange={e => setSort(e.target.value)} className="border px-3 py-2 text-sm">
      <option value="recommended">Recommended</option>
      <option value="priceLow">Price Low → High</option>
      <option value="priceHigh">Price High → Low</option>
    </select>
  );
}
