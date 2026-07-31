"use client";

import { createContext, useContext, useState, useCallback, type ReactNode } from "react";

const BannerContext = createContext<{
  current: number;
  total: number;
  goTo: (i: number) => void;
}>({
  current: 0,
  total: 3,
  goTo: () => {},
});

export function BannerProvider({ children }: { children: ReactNode }) {
  const [current, setCurrent] = useState(0);
  const goTo = useCallback((i: number) => setCurrent(i), []);
  return (
    <BannerContext.Provider value={{ current, total: 3, goTo }}>
      {children}
    </BannerContext.Provider>
  );
}

export function useBanner() {
  return useContext(BannerContext);
}
