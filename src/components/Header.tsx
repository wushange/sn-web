"use client";

import { useState, useEffect, useRef } from "react";
import { useTranslations, useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

interface NavChild {
  labelKey: string;
  href: string;
  external?: boolean;
}

interface NavItem {
  key: string;
  labelKey: string;
  href: string;
  children?: NavChild[];
  descKey?: string;
  image?: string;
}

const navItems: NavItem[] = [
  { key: "home", labelKey: "home", href: "/" },
  {
    key: "about",
    labelKey: "about",
    href: "/about",
    descKey: "about",
    image: "/images/subnav-about.jpg",
    children: [
      { labelKey: "profile", href: "/about#profile" },
      { labelKey: "history", href: "/about#history" },
      { labelKey: "org", href: "/about#org" },
      { labelKey: "honor", href: "/about#honor" },
    ],
  },
  {
    key: "products",
    labelKey: "products",
    href: "/products",
    descKey: "products",
    image: "/images/subnav-products.jpg",
    children: [
      { labelKey: "productSdt", href: "/products/arterial-plaque-sdt" },
      { labelKey: "productBci", href: "/products/tfus-bci" },
      { labelKey: "productRecognition", href: "/products/ultrasound-plaque-recognition" },
    ],
  },
  {
    key: "news",
    labelKey: "news",
    href: "/news",
    descKey: "news",
    image: "/images/subnav-news.jpg",
    children: [{ labelKey: "newsList", href: "/news" }],
  },
  {
    key: "investor",
    labelKey: "investor",
    href: "/investor",
    descKey: "investor",
    image: "/images/subnav-investor.jpg",
    children: [
      { labelKey: "funding", href: "/investor#funding" },
      { labelKey: "plan", href: "/investor#plan" },
    ],
  },
  { key: "contact", labelKey: "contact", href: "/contact" },
];

export default function Header() {
  const t = useTranslations("Header");
  const tCommon = useTranslations("Common");
  const pathname = usePathname();
  const locale = useLocale();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<Record<number, boolean>>({});
  const [isHoveringHeader, setIsHoveringHeader] = useState(false);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const hideTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // 当前激活的导航项索引：根据路由匹配（pathname 不含 locale 前缀）
  const activeIndex = navItems.findIndex((item) =>
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href),
  );

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
    setActiveDropdown(hasChildren ? index : null);
  };
  const handleMouseLeave = () => {
    setHoverIndex(null);
    hideTimer.current = setTimeout(() => setActiveDropdown(null), 200);
  };

  const toggleMobileExpand = (index: number) => {
    setMobileExpanded((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  const otherLocale = locale === "zh" ? "en" : "zh";

  return (
    <>
      {/* Head background overlay - shows when dropdown is open */}
      <div
        className={`sn-desktop-only fixed inset-0 z-[28] bg-black/60 transition-all duration-500 ${activeDropdown !== null ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
        onClick={() => setActiveDropdown(null)}
      />

      {/* ===== Mobile Header ===== */}
      <div className="sn-mobile-only sn-mobile-header fixed top-0 left-0 w-full z-[1001] bg-white flex items-center justify-between h-[56px] px-4 shadow-sm">
        <Link href="/"><img src="/images/logo5.png" alt="声诺医疗" className="h-9 w-auto" /></Link>
        <div className="flex items-center gap-3">
          <Link href={pathname} locale={otherLocale} className="text-sm text-[#333]">{t("lang")}</Link>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="w-6 h-6 flex flex-col justify-center gap-[5px] relative">
            <span className={`block w-full h-[2px] bg-[#333] transition-all duration-300 ${mobileMenuOpen ? "rotate-45 translate-y-[7px]" : ""}`} />
            <span className={`block w-full h-[2px] bg-[#333] transition-all duration-300 ${mobileMenuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-full h-[2px] bg-[#333] transition-all duration-300 ${mobileMenuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile overlay + menu */}
      <div className={`sn-mobile-only fixed inset-0 bg-black/50 z-[1000] transition-opacity duration-300 ${mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"}`}
        onClick={() => setMobileMenuOpen(false)} />
      <div className={`sn-mobile-only fixed top-[56px] right-0 bottom-0 w-full max-w-[320px] bg-white z-[1001] transition-transform duration-300 overflow-y-auto ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
        <div className="py-2">
          {navItems.map((item, index) => (
            <div key={index} className="border-b border-gray-100">
              <div className="flex items-center justify-between px-5 py-3 cursor-pointer"
                onClick={() => (item.children ? toggleMobileExpand(index) : setMobileMenuOpen(false))}>
                <Link href={item.href} className="text-[15px] text-[#333]" onClick={() => setMobileMenuOpen(false)}>{t(`nav.${item.labelKey}`)}</Link>
                {item.children && <span className={`text-xs transition-transform ${mobileExpanded[index] ? "rotate-90" : ""}`}>▶</span>}
              </div>
              {item.children && mobileExpanded[index] && (
                <div className="bg-gray-50 py-1">
                  {item.children.map((child, ci) => (
                    <Link key={ci} href={child.href} className="block px-8 py-2.5 text-sm text-[#666] hover:text-(--brand-primary)"
                      onClick={() => setMobileMenuOpen(false)}
                      {...(child.external ? { target: "_blank", rel: "noreferrer" } : {})}>{t(`submenu.${child.labelKey}`)}</Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ===== PC Header ===== */}
      <header
        className={`pc-header sn-desktop-only ${headerFixed ? "headerFixed" : "headerTransparent"}`}
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
                  className={`nav_a relative ${index === activeIndex ? "on" : ""} ${hoverIndex !== null && hoverIndex !== index ? "no" : ""}`}
                >
                  {t(`nav.${item.labelKey}`)}
                </Link>

                {/* ===== Dropdown ===== */}
                {item.children && activeDropdown === index && (
                  <div
                    className="subNavBox subNavBox-fx bg-white border-t border-[#E6E6E6] overflow-hidden"
                    style={{ position: "fixed", left: 0, right: 0 }}
                    onMouseEnter={() => handleMouseEnter(index, true)}
                  >
                    {/* Left panel */}
                    <div className="subNvLx subNvLx-fx">
                      <div className="subNvtp absolute left-[60px] right-[60px] top-1/2 -translate-y-1/2">
                        <strong className="block text-[24px] font-normal leading-[40px] mb-[10px] text-[#333]">{t(`nav.${item.labelKey}`)}</strong>
                        <p className="text-[14px] leading-[28px] text-[#808080] mb-[15px]">{item.descKey ? t(`desc.${item.descKey}`) : ""}</p>
                        <Link href={item.href} className="subNv_m inline-block text-[14px] leading-[28px] text-(--brand-primary) relative">
                          {tCommon("learnMore")}
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
                              {t(`submenu.${child.labelKey}`)}
                            </Link>
                          </dd>
                        ))}
                      </dl>
                      {item.image && (
                        <img
                          src={item.image}
                          alt={item.labelKey}
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
            <Link href={pathname} locale={otherLocale}><span>{t("lang")}</span></Link>
          </div>
        </div>
      </header>
    </>
  );
}
