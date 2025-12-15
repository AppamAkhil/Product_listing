export default function ProductCard({ product, isLiked, onLike }) {
  return (
    <article className="relative group">
      {/* IMAGE */}
      <div className="bg-gray-50 p-6">
        <img
          src={product.image}
          alt={product.title}
          className="h-[260px] mx-auto object-contain"
        />
      </div>

      {/* HEART */}
      <button
        onClick={onLike}
        className={`absolute top-3 right-3 text-xl ${
          isLiked ? "text-red-500" : "text-gray-400"
        }`}
      >
        {isLiked ? "♥" : "♡"}
      </button>

      <h3 className="mt-2 text-[13px] font-medium uppercase truncate">
        PRODUCT NAME
      </h3>

      <p className="text-[11px] text-gray-400">
        Sign in or Create an account to see pricing
      </p>
    </article>
  );
}
