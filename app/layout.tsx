import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SR PC KH | Gaming PCs, Repairs & Academy",
  description: "Modern gaming PC shop, laptop repair, phone repair, and SR Academy in Cambodia.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
