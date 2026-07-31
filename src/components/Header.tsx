"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; external?: boolean }[];
  description?: string;
  image?: string;
}

const navItems: NavItem[] = [
  { label: "首页", href: "/" },
  {
    label: "走进声诺", href: "/about",
    description: "声诺医疗股份有限公司是国家重点高新技术企业、国家级创新型试点企业、国家企业技术中心、国家知识产权示范企业...",
    image: "/images/subnav-about.jpg",
    children: [
      { label: "企业简介", href: "/about/profile" },
      { label: "文化理念", href: "/about/culture" },
      { label: "历史沿革", href: "/about/history" },
      { label: "组织架构", href: "/about/structure" },
      { label: "企业歌曲", href: "/about/songs" },
      { label: "企业荣誉", href: "/about/honor" },
    ],
  },
  {
    label: "产品与服务", href: "/products",
    description: "公司拥有中药类、化学药类、生物制品类、大健康产品类等各类品牌产品，形成以核心产品驱动的发展引擎，品类覆盖心脑血管、补肾、补血、妇儿、五官科等各个领域。",
    image: "/images/subnav-products.jpg",
    children: [
      { label: "产品", href: "/products/list" },
      { label: "服务", href: "/service" },
      { label: "创新", href: "/innovate" },
    ],
  },
  {
    label: "动态资讯", href: "/news",
    description: "了解更多声诺医疗的企业资讯信息，请关注动态资讯栏目。",
    image: "/images/subnav-news.jpg",
    children: [
      { label: "新闻资讯", href: "/news" },
    ],
  },
  { label: "社会责任", href: "/responsibility" },
  {
    label: "投资者关系", href: "/investor",
    description: "声诺医疗践行守护生命健康的使命，坚持贯彻传承与创新相结合的发展理念，引领民族健康产业。",
    image: "/images/subnav-investor.jpg",
    children: [
      { label: "公司公告", href: "#", external: true },
      { label: "投资者教育", href: "/investor/education" },
      { label: "股票行情", href: "#", external: true },
    ],
  },
  { label: "联系我们", href: "/contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<number, boolean>>({});
  const [isHoveringHeader, setIsHoveringHeader] = useState(false);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // "headerFixed" mode: when user scrolls >10px OR hovers the header
  const headerFixed = isScrolled || isHoveringHeader;

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const handleMouseEnter = (index: number) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setActiveDropdown(index);
  };
  const handleMouseLeave = () => {
    hideTimer.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const toggleMobileExpand = (index: number) => {
    setMobileExpanded(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <>
      {/* Head background overlay - shows when dropdown is open */}
      <div
        className={`hidden lg:block fixed inset-0 z-[28] bg-black/60 transition-all duration-500 ${activeDropdown !== null ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        onClick={() => setActiveDropdown(null)}
      />

      {/* ===== Mobile Header ===== */}
      <div className="fixed top-0 left-0 w-full z-[1001] bg-white flex items-center justify-between h-[56px] px-4 lg:hidden shadow-sm">
        <Link href="/"><img src="/images/logo.png" alt="声诺医疗" className="h-9 w-auto" /></Link>
        <div className="flex items-center gap-3">
          <Link href="/en" className="text-sm text-[#333]">EN</Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-6 h-6 flex flex-col justify-center gap-[5px] relative">
            <span className={`block w-full h-[2px] bg-[#333] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-full h-[2px] bg-[#333] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-full h-[2px] bg-[#333] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile overlay + menu */}
      <div className={`fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileMenuOpen(false)} />
      <div className={`fixed top-[56px] right-0 bottom-0 w-full max-w-[320px] bg-white z-[1001] transition-transform duration-300 overflow-y-auto lg:hidden ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="py-2">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100">
              <div className="flex items-center justify-between px-5 py-3 cursor-pointer"
                onClick={() => item.children ? toggleMobileExpand(index) : setMobileMenuOpen(false)}>
                <Link href={item.href} className="text-[15px] text-[#333]" onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
                {item.children && <span className={`text-xs transition-transform ${mobileExpanded[index] ? "rotate-90" : ""}`}>▶</span>}
              </div>
              {item.children && mobileExpanded[index] && (
                <div className="bg-gray-50 py-1">
                  {item.children.map((child, ci) => (
                    <Link key={ci} href={child.href} className="block px-8 py-2.5 text-sm text-[#666] hover:text-[#c7000b]"
                      onClick={() => setMobileMenuOpen(false)}
                      {...(child.external ? { target: "_blank", rel: "noreferrer" } : {})}>{child.label}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== PC Header ===== */}
      <header
        className={`hidden lg:block fixed top-0 left-0 w-full z-30 transition-all duration-500 ${headerFixed ? "bg-white shadow-[0_5px_15px_rgba(0,0,0,0.08)]" : "bg-transparent"}`}
        style={{ height: headerFixed ? "76px" : "100px", padding: "0 30px" }}
        onMouseEnter={() => setIsHoveringHeader(true)}
        onMouseLeave={() => setIsHoveringHeader(false)}
      >
        {/* Logo — two images stacked, swapped by opacity */}
        <Link
          href="/"
          className="float-left relative"
          style={{ marginTop: headerFixed ? "12px" : "20px" }}
        >
          <img
            src="/images/logo5.png"
            alt="声诺医疗"
            style={{ height: headerFixed ? "52px" : "60px", width: "auto", opacity: headerFixed ? 1 : 0, transition: "all 0.5s ease-in-out" }}
          />
          <img
            src="/images/logo5.png"
            alt="声诺医疗"
            className="absolute left-0 top-0"
            style={{ height: headerFixed ? "52px" : "60px", width: "auto", opacity: headerFixed ? 0 : 1, transition: "all 0.5s ease-in-out" }}
          />
        </Link>

        <div className="float-right">
          <ul className="nav float-left flex" style={{ marginRight: "0.7vw" }} onMouseLeave={handleMouseLeave}>
            {navItems.map((item, index) => (
              <li key={index}
                className="relative float-left"
                onMouseEnter={() => item.children && handleMouseEnter(index)}>
                <Link
                  href={item.href}
                  className="nav_a inline-block relative text-[14px] xl:text-[17px] transition-colors duration-300"
                  style={{
                    padding: "0 5px xl:padding:0 1.0vw",
                    lineHeight: headerFixed ? "76px" : "100px",
                    color: headerFixed ? "#333" : "#fff",
                  }}
                >
                  {item.label}
                  {/* Red underline ::after via bg pseudo — we use a real div since we can't use ::after inline */}
                  <span
                    className="absolute left-1/2 bottom-0 h-[4px] bg-[#C7000A] transition-all duration-500"
                    style={{ width: "0%" }}
                  />
                </Link>

                {/* ===== Dropdown ===== */}
                {item.children && activeDropdown === index && (
                  <div
                    className="subNavBox absolute left-0 bg-white border-t border-[#E6E6E6] overflow-hidden"
                    style={{
                      top: headerFixed ? "76px" : "100px",
                      width: "100vw",
                      left: "50%",
                      transform: "translateX(-50%)",
                      height: headerFixed ? "400px" : "540px",
                      background: "#fff url(/images/subnav-bg.png) no-repeat right bottom",
                    }}
                    onMouseEnter={() => handleMouseEnter(index)}
                  >
                    {/* Left panel */}
                    <div className="float-left relative z-[1] overflow-hidden" style={{ width: "31.5%", height: headerFixed ? "400px" : "540px", background: "#f5f5f5" }}>
                      {/* Rotating watermark */}
                      <div
                        className="absolute bg-no-repeat bg-center animate-[radiusRotate_50s_linear_infinite]"
                        style={{
                          height: headerFixed ? "516px" : "716px",
                          width: headerFixed ? "516px" : "716px",
                          top: headerFixed ? "50px" : "100px",
                          right: headerFixed ? "42px" : "92px",
                          backgroundImage: "url(/images/watermark-logo.png)",
                          backgroundSize: "cover",
                        }}
                      />
                      <div className="absolute left-[60px] right-[60px] top-1/2 -translate-y-1/2">
                        <strong className="block text-[24px] font-normal leading-[40px] mb-[10px] text-[#333]">{item.label}</strong>
                        <p className="text-[14px] leading-[28px] text-[#808080] mb-[15px]">{item.description}</p>
                        <Link href={item.href} className="subNv_m inline-block text-[14px] leading-[28px] text-[#c7000a] relative">
                          了解详情
                        </Link>
                      </div>
                    </div>

                    {/* Right panel */}
                    <div style={{ marginLeft: "31.5%", position: "relative", height: headerFixed ? "400px" : "540px" }}>
                      <dl className="absolute left-[6.14vw] top-1/2 -translate-y-1/2" style={{ width: "320px" }}>
                        {item.children.map((child, ci) => (
                          <dd key={ci}>
                            <Link
                              href={child.href}
                              className="subNv_a block text-[15px] text-[#333] hover:text-[#c7000a] transition-colors"
                              style={{ lineHeight: "46px", height: "46px", paddingLeft: "40px" }}
                              {...(child.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                              {child.label}
                            </Link>
                          </dd>
                        ))}
                      </dl>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.label}
                          width={320} height={180}
                          className="absolute rounded-lg"
                          style={{ right: "9.37vw", top: "50%", transform: "translateY(-50%)" }}
                        />
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Language switcher — with icon */}
          <div
            className="topLan float-left relative"
            style={{
              lineHeight: "19px",
              height: "19px",
              marginTop: headerFixed ? "28px" : "40px",
              paddingLeft: "2.08vw",
              borderLeft: `1px solid ${headerFixed ? "#BCB9B8" : "rgba(255,255,255,0.4)"}`,
            }}
          >
            <Link
              href="/en"
              className="topLan_link inline-flex items-center gap-[6px]"
              style={{ paddingLeft: "26px", fontSize: "14px", lineHeight: "19px", color: headerFixed ? "#333" : "#fff" }}
            >
              EN
              <span className="inline-block w-[7px] h-[4px] ml-[5px]" style={{ background: `url(/images/icons/lang-arrow.png) no-repeat center` }} />
            </Link>
          </div>
        </div>
      </header>

      <style jsx>{`
        /* Red underline hover effect */
        .nav_a:hover span { width: 100% !important; left: 0 !important; }

        /* subNv_m underline */
        .subNv_m::after {
          content: "";
          width: 0%;
          height: 1px;
          background: #c7000a;
          transition: all 0.5s ease-in-out;
          position: absolute;
          left: 0;
          bottom: 0;
        }
        .subNv_m:hover::after { width: 100%; }

        /* subNv_a hover */
        .subNv_a:hover { color: #c7000a !important; }
      `}</style>
    </>
  );
}
