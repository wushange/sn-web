"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

const footerGroups = [
  {
    titleKey: "about",
    href: "/about",
    children: [
      { labelKey: "profile", href: "/about" },
      { labelKey: "history", href: "/about#history" },
      { labelKey: "org", href: "/about#org" },
      { labelKey: "team", href: "/about#team" },
      { labelKey: "honor", href: "/about#honor" },
    ],
  },
  {
    titleKey: "products",
    href: "/products",
    children: [
      { labelKey: "productSdt", href: "/products/arterial-plaque-sdt" },
      { labelKey: "productBci", href: "/products/tfus-bci" },
      { labelKey: "productBeauty", href: "/products/mc200-beauty" },
      { labelKey: "productCore", href: "/products" },
    ],
  },
  {
    titleKey: "newsInvestor",
    href: "/news",
    children: [
      { labelKey: "news", href: "/news" },
      { labelKey: "investor", href: "/investor" },
      { labelKey: "feedback", href: "/feedback" },
    ],
  },
  {
    titleKey: "contact",
    href: "/contact",
    children: [
      { labelKey: "phone", href: "tel:13904631300" },
      { labelKey: "email", href: "mailto:466069861@qq.com" },
      { labelKey: "address", href: "/contact" },
    ],
  },
];

export default function Footer() {
  const t = useTranslations("Footer");

  return (
    <footer className="relative z-[1] bg-[#f5f5f5] md:bg-[url('/images/footer-bg.jpg')] md:bg-cover md:bg-top md:bg-no-repeat">
      <div className="container-custom">
        {/* Top */}
        <div className="flex flex-col md:flex-row pt-[30px] pb-[15px] md:py-[115px] border-b border-[#d9d9d9]">
          <div className="flex-shrink-0 mb-[15px] md:mb-0 md:pr-[60px] flex justify-center md:block">
            <Link href="/">
              <img src="/images/logo8.png" alt="声诺医疗" className="h-[60px] w-auto" />
            </Link>
          </div>

          <div className="flex-1 flex flex-wrap justify-center gap-x-[10px] gap-y-[8px] md:grid md:grid-cols-4 md:gap-8">
            {footerGroups.map((group, index) => (
              <div key={index}>
                <h4 className="text-[14px] md:text-[18px] text-[#221815] mb-0 md:mb-[20px] font-medium">
                  <Link href={group.href}>{t(`groups.${group.titleKey}`)}</Link>
                </h4>
                <ul className="hidden md:block space-y-[15px]">
                  {group.children.map((child, ci) => (
                    <li key={ci}>
                      <Link
                        href={child.href}
                        className="text-[14px] text-[#A2A0A0] hover:text-(--brand-primary) transition-colors"
                      >
                        {t(`links.${child.labelKey}`)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row md:justify-between items-center text-center md:text-left py-[15px] md:py-[45px] text-[12px] md:text-[14px] text-[#A2A0A0]">
          <div>
            {t("copyright")}
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noreferrer"
              className="text-[#8d8d8d] hover:text-(--brand-primary) ml-4 transition-colors"
            >
              {t("icp")}
            </a>
          </div>
          <div className="flex gap-4 mt-[15px] md:mt-0 justify-center md:justify-start">
            <a href="mailto:466069861@qq.com" className="hover:text-(--brand-primary) transition-colors">{t("bottom.email")}</a>
            <Link href="/about" className="hover:text-(--brand-primary) transition-colors">{t("bottom.about")}</Link>
            <Link href="/contact" className="hover:text-(--brand-primary) transition-colors">{t("bottom.contact")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
