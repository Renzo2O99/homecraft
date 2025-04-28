"use client";

import Footer from "@/components/layout/Footer/Footer";
import FeaturesSection from "@/components/sections/FeaturesSection";
import HeroSection from "@/components/sections/HeroSection";
import NewProductsSection from "@/components/sections/NewProductsSection";
import NewsletterSection from "@/components/sections/NewsletterSection";
import ProductsSection from "@/components/sections/ProductsSection";
import TestimonialSection from "@/components/sections/TestimonialSection";
import UltimateFeaturesSection from "@/components/sections/UltimateFeaturesSection";

export default function Home() {
  return (
    <main className="w-full max-w-[1440px] mx-auto bg-white">
      <HeroSection />

      <FeaturesSection />

      <NewProductsSection />

      <UltimateFeaturesSection />

      <ProductsSection />

      <TestimonialSection />

      <NewsletterSection />

      <Footer />
    </main>
  );
}
