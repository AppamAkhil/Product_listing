"use client";

import { useState } from "react";
import ProductCard from "./ProductCard";

export default function ProductGrid({ products, likedProducts, toggleLike }) {
  const ITEMS_PER_PAGE = 12;
  const [page, setPage] = useState(1);

  const start = (page - 1) * ITEMS_PER_PAGE;
  const paginated = products.slice(start, start + ITEMS_PER_PAGE);
  const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
      {paginated.map(p => (
        <ProductCard
          key={p.id}
          product={p}
          isLiked={likedProducts[p.id]}
          onLike={() => toggleLike(p.id)}
        />
      ))}
    </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-10">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-3 py-1 border ${
                page === i + 1 ? "bg-black text-white" : ""
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </>
  );
}
