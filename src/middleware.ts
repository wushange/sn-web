import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

export default createMiddleware(routing);

export const config = {
  // 排除 API、管理后台、静态资源；admin 在 [locale] 之外，不经过 locale 中间件
  matcher: "/((?!api|admin|_next|_vercel|.*\\..*).*)",
};
