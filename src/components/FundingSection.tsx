"use client";

import Link from "next/link";

const rounds = [
  { year: "2021", round: "天使轮", amount: "800万", detail: "交润科技 · 哈尔滨创新投资" },
  { year: "2023", round: "Pre-A轮", amount: "1800万", detail: "深创投 · 瑞恒红土 · 穗甬创投" },
  { year: "2026", round: "A轮（进行中）", amount: "4000万", detail: "投前估值1.8亿 · 释放18.18%" },
  { year: "2028", round: "新一轮", amount: "2亿", detail: "投前估值6亿 · IPO筹备" },
];

export default function FundingSection() {
  return (
    <section className="relative bg-[#f5f5f5] py-[7.81vw] z-[1] overflow-hidden">
      <div className="container-custom relative z-[1]">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-[4vw]">
          <div>
            <h2 className="text-[24px] md:text-[38px] xl:text-[48px] font-normal leading-tight text-[#221815]">
              融资与发展
            </h2>
            <p className="text-[16px] md:text-[20px] xl:text-[24px] leading-relaxed py-[14px] text-[#333]">
              从天使轮到IPO规划 · 声动力疗法产业化之路
            </p>
          </div>
          <Link href="/investor" className="btn-brand hidden md:inline-block">了解详情</Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2vw]">
          {rounds.map((r, i) => (
            <div key={i} className="relative bg-white rounded-[0.6em] p-[1.8vw] shadow-[0_0_25px_rgba(0,0,0,0.08)] hover:shadow-lg transition-shadow overflow-hidden" style={{ minHeight: "180px" }}>
              <span className="text-[40px] md:text-[52px] font-bold text-[#f0f0f0] absolute right-[12px] top-[5px] select-none">{i + 1}</span>
              <span className="inline-block text-[12px] text-white bg-(--brand-primary) px-[10px] py-[3px] rounded-[0.3em]">{r.year}</span>
              <h3 className="text-[18px] md:text-[20px] font-medium text-[#221815] mt-[12px]">{r.round}</h3>
              <p className="text-[22px] md:text-[26px] font-bold text-(--brand-primary) mt-[6px]">{r.amount}</p>
              <p className="text-[13px] text-[#808080] mt-[8px] leading-[22px]">{r.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
