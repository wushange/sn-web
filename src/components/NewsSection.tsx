"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface NewsItem {
  id: number;
  title: string;
  date: string;
  image: string;
  summary: string;
}

const newsItems: NewsItem[] = [
  { id: 1, title: "声诺医疗获人工智能医疗器械创新任务揭榜挂帅第三名", date: "2025-12-15", image: "/images/news-3.jpg", summary: "公司获评2025年人工智能医疗器械创新任务揭榜挂帅智能数字疗法产品组第三名，由国家工信部、国家药监局组织评定。" },
  { id: 2, title: "公司获得哈尔滨医科大学附属第一医院伦理批件 临床试验即将启动", date: "2025-12-01", image: "/images/news-2.jpg", summary: "公司获得哈尔滨医科大学附属第一医院伦理委员会伦理批件，已招标选定CRO公司并签署临床试验技术服务协议，正式启动临床试验。" },
  { id: 3, title: "动脉斑块声动力治疗系统完成设备注册检测 具备临床试验条件", date: "2025-07-01", image: "/images/news-1.jpg", summary: "动脉斑块声动力治疗系统（MT-SDT2.0）已通过天津市医疗器械质量监督检验中心检测合格，取得EMC、安规、环境、软件检验报告，设备允许用于临床试验。" },
  { id: 4, title: "公司完成Pre-A轮融资1800万元 企业投后估值1.08亿元", date: "2023-09-01", image: "/images/news-4.jpg", summary: "公司于2023年获得深创投及穗甬创投共1800万元Pre-A轮融资，并于同年获得省科技厅重点研发项目450万元资金支持。" },
];

export default function NewsSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setInterval(() => setActiveSlide(prev => (prev + 1) % newsItems.length), 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative z-[3] min-h-[800px] py-[40px] md:py-[8.35vw]"
      style={{ background: "none" }}
    >
      {/* Background — original uses ::before pseudo-element with news-bg.png */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden" style={{ clipPath: "inset(0)" }}>
        <div
          className="absolute inset-0 bg-white"
          style={{
            background: "#fff url(/images/news-bg.png) no-repeat 9vw bottom",
            backgroundSize: "auto",
          }}
        />
      </div>

      {/* Red decorative angle at bottom */}
      <div className="absolute left-[-10vw] right-[-10vw] bottom-[-5.86vw] h-[4.16vw] bg-(--brand-primary-light) z-0" style={{ transform: "rotate(2.2deg)" }} />

      <div className="container-custom relative z-[1]">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Column */}
          <div className="lg:w-[358px] flex-shrink-0 lg:pt-[5.46vw]">
            <div className="transition-all duration-700">
              <h2 className="text-[24px] md:text-[38px] xl:text-[48px] font-normal leading-tight text-[#221815]">动态资讯</h2>
              <p className="text-[16px] md:text-[20px] pt-[1.25vw] text-[#333]" style={{ lineHeight: "3.12vw" }}>
                <Link href="/news" className="hover:text-(--brand-primary) transition-colors">新闻资讯</Link>
              </p>
              <p className="text-[14px] md:text-[16px] leading-[28px] md:leading-[32px] text-[#808080] mt-[1.82vw] mb-[3.5vw] max-w-[358px]">
                了解更多声诺医疗的企业资讯信息，请关注动态资讯栏目。
              </p>
              <Link href="/news" className="btn-brand">了解详情</Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="lg:ml-[100px] flex-1 max-w-full overflow-hidden">
            {/* Swiper Carousel */}
            <div className="transition-all duration-700 relative rounded-[1.0em] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.15)] mb-[2.86vw]">
              <div className="relative" style={{ paddingTop: "56.25%" }}>
                {newsItems.map((item, index) => (
                  <Link key={item.id} href={`/news/${item.id}`}
                    className={`absolute inset-0 transition-opacity duration-500 ${index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"}`}>
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover absolute inset-0" />
                    <div className="absolute inset-0 pointer-events-none" style={{ background: "url(/images/news-swiper-overlay.png) repeat-x left bottom" }} />
                    <strong className="absolute left-6 md:left-10 right-6 md:right-10 bottom-[25px] text-white text-[18px] md:text-[22px] xl:text-[28px] leading-[36px] md:leading-[56px] line-clamp-2 font-normal">
                      {item.title}
                    </strong>
                  </Link>
                ))}
              </div>
              {/* Dots */}
              <div className="absolute bottom-[70px] md:bottom-[95px] left-6 md:left-10 z-20 flex gap-[10px]">
                {newsItems.map((_, i) => (
                  <button key={i} onClick={() => setActiveSlide(i)}
                    className="rounded-full transition-all duration-300"
                    style={{
                      width: i === activeSlide ? "24px" : "8px", height: "8px",
                      background: i === activeSlide ? "#fff" : "rgba(255,255,255,0.2)",
                      borderRadius: i === activeSlide ? "1.8em" : "50%",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* News List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0 pt-[2.86vw]" style={{ margin: "0 -1.97vw" }}>
              {newsItems.map((item, index) => (
                <Link key={item.id} href={`/news/${item.id}`}
                  className={`transition-all duration-500 group block relative mb-[2.6vw] ${index % 2 === 1 ? "md:translate-y-[3.22vw]" : ""}`}
                  style={{ padding: "0 1.97vw" }}
                >
                  <span className="inline-flex flex-col items-center justify-center w-[60px] h-[60px] bg-(--brand-primary) text-white rounded-[0.3em] mb-6 text-center leading-[20px]">
                    <i className="text-[24px] not-italic leading-[26px] block">{item.date.split("-")[2]}</i>
                    <em className="text-[12px] not-italic block tracking-normal">{item.date.split("-")[0]}-{item.date.split("-")[1]}</em>
                  </span>
                  <strong className="block text-[18px] md:text-[20px] xl:text-[21px] font-normal leading-[32px] mb-4 text-[#333] group-hover:text-(--brand-primary) transition-colors line-clamp-2" style={{ height: "64px", overflow: "hidden" }}>
                    {item.title}
                  </strong>
                  <p className="text-[14px] md:text-[16px] leading-[30px] md:leading-[32px] text-[#808080] line-clamp-3 transition-all duration-500" style={{ maxHeight: "160px", overflow: "hidden" }}>
                    {item.summary}
                  </p>
                  {/* Hover image reveal */}
                  <div className="absolute left-[1.97vw] top-[162px] w-[calc(100%-3.94vw)] h-[180px] rounded-[0.3em] overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
