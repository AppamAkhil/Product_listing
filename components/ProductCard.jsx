/* eslint-disable @next/next/no-img-element */

export default function ProductCard({ product, isLiked, onLike }) {
  return (
    <article className="relative group">
      {/* IMAGE CONTAINER */}
      <div className="bg-gray-50 h-[320px] flex items-center justify-center">
        <img
          src={product.image}
          alt={product.title}
          className="max-h-[260px] object-contain"
          onError={(e) => {
            e.currentTarget.src =
              "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400";
          }}
        />
      </div>

      {/* LIKE BUTTON */}
      <button
        onClick={onLike}
        className={`absolute top-3 right-3 text-xl ${
          isLiked ? "text-red-500" : "text-gray-400"
        }`}
      >
        {isLiked ? "♥" : "♡"}
      </button>

      {/* TEXT */}
      <h3 className="mt-3 text-[13px] uppercase font-medium truncate">
        {product.title}
      </h3>

      <p className="text-[11px] text-gray-400">
        Sign in or Create an account to see pricing
      </p>
    </article>
  );
}
