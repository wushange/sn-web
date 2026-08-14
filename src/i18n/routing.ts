import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // 默认语言放在第一位
  locales: ["zh", "en"],
  defaultLocale: "zh",
  // 中文不带前缀（/about），英文带 /en 前缀（/en/about）
  localePrefix: "as-needed",
});
