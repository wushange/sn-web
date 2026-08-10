import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";

const news = [
  {
    date: "2025-12",
    title: "公司获得哈尔滨医科大学附属第一医院伦理批件 临床试验正式启动",
    summary: "公司通过多中心临床试验牵头单位——哈尔滨医科大学附属第一医院伦理委员会审查，获得伦理批件，并已招标选定CRO公司签署《临床试验技术服务协议》，正式启动临床试验。",
    image: "/images/news-2.jpg",
    tag: "临床进展",
  },
  {
    date: "2025-12",
    title: "声诺医疗获人工智能医疗器械创新任务揭榜挂帅第三名",
    summary: "公司获评2025年人工智能医疗器械创新任务揭榜挂帅智能数字疗法产品组第三名，由国家工信部、国家药监局组织评定。",
    image: "/images/news-3.jpg",
    tag: "荣誉资质",
  },
  {
    date: "2025-07",
    title: "动脉斑块声动力治疗系统完成设备注册检测 具备临床试验条件",
    summary: "动脉斑块声动力智能诊疗系统（MT-SDT2.0）通过天津市医疗器械质量监督检验中心检测合格，取得EMC、安规、环境、软件检验报告，设备允许用于临床试验。",
    image: "/images/news-1.jpg",
    tag: "临床进展",
  },
  {
    date: "2024-08",
    title: "公司获得医疗器械产品分类界定申请告知书",
    summary: "国家药品监督管理局对公司产品进行医疗器械分类界定，动脉斑块声动力智能诊疗系统界定为三类医疗器械。",
    image: "/images/news-4.jpg",
    tag: "资质认证",
  },
  {
    date: "2024-03",
    title: "获评最具转化潜力科技成果",
    summary: "公司产品获黑龙江省科技厅评为最具转化潜力科技成果，充分认可公司在高端医疗装备领域的科技成果转化能力。",
    image: "/images/news-2.jpg",
    tag: "荣誉资质",
  },
  {
    date: "2023-09",
    title: "公司完成Pre-A轮融资1800万元",
    summary: "公司获得深圳市创新资本投资、黑龙江省瑞恒红土投资、哈尔滨穗甬创业投资共1800万元Pre-A轮融资，并于同年获省重点研发项目450万元资金支持。",
    image: "/images/news-4.jpg",
    tag: "公司发展",
  },
];

export default function NewsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHeader
        title="动态资讯"
        subtitle="了解声诺医疗的最新进展、临床研究、荣誉资质与融资动态。"
        crumb="动态资讯"
      />
      <NewsContent />
      <Footer />
      <SideTools />
    </main>
  );
}

function NewsContent() {
  return (
    <section className="relative bg-white py-[60px] md:py-[90px]">
      <div className="container-custom">
        <div className="space-y-[25px]">
          {news.map((n, i) => (
            <article key={i} className="flex flex-col md:flex-row gap-6 border border-[#E6E6E6] rounded-[0.8em] overflow-hidden hover:shadow-lg transition-shadow">
              <div className="md:w-[240px] h-[160px] md:h-auto overflow-hidden flex-shrink-0">
                <img src={n.image} alt={n.title} className="w-full h-full object-cover" />
              </div>
              <div className="flex-1 p-[25px]">
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-bold text-(--brand-primary)">{n.date}</span>
                  <span className="text-[12px] text-white bg-(--brand-primary) px-[10px] py-[3px] rounded-[0.3em]">{n.tag}</span>
                </div>
                <h3 className="text-[17px] md:text-[20px] font-medium text-[#221815] mt-[10px] leading-[30px]">{n.title}</h3>
                <p className="text-[14px] leading-[27px] text-[#555] mt-[8px]">{n.summary}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
