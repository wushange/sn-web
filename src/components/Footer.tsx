import Link from "next/link";

const footerLinks = [
  {
    title: "走进声诺",
    href: "/about",
    children: [
      { label: "公司简介", href: "/about" },
      { label: "发展历程", href: "/about" },
      { label: "组织架构", href: "/about" },
      { label: "管理团队", href: "/about" },
      { label: "企业荣誉", href: "/about" },
    ],
  },
  {
    title: "产品与技术",
    href: "/products",
    children: [
      { label: "动脉斑块声动力治疗系统", href: "/products" },
      { label: "经颅聚焦超声脑机接口", href: "/products" },
      { label: "温控型超声导入美容仪", href: "/products" },
      { label: "核心技术", href: "/products" },
    ],
  },
  {
    title: "资讯与融资",
    href: "/news",
    children: [
      { label: "动态资讯", href: "/news" },
      { label: "融资与发展", href: "/investor" },
      { label: "反馈收件箱", href: "/feedback" },
    ],
  },
  {
    title: "联系我们",
    href: "/contact",
    children: [
      { label: "电话：13904631300", href: "tel:13904631300" },
      { label: "邮箱：466069861@qq.com", href: "mailto:466069861@qq.com" },
      { label: "地址：哈尔滨市松北区中源大道15199号", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative z-[1] bg-[#f5f5f5]">
      <div className="container-custom">
        {/* Top */}
        <div className="flex flex-col md:flex-row py-[60px] md:py-[115px] border-b border-[#d9d9d9]">
          <div className="flex-shrink-0 mb-8 md:mb-0 md:pr-[60px] flex justify-center md:block">
            <Link href="/">
              <img src="/images/logo8.png" alt="声诺医疗" className="h-[60px] w-auto" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1">
            {footerLinks.map((group, index) => (
              <div key={index}>
                <h4 className="text-[15px] md:text-[18px] text-[#221815] mb-[20px] font-medium">
                  <Link href={group.href}>{group.title}</Link>
                </h4>
                <ul className="space-y-[10px] md:space-y-[15px]">
                  {group.children.map((child, ci) => (
                    <li key={ci}>
                      <Link
                        href={child.href}
                        className="text-[14px] text-[#A2A0A0] hover:text-(--brand-primary) transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between py-[45px] text-[14px] text-[#A2A0A0]">
          <div>
            © 2026 哈尔滨声诺医疗科技有限公司. All Rights Reserved.
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noreferrer"
              className="text-[#8d8d8d] hover:text-(--brand-primary) ml-4 transition-colors"
            >
              黑ICP备00000000号
            </a>
          </div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <a href="mailto:466069861@qq.com" className="hover:text-(--brand-primary) transition-colors">企业邮箱</a>
            <Link href="/about" className="hover:text-(--brand-primary) transition-colors">关于我们</Link>
            <Link href="/contact" className="hover:text-(--brand-primary) transition-colors">联系我们</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
