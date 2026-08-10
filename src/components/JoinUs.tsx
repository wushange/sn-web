"use client";

import { useState, useEffect, useRef } from "react";

export default function JoinUs() {
  const [phone, setPhone] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [submitted, setSubmitted] = useState(false);
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.trim()) {
      setSubmitted(true);
      setTimeout(() => setSubmitted(false), 3000);
      setPhone("");
    }
  };

  return (
    <section ref={sectionRef} className="relative bg-white py-[8.33vw] z-[2]">
      <div className="container-custom">
        <div className={`max-w-[770px] transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-[30px]'}`}>
          <h2 className="text-[26px] md:text-[38px] xl:text-[48px] font-normal leading-tight text-[#221815]">
            加入声诺医疗
          </h2>
          <h3 className="text-[16px] md:text-[20px] xl:text-[24px] font-normal leading-relaxed py-[14px] text-[#333]">
            大音希声 千金一诺 · 为守护人类健康提供中国方案
          </h3>
          <h4 className="text-[15px] md:text-[16px] text-[#808080] font-normal leading-[30px]">
            留下您的联系方式，我们期待与您合作
          </h4>

          <form onSubmit={handleSubmit} className="mt-[1.14vw]">
            <div className="relative h-[48px] md:h-[72px] max-w-[720px] border-2 border-(--brand-primary) rounded-[2.8em] overflow-hidden">
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="请输入您的手机号"
                className="w-full h-full pl-[18px] md:pl-[28px] pr-[108px] md:pr-[218px] text-[14px] md:text-[16px] text-(--brand-primary) bg-transparent border-none outline-none"
              />
              <button
                type="submit"
                className="absolute right-[1px] md:right-[4px] top-1/2 -translate-y-1/2 h-[38px] md:h-[60px] w-[100px] md:w-[180px] bg-(--brand-primary) hover:bg-(--brand-primary) text-white text-[14px] md:text-[16px] rounded-[2.8em] transition-colors cursor-pointer"
              >
                {submitted ? "已提交 ✓" : "立即提交"}
              </button>
            </div>
          </form>

          <p className="text-[12px] md:text-[14px] text-[#808080] leading-[24px] mt-[1.35vw]">
            您的数据将由声诺医疗安全地存储（隐私政策），并且仅用于我们的人才发展计划。
          </p>
        </div>
      </div>
    </section>
  );
}
