import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // 管理后台固定中文，单独提供 zh 语言包
  const messages = await getMessages({ locale: "zh" });
  return <NextIntlClientProvider messages={messages}>{children}</NextIntlClientProvider>;
}
