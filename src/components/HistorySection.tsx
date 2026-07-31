"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

const milestones = [
  { year: 1650, title: "劳氏家业 生机勃发", image: "/images/history-1.jpg" },
  { year: 1956, title: "岁月锤炼 与时俱进", image: "/images/history-2.jpg" },
  { year: 1984, title: "友搏药业 研发伊始", image: "/images/history-1984.jpg" },
  { year: 1994, title: "扩大规模 奋楫扬帆", image: "/images/history-3.jpg" },
  { year: 1995, title: "成功研制核心产品", image: "/images/history-1995.jpg" },
  { year: 2000, title: "鸣锣上市 再启征程", image: "/images/history-4.jpg" },
  { year: 2012, title: "新厂落成 铸就辉煌", image: "/images/history-2012.jpg" },
  { year: 2015, title: "强强联合 并肩同行", image: "/images/history-5.jpg" },
  { year: 2021, title: "全新时代 未来可期", image: "/images/history-6.jpg" },
];

const yearLines = [1650, 1956, 1984, 1994, 1995, 2000, 2012, 2015, 2021];
const bottomRow = [1650, 1956];
const topRow = [1984, 1995, 2012];

export default function HistorySection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="relative bg-[#f5f5f5] z-[1]">
      <div className="container-custom relative z-[2] pt-[2.5vw]">
        <div className="flex flex-col lg:flex-row">
          {/* Left */}
          <div className={`lg:w-[500px] pt-[60px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            <h2 className="text-[26px] md:text-[38px] xl:text-[48px] font-normal tracking-[2px] md:tracking-[6px] leading-tight text-[#221815]">
              历史沿革
            </h2>
            <p className="text-[14px] md:text-[16px] leading-[28px] md:leading-[32px] text-[#808080] my-[12px] md:my-[32px]">
              声诺医疗，一部书写了三百多年的医药诗篇，从华夏文明的岁月洗礼中款款而来，在中华大地的百花齐放中全情舒展。
            </p>
            <Link href="/about/history" className="btn-brand">
              了解详情
            </Link>
          </div>

          {/* Right - Swiper */}
          <div className={`lg:w-[480px] lg:ml-auto pt-[70px] lg:pt-[70px] transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            <div className="overflow-hidden rounded-lg relative" style={{ height: '270px' }}>
              {milestones.map((item, index) => (
                <div
                  key={item.year}
                  className={`absolute inset-0 transition-opacity duration-500 ${index === activeIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover" />
                  <strong className="absolute bottom-5 left-7 text-[18px] md:text-[24px] font-normal text-white leading-[40px]">
                    {item.title}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Year background */}
        <div className="absolute right-[-130px] top-[-160px] font-bold text-[300px] lg:text-[400px] leading-[300px] lg:leading-[400px] text-[#f0f0f0] select-none pointer-events-none">
          {milestones[activeIndex].year}
        </div>
      </div>

      {/* Bottom timeline */}
      <div className="relative z-[2] mt-[2.08vw] border-b-[12px] border-[#c7000b]">
        <div className="container-custom">
          <div className="h-[72px] leading-[60px] relative hidden lg:flex items-center flex-wrap gap-0">
            {/* The timeline layout matches the original with exact positioning */}
            {milestones.map((item, index) => {
              const isTop = topRow.includes(item.year);
              return (
                <button
                  key={item.year}
                  onClick={() => setActiveIndex(index)}
                  className={`relative transition-all duration-300 cursor-pointer ${
                    isTop ? 'absolute text-[#0168b6]' : ''
                  } ${index === activeIndex ? 'font-bold scale-110' : ''}`}
                  style={
                    isTop
                      ? item.year === 1984 ? { left: '730px', bottom: '-104px', color: '#0168b6' }
                        : item.year === 1995 ? { left: '808px', bottom: '-104px', color: '#0168b6' }
                        : { left: '990px', bottom: '-104px', color: '#0168b6' }
                      : index === 0 ? { marginLeft: '58px' }
                      : index === 1 ? { marginLeft: '462px' }
                      : index === 3 ? { marginLeft: '145px' }
                      : index === 5 ? { marginLeft: '95px' }
                      : index === 7 ? { marginLeft: '25px' }
                      : index === 8 ? { marginLeft: '25px' }
                      : {}
                  }
                >
                  <i className="not-italic text-[20px] inline-block">{item.year}</i>
                  <span className={`absolute left-1/2 -translate-x-1/2 w-[2px] h-[12px] block ${isTop ? 'top-0 bg-[#0168b6]' : 'bottom-0 bg-[#c7000b]'}`} />
                </button>
              );
            })}
          </div>

          {/* Mobile timeline */}
          <div className="lg:hidden flex justify-between py-4 overflow-x-auto gap-2">
            {milestones.map((item, index) => (
              <button
                key={item.year}
                onClick={() => setActiveIndex(index)}
                className={`flex-shrink-0 text-[14px] transition-all ${index === activeIndex ? 'text-[#c7000b] font-bold scale-110' : 'text-[#666]'}`}
              >
                {item.year}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
