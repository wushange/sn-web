import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";
import { products, techs } from "@/lib/products-data";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function ProductsPage() {
  const pt = await getTranslations("ProductsPage");
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHeader
        title={pt("pageTitle")}
        subtitle={pt("pageSubtitle")}
        crumb={pt("pageTitle")}
      />
      <ProductsContent />
      <Footer />
      <SideTools />
    </main>
  );
}

async function ProductsContent() {
  const pt = await getTranslations("ProductsPage");
  const t = await getTranslations("ProductData");

  return (
    <>
      <section className="relative bg-white py-[60px] md:py-[90px]">
        <div className="container-custom">
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[35px]">{pt("coreTitle")}</h2>
          <div className="space-y-[35px]">
            {products.map((p, i) => (
              <Link key={i} href={`/products/${p.slug}`} className="flex flex-col md:flex-row gap-8 border border-[#E6E6E6] rounded-[0.8em] overflow-hidden hover:shadow-lg transition-shadow group cursor-pointer">
                <div className="md:w-[38%] min-h-[220px] md:min-h-full overflow-hidden">
                  <img src={p.image} alt={t(`products.${p.slug}.title`)} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-[25px] md:p-[35px]">
                  <span className="inline-block text-[12px] text-white bg-(--brand-primary) px-[12px] py-[4px] rounded-[0.3em]">{t(`products.${p.slug}.tag`)}</span>
                  <h3 className="text-[20px] md:text-[26px] font-medium text-[#221815] mt-[15px] group-hover:text-(--brand-primary) transition-colors">{t(`products.${p.slug}.title`)}</h3>
                  <p className="text-[14px] md:text-[15px] leading-[28px] text-[#555] mt-[12px]">{t(`products.${p.slug}.desc`)}</p>
                  <ul className="mt-[15px] space-y-[8px]">
                    {(t.raw(`products.${p.slug}.features`) as unknown as string[]).map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-[14px] text-[#666]">
                        <span className="text-(--brand-primary) mt-[2px]">◆</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f5f5f5] py-[60px] md:py-[90px]">
        <div className="container-custom">
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[35px]">{pt("techTitle")}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
            {techs.map((item, i) => (
              <div key={i} className="bg-white rounded-[0.8em] p-[28px] shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow">
                <span className="text-(--brand-primary) text-[28px] font-bold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[17px] md:text-[19px] font-medium text-[#221815] mt-[8px]">{t(`techs.${item.slug}.title`)}</h3>
                <p className="text-[14px] leading-[27px] text-[#555] mt-[10px]">{t(`techs.${item.slug}.desc`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
