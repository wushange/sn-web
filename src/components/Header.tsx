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
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
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

  const handleMouseEnter = (index: number, hasChildren: boolean) => {
    if (hideTimer.current) clearTimeout(hideTimer.current);
    setHoverIndex(index);
    if (hasChildren) setActiveDropdown(index);
  };
  const handleMouseLeave = () => {
    setHoverIndex(null);
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
        <Link href="/"><img src="/images/logo5.png" alt="声诺医疗" className="h-9 w-auto" /></Link>
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
        className={`pc-header hidden lg:block ${headerFixed ? "headerFixed" : "headerTransparent"}`}
        onMouseEnter={() => setIsHoveringHeader(true)}
        onMouseLeave={() => setIsHoveringHeader(false)}
      >
        {/* Logo */}
        <Link href="/" className="logo">
          <img src="/images/logo5.png" alt="声诺医疗" />
        </Link>

        <div className="headRx">
          <ul className="nav" onMouseLeave={handleMouseLeave}>
            {navItems.map((item, index) => (
              <li key={index} className="relative float-left"
                onMouseEnter={() => handleMouseEnter(index, !!item.children)}>
                <Link
                  href={item.href}
                  className={`nav_a relative ${item.label === "首页" ? "on" : ""} ${hoverIndex !== null && hoverIndex !== index ? "no" : ""}`}
                >
                  {item.label}
                </Link>

                {/* ===== Dropdown ===== */}
                {item.children && activeDropdown === index && (
                  <div
                    className="subNavBox subNavBox-fx absolute left-0 bg-white border-t border-[#E6E6E6] overflow-hidden"
                    style={{ width: "100vw", left: "50%", transform: "translateX(-50%)" }}
                    onMouseEnter={() => handleMouseEnter(index, true)}
                  >
                    {/* Left panel */}
                    <div className="subNvLx subNvLx-fx">
                      <div className="subNvtp absolute left-[60px] right-[60px] top-1/2 -translate-y-1/2">
                        <strong className="block text-[24px] font-normal leading-[40px] mb-[10px] text-[#333]">{item.label}</strong>
                        <p className="text-[14px] leading-[28px] text-[#808080] mb-[15px]">{item.description}</p>
                        <Link href={item.href} className="subNv_m inline-block text-[14px] leading-[28px] text-[#c7000a] relative">
                          了解详情
                        </Link>
                      </div>
                    </div>

                    {/* Right panel */}
                    <div className="subNvRx subNvRx-fx">
                      <dl className="subNvDl-fx absolute top-1/2 -translate-y-1/2">
                        {item.children.map((child, ci) => (
                          <dd key={ci}>
                            <Link
                              href={child.href}
                              className="subNv_a subNv_a-fx block text-[16px] text-[#808080]"
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
                          className="subNvImg-fx absolute rounded-lg"
                        />
                      )}
                    </div>
                  </div>
                )}
              </li>
            ))}
          </ul>

          {/* Language switcher */}
          <div className="topLan">
            <Link href="/en"><span>EN</span></Link>
          </div>
        </div>
      </header>
    </>
  );
}
