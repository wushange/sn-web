import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import { getLocale, getTranslations } from "next-intl/server";
import "./globals.css";
import FeedbackProvider from "@/components/FeedbackProvider";

const notoSans = Noto_Sans_SC({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export async function generateMetadata(): Promise<Metadata> {
  try {
    const t = await getTranslations("Metadata");
    return {
      title: t("title"),
      description: t("description"),
      keywords: t("keywords"),
    };
  } catch {
    // admin / api 等不在 [locale] 内的路由，回退到默认语言
    return {
      title: "声诺医疗 — 守护生命健康",
      description: "声诺医疗致力于为人类全生命周期健康管理提供精准有效的服务。",
      keywords: "声诺医疗,医疗健康",
    };
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let locale = "zh";
  try {
    locale = await getLocale();
  } catch {
    // 未经过 locale 中间件的路由（如 /admin），回退默认语言
  }
  return (
    <html lang={locale} className={`${notoSans.className} h-full antialiased`}>
      <body className="min-h-full">
        <FeedbackProvider />
        {children}
      </body>
    </html>
  );
}
