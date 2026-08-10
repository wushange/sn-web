"use client";

import Link from "next/link";

export default function SideTools() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed right-0 bottom-[5%] z-10 w-[40px] md:w-[50px] xl:w-[60px]">
      <Link href="tel:13904631300" className="block h-[40px] md:h-[50px] xl:h-[60px] mb-[2px] bg-[#231714] hover:bg-[#c7000b] transition-colors rounded-[0.4em] bg-[url('/images/icons/phone.png')] bg-center bg-no-repeat bg-[length:26px]" />
      <a className="block h-[40px] md:h-[50px] xl:h-[60px] mb-[2px] bg-[#231714] hover:bg-[#c7000b] transition-colors rounded-[0.4em] bg-[url('/images/icons/qq.png')] bg-center bg-no-repeat bg-[length:26px]" />
      <div className="relative block h-[40px] md:h-[50px] xl:h-[60px] mb-[2px] bg-[#231714] hover:bg-[#c7000b] transition-colors rounded-[0.4em] bg-[url('/images/icons/wechat.png')] bg-center bg-no-repeat bg-[length:26px] group cursor-pointer">
        <span className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-[50px] md:right-[65px] xl:right-[75px] top-1/2 -translate-y-1/2 w-[120px] h-[120px] bg-white rounded-[0.4em] shadow-md flex items-center justify-center transition-all duration-300 -translate-x-[20px] group-hover:translate-x-0">
          <span className="absolute right-[-8px] top-1/2 -mt-2 border-[8px] border-transparent border-l-white" />
          <img src="/images/qrcode.png" alt="微信二维码" className="w-[100px] h-[100px]" />
        </span>
      </div>
      <button
        onClick={scrollToTop}
        className="block w-full h-[40px] md:h-[50px] xl:h-[60px] bg-[#c7000b] hover:bg-[#AE0009] transition-colors rounded-[0.4em] bg-[url('/images/icons/top.png')] bg-center bg-no-repeat bg-[length:26px] cursor-pointer border-0"
      />
    </div>
  );
}
