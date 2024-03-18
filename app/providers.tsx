"use client";

import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { ServicesProvider } from "./contexts/ServicesContext";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <AppRouterCacheProvider>
      <ServicesProvider>{children}</ServicesProvider>
    </AppRouterCacheProvider>
  );
}
