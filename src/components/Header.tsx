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
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

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
      {/* ===== Mobile Header ===== */}
      <div className="fixed top-0 left-0 w-full z-[1001] bg-white flex items-center justify-between h-[56px] px-4 lg:hidden shadow-sm">
        <Link href="/" className="flex-shrink-0">
          <img src="/images/logo.png" alt="声诺医疗" className="h-9 w-auto" />
        </Link>
        <div className="flex items-center gap-3">
          <Link href="/en" className="text-sm text-[#333]">EN</Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-6 h-6 flex flex-col justify-center gap-[5px] relative"
          >
            <span className={`block w-full h-[2px] bg-[#333] transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
            <span className={`block w-full h-[2px] bg-[#333] transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-full h-[2px] bg-[#333] transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      <div className={`fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMobileMenuOpen(false)} />
      <div className={`fixed top-[56px] right-0 bottom-0 w-full max-w-[320px] bg-white z-[1001] transition-transform duration-300 overflow-y-auto lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="py-2">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100">
              <div className="flex items-center justify-between px-5 py-3 cursor-pointer"
                onClick={() => item.children ? toggleMobileExpand(index) : setMobileMenuOpen(false)}>
                <Link href={item.href} className="text-[15px] text-[#333]" onClick={() => setMobileMenuOpen(false)}>{item.label}</Link>
                {item.children && <span className={`text-xs transition-transform ${mobileExpanded[index] ? 'rotate-90' : ''}`}>▶</span>}
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
        className={`hidden lg:block fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent header-transparent'}`}
      >
        <div className="container-custom flex items-center justify-between" style={{ height: "100px" }}>
          <Link href="/" className="flex-shrink-0 flex items-center" style={{ height: "100px", lineHeight: "100px" }}>
            <img src="/images/logo.png" alt="声诺医疗" className="h-[50px] w-auto logo-default" />
            <img src="/images/logo_w.png" alt="声诺医疗" className="h-[50px] w-auto logo-white" />
          </Link>

          <div className="flex items-center" style={{ height: "100px" }}>
            <nav className="flex items-center" onMouseLeave={handleMouseLeave}>
              {navItems.map((item, index) => (
                <div key={index} className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(index)}>
                  <Link href={item.href}
                    className={`block text-[18px] transition-colors duration-300 ${isScrolled ? 'text-[#221815] hover:text-[#c7000b]' : 'text-white hover:text-white/80'}`}
                    style={{ padding: "0 22px 32px", borderBottom: "4px solid transparent" }}>
                    {item.label}
                  </Link>

                  {/* ===== Dropdown ===== */}
                  {item.children && activeDropdown === index && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-2xl flex overflow-hidden"
                      style={{ width: "780px", borderRadius: "0 0 6px 6px" }}
                      onMouseEnter={() => handleMouseEnter(index)}>
                      {/* Left panel */}
                      <div className="w-[340px] p-8 flex flex-col justify-between" style={{ background: "linear-gradient(135deg, #fafafa 0%, #f5f5f5 100%)" }}>
                        <div>
                          <strong className="text-[22px] text-[#221815] font-bold block mb-3">{item.label}</strong>
                          <p className="text-[14px] text-[#808080] leading-[28px]">{item.description}</p>
                        </div>
                        <Link href={item.href} className="text-[14px] text-[#c7000b] hover:underline mt-6 inline-flex items-center gap-1">
                          了解详情 <span className="text-lg">→</span>
                        </Link>
                      </div>

                      {/* Right panel — sub links + image */}
                      <div className="flex-1 p-8 flex gap-6">
                        <dl className="flex-1">
                          {item.children.map((child, ci) => (
                            <dd key={ci}>
                              <Link href={child.href}
                                className="block py-[10px] text-[15px] text-[#333] hover:text-[#c7000b] transition-colors"
                                {...(child.external ? { target: "_blank", rel: "noreferrer" } : {})}>
                                {child.label}
                              </Link>
                            </dd>
                          ))}
                        </dl>
                        {item.image && (
                          <div className="w-[320px] h-[180px] rounded-lg overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.label} className="w-full h-full object-cover" />
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Language */}
            <div className={`relative ml-[30px] pl-[30px] border-l transition-colors ${isScrolled ? 'border-gray-300' : 'border-white/30'}`}>
              <Link href="/en"
                className={`text-[16px] transition-colors ${isScrolled ? 'text-[#221815] hover:text-[#c7000b]' : 'text-white hover:text-white/80'}`}>
                EN
              </Link>
            </div>
          </div>
        </div>
      </header>

      <style jsx>{`
        .header-transparent .logo-white { display: inline; }
        .header-transparent .logo-default { display: none; }
        :global(.header-transparent):not(.shadow-md) .logo-white { display: inline; }
        :global(.header-transparent):not(.shadow-md) .logo-default { display: none; }
        .header-transparent.shadow-md .logo-white,
        header:not(.header-transparent) .logo-white { display: none; }
        header:not(.header-transparent) .logo-default { display: inline; }
        header.bg-white .logo-white { display: none; }
        header.bg-white .logo-default { display: inline; }
      `}</style>
    </>
  );
}
