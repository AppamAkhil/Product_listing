import Link from "next/link";

async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });
  return res.json();
}

export default async function ShopPage() {
  const products = await getProducts();

  // 🆕 New Arrivals → last 4 products
  const newArrivals = [...products].slice(-4);

  // 🔥 Best Sellers → top rated
  const bestSellers = [...products]
    .sort((a, b) => b.rating.rate - a.rating.rate)
    .slice(0, 4);

  const categories = [
    { name: "Men", link: "/?category=men" },
    { name: "Women", link: "/?category=women" },
    { name: "Accessories", link: "/?category=accessories" },
    { name: "Electronics", link: "/?category=electronics" },
  ];

  return (
    <main className="max-w-7xl mx-auto px-6 py-20">

      {/* HERO */}
      <section className="text-center mb-20">
        <h1 className="text-4xl font-light mb-4">
          SHOP COLLECTIONS
        </h1>
        <p className="text-gray-500 max-w-xl mx-auto">
          Discover thoughtfully curated collections crafted with purpose.
        </p>
      </section>

      {/* CATEGORIES */}
      <section className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 mb-24">
        {categories.map(cat => (
          <Link
            key={cat.name}
            href={cat.link}
            className="border p-8 text-center hover:shadow-sm transition"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wide mb-2">
              {cat.name}
            </h3>
            <span className="text-xs text-gray-400 underline">
              Explore
            </span>
          </Link>
        ))}
      </section>

      {/* 🆕 NEW ARRIVALS */}
      <Section title="New Arrivals">
        <ProductRow products={newArrivals} />
      </Section>

      {/* 🔥 BEST SELLERS */}
      <Section title="Best Sellers">
        <ProductRow products={bestSellers} />
      </Section>

      {/* CTA */}
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
