import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // 默认语言放在第一位
  locales: ["zh", "en"],
  defaultLocale: "zh",
  // 中英文都带前缀（/zh/about、/en/about），避免默认语言在代理环境下的重定向循环
  localePrefix: "always",
});
