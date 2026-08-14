import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";
import { getTranslations } from "next-intl/server";

export default async function InvestorPage() {
  const t = await getTranslations("Investor");
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHeader
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        crumb={t("pageTitle")}
      />
      <InvestorContent />
      <Footer />
      <SideTools />
    </main>
  );
}

async function InvestorContent() {
  const t = await getTranslations("Investor");
  const roundKeys = ["1", "2", "3", "4"];
  const planKeys = ["short", "mid", "long"];
  const marketKeys = ["device", "consumable", "market"];

  return (
    <>
      <section id="funding" className="relative bg-white py-[60px] md:py-[90px] scroll-mt-[56px] md:scroll-mt-[76px]">
        <div className="container-custom">
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[35px]">{t("fundingTitle")}</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-(--brand-primary) text-white">
                  <th className="p-[15px] text-left text-[15px] font-medium">{t("tableHead.round")}</th>
                  <th className="p-[15px] text-left text-[15px] font-medium">{t("tableHead.time")}</th>
                  <th className="p-[15px] text-left text-[15px] font-medium">{t("tableHead.amount")}</th>
                  <th className="p-[15px] text-left text-[15px] font-medium">{t("tableHead.investors")}</th>
                  <th className="p-[15px] text-left text-[15px] font-medium">{t("tableHead.valuation")}</th>
                </tr>
              </thead>
              <tbody>
                {roundKeys.map((k, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#fafafa]" : "bg-white"} style={{ borderBottom: "1px solid #E6E6E6" }}>
                    <td className="p-[15px] text-[15px] font-medium text-(--brand-primary)">{t(`fundingRounds.${k}.round`)}</td>
                    <td className="p-[15px] text-[14px] text-[#555]">{t(`fundingRounds.${k}.year`)}</td>
                    <td className="p-[15px] text-[14px] font-medium text-[#333]">{t(`fundingRounds.${k}.amount`)}</td>
                    <td className="p-[15px] text-[13px] text-[#666]">{t(`fundingRounds.${k}.investors`)}</td>
                    <td className="p-[15px] text-[13px] text-[#666]">{t(`fundingRounds.${k}.note`)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-[35px] bg-[#f5f5f5] rounded-[0.8em] p-[25px] md:p-[35px]">
            <h3 className="text-[18px] md:text-[22px] font-medium text-[#221815] mb-[15px]">{t("planTitle")}</h3>
            <p className="text-[15px] leading-[30px] text-[#555]">
              {t("planBody", { amount: t("planAmount"), percent: t("planPercent"), valuation: t("planValuation") })}
            </p>
          </div>
        </div>
      </section>

      <section id="plan" className="relative bg-[#f5f5f5] py-[60px] md:py-[90px] scroll-mt-[56px] md:scroll-mt-[76px]">
        <div className="container-custom">
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[35px]">{t("planTitle2")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
            {planKeys.map((k, i) => (
              <div key={i} className="bg-white rounded-[0.8em] p-[28px] shadow-[0_0_20px_rgba(0,0,0,0.06)]">
                <h3 className="text-[18px] font-medium text-(--brand-primary) mb-[15px]">{t(`plans.${k}.period`)}</h3>
                <ul className="space-y-[10px]">
                  {(t.raw(`plans.${k}.items`) as unknown as string[]).map((it, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-[13px] text-[#555] leading-[22px]">
                      <span className="text-(--brand-primary) mt-[2px]">◆</span>
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-white py-[60px] md:py-[90px]">
        <div className="container-custom">
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[35px]">{t("marketTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
            {marketKeys.map((k, i) => (
              <div key={i} className="border border-[#E6E6E6] rounded-[0.8em] p-[28px] hover:border-(--brand-primary) transition-colors">
                <h3 className="text-[17px] font-medium text-[#221815] mb-[10px]">{t(`markets.${k}.label`)}</h3>
                <p className="text-[14px] leading-[26px] text-[#555]">{t(`markets.${k}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
