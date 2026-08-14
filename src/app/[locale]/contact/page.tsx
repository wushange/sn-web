import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";
import { getTranslations } from "next-intl/server";

const directoryHrefs: Record<string, string> = {
  phone: "tel:13904631300",
  email: "mailto:466069861@qq.com",
  person: "",
  address: "",
};

export default async function ContactPage() {
  const t = await getTranslations("Contact");
  const itemKeys = ["phone", "email", "person", "address"];
  const officeKeys = ["harbin", "shenzhen"];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      {/* 主题区：大音希声 */}
      <section className="relative bg-[#E7F2FA] pt-[150px] md:pt-[180px] pb-[100px] md:pb-[130px] overflow-hidden">
        <svg className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[560px] md:w-[760px] opacity-[0.25] animate-[slowSpin_60s_linear_infinite]"
          style={{ transformOrigin: "center" }} viewBox="0 0 400 400" fill="none">
          {[40, 80, 120, 160, 200, 240, 280].map((r, i) => (
            <path key={i} d={`M ${200 - r} 200 A ${r} ${r} 0 0 1 ${200 + r} 200`} stroke="#199BD2" strokeWidth="1.5" strokeDasharray={i % 2 === 0 ? "none" : "3 6"} />
          ))}
          <circle cx="200" cy="200" r="10" fill="#199BD2" />
        </svg>
        <div className="container-custom relative z-[1]">
          <p className="text-[12px] md:text-[13px] tracking-[0.4em] text-[#199BD2] mb-[25px]">CONTACT · {t("heroTag")}</p>
          <h1 className="text-[44px] md:text-[72px] xl:text-[92px] text-[#221815] leading-[1.15] font-normal"
            style={{ fontFamily: '"STXingkai","华文行楷","KaiTi","STKaiti",serif' }}>
            {t("heroTitle")}
          </h1>
          <h2 className="text-[24px] md:text-[36px] text-(--brand-primary) mt-[15px] font-normal"
            style={{ fontFamily: '"STXingkai","华文行楷","KaiTi","STKaiti",serif' }}>
            {t("heroSubtitle")}
          </h2>
          <p className="text-[14px] md:text-[16px] text-[#555] leading-[30px] mt-[35px] max-w-[520px] whitespace-pre-line">
            {t("heroText")}
          </p>
          <div className="relative inline-flex mt-[50px]">
            <span className="absolute inset-0 border-[2px] border-(--brand-primary) rounded-full animate-[soundWave_3.2s_ease-out_infinite]" />
            <span className="absolute inset-0 border-[2px] border-(--brand-primary) rounded-full animate-[soundWave_3.2s_ease-out_infinite]" style={{ animationDelay: "1.1s" }} />
            <span className="absolute inset-0 border-[2px] border-(--brand-primary) rounded-full animate-[soundWave_3.2s_ease-out_infinite]" style={{ animationDelay: "2.2s" }} />
            <div className="relative inline-flex items-center justify-center w-[88px] h-[88px] border-[3px] border-(--brand-primary) text-(--brand-primary) bg-[#E7F2FA] rotate-[-6deg]"
              style={{ fontFamily: '"STXingkai","华文行楷","KaiTi","STKaiti",serif' }}>
              <span className="text-[22px] leading-[30px] text-center whitespace-pre-line">{t("seal")}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 联系铭牌目录 */}
      <section className="relative bg-white py-[70px] md:py-[100px]">
        <div className="container-custom max-w-[1100px]">
          <div className="flex items-end justify-between mb-[45px] border-b border-[#E6E6E6] pb-[20px]">
            <h3 className="text-[20px] md:text-[26px] font-normal text-[#221815] tracking-[2px]">{t("directoryTitle")}</h3>
            <span className="text-[12px] tracking-[0.3em] text-[#808080]">DIRECTORY</span>
          </div>
          <div className="divide-y divide-[#E6E6E6]">
            {itemKeys.map((k, i) => {
              const href = directoryHrefs[k];
              return (
                <div key={i} className="flex flex-col md:flex-row md:items-center py-[26px] md:py-[32px] gap-[8px]">
                  <div className="md:w-[140px] md:flex-shrink-0">
                    <span className="text-[12px] tracking-[0.3em] text-[#808080]">{t(`items.${k}.label`)}</span>
                  </div>
                  <div className="flex-1">
                    {href ? (
                      <a href={href} className="text-[17px] md:text-[20px] text-[#221815] hover:text-(--brand-primary) transition-colors">{t(`items.${k}.value`)}</a>
                    ) : (
                      <p className="text-[17px] md:text-[20px] text-[#221815] leading-[32px]">{t(`items.${k}.value`)}</p>
                    )}
                  </div>
                  <div className="md:text-right">
                    <span className="text-[13px] text-[#A2A0A0]">{t(`items.${k}.note`)}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 办公地点 */}
      <section className="relative bg-[#f5f5f5] py-[70px] md:py-[100px]">
        <div className="container-custom max-w-[1100px]">
          <div className="flex items-end justify-between mb-[45px] border-b border-[#d9d9d9] pb-[20px]">
            <h3 className="text-[20px] md:text-[26px] font-normal text-[#221815] tracking-[2px]">{t("officesTitle")}</h3>
            <span className="text-[12px] tracking-[0.3em] text-[#808080]">OFFICES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {officeKeys.map((k, i) => (
              <div key={i} className="bg-white p-[35px] md:p-[40px] hover:shadow-lg transition-shadow border-t-2 border-(--brand-primary)">
                <p className="text-[12px] tracking-[0.25em] text-(--brand-primary) mb-[12px]">{t(`offices.${k}.city`)}</p>
                <h4 className="text-[19px] md:text-[22px] font-normal text-[#221815] mb-[18px]">{t(`offices.${k}.name`)}</h4>
                <p className="text-[14px] text-[#555] leading-[28px] mb-[16px]">{t(`offices.${k}.address`)}</p>
                <a href="tel:13904631300" className="text-[15px] text-(--brand-primary) hover:underline">13904631300</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <SideTools />
    </main>
  );
}
