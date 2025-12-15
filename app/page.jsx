// app/page.jsx
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductsClient from "../components/ProductsClient";
import { fetchProducts } from "../lib/fetchProducts";

export default async function Page() {
  const products = await fetchProducts(); // SSR

  return (
    <>
      <Header />

      <main className="max-w-7xl mx-auto px-4">
        <section className="text-center py-12">
          <h1 className="text-3xl font-light">
            DISCOVER OUR PRODUCTS
          </h1>
        </section>

        <ProductsClient products={products} />
      </main>

      <Footer />
    </>
  );
}
