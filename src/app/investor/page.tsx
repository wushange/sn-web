import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";

const fundingRounds = [
  { round: "天使轮", year: "2021", amount: "800万元", investors: "黑龙江省交润科技发展基金、哈尔滨创新投资有限公司", note: "投后估值5000万元" },
  { round: "Pre-A轮", year: "2023", amount: "1800万元", investors: "深圳市创新资本投资、黑龙江省瑞恒红土投资、哈尔滨穗甬创业投资", note: "企业投后估值1.08亿元" },
  { round: "A轮（本轮）", year: "2026", amount: "4000万元", investors: "拟引入战略与财务投资人（龙江天使投资基金已承诺500万元）", note: "投前估值1.8亿元，释放18.18%股权" },
  { round: "新一轮融资", year: "2028", amount: "2亿元", investors: "拟启动新一轮融资", note: "投前估值6亿元，用于厂房扩建、市场推广" },
];

const plan = [
  { period: "短期（2026-2028）", items: ["完成产品定型及临床用设备生产", "启动并完成5-7个多中心临床试验", "完成临床效果评价、数据统计、学术推广", "取得三类医疗器械注册证", "2026年生产6台设备用于临床试验", "员工增至40人，研发占比70%以上"] },
  { period: "中期（2028-2029）", items: ["2029年起设备小批量生产，年产量60台", "治疗人数达10万人", "布局全国三甲医院和心血管专科医院", "参与制订声动力疗法诊疗规范、专家共识及国家标准", "研制MT-SDT3.0相控阵设备，拓展适应症"] },
  { period: "长期（2029及以后）", items: ["2029年产量达300台，治疗人数达72.57万人", "推动产品国际化，拓展海外市场", "成长为开放式高端医疗设备平台型企业", "2029年启动IPO计划", "未来10年聚焦设备、声敏剂研制与适应症拓展"] },
];

const market = [
  { label: "设备销售", desc: "设备统一售价360万/台套，经销商价216万/台套；2028年销售60台、2029年销售300台" },
  { label: "治疗耗材", desc: "耗材3000元/人（次），以每天治疗6人/台、设备利用率80%计，形成长期稳定收入" },
  { label: "市场空间", desc: "全国三级医院2996家（三甲1580家）；前期重点覆盖50家国家级+120家省级区域医疗中心" },
];

export default function InvestorPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <PageHeader
        title="融资与发展"
        subtitle="声诺医疗已完成天使轮、Pre-A轮融资，正推进A轮融资与多中心临床试验，规划于2029年启动IPO。"
        crumb="融资与发展"
      />
      <InvestorContent />
      <Footer />
      <SideTools />
    </main>
  );
}

function InvestorContent() {
  return (
    <>
      <section className="relative bg-white py-[60px] md:py-[90px]">
        <div className="container-custom">
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[35px]">融资历程</h2>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[700px] border-collapse">
              <thead>
                <tr className="bg-[#c7000b] text-white">
                  <th className="p-[15px] text-left text-[15px] font-medium">轮次</th>
                  <th className="p-[15px] text-left text-[15px] font-medium">时间</th>
                  <th className="p-[15px] text-left text-[15px] font-medium">融资金额</th>
                  <th className="p-[15px] text-left text-[15px] font-medium">投资方</th>
                  <th className="p-[15px] text-left text-[15px] font-medium">估值</th>
                </tr>
              </thead>
              <tbody>
                {fundingRounds.map((r, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-[#fafafa]" : "bg-white"} style={{ borderBottom: "1px solid #E6E6E6" }}>
                    <td className="p-[15px] text-[15px] font-medium text-[#c7000b]">{r.round}</td>
                    <td className="p-[15px] text-[14px] text-[#555]">{r.year}</td>
                    <td className="p-[15px] text-[14px] font-medium text-[#333]">{r.amount}</td>
                    <td className="p-[15px] text-[13px] text-[#666]">{r.investors}</td>
                    <td className="p-[15px] text-[13px] text-[#666]">{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-[35px] bg-[#f5f5f5] rounded-[0.8em] p-[25px] md:p-[35px]">
            <h3 className="text-[18px] md:text-[22px] font-medium text-[#221815] mb-[15px]">本轮融资计划（A轮）</h3>
            <p className="text-[15px] leading-[30px] text-[#555]">
              公司拟以增资扩股的方式融资 <strong className="text-[#c7000b]">4000万元人民币</strong>，释放公司
              <strong className="text-[#c7000b]">18.18%</strong> 股权，公司投前估值 <strong className="text-[#c7000b]">1.8亿元</strong>。
              资金主要用于多中心临床试验（约2900万元）、临床用设备制造与样机（320万元）、公司运营（920万元）、知识产权与市场推广（约460万元）。
            </p>
          </div>
        </div>
      </section>

      <section className="relative bg-[#f5f5f5] py-[60px] md:py-[90px]">
        <div className="container-custom">
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[35px]">发展规划</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
            {plan.map((p, i) => (
              <div key={i} className="bg-white rounded-[0.8em] p-[28px] shadow-[0_0_20px_rgba(0,0,0,0.06)]">
                <h3 className="text-[18px] font-medium text-[#c7000b] mb-[15px]">{p.period}</h3>
                <ul className="space-y-[10px]">
                  {p.items.map((it, ii) => (
                    <li key={ii} className="flex items-start gap-2 text-[13px] text-[#555] leading-[22px]">
                      <span className="text-[#c7000b] mt-[2px]">◆</span>
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
          <h2 className="text-[24px] md:text-[34px] font-normal text-[#221815] mb-[35px]">商业前景</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[25px]">
            {market.map((m, i) => (
              <div key={i} className="border border-[#E6E6E6] rounded-[0.8em] p-[28px] hover:border-[#c7000b] transition-colors">
                <h3 className="text-[17px] font-medium text-[#221815] mb-[10px]">{m.label}</h3>
                <p className="text-[14px] leading-[26px] text-[#555]">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
