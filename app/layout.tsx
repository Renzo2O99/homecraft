import type { Metadata } from "next";
import { Saira } from "next/font/google";
import "./styles/globals.css";
import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";

const saira = Saira({
  variable: "--font-saira",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Homecraft - Tu Tienda de Muebles en Línea",
  description: "Descubre los mejores muebles para tu hogar con ofertas exclusivas y diseños únicos en Homecraft.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html 
      lang="en"
      className="scroll-smooth" 
      suppressHydrationWarning
    >
      <body
        className={`${saira.variable} antialiased bg-grey-3 leading-relaxed text-base font-primary`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
