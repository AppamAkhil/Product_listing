export async function fetchProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      cache: "no-store",
      headers: {
        Accept: "application/json",
      },
    });

    // 🚨 VERY IMPORTANT CHECK
    if (!res.ok) {
      console.error("Fetch failed:", res.status);
      return [];
    }

    const contentType = res.headers.get("content-type");

    // 🚨 Prevent HTML being parsed as JSON
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Invalid content type:", contentType);
      return [];
    }

    const products = await res.json();

    // 🔁 Expand products safely
    return Array(6)
      .fill(products)
      .flat()
      .map((product, index) => ({
        ...product,
        id: index + product.id * 100, // numeric ID (safe)
      }));

  } catch (error) {
    console.error("Fetch error:", error);
    return []; // ✅ NEVER crash the app
  }
}
