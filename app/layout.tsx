import type { Metadata } from "next";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://abrilmarangoni.vercel.app";

export const metadata: Metadata = {
  title: "Abril Marangoni - Portfolio",
  description: "Design Engineer — Generative AI @ The University of Texas at Austin",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Abril Marangoni - Portfolio",
    description: "Design Engineer — Generative AI @ The University of Texas at Austin",
    url: siteUrl,
    siteName: "Abril Marangoni Portfolio",
    images: [
      {
        url: `${siteUrl}/ogabi.png`,
        width: 1200,
        height: 630,
        alt: "Abril Marangoni Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Abril Marangoni - Portfolio",
    description: "Design Engineer — Generative AI @ The University of Texas at Austin",
    images: [`${siteUrl}/ogabi.png`],
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

