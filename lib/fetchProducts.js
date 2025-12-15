export async function fetchProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  const products = await res.json();

  // 🔁 CREATE LARGE CATALOG (e.g. 120 products)
  const expandedProducts = Array(6)
    .fill(products)
    .flat()
    .map((product, index) => ({
      ...product,
      id: `${product.id}-${index}`, // UNIQUE ID (VERY IMPORTANT)
      title: `${product.title}`, // keep title clean
    }));

  return expandedProducts;
}
