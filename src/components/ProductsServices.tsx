"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

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
}

const serviceRows: ServiceCard[][] = [
  [
    {
      icon: "/images/icons/otc.png", iconHover: "/images/icons/otc-hover.png",
      title: "非处方药", subtitle: "over the counter drug",
      description: "非处方药指为方便公众用药，在保证用药安全的前提下，经国家卫生行政部门规定或审定后，不需要医师或其它医疗专业人员开写处方即可购买的药品，一般公众凭自我判断，按照药品标签及使用说明就可自行使用。",
      href: "/products", color: "#c7000b", rowBgPattern: "/images/txt_icon1.png",
    },
    {
      icon: "/images/icons/rx.png", iconHover: "/images/icons/rx-hover.png",
      title: "处方药", subtitle: "Prescription Drug",
      description: "处方药指必须凭执业医师或执业助理医师处方才可调配、购买和使用的药品；而非处方药则不需要凭医师处方即可自行判断、购买和使用的药品。",
      href: "#", color: "#00a54f", rowBgPattern: "/images/txt_icon1.png",
    },
    {
      icon: "/images/icons/hospital.png", iconHover: "/images/icons/hospital-hover.png",
      title: "互联网医院", subtitle: "Internet Hospital",
      description: "声诺互联网医院是互联网+中医医疗健康服务平台，为用户提供便捷的线上医疗服务。",
      href: "/service", color: "#008fd5", rowBgPattern: "/images/txt_icon1.png", hidden: true,
    },
  ],
  [
    {
      icon: "/images/icons/chain.png", iconHover: "/images/icons/chain-hover.png",
      title: "医药连锁", subtitle: "Pharmaceutical chain",
      description: "500余家连锁门店，将健康延伸至生活。营销网络遍布全国，全方位、全生命周期守护人类健康。",
      href: "/service", color: "#004d7e", rowBgPattern: "/images/txt_icon2.png",
    },
    {
      icon: "/images/icons/stemcell.png", iconHover: "/images/icons/stemcell-hover.png",
      title: "干细胞&创新药", subtitle: "Stem cells & innovative drugs",
      description: "依托国家级科研平台，开展全方位产、学、研合作，承担多项国家重大新药创制、国家重点研发计划。以现代发展路径，探索新技术、新药研发，并在再生医学等领域初露锋芒。",
      href: "/innovate", color: "#f36e21", rowBgPattern: "/images/txt_icon2.png",
    },
    {
      icon: "/images/icons/health.png", iconHover: "/images/icons/health-hover.png",
      title: "健康产品", subtitle: "Health products",
      description: "声诺医疗结合传统中医药在固本强基、治未病、疾病康复方面的诉求，积极布局探索药食同源、大健康系列产品的研发、生产、经营。百年品质，诚信保障，给大众最好的健康呵护。",
      href: "#", color: "#fec463", rowBgPattern: "/images/txt_icon2.png",
    },
  ],
];

const cardHoverColors: Record<string, string> = {
  "#c7000b": "rgba(199,0,11,0.4)",
  "#00a54f": "rgba(0,165,79,0.4)",
  "#008fd5": "rgba(0,143,213,0.4)",
  "#004d7e": "rgba(0,77,126,0.4)",
  "#f36e21": "rgba(243,110,33,0.4)",
  "#fec463": "rgba(254,196,99,0.4)",
};

export default function ProductsServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [, forceRender] = useState(0);

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
  }, []);

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
      <div className="container-custom">
        <div className="relative mb-[2.81vw]">
          <h2 className="text-[24px] md:text-[38px] xl:text-[48px] font-normal leading-tight text-[#221815]">产品与服务</h2>
          <p className="text-[16px] md:text-[20px] xl:text-[24px] leading-relaxed py-[14px] text-[#333]">
            药者当付全力 医者当问良心<br />声诺医疗 · 股票代码：000000
          </p>
          <Link href="/products" className="btn-brand absolute right-0 bottom-0 hidden md:inline-block">了解详情</Link>
          <Link href="/products" className="btn-brand mt-4 md:hidden">了解详情</Link>
        </div>

        <div className="mx-[2.56vw]">
          {serviceRows.map((row, rowIndex) => (
            <div key={rowIndex} data-card-row className="flex flex-col md:flex-row gap-[3.12vw] mb-[3.12vw]" style={{ opacity: 0, transform: "translateY(30px)", transition: "opacity 0.7s ease, transform 0.7s ease" }}>
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
                    {/* Icon + Title */}
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
                    <p className="text-[14px] md:text-[16px] leading-[26px] md:leading-[32px] text-[#555] transition-colors duration-500 overflow-hidden relative z-[1]" style={{ height: "94px", marginTop: "1.04vw", color: "inherit" }}>
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
      </div>

      {/* Bottom angles */}
      <div className="absolute left-[-10vw] right-[-10vw] bottom-[-1.86vw] h-[4.16vw] bg-[#f5f5f5]" style={{ transform: "rotate(1.8deg)" }} />
      <div className="absolute left-[-10vw] right-[-10vw] bottom-[-1.86vw] h-[4.16vw] bg-[rgba(245,245,245,0.5)]" style={{ transform: "rotate(-2.2deg)" }} />

      <style jsx>{`
        .cards-visible { opacity: 1 !important; transform: translateY(0) !important; }
        .card-hover:hover .card-title,
        .card-hover:hover .card-subtitle,
        .card-hover:hover p { color: #fff !important; }
        @media (max-width: 767px) {
          [data-card-row] { opacity: 1 !important; transform: none !important; }
          [data-card-row] .card-hover:nth-child(1) { background: #c7000b !important; box-shadow: 0 0 25px rgba(199,0,11,0.4) !important; }
          [data-card-row] .card-hover:nth-child(2) { background: #00a54f !important; box-shadow: 0 0 25px rgba(0,165,79,0.4) !important; }
          [data-card-row] .card-hover:nth-child(3) { background: #f36e21 !important; box-shadow: 0 0 25px rgba(243,110,33,0.4) !important; }
          .card-hover { transform: translateY(0) !important; }
          .card-hover .card-title,
          .card-hover .card-subtitle,
          .card-hover p { color: #fff !important; }
          .card-hover .icon-circle { border-color: #fff !important; }
          .card-hover .icon-default { opacity: 0 !important; transform: translate(-50%,-50%) rotateY(360deg) !important; }
          .card-hover .icon-hover { opacity: 1 !important; }
          .card-hover .row-bg { opacity: 0 !important; }
        }
      `}</style>
    </section>
  );
}
