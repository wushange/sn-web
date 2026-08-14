import { notFound } from "next/navigation";
import { getItemBySlug } from "@/lib/products-data";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";
import { getTranslations } from "next-intl/server";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getItemBySlug(slug);
  if (!item) notFound();

  const t = await getTranslations("ProductData");
  const pt = await getTranslations("ProductsPage");
  const ns = item.type === "product" ? "products" : "techs";
  const title = t(`${ns}.${slug}.title`);
  const desc = t(`${ns}.${slug}.desc`);
  const tag = item.type === "product" ? t(`${ns}.${slug}.tag`) : "";
  const features = item.type === "product" ? (t.raw(`${ns}.${slug}.features`) as unknown as string[]) : [];

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHeader
        title={title}
        subtitle={desc}
        crumb={pt("pageTitle")}
        crumbHref="/products"
      />
      <article className="relative bg-white py-[60px] md:py-[90px]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left: image + features */}
            <div className="md:w-[38%] flex-shrink-0">
              {item.image && (
                <img src={item.image} alt={title} className="w-full rounded-[0.8em] mb-6" />
              )}
              {tag && <span className="inline-block text-[12px] text-white bg-(--brand-primary) px-[12px] py-[4px] rounded-[0.3em] mb-4">{tag}</span>}
              {features.length > 0 && (
                <ul className="space-y-[8px] mt-4">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-[14px] text-[#555]">
                      <span className="text-(--brand-primary) mt-[2px]">◆</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Right: detail HTML */}
            <div
              className="flex-1 prose max-w-none text-[15px] leading-[30px] text-[#555] space-y-4
                [&_h3]:text-[20px] [&_h3]:font-medium [&_h3]:text-[#221815] [&_h3]:mt-8 [&_h3]:mb-3
                [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1
                [&_li]:text-[14px] [&_li]:leading-[28px]"
              dangerouslySetInnerHTML={{ __html: item.detailHtml ?? "" }}
            />
          </div>
        </div>
      </article>
      <Footer />
      <SideTools />
    </main>
  );
}
