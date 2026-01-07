import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abril Marangoni - Portfolio",
  description: "Design Engineer — Generative AI @ The University of Texas at Austin",
  openGraph: {
    images: "/ogabi.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/ogabi.png",
  },
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
