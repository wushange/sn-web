import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic"; // 运行时渲染，连接数据库获取最新新闻

export default async function NewsPage() {
  const news = await prisma.news.findMany({
    where: { published: true },
    orderBy: [{ sortOrder: "desc" }, { date: "desc" }],
  });

  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHeader
        title="动态资讯"
        subtitle="了解声诺医疗的最新进展、临床研究、荣誉资质与融资动态。"
        crumb="动态资讯"
      />
      <NewsContent news={news} />
      <Footer />
      <SideTools />
    </main>
  );
}

function NewsContent({ news }: { news: { id: number; title: string; date: string; image: string; summary: string; tag?: string | null }[] }) {
  return (
    <section className="relative bg-white py-[60px] md:py-[90px]">
      <div className="container-custom">
        {news.length === 0 ? (
          <p className="text-center text-[#808080] py-[60px]">暂无新闻</p>
        ) : (
          <div className="space-y-[25px]">
            {news.map((n) => (
              <article key={n.id} className="flex flex-col md:flex-row gap-6 border border-[#E6E6E6] rounded-[0.8em] overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:w-[240px] h-[160px] md:h-auto overflow-hidden flex-shrink-0">
                  <img src={n.image} alt={n.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-[25px]">
                  <div className="flex items-center gap-3">
                    <span className="text-[13px] font-bold text-(--brand-primary)">{n.date}</span>
                    {n.tag && <span className="text-[12px] text-white bg-(--brand-primary) px-[10px] py-[3px] rounded-[0.3em]">{n.tag}</span>}
                  </div>
                  <h3 className="text-[17px] md:text-[20px] font-medium text-[#221815] mt-[10px] leading-[30px]">{n.title}</h3>
                  <p className="text-[14px] leading-[27px] text-[#555] mt-[8px]">{n.summary}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
