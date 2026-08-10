import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";

const products = [
  {
    title: "动脉斑块声动力智能诊疗系统（MT-SDT2.0）",
    tag: "全球首台（套）· 国际首报",
    image: "/images/company-intro.jpg",
    desc: "集生物医疗技术和大数据AI于一体的三类创新型医疗器械，通过超声与声敏剂协同，靶向清除动脉粥样硬化斑块，无创、靶向、安全、疗效显著，完全拥有自主知识产权。",
    features: [
      "全球首台（套）动脉粥样硬化声动力诊疗设备，属国际首报",
      "用于下肢及颈动脉粥样硬化症的声动力治疗",
      "经国家药监局指定检测机构检测合格，达到临床试验标准",
      "集诊断与治疗于一体，可重复治疗、操作简便",
    ],
  },
  {
    title: "经颅聚焦超声脑机接口诊疗系统",
    tag: "研发转化中",
    image: "/images/beauty-3.png",
    desc: "自研4-8通道同心圆环形相控超声换能器，实现1.5mm级颅内聚焦精度，面向脑胶质瘤、阿尔茨海默症、帕金森病等，提供无创、深部、精准、可闭环的神经调控诊疗。",
    features: [
      "4-8通道同基台同心圆环形相控超声换能器",
      "稳定实现1.5mm级颅内聚焦精度",
      "无创神经调控、血脑屏障可逆开放、脑功能实时闭环监测",
      "与哈尔滨工业大学、哈尔滨市第一专科医院共建医工转化平台",
    ],
  },
  {
    title: "温控型低频超声导入美容仪（MC200）",
    tag: "大健康产品",
    image: "/images/beauty-2.jpg",
    desc: "集冷敷、热敷、超声三种模式于一体，通过低频超声与机械振动打通肌肤吸收通道，促进护肤成分渗透吸收，配合智能温控实现清洁、导入、修护、紧致的全流程肌肤护理。",
    features: [
      "超声/热敷/冷敷三种模式一体",
      "低频超声促进有效成分渗透吸收",
      "智能温控，适合家庭日常面部护理及美容机构皮肤管理",
    ],
  },
];

const techs = [
  {
    title: "高分辨率超声成像斑块精准识别",
    desc: "应用高分辨率诊断超声自动识别、分型斑块并预判声动力治疗适应症，依据斑块厚度、狭窄率、血流速度等指标给出个体化治疗参数建议与预后判断。",
  },
  {
    title: "近场均匀稳定超声换能器",
    desc: "自研治疗超声换能器解决近声场强度紊乱的行业难题，波束不均匀系数（BNR）2.0-2.5之间，超过进口品牌，为声动力治疗精准疗效提供保证。",
  },
  {
    title: "近红外光学定位系统",
    desc: "基于双目立体视觉的光学导航系统，实时高精度定位诊断超声探头，误差范围＜0.5mm，并将治疗换能器精确引导至斑块位置。",
  },
  {
    title: "人工智能中央数据库",
    desc: "基于AI算法和个体化治疗参数建立患者样本中央数据库，深度挖掘诊疗数据、持续优化治疗参数，为临床研究提供坚实数据保障。",
  },
];

export default function ProductsPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHeader
        title="产品与技术"
        subtitle="构建「高端医疗装备+创新药物+先进治疗方法+大数据AI」四位一体解决方案，为守护人类健康提供中国方案。"
        crumb="产品与技术"
      />
      <ProductsContent />
      <Footer />
      <SideTools />
    </main>
  );
}

function ProductsContent() {
  return (
    <>
      <section className="relative bg-white py-[60px] md:py-[90px]">
        <div className="container-custom">
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[35px]">核心产品</h2>
          <div className="space-y-[35px]">
            {products.map((p, i) => (
              <div key={i} className="flex flex-col md:flex-row gap-8 border border-[#E6E6E6] rounded-[0.8em] overflow-hidden hover:shadow-lg transition-shadow">
                <div className="md:w-[38%] min-h-[220px] md:min-h-full overflow-hidden">
                  <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex-1 p-[25px] md:p-[35px]">
                  <span className="inline-block text-[12px] text-white bg-[#c7000b] px-[12px] py-[4px] rounded-[0.3em]">{p.tag}</span>
                  <h3 className="text-[20px] md:text-[26px] font-medium text-[#221815] mt-[15px]">{p.title}</h3>
                  <p className="text-[14px] md:text-[15px] leading-[28px] text-[#555] mt-[12px]">{p.desc}</p>
                  <ul className="mt-[15px] space-y-[8px]">
                    {p.features.map((f, fi) => (
                      <li key={fi} className="flex items-start gap-2 text-[14px] text-[#666]">
                        <span className="text-[#c7000b] mt-[2px]">◆</span>
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative bg-[#f5f5f5] py-[60px] md:py-[90px]">
        <div className="container-custom">
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[35px]">核心技术</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[25px]">
            {techs.map((t, i) => (
              <div key={i} className="bg-white rounded-[0.8em] p-[28px] shadow-[0_0_20px_rgba(0,0,0,0.06)] hover:shadow-lg transition-shadow">
                <span className="text-[#c7000b] text-[28px] font-bold">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-[17px] md:text-[19px] font-medium text-[#221815] mt-[8px]">{t.title}</h3>
                <p className="text-[14px] leading-[27px] text-[#555] mt-[10px]">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
