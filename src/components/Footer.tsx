import Link from "next/link";

const footerLinks = [
  {
    title: "走进声诺",
    href: "/about",
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
    title: "动态资讯",
    href: "/news",
    children: [
      { label: "新闻资讯", href: "/news" },
    ],
  },
  {
    title: "产品与服务",
    href: "/products",
    children: [
      { label: "产品", href: "/products/list" },
      { label: "服务", href: "/service" },
      { label: "创新", href: "/innovate" },
    ],
  },
  {
    title: "电商平台",
    href: "#",
    children: [
      { label: "大药房旗舰店", href: "#" },
      { label: "京东大药房旗舰店", href: "#" },
      { label: "天猫旗舰店", href: "#" },
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
                        className="text-[14px] text-[#A2A0A0] hover:text-[#c7000b] transition-colors"
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
            © 2025 声诺医疗股份有限公司. All Rights Reserved.
            <a
              href="https://beian.miit.gov.cn"
              target="_blank"
              rel="noreferrer"
              className="text-[#8d8d8d] hover:text-[#c7000b] ml-4 transition-colors"
            >
              京ICP备00000000号
            </a>
          </div>
          <div className="flex gap-4 mt-3 md:mt-0">
            <Link href="#" className="hover:text-[#c7000b] transition-colors">企业邮箱</Link>
            <Link href="/join" className="hover:text-[#c7000b] transition-colors">加入我们</Link>
            <Link href="/contact" className="hover:text-[#c7000b] transition-colors">联系我们</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
