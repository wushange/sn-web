import { notFound } from "next/navigation";
import { getItemBySlug } from "@/lib/products-data";
import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const item = getItemBySlug(slug);
  if (!item) notFound();

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHeader
        title={item.title}
        subtitle={item.desc}
        crumb="产品与技术"
        crumbHref="/products"
      />
      <article className="relative bg-white py-[60px] md:py-[90px]">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row gap-10">
            {/* Left: image + features */}
            <div className="md:w-[38%] flex-shrink-0">
              {item.image && (
                <img src={item.image} alt={item.title} className="w-full rounded-[0.8em] mb-6" />
              )}
              <span className="inline-block text-[12px] text-white bg-(--brand-primary) px-[12px] py-[4px] rounded-[0.3em] mb-4">{item.tag}</span>
              {item.features.length > 0 && (
                <ul className="space-y-[8px] mt-4">
                  {item.features.map((f, i) => (
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
