"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Filters from "./Filters";
import ProductGrid from "./ProductGrid";
import SortDropdown from "./SortDropdown";

const URL_TO_API = {
  men: "men's clothing",
  women: "women's clothing",
};

const API_TO_URL = {
  "men's clothing": "men",
  "women's clothing": "women",
};

export default function ProductsClient({ products }) {
  const router = useRouter();
  const params = useSearchParams();

  const urlCategory = params.get("category");

  const [category, setCategory] = useState(
    urlCategory ? URL_TO_API[urlCategory] : "all"
  );
  const [sort, setSort] = useState("recommended");
  const [showFilters, setShowFilters] = useState(true);
  const [likedProducts, setLikedProducts] = useState({});

  const toggleLike = (id) => {
    setLikedProducts(prev => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 🔁 Sync URL
  useEffect(() => {
    if (category === "all") {
      router.replace("/", { scroll: false });
    } else {
      router.replace(`/?category=${API_TO_URL[category]}`, {
        scroll: false,
      });
    }
  }, [category]);

  // FILTER
  let filtered =
    category === "all"
      ? products
      : products.filter(p => p.category === category);

  // SORT
  if (sort === "priceLow") filtered.sort((a, b) => a.price - b.price);
  if (sort === "priceHigh") filtered.sort((a, b) => b.price - a.price);

  return (
    <>
      {/* SORT */}
      <div className="flex justify-end mb-6">
        <SortDropdown sort={sort} setSort={setSort} />
      </div>

      {/* COUNT + FILTER TOGGLE */}
      <div className="flex justify-between items-center mb-6 text-sm">
        <span className="font-medium">
          {filtered.length} ITEMS
        </span>

        <button
          onClick={() => setShowFilters(!showFilters)}
          className="text-gray-400 underline text-xs"
        >
          {showFilters ? "HIDE FILTER" : "SHOW FILTER"}
        </button>
      </div>

      {/* GRID */}
      <section className="grid grid-cols-1 md:grid-cols-[260px_1fr] gap-10">
        {showFilters && (
          <Filters category={category} setCategory={setCategory} />
        )}

        <ProductGrid
          products={filtered}
          likedProducts={likedProducts}
          toggleLike={toggleLike}
        />
      </section>
    </>
  );
}
