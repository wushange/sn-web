"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import ParticlesBackground from "./ParticlesBackground";

interface ServiceCard {
  icon: string;
  iconHover: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  color: string;
  rowBgPattern: string;
  hidden?: boolean;
  image?: string;
}

const serviceRows: ServiceCard[][] = [
  [
    {
      icon: "/images/icons/hospital.png", iconHover: "/images/icons/hospital-hover.png",
      title: "动脉斑块声动力治疗系统", subtitle: "Plaque Sonodynamic Therapy System",
      description: "全球首台（套）动脉斑块声动力治疗系统（MT-SDT2.0），集生物医疗技术和大数据AI于一体，通过超声与声敏剂协同精准清除动脉粥样硬化斑块，无创、靶向、疗效显著，拥有我国自主知识产权。",
      href: "/products/arterial-plaque-sdt", color: "var(--brand-primary)", rowBgPattern: "/images/txt_icon1.png",
    },
    {
      icon: "/images/icons/health.png", iconHover: "/images/icons/health-hover.png",
      title: "温控型低频超声导入美容仪", subtitle: "MC200 Temperature-control Ultrasound Beauty Device",
      description: "集冷敷、热敷、超声三种模式于一体，通过低频超声与机械振动打通肌肤吸收通道，促进护肤成分渗透吸收，配合智能温控实现清洁、导入、修护、紧致的全流程肌肤护理。",
      href: "/products/mc200-beauty", color: "#00a54f", rowBgPattern: "/images/txt_icon1.png",
      image: "/images/beauty-2.jpg",
    },
    {
      icon: "/images/icons/stemcell.png", iconHover: "/images/icons/stemcell-hover.png",
      title: "脑机接口·经颅聚焦超声", subtitle: "tFUS Brain-Computer Interface",
      description: "自研4-8通道同心圆环形相控换能器，实现1.5mm级颅内聚焦精度，面向脑胶质瘤、阿尔茨海默症、帕金森病等提供无创深部神经调控诊疗，正在研发转化中。",
      href: "/products/tfus-bci", color: "#008fd5", rowBgPattern: "/images/txt_icon1.png",
    },
  ],
  [
    {
      icon: "/images/icons/rx.png", iconHover: "/images/icons/rx-hover.png",
      title: "超声成像斑块精准识别", subtitle: "High-res Ultrasound Imaging",
      description: "应用高分辨率诊断超声自动识别、分型斑块并预判声动力治疗适应症，依据斑块厚度、狭窄率、血流速度等指标给出个体化治疗参数建议与预后判断。",
      href: "/products/ultrasound-plaque-recognition", color: "#00a54f", rowBgPattern: "/images/txt_icon2.png",
    },
    {
      icon: "/images/icons/chain.png", iconHover: "/images/icons/chain-hover.png",
      title: "近红外光学定位系统", subtitle: "Near-infrared Optical Navigation",
      description: "基于双目立体视觉的光学导航系统，实时高精度定位诊断超声探头，误差范围＜0.5mm，并将治疗换能器精确引导至斑块位置，实现精准定位与跟踪。",
      href: "/products/optical-navigation", color: "#004d7e", rowBgPattern: "/images/txt_icon2.png",
    },
    {
      icon: "/images/icons/otc.png", iconHover: "/images/icons/otc-hover.png",
      title: "近场均匀超声换能器", subtitle: "Uniform Near-field Transducer",
      description: "自研治疗超声换能器解决近声场强度紊乱的行业难题，波束不均匀系数（BNR）2.0-2.5之间，超过进口品牌，为声动力治疗精准疗效提供根本保证。",
      href: "/products/uniform-ultrasound-transducer", color: "#f36e21", rowBgPattern: "/images/txt_icon2.png",
    },
    {
      icon: "/images/icons/rx.png", iconHover: "/images/icons/rx-hover.png",
      title: "人工智能中央数据库", subtitle: "AI Central Database",
      description: "基于AI算法和个体化治疗参数建立患者样本中央数据库，深度挖掘诊疗数据、持续优化治疗参数，为声动力治疗临床研究提供坚实数据保障。",
      href: "/products/ai-central-database", color: "#fec463", rowBgPattern: "/images/txt_icon2.png",
    },
  ],
];

const cardHoverColors: Record<string, string> = {
  "var(--brand-primary)": "var(--brand-primary-shadow)",
  "#00a54f": "rgba(0,165,79,0.4)",
  "#008fd5": "rgba(0,143,213,0.4)",
  "#004d7e": "rgba(0,77,126,0.4)",
  "#f36e21": "rgba(243,110,33,0.4)",
  "#fec463": "rgba(254,196,99,0.4)",
};

export default function ProductsServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [, forceRender] = useState(0);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("cards-visible");
          }
        });
      },
      { threshold: 0.2 },
    );
    // Use setTimeout to let DOM render first
    const tid = setTimeout(() => {
      const rows = sectionRef.current?.querySelectorAll("[data-card-row]");
      rows?.forEach((el) => observer.observe(el));
    }, 100);
    return () => { clearTimeout(tid); observer.disconnect(); };
  }, [showAll]);

  const handleCardHover = (e: React.MouseEvent<HTMLAnchorElement>, color: string) => {
    const card = e.currentTarget;
    const iconCircle = card.querySelector(".icon-circle") as HTMLElement;
    const iconDefault = card.querySelector(".icon-default") as HTMLElement;
    const iconH = card.querySelector(".icon-hover") as HTMLElement;
    const rowBg = card.querySelector(".row-bg") as HTMLElement;
    const watermark = card.querySelector(".watermark") as HTMLElement;

    card.style.background = color;
    card.style.boxShadow = `0 0 25px ${cardHoverColors[color]}`;
    card.style.color = "#fff";
    card.style.transform = "translateY(-15px)";
    if (iconCircle) iconCircle.style.borderColor = "#fff";
    if (iconDefault) { iconDefault.style.opacity = "0"; iconDefault.style.transform = "translate(-50%,-50%) rotateY(360deg)"; }
    if (iconH) iconH.style.opacity = "1";
    if (rowBg) rowBg.style.opacity = "0";
    if (watermark) watermark.style.opacity = "0.8";
  };

  const handleCardLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const card = e.currentTarget;
    const iconCircle = card.querySelector(".icon-circle") as HTMLElement;
    const iconDefault = card.querySelector(".icon-default") as HTMLElement;
    const iconH = card.querySelector(".icon-hover") as HTMLElement;
    const rowBg = card.querySelector(".row-bg") as HTMLElement;
    const watermark = card.querySelector(".watermark") as HTMLElement;

    card.style.background = "#fff";
    card.style.boxShadow = "0 0 25px rgba(0,0,0,0.08)";
    card.style.color = "#333";
    card.style.transform = "translateY(0)";
    if (iconCircle) iconCircle.style.borderColor = "#E6E6E6";
    if (iconDefault) { iconDefault.style.opacity = "1"; iconDefault.style.transform = "translate(-50%,-50%) rotateY(0)"; }
    if (iconH) iconH.style.opacity = "0";
    if (rowBg) rowBg.style.opacity = "1";
    if (watermark) watermark.style.opacity = "0";
  };

  return (
    <section ref={sectionRef} className="relative bg-[#f5f5f5] pt-[7.81vw] pb-[100px] z-[4]">
      <ParticlesBackground />
      <div className="container-custom">
        <div className="relative mb-[2.81vw]">
          <h2 className="text-[24px] md:text-[38px] xl:text-[48px] font-normal leading-tight text-[#221815]">产品与技术</h2>
          <p className="text-[16px] md:text-[20px] xl:text-[24px] leading-relaxed py-[14px] text-[#333]">
            大音希声 千金一诺<br />声诺医疗 · 高端医疗装备 · 超声脑机接口
          </p>
          <Link href="/products" className="btn-brand absolute right-0 bottom-0 hidden md:inline-block">了解详情</Link>
          <Link href="/products" className="btn-brand mt-4 md:hidden">了解详情</Link>
        </div>

        <div className="mx-[2.56vw]">
          {(showAll ? serviceRows : serviceRows.slice(0, 1)).map((row, rowIndex) => (
            <div
              key={rowIndex}
              data-card-row
              className={`grid grid-cols-1 ${row.length === 3 ? "md:grid-cols-3" : "md:grid-cols-2"} gap-[3.12vw] mb-[3.12vw]`}
              style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}
            >
              {row.filter(c => !c.hidden).map((card, cardIndex) => (
                <Link
                  key={cardIndex}
                  href={card.href}
                  className="card-hover group relative flex-1 flex flex-col overflow-hidden rounded-[0.6em] bg-white shadow-[0_0_25px_rgba(0,0,0,0.08)]"
                  style={{ padding: "clamp(20px,3.12vw,45px) clamp(20px,3.12vw,45px) clamp(15px,2.34vw,34px)", transition: "all 0.5s ease-in-out", transitionDelay: `${cardIndex * 100}ms` }}
                  onMouseEnter={(e) => handleCardHover(e, card.color)}
                  onMouseLeave={handleCardLeave}
                >
                  {/* Row background pattern — row 1: txt_icon1, row 2: txt_icon2 */}
                  <div
                    className="row-bg absolute inset-0 bg-no-repeat bg-right-bottom transition-opacity duration-500"
                    style={{ backgroundImage: `url(${card.rowBgPattern})`, backgroundSize: "12.03vw auto" }}
                  />

                  {/* Rotating watermark on hover */}
                  <div
                    className="watermark absolute top-[3.22vw] left-[7.18vw] w-[37.29vw] h-[37.29vw] bg-no-repeat bg-center bg-cover opacity-0 transition-opacity duration-500"
                    style={{ backgroundImage: "url(/images/watermark-service.png)", animation: "rotate 50s linear infinite" }}
                  />

                  <div className="relative z-[1] flex-1">
                    {/* Icon + Title — 有 image 时显示产品图 */}
                    {card.image ? (
                      <div className="mb-[1.04vw] overflow-hidden rounded-[0.4em]">
                        <img src={card.image} alt={card.title} className="w-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ maxHeight: "160px" }} />
                      </div>
                    ) : (
                      <div className="flex items-center mb-[1.04vw]">
                        <div className="icon-circle relative w-[40px] h-[40px] md:w-[60px] md:h-[60px] border border-[#E6E6E6] rounded-full flex items-center justify-center flex-shrink-0 transition-colors duration-500">
                          <img src={card.icon} alt={card.title} className="icon-default w-[26px] md:w-[36px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-500" />
                          <img src={card.iconHover} alt={card.title} className="icon-hover w-[26px] md:w-[36px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 transition-all duration-500" />
                        </div>
                        <div className="ml-[22px] text-left">
                          <strong className="card-title text-[16px] md:text-[19px] xl:text-[24px] font-normal tracking-[2px] block text-[#221815] transition-colors duration-500" style={{ color: "inherit" }}>
                            {card.title}
                          </strong>
                          <p className="card-subtitle text-[12px] uppercase text-[#808080] leading-[18px] transition-colors duration-500" style={{ color: "inherit" }}>
                            {card.subtitle}
                          </p>
                        </div>
                      </div>
                    )}
                    {card.image && (
                      <div className="mb-[0.5vw]">
                        <strong className="card-title block text-[16px] md:text-[19px] xl:text-[24px] font-normal tracking-[2px] text-[#221815]" style={{ color: "inherit" }}>
                          {card.title}
                        </strong>
                        <p className="card-subtitle text-[12px] uppercase text-[#808080] leading-[18px] transition-colors duration-500 mt-1" style={{ color: "inherit" }}>
                          {card.subtitle}
                        </p>
                      </div>
                    )}
                    <p className="text-[14px] md:text-[16px] leading-[26px] md:leading-[32px] text-[#555] transition-colors duration-500 relative z-[1]" style={{ marginTop: card.image ? "0.5vw" : "1.04vw", color: "inherit" }}>
                      {card.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className="relative z-[1] w-[61px] h-[15px] mt-[1.04vw] bg-no-repeat opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ backgroundImage: "url(/images/icons/arrow-right.png)" }} />
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-[2.81vw]">
          <button onClick={() => setShowAll(v => !v)} className="btn-brand">
            {showAll ? "收起" : "更多产品与技术"}
          </button>
        </div>
      </div>

      {/* Bottom angles */}
      <div className="absolute left-[-10vw] right-[-10vw] bottom-[-1.86vw] h-[4.16vw] bg-[#f5f5f5]" style={{ transform: "rotate(1.8deg)" }} />
      <div className="absolute left-[-10vw] right-[-10vw] bottom-[-1.86vw] h-[4.16vw] bg-[rgba(245,245,245,0.5)]" style={{ transform: "rotate(-2.2deg)" }} />

      <style jsx>{`
        .cards-visible { opacity: 1 !important; transform: translateY(0) !important; }
        .card-hover:hover .card-title,
        .card-hover:hover .card-subtitle,
        .card-hover:hover p { color: #fff !important; }
      `}</style>
    </section>
  );
}
