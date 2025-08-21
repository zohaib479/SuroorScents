

import "./globals.css";
import { Inter } from "next/font/google";
import AnimatedWrapper from "./AnimatedWrapper"; // client component

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Suroor Scents - Premium Perfumes in Pakistan",
  description: "Discover long-lasting premium fragrances for men, women, and unisex at Suroor Scents. Elegant, luxurious, and unforgettable perfumes crafted for every occasion.",
  metadataBase: new URL("https://suroorscents.vercel.app"),
  keywords: "perfume, suroor scents, luxury perfume, fragrances pakistan, oud, attar, long-lasting perfumes",
  openGraph: {
    title: "Suroor Scents - Premium Perfumes in Pakistan",
    description: "Discover long-lasting premium fragrances for men, women, and unisex at Suroor Scents.",
    url: "https://suroorscents.vercel.app",   
    siteName: "Suroor Scents",
    images: [
      {
        url: "/Images/png/white oud.png", 
        width: 800,
        height: 600,
        alt: "Suroor Scents Perfume Collection",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
export const dynamic = "force-dynamic"; 



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
        />
      </head>
      <body className={inter.className}>
        <AnimatedWrapper>{children}</AnimatedWrapper>
      </body>
    </html>
  );
}
