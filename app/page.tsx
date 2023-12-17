"use client";

import Announcement from "@/components/announcement-section";
import FiltersSection from "@/components/filters-section";
import HeroSection from "@/components/hero-section";
import SearchBar from "@/components/search-bar";
import Heading from "@/components/ui/heading";
import Logos from "@/components/brands-logo";
import OfferAnoucment from "@/components/offer-annoucment";
import ProductGrid from "@/components/product-grid";
import { homeProducts } from "@/contrants/products";
import useFilter from "@/hooks/use-filters";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  const filter = useFilter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div className="">
      <div className="container">
        <HeroSection />
        <Announcement />
        <SearchBar />
        {filter?.isOpen && <FiltersSection />}
        <Logos />
        <div className="p-10">
          <Heading text="Alcon" className="text-4xl text-center px-2" />
        </div>
        <OfferAnoucment />
      </div>
      <ProductGrid products={homeProducts[0].products} />
      <div className="container">
        <div className="pt-24 pb-12">
          <OfferAnoucment />
        </div>
        <Heading text="Coopper Vision" className="text-4xl text-center px-2" />
      </div>
      <div className="my-20">
        <ProductGrid products={homeProducts[1].products} />
      </div>
      <div className="container">
        <OfferAnoucment />
        <div className="my-14">
          <Heading
            text="Johnson & Johnson"
            className="text-4xl text-center px-2"
          />
        </div>
      </div>
      <div className="my-20">
        <ProductGrid products={homeProducts[2].products} />
      </div>
    </div>
  );
}
