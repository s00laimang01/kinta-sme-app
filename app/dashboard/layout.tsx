"use client";

import ClientProvider from "@/components/client-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";

const Layout = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <ClientProvider>{children}</ClientProvider>
    </QueryClientProvider>
  );
};

export default Layout;
