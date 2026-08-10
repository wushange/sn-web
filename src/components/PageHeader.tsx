import Link from "next/link";

export default function PageHeader({ title, subtitle, crumb }: { title: string; subtitle: string; crumb: string }) {
  return (
    <section className="relative bg-[#c7000b] pt-[120px] md:pt-[140px] pb-[50px] md:pb-[70px] overflow-hidden">
      <div className="absolute left-[-12.76vw] top-[-7.81vw] w-[37.29vw] h-[37.29vw] bg-[url('/images/watermark-white.png')] bg-no-repeat bg-cover animate-[rotate_50s_linear_infinite] hidden xl:block" />
      <div className="container-custom relative z-[1]">
        <h1 className="text-[28px] md:text-[42px] xl:text-[52px] font-normal text-white leading-tight">{title}</h1>
        <p className="text-[15px] md:text-[18px] text-white/80 mt-[12px] max-w-[700px]">{subtitle}</p>
        <div className="mt-[25px] text-[13px] md:text-[14px] text-white/70">
          <Link href="/" className="hover:text-white transition-colors">首页</Link>
          <span className="mx-2">/</span>
          <span>{crumb}</span>
        </div>
      </div>
    </section>
  );
}
