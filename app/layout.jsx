
import "./globals.css";
export const metadata = { title: "Product Listing Page" };

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
