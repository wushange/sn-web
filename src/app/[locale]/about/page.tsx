import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("About");
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHeader
        title={t("pageTitle")}
        subtitle={t("pageSubtitle")}
        crumb={t("pageTitle")}
      />
      <AboutContent />
      <Footer />
      <SideTools />
    </main>
  );
}

async function AboutContent() {
  const t = await getTranslations("About");
  return (
    <>
      <section id="profile" className="relative bg-white py-[60px] md:py-[90px] scroll-mt-[56px] md:scroll-mt-[76px]">
        <div className="container-custom">
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[20px]">{t("profileTitle")}</h2>
          <div className="prose max-w-none text-[15px] md:text-[16px] leading-[30px] text-[#555] space-y-4">
            <p>{t("profileP1")}</p>
            <p>{t("profileP2")}</p>
            <p>{t("profileP3")}</p>
          </div>
        </div>
      </section>

      <HistoryBlock />

      <OrgBlock />

      <TeamBlock />

      <HonorBlock />
    </>
  );
}

async function HistoryBlock() {
  const t = await getTranslations("About");
  const items = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
  return (
    <section id="history" className="relative bg-[#f5f5f5] py-[60px] md:py-[90px] scroll-mt-[56px] md:scroll-mt-[76px]">
      <div className="container-custom">
        <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[30px]">{t("historyTitle")}</h2>
        <div className="space-y-0">
          {items.map((k, i) => (
            <div key={i} className="relative flex flex-col md:flex-row gap-3 md:gap-8 pb-[25px] md:pb-[30px] border-l-2 border-(--brand-primary) pl-5 md:pl-8 ml-2">
              <span className="absolute left-[-9px] top-[6px] w-[16px] h-[16px] bg-(--brand-primary) rounded-full" />
              <div className="md:w-[150px] md:text-right md:pr-4 md:-ml-[192px] md:pt-0">
                <span className="text-[16px] md:text-[18px] font-bold text-(--brand-primary)">{t(`historyItems.${k}.year`)}</span>
              </div>
              <div>
                <h3 className="text-[17px] md:text-[19px] font-medium text-[#221815]">{t(`historyItems.${k}.title`)}</h3>
                <p className="text-[14px] md:text-[15px] text-[#808080] mt-[4px]">{t(`historyItems.${k}.desc`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function OrgBlock() {
  const t = await getTranslations("About");
  const centers = ["device", "medical", "management"];
  return (
    <section id="org" className="relative bg-white py-[60px] md:py-[90px] scroll-mt-[56px] md:scroll-mt-[76px]">
      <div className="container-custom">
        <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[30px]">{t("orgTitle")}</h2>
        <p className="text-[15px] md:text-[16px] leading-[30px] text-[#555] mb-[25px]">
          {t("orgIntro")}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {centers.map((c, i) => (
            <div key={i} className="border border-[#E6E6E6] rounded-[0.6em] p-[25px] hover:shadow-lg transition-shadow">
              <h3 className="text-[18px] md:text-[20px] font-medium text-(--brand-primary) mb-[10px]">{t(`orgCenters.${c}.title`)}</h3>
              <p className="text-[14px] leading-[26px] text-[#555]">{t(`orgCenters.${c}.desc`)}</p>
            </div>
          ))}
        </div>
        <p className="text-[14px] text-[#808080] mt-[25px] leading-[26px]">
          {t("orgFooter")}
        </p>
      </div>
    </section>
  );
}

async function TeamBlock() {
  const t = await getTranslations("About");
  const members = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <section id="team" className="relative bg-[#f5f5f5] py-[60px] md:py-[90px] scroll-mt-[56px] md:scroll-mt-[76px]">
      <div className="container-custom">
        <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[30px]">{t("teamTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {members.map((k, i) => (
            <div key={i} className="bg-white rounded-[0.6em] p-[25px] shadow-[0_0_20px_rgba(0,0,0,0.06)]">
              <h3 className="text-[17px] md:text-[19px] font-medium text-[#221815]">{t(`team.${k}.name`)}</h3>
              <p className="text-[13px] text-(--brand-primary) mt-[2px]">{t(`team.${k}.role`)}</p>
              <p className="text-[14px] text-[#555] leading-[26px] mt-[8px]">{t(`team.${k}.desc`)}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

async function HonorBlock() {
  const t = await getTranslations("About");
  const honors = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  return (
    <section id="honor" className="relative bg-white py-[60px] md:py-[90px] scroll-mt-[56px] md:scroll-mt-[76px]">
      <div className="container-custom">
        <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[30px]">{t("honorTitle")}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[15px]">
          {honors.map((k, i) => (
            <div key={i} className="flex items-center gap-4 border border-[#E6E6E6] rounded-[0.6em] p-[18px] hover:border-(--brand-primary) transition-colors">
              <span className="flex-shrink-0 text-[13px] font-bold text-white bg-(--brand-primary) px-[10px] py-[4px] rounded-[0.3em]">{t(`honors.${k}.year`)}</span>
              <span className="text-[14px] md:text-[15px] text-[#333]">{t(`honors.${k}.name`)}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
