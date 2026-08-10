import Header from "@/components/Header";
import PageHeader from "@/components/PageHeader";
import Footer from "@/components/Footer";
import SideTools from "@/components/SideTools";

const directory = [
  { label: "电话", value: "13904631300", href: "tel:13904631300", note: "产品咨询 / 商务合作" },
  { label: "邮箱", value: "466069861@qq.com", href: "mailto:466069861@qq.com", note: "项目资料 / 合作洽谈" },
  { label: "联系人", value: "吴群", href: "", note: "公司董事 · 管理总监兼董事会秘书" },
  { label: "地址", value: "黑龙江省哈尔滨市松北区中源大道15199号企业加速器4号楼一单元", href: "", note: "欢迎实地考察" },
];

const offices = [
  { city: "哈尔滨 · 总部", name: "哈尔滨声诺医疗科技有限公司", address: "松北区中源大道15199号企业加速器4号楼一单元", phone: "13904631300" },
  { city: "深圳 · 研发协同", name: "深圳声诺医疗科技有限公司", address: "依托国家高性能医疗器械创新中心，开展关键技术联合攻关", phone: "13904631300" },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      {/* 主题区：大音希声 */}
      <section className="relative bg-[#0E5C5F] pt-[150px] md:pt-[180px] pb-[100px] md:pb-[130px] overflow-hidden">
        {/* 旋转声场弧线 —— 无声之音的视觉化 */}
        <svg className="absolute right-[-60px] top-1/2 -translate-y-1/2 w-[560px] md:w-[760px] opacity-[0.16] animate-[slowSpin_60s_linear_infinite]"
          style={{ transformOrigin: "center" }} viewBox="0 0 400 400" fill="none">
          {[40, 80, 120, 160, 200, 240, 280].map((r, i) => (
            <path key={i} d={`M ${200 - r} 200 A ${r} ${r} 0 0 1 ${200 + r} 200`} stroke="#fff" strokeWidth="1.5" strokeDasharray={i % 2 === 0 ? "none" : "3 6"} />
          ))}
          <circle cx="200" cy="200" r="10" fill="#fff" />
        </svg>
        <div className="container-custom relative z-[1]">
          <p className="text-[12px] md:text-[13px] tracking-[0.4em] text-white/70 mb-[25px]">CONTACT · 联系我们</p>
          <h1 className="text-[44px] md:text-[72px] xl:text-[92px] text-white leading-[1.15] font-normal"
            style={{ fontFamily: '"STXingkai","华文行楷","KaiTi","STKaiti",serif' }}>
            大音希声
          </h1>
          <h2 className="text-[24px] md:text-[36px] text-[#C7000B] mt-[15px] font-normal"
            style={{ fontFamily: '"STXingkai","华文行楷","KaiTi","STKaiti",serif' }}>
            千金一诺
          </h2>
          <p className="text-[14px] md:text-[16px] text-white/70 leading-[30px] mt-[35px] max-w-[520px]">
            我们以无声之音治愈病痛，也以千金之诺对待每一次托付。
            <br />欢迎各界垂询，共同守护人类健康。
          </p>
          {/* 红印章 + 扩散声波 */}
          <div className="relative inline-flex mt-[50px]">
            <span className="absolute inset-0 border-[2px] border-[#C7000B] rounded-full animate-[soundWave_3.2s_ease-out_infinite]" />
            <span className="absolute inset-0 border-[2px] border-[#C7000B] rounded-full animate-[soundWave_3.2s_ease-out_infinite]" style={{ animationDelay: "1.1s" }} />
            <span className="absolute inset-0 border-[2px] border-[#C7000B] rounded-full animate-[soundWave_3.2s_ease-out_infinite]" style={{ animationDelay: "2.2s" }} />
            <div className="relative inline-flex items-center justify-center w-[88px] h-[88px] border-[3px] border-[#C7000B] text-[#C7000B] bg-[#0E5C5F] rotate-[-6deg]"
              style={{ fontFamily: '"STXingkai","华文行楷","KaiTi","STKaiti",serif' }}>
              <span className="text-[22px] leading-[30px] text-center">声诺<br />医疗</span>
            </div>
          </div>
        </div>
      </section>

      {/* 联系铭牌目录 */}
      <section className="relative bg-white py-[70px] md:py-[100px]">
        <div className="container-custom max-w-[1100px]">
          <div className="flex items-end justify-between mb-[45px] border-b border-[#E6E6E6] pb-[20px]">
            <h3 className="text-[20px] md:text-[26px] font-normal text-[#221815] tracking-[2px]">联系方式</h3>
            <span className="text-[12px] tracking-[0.3em] text-[#808080]">DIRECTORY</span>
          </div>
          <div className="divide-y divide-[#E6E6E6]">
            {directory.map((d, i) => (
              <div key={i} className="flex flex-col md:flex-row md:items-center py-[26px] md:py-[32px] gap-[8px]">
                <div className="md:w-[140px] md:flex-shrink-0">
                  <span className="text-[12px] tracking-[0.3em] text-[#808080]">{d.label}</span>
                </div>
                <div className="flex-1">
                  {d.href ? (
                    <a href={d.href} className="text-[17px] md:text-[20px] text-[#221815] hover:text-[#C7000B] transition-colors">{d.value}</a>
                  ) : (
                    <p className="text-[17px] md:text-[20px] text-[#221815] leading-[32px]">{d.value}</p>
                  )}
                </div>
                <div className="md:text-right">
                  <span className="text-[13px] text-[#A2A0A0]">{d.note}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 办公地点 */}
      <section className="relative bg-[#f5f5f5] py-[70px] md:py-[100px]">
        <div className="container-custom max-w-[1100px]">
          <div className="flex items-end justify-between mb-[45px] border-b border-[#d9d9d9] pb-[20px]">
            <h3 className="text-[20px] md:text-[26px] font-normal text-[#221815] tracking-[2px]">办公地点</h3>
            <span className="text-[12px] tracking-[0.3em] text-[#808080]">OFFICES</span>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px]">
            {offices.map((o, i) => (
              <div key={i} className="bg-white p-[35px] md:p-[40px] hover:shadow-lg transition-shadow border-t-2 border-[#C7000B]">
                <p className="text-[12px] tracking-[0.25em] text-[#C7000B] mb-[12px]">{o.city}</p>
                <h4 className="text-[19px] md:text-[22px] font-normal text-[#221815] mb-[18px]">{o.name}</h4>
                <p className="text-[14px] text-[#555] leading-[28px] mb-[16px]">{o.address}</p>
                <a href={`tel:${o.phone}`} className="text-[15px] text-[#C7000B] hover:underline">{o.phone}</a>
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
