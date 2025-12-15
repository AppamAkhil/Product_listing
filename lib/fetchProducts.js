import { mockProducts } from "./mockProducts";

export async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      headers: { Accept: "application/json" },
    });

    if (!res.ok) throw new Error("API failed");

    const contentType = res.headers.get("content-type");
    if (!contentType?.includes("application/json")) {
      throw new Error("Invalid JSON");
    }

    const products = await res.json();

    // Expand catalog
    return Array(6)
      .fill(products)
      .flat()
      .map((p, i) => ({
        ...p,
        id: p.id * 100 + i,
      }));

  } catch (error) {
    console.warn("Using mock products due to API failure");

    // ✅ Fallback to local data
    return Array(10)
      .fill(mockProducts)
      .flat()
      .map((p, i) => ({
        ...p,
        id: p.id * 100 + i,
      }));
  }
}
