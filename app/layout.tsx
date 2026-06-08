import type { Metadata } from "next";
import { Bebas_Neue, Inter, Caveat } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  variable: "--font-bebas",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lion's Fitness – Train Hard. Stay Strong. Be a Lion.",
  description:
    "Lion's Fitness is a premium gym offering expert-led programs, modern equipment, and an exclusive rooftop turf. Join 500+ members transforming their lives.",
  keywords: [
    "gym",
    "fitness",
    "Lion's Fitness",
    "personal training",
    "CrossFit",
    "rooftop turf",
    "strength",
    "conditioning",
  ],
  openGraph: {
    title: "Lion's Fitness – Train Hard. Stay Strong. Be a Lion.",
    description:
      "Premium gym with expert trainers, modern equipment, and an exclusive rooftop turf.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${inter.variable} ${caveat.variable} scroll-smooth`}
    >
      <body className="bg-[#0A0A0A] text-white antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
