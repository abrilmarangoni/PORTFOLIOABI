import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abril Marangoni - Portfolio",
  description: "Design Engineer — Generative AI @ The University of Texas at Austin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased">{children}</body>
    </html>
  );
}

