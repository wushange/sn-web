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
  {
    label: "首页",
    href: "/",
  },
  {
    label: "走进声诺",
    href: "/about",
    description: "声诺医疗是国家重点高新技术企业，致力于从预防、治疗、康复三个领域为人类全生命周期健康管理提供精准有效的服务。",
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
    label: "产品与服务",
    href: "/products",
    description: "公司拥有中药类、化学药类、生物制品类、大健康产品类等各类品牌产品，品类覆盖心脑血管、补肾、补血、妇儿、五官科等各个领域。",
    image: "/images/subnav-products.jpg",
    children: [
      { label: "产品", href: "/products/list" },
      { label: "服务", href: "/service" },
      { label: "创新", href: "/innovate" },
    ],
  },
  {
    label: "动态资讯",
    href: "/news",
    description: "了解更多声诺医疗的企业资讯信息。",
    image: "/images/subnav-news.jpg",
    children: [
      { label: "新闻资讯", href: "/news" },
    ],
  },
  {
    label: "社会责任",
    href: "/responsibility",
  },
  {
    label: "投资者关系",
    href: "/investor",
    description: "声诺医疗践行守护生命健康的使命，坚持贯彻传承与创新相结合的发展理念，引领民族健康产业。",
    image: "/images/subnav-investor.jpg",
    children: [
      { label: "公司公告", href: "#", external: true },
      { label: "投资者教育", href: "/investor/education" },
      { label: "股票行情", href: "#", external: true },
    ],
  },
  {
    label: "联系我们",
    href: "/contact",
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<number, boolean>>({});
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
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
      {/* Mobile Header */}
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-300 lg:hidden ${mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
        onClick={() => setMobileMenuOpen(false)}
      />
      <div className={`fixed top-[56px] right-0 bottom-0 w-full max-w-[320px] bg-white z-[1001] transition-transform duration-300 overflow-y-auto lg:hidden ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="py-2">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100">
              <div
                className="flex items-center justify-between px-5 py-3 cursor-pointer"
                onClick={() => {
                  if (item.children) {
                    toggleMobileExpand(index);
                  } else {
                    setMobileMenuOpen(false);
                  }
                }}
              >
                <Link href={item.href} className="text-[15px] text-[#333]" onClick={() => setMobileMenuOpen(false)}>
                  {item.label}
                </Link>
                {item.children && (
                  <span className={`text-xs transition-transform ${mobileExpanded[index] ? 'rotate-90' : ''}`}>▶</span>
                )}
              </div>
              {item.children && mobileExpanded[index] && (
                <div className="bg-gray-50 py-1">
                  {item.children.map((child, ci) => (
                    <Link
                      key={ci}
                      href={child.href}
                      className="block px-8 py-2.5 text-sm text-[#666] hover:text-[#c7000b]"
                      onClick={() => setMobileMenuOpen(false)}
                      {...(child.external ? { target: "_blank", rel: "noreferrer" } : {})}
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* PC Header */}
      <header
        className={`hidden lg:block fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
        }`}
      >
        <div className="container-custom flex items-center justify-between">
          <Link href="/" className="flex-shrink-0 py-0 flex items-center h-[80px]">
            <img
              src={isScrolled ? "/images/logo.png" : "/images/logo_w.png"}
              alt="声诺医疗"
              className="h-[50px] w-auto transition-all duration-300"
            />
          </Link>

          <div className="flex items-center">
            <nav className="flex items-center" onMouseLeave={handleMouseLeave}>
              {navItems.map((item, index) => (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => item.children && handleMouseEnter(index)}
                >
                  <Link
                    href={item.href}
                    className={`block px-[18px] py-[28px] text-[16px] transition-colors duration-300 ${
                      isScrolled
                        ? 'text-[#333] hover:text-[#c7000b]'
                        : 'text-white hover:text-white/80'
                    }`}
                  >
                    {item.label}
                  </Link>

                  {/* Dropdown */}
                  {item.children && activeDropdown === index && (
                    <div
                      className="absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-lg flex overflow-hidden min-w-[600px]"
                      onMouseEnter={() => handleMouseEnter(index)}
                    >
                      <div className="w-[280px] bg-[#fafafa] p-6 flex flex-col justify-between">
                        <div>
                          <h3 className="text-lg font-bold text-[#221815] mb-2">{item.label}</h3>
                          <p className="text-sm text-[#808080] leading-relaxed">{item.description}</p>
                        </div>
                        <Link href={item.href} className="text-sm text-[#c7000b] hover:underline mt-4 inline-block">
                          了解详情 →
                        </Link>
                      </div>
                      <div className="flex-1 p-4 flex items-center gap-4">
                        <div className="flex-1">
                          {item.children.map((child, ci) => (
                            <Link
                              key={ci}
                              href={child.href}
                              className="block py-2.5 px-3 text-[15px] text-[#333] hover:text-[#c7000b] transition-colors"
                              {...(child.external ? { target: "_blank", rel: "noreferrer" } : {})}
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
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

            {/* Language Switch */}
            <div className={`relative ml-4 pl-4 border-l ${isScrolled ? 'border-gray-300' : 'border-white/30'}`}>
              <Link
                href="/en"
                className={`text-[15px] transition-colors ${isScrolled ? 'text-[#333] hover:text-[#c7000b]' : 'text-white hover:text-white/80'}`}
              >
                EN
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
