"use client";

import { useTranslations } from "next-intl";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";
import { SitepingInbox } from "@siteping/dashboard";

export default function FeedbackPage() {
  const t = useTranslations("Feedback");
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f5f5f5]">
      <Header />
      <section className="relative bg-(--brand-primary) pt-[120px] md:pt-[140px] pb-[50px] md:pb-[70px] overflow-hidden">
        <div className="container-custom relative z-[1]">
          <h1 className="text-[28px] md:text-[42px] xl:text-[52px] font-normal text-white leading-tight">{t("pageTitle")}</h1>
          <p className="text-[15px] md:text-[18px] text-white/80 mt-[12px] max-w-[700px]">
            {t("pageSubtitle")}
          </p>
        </div>
      </section>
      <section className="container-custom py-[40px] md:py-[60px]">
        <SitepingInbox
          endpoint="/api/siteping"
          projects="shengnuo-web"
          apiKey={process.env.NEXT_PUBLIC_SITEPING_API_KEY}
        />
      </section>
      <Footer />
      <SideTools />
    </main>
  );
}
