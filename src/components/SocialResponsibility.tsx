"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

export default function SocialResponsibility() {
  const t = useTranslations("Responsibility");
  const tCommon = useTranslations("Common");
  const [isVisible, setIsVisible] = useState(false);
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
    <section ref={sectionRef} className="relative bg-(--brand-primary) py-[7.59vw] z-[2] overflow-hidden">
      {/* Background rotating logo */}
      <div className="absolute left-[-12.76vw] top-[-7.81vw] w-[37.29vw] h-[37.29vw] bg-[url('/images/watermark-white.png')] bg-no-repeat bg-cover animate-[rotate_50s_linear_infinite] hidden xl:block" />

      <div className="container-custom relative z-[1]">
        <div className="flex flex-col lg:flex-row items-center relative min-h-[28.12vw]">
          {/* Left Content */}
          <div className={`lg:w-1/2 text-white pt-10 lg:pt-[110px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            <h2 className="text-[24px] md:text-[38px] xl:text-[48px] font-normal leading-tight">
              {t("title")}
            </h2>
            <p className="text-[16px] md:text-[20px] leading-relaxed pt-[1.25vw] text-white/90">
              {t("slogan")}
            </p>
            <p className="text-[14px] md:text-[16px] leading-[28px] md:leading-[32px] text-white/80 max-w-[358px] mt-[1.82vw] mb-[4.5vw]">
              {t("paragraph")}
            </p>
            <Link
              href="/about#profile"
              className="inline-flex items-center justify-center text-[16px] leading-[44px] text-white tracking-[2px] h-[48px] w-[180px] border-2 border-white text-center hover:-translate-y-[5px] hover:shadow-lg transition-all duration-300"
            >
              {tCommon("learnMoreEn")}
            </Link>
          </div>

          {/* Right Image */}
          <div className={`lg:absolute lg:right-[-12.5vw] lg:top-1/2 lg:-translate-y-1/2 lg:w-[50vw] mt-[35px] lg:mt-0 rounded-[1.6em] overflow-hidden transition-all duration-700 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
            <img src="/images/social-responsibility.jpg" alt="社会责任" className="w-full h-auto" />
          </div>
        </div>
      </div>

      {/* Bottom angle decorations */}
      <div className="absolute bottom-0 left-[-10vw] right-[-10vw] h-[3.64vw]">
        <div className="absolute inset-0 bg-(--brand-primary) rotate-[-1.8deg] top-[2vw]" />
        <div className="absolute left-[-10vw] right-[-10vw] bottom-[-2.06vw] h-[3.64vw] bg-(--brand-primary-light) rotate-[2.2deg]" />
      </div>
    </section>
  );
}
