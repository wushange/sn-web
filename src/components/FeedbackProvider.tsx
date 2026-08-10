"use client";

import { useEffect } from "react";
import { initSiteping, registerLocale } from "@siteping/widget";
import { zh } from "../lib/siteping-zh";

export default function FeedbackProvider() {
  useEffect(() => {
    registerLocale("zh", zh);
    const instance = initSiteping({
      endpoint: "/api/siteping",
      projectName: "shengnuo-web",
      forceShow: true,
      locale: "zh",
      identity: {
        name: "网站访客",
        email: "visitor@soon.zhanglu.tech",
      },
      headers: () => ({
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_SITEPING_API_KEY || ""}`,
      }),
    });
    return () => instance.destroy();
  }, []);

  return null;
}
