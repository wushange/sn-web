"use client";

import { useRef, useCallback, useState, useEffect } from "react";
import Link from "next/link";

interface Slide {
  bgImage: string;
  title: string;
  subtitle?: string;
  link: string;
  linkText: string;
}

const slides: Slide[] = [
  {
    bgImage: "/images/banner-1.jpg",
    title: "声诺医疗\n守护生命健康",
    link: "/about",
    linkText: "了解详情",
  },
  {
    bgImage: "/images/banner-2.jpg",
    title: "传承与创新相结合",
    subtitle: "致力于从预防、治疗、康复三个领域\n为人类全生命周期健康管理提供精准有效的服务",
    link: "/products",
    linkText: "了解详情",
  },
  {
    bgImage: "/images/banner-3.jpg",
    title: "声诺医疗\n守护生命健康",
    link: "/products",
    linkText: "了解详情",
  },
];

interface HeroBannerProps {
  bannerCurrent: number;
  onSelectBanner: (i: number) => void;
}

export default function HeroBanner({ bannerCurrent, onSelectBanner }: HeroBannerProps) {
  const current = bannerCurrent;
  const isAnimating = useRef(false);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const goToSlide = useCallback((index: number) => {
    if (isAnimating.current || index === current) return;
    isAnimating.current = true;
    onSelectBanner(index);
    setTimeout(() => { isAnimating.current = false; }, 700);
  }, [current, onSelectBanner]);

  useEffect(() => {
    const timer = setInterval(() => {
      goToSlide((current + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [current, goToSlide]);

  return (
    <div className="relative w-full">
      <div className="w-full h-[400px] md:h-[500px] lg:h-[46.25vw]" />

      <div className="fixed left-0 top-0 w-full h-[400px] md:h-[500px] lg:h-[46.25vw] overflow-hidden z-0">
        {slides.map((slide, index) => {
          const isActive = index === current;
          return (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-700 ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"}`}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${slide.bgImage})`,
                  animation: isActive ? "scaleBg 5s linear forwards" : "none",
                  transform: isActive ? undefined : "scale(1.12)",
                }}
              />
              <div
                className="absolute inset-0 opacity-40"
                style={{ background: "url(/images/banBg.png) repeat-x left top" }}
              />
              <div className="absolute inset-0 flex items-center z-[2]">
                <div className="mx-auto w-full max-w-[1200px] px-4">
                  <h1
                    ref={isActive ? titleRef : undefined}
                    className="text-white mb-[2.7vw] whitespace-pre-line transition-all duration-800 ease-out"
                    style={{
                      fontFamily: '"STXingkai", "华文行楷", "KaiTi", "STKaiti", serif',
                      fontSize: "clamp(26px, 5vw, 80px)",
                      lineHeight: 1.25,
                      letterSpacing: "clamp(1px, 0.5vw, 8px)",
                      textShadow: "5px 5px 20px rgba(0,0,0,0.3)",
                      fontWeight: 400,
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(50px)",
                      transitionDelay: isActive ? "0.1s" : "0s",
                    }}
                  >
                    {slide.title}
                    {slide.subtitle && (
                      <span
                        className="block mt-[15px] font-normal"
                        style={{
                          fontSize: "clamp(14px, 1.67vw, 24px)",
                          lineHeight: 1.6,
                          letterSpacing: "clamp(0px, 0.5vw, 8px)",
                        }}
                      >
                        {slide.subtitle}
                      </span>
                    )}
                  </h1>
                  <div
                    className="transition-all duration-800 ease-out"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? "translateY(0)" : "translateY(60px)",
                      transitionDelay: isActive ? "0.4s" : "0s",
                    }}
                  >
                    <Link
                      href={slide.link}
                      className="inline-flex items-center justify-center text-[14px] md:text-[16px] text-white h-[42px] md:h-[48px] w-[140px] md:w-[180px] text-center transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg"
                      style={{ background: "#c7000b url(/images/nav_si.png) no-repeat right top" }}
                    >
                      {slide.linkText}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      
      </div>
    </div>
  );
}
