
"use client";
export default function SearchBar({ query, setQuery }) {
  return (
    <input
      value={query}
      onChange={e => setQuery(e.target.value)}
      placeholder="Search products"
      className="border px-4 py-2 text-sm w-full md:w-80"
    />
  );
}
