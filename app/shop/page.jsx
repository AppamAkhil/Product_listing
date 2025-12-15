import Link from "next/link";
import { fetchProducts } from "@/lib/fetchProducts";

export default async function ShopPage() {
  const products = await fetchProducts();

  // 🆕 New Arrivals
  const newArrivals = products.slice(0, 4);

  // 🔥 Best Sellers (safe)
  const bestSellers = [...products]
    .filter(p => p.rating?.rate)
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">
      <section className="text-center mb-20">
        <h1 className="text-4xl font-light mb-4">
          SHOP COLLECTIONS
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Discover thoughtfully curated collections.
        </p>
      </section>

      {/* NEW ARRIVALS */}
      <Section title="New Arrivals">
        <ProductRow products={newArrivals} />
      </Section>

      {/* BEST SELLERS */}
      <Section title="Best Sellers">
        <ProductRow products={bestSellers} />
      </Section>

      <section className="text-center mt-24">
        <Link
          href="/"
          className="inline-block bg-black text-white px-8 py-3 text-sm"
        >
          SHOP ALL PRODUCTS
        </Link>
      </section>
    </main>
  );
}

/* ---- helpers ---- */

function Section({ title, children }) {
  return (
    <section className="mb-24">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-light">{title}</h2>
        <Link href="/" className="text-xs underline text-gray-400">
          View All
        </Link>
      </div>
      {children}
    </section>
  );
}

function ProductRow({ products }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {products.map(product => (
        <Link key={product.id} href="/" className="group">
          <div className="bg-gray-50 p-4">
            <img
              src={product.image}
              alt={product.title}
              className="h-40 mx-auto object-contain"
            />
          </div>

          <h3 className="mt-2 text-xs font-medium uppercase truncate">
            {product.title}
          </h3>

          <p className="text-[11px] text-gray-400">
            Sign in to see pricing
          </p>
        </Link>
      ))}
    </div>
  );
}
