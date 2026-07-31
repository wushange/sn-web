"use client";

import { useEffect, useRef, useState, useCallback, type Dispatch, type SetStateAction } from "react";
import Link from "next/link";

interface CompanyIntroProps {
  bannerCurrent: number;
  onBannerSelect: (i: number) => void;
  bannerNavVisible: boolean;
  setBannerNavVisible: Dispatch<SetStateAction<boolean>>;
}

function useFadeInUp(delay: number = 0) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay * 1000);
        }
      },
      { threshold: 0.15 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return { ref, visible };
}

export default function CompanyIntro({
  bannerCurrent,
  onBannerSelect,
  bannerNavVisible,
  setBannerNavVisible,
}: CompanyIntroProps) {
  const [counters, setCounters] = useState({ num1: 0, num2: 0, num3: 0 });
  const counterTriggered = useRef(false);
  const counterRef = useRef<HTMLDivElement>(null);

  // Observer for counter animation trigger
  useEffect(() => {
    const node = counterRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !counterTriggered.current) {
          counterTriggered.current = true;
          animateCounters();
        }
      },
      { threshold: 0.5 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // Scroll listener to fade out banner nav
  useEffect(() => {
    const onScroll = () => {
      setBannerNavVisible(window.scrollY < 10);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [setBannerNavVisible]);

  const animateCounters = useCallback(() => {
    const targets = [2015, 500, 53.3];
    const duration = 1800;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const p = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCounters({
        num1: Math.floor(targets[0] * ease),
        num2: Math.floor(targets[1] * ease),
        num3: parseFloat((targets[2] * ease).toFixed(1)),
      });
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, []);

  const item1 = useFadeInUp(0.1);
  const item2 = useFadeInUp(0.15);
  const item3 = useFadeInUp(0.2);
  const item4 = useFadeInUp(0.25);
  const item5 = useFadeInUp(0.2);

  return (
    <section className="relative bg-white pt-[6.85vw] z-[3]">
      {/* Diagonal top cut */}
      <div
        className="absolute left-[-10%] right-[-10%] h-[3.43vw] bg-white z-[2]"
        style={{ top: "-1.45vw", transform: "rotate(-1.5deg)" }}
      />

      {/* === Banner slide navigator: 01 02 03 === */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-full max-w-[1200px] px-4 z-[3] flex justify-end transition-all duration-500"
        style={{
          top: "calc(-2.8vw)",
          opacity: bannerNavVisible ? 1 : 0,
          height: "60px",
        }}
      >
        <div className="flex gap-[22px] h-[60px] items-center">
          {[0, 1, 2].map((i) => (
            <button
              key={i}
              onClick={() => onBannerSelect(i)}
              className="w-[50px] h-[60px] leading-[60px] text-center text-[20px] transition-all duration-300 cursor-pointer border-0 flex-shrink-0"
              style={{
                background: i === bannerCurrent ? "#c7000b" : "transparent",
                color: i === bannerCurrent ? "#fff" : "#333",
                fontWeight: i === bannerCurrent ? 700 : 400,
              }}
            >
              {String(i + 1).padStart(2, "0")}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto max-w-[1200px] px-4 relative z-[3]">
        {/* Rotating watermark logo */}
        <div
          className="absolute left-[-85px] top-[-85px] w-[237px] h-[237px] bg-no-repeat animate-[radiusRotate_30s_linear_infinite] hidden xl:block"
          style={{ backgroundImage: "url(/images/watermark-logo.png)" }}
        />

        {/* === Scroll-triggered fadeInUp items === */}
        <div ref={item1.ref} className={`transition-all duration-700 ${item1.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}>
          <h4 className="text-[24px] md:text-[30px] xl:text-[48px] font-normal leading-tight text-[#221815]">
            声诺医疗股份有限公司
          </h4>
        </div>

        <div ref={item2.ref} className={`transition-all duration-700 ${item2.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}>
          <h5 className="text-[18px] md:text-[20px] xl:text-[24px] font-normal leading-relaxed py-[14px] text-[#333]">
            前身"劳九芝堂药铺"起源于清顺治七年，被列入国家级非物质文化遗产保护目录
          </h5>
        </div>

        <div ref={item3.ref} className={`transition-all duration-700 ${item3.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}>
          <p className="text-[14px] md:text-[16px] leading-[28px] md:leading-[32px] text-[#555] mb-[4.2vw] max-w-[900px]">
            声诺医疗股份有限公司是国家重点中药企业、国家重点高新技术企业、国家级创新型试点企业、国家中医药管理局中医药工程学重点学科建设单位、国家企业技术中心、国家知识产权示范企业、国内A股上市公司、湖南省工业质量标杆示范企业、首届长沙市市长质量奖获奖企业、国家博士后科研工作站。
          </p>
        </div>

        {/* Stat counters */}
        <div ref={counterRef} className={`flex flex-wrap gap-[5.62vw] mb-[5.62vw] ${item4.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"} transition-all duration-700`}>
          {[
            { value: counters.num1, suffix: "年", label: '前身"劳九芝堂药铺"起源于清顺治七年' },
            { value: counters.num2, suffix: "+家", label: "拥有500多家连锁门店" },
            { value: counters.num3, suffix: "亿元", label: "公司总资产达53.3亿元" },
          ].map((stat, i) => (
            <div key={i}>
              <strong className="text-[50px] md:text-[80px] xl:text-[90px] leading-none font-normal block">
                <span className="text-[#c7000b] mr-2">{stat.value}</span>
                <span className="text-[16px] text-[#333]">{stat.suffix}</span>
              </strong>
              <p className="text-[14px] md:text-[16px] text-[#555] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Video / Image area */}
        <div ref={item5.ref} className={`relative mx-auto max-w-[1200px] h-[198px] md:h-[400px] xl:h-[580px] overflow-hidden rounded-lg transition-all duration-700 ${item5.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[30px]"}`}>
          <img src="/images/company-intro.jpg" alt="声诺医疗" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/15" />
          <div className="absolute inset-0 flex items-center pl-[20px] md:pl-[58px] xl:pl-[116px]">
            <button className="relative w-[50px] h-[50px] md:w-[90px] md:h-[90px] bg-white rounded-full flex items-center justify-center group hover:shadow-xl transition-shadow">
              <div className="absolute inset-0 rounded-full bg-white/15 animate-[rangeScale_3s_linear_infinite]" />
              <div className="absolute inset-0 rounded-full bg-white/15 animate-[rangeScale_3s_linear_infinite]" style={{ animationDelay: "1.5s" }} />
              <svg width="24" height="28" viewBox="0 0 24 28" className="ml-1">
                <path d="M0 0v28l24-14z" fill="#c7000b" />
              </svg>
            </button>
            <div className="text-white ml-5">
              <strong className="text-[21px] md:text-[32px] font-normal block">声诺医疗  守护生命健康</strong>
              <p className="text-[14px] md:text-[16px] opacity-80 mt-1">查看声诺医疗宣传片</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom grey band with decorative angles */}
      <div className="absolute left-0 bottom-0 w-full h-[162px] bg-[#f5f5f5] z-[-1]" />
      <div className="absolute left-[-10vw] right-[-10vw] h-[4.16vw] bg-[#f5f5f5] z-[-1]" style={{ top: "-1.82vw", transform: "rotate(2deg)" }} />
      <div className="absolute left-[-10vw] right-[-10vw] h-[4.16vw] bg-[rgba(245,245,245,0.5)] z-[-1]" style={{ top: "-1.82vw", transform: "rotate(-2.5deg)" }} />
    </section>
  );
}
