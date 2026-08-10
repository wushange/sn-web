import type { Metadata } from "next";
import { Noto_Sans_SC } from "next/font/google";
import "./globals.css";
import FeedbackProvider from "@/components/FeedbackProvider";

const notoSans = Noto_Sans_SC({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "声诺医疗 — 守护生命健康",
  description: "声诺医疗致力于为人类全生命周期健康管理提供精准有效的服务，从预防、治疗、康复三个领域守护大众健康。",
  keywords: "声诺医疗,医疗健康,预防,治疗,康复,健康管理",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh" className={`${notoSans.className} h-full antialiased`}>
      <body className="min-h-full">
        <FeedbackProvider />
        {children}
      </body>
    </html>
  );
}
