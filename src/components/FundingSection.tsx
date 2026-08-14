"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const roundKeys = ["angel", "preA", "a", "next"] as const;

export default function FundingSection() {
  const t = useTranslations("Funding");
  const tCommon = useTranslations("Common");

  return (
    <section className="relative bg-[#f5f5f5] py-[7.81vw] z-[1] overflow-hidden">
      <div className="container-custom relative z-[1]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-[4vw]">
          <div>
            <h2 className="text-[24px] md:text-[38px] xl:text-[48px] font-normal leading-tight text-[#221815]">
              {t("title")}
            </h2>
            <p className="text-[16px] md:text-[20px] xl:text-[24px] leading-relaxed py-[14px] text-[#333]">
              {t("subtitle")}
            </p>
          </div>
          <Link href="/investor" className="btn-brand hidden md:inline-block">{tCommon("learnMore")}</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2vw]">
          {roundKeys.map((key, i) => (
            <div key={i} className="relative bg-white rounded-[0.6em] p-[1.8vw] shadow-[0_0_25px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow overflow-hidden" style={{ minHeight: "180px" }}>
              <span className="text-[40px] md:text-[52px] font-bold text-[#f0f0f0] absolute right-[12px] top-[5px] select-none">{i + 1}</span>
              <span className="inline-block text-[12px] text-white bg-(--brand-primary) px-[10px] py-[3px] rounded-[0.3em]">{t(`rounds.${key}.year`)}</span>
              <h3 className="text-[18px] md:text-[20px] font-medium text-[#221815] mt-[12px]">{t(`rounds.${key}.name`)}</h3>
              <p className="text-[22px] md:text-[26px] font-bold text-(--brand-primary) mt-[6px]">{t(`rounds.${key}.amount`)}</p>
              <p className="text-[13px] text-[#808080] mt-[8px] leading-[22px]">{t(`rounds.${key}.detail`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
