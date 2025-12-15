import { Suspense } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsClient from "../components/ProductsClient";
import { fetchProducts } from "../lib/fetchProducts";

export default async function Page() {
  const products = await fetchProducts();

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4">
        <section className="text-center py-12">
          <h1 className="text-3xl font-light">
            DISCOVER OUR PRODUCTS
          </h1>
        </section>

        <Suspense fallback={<p className="text-center">Loading...</p>}>
          {products.length === 0 ? (
            <p className="text-center text-gray-500">
              Products temporarily unavailable.
            </p>
          ) : (
            <ProductsClient products={products} />
          )}
        </Suspense>
      </main>

      <Footer />
    </>
  );
}
