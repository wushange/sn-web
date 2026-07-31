"use client";

import { useBanner, BannerProvider } from "@/lib/banner-context";
import Header from "@/components/Header";
import HeroBanner from "@/components/HeroBanner";
import CompanyIntro from "@/components/CompanyIntro";
import ProductsServices from "@/components/ProductsServices";
import NewsSection from "@/components/NewsSection";
import SocialResponsibility from "@/components/SocialResponsibility";
import HistorySection from "@/components/HistorySection";
import JoinUs from "@/components/JoinUs";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";
import { useState } from "react";

function HomeContent() {
  const { current, goTo } = useBanner();
  const [bannerNavVisible, setBannerNavVisible] = useState(true);
  return (
    <>
      <Header />
      <HeroBanner bannerCurrent={current} onSelectBanner={goTo} />
      <CompanyIntro
        bannerCurrent={current}
        onBannerSelect={goTo}
        bannerNavVisible={bannerNavVisible}
        setBannerNavVisible={setBannerNavVisible}
      />
      <ProductsServices />
      <NewsSection />
      <SocialResponsibility />
      <HistorySection />
      <JoinUs />
      <Footer />
      <SideTools />
    </>
  );
}

export default function Home() {
  return (
    <BannerProvider>
      <main className="min-h-screen overflow-x-hidden">
        <HomeContent />
      </main>
    </BannerProvider>
  );
}
