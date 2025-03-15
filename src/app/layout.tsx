import type { Metadata } from "next";
import { Inter, Lora, Montserrat } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});
const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GVEST Global",
  description:
    "Explore GVEST Global: Your Gateway to Real Estate, Banking, Investments, and Financial Inclusion. Discover cutting-edge Financial Technology, seamless Transactions in Multiple Currencies, and innovative Wallet solutions for a brighter financial future.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${montserrat.variable} ${lora.variable} antialiased`}
      >
        <main className="">{children}</main>
      </body>
    </html>
  );
}
