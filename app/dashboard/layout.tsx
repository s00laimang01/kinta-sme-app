"use client";

import ClientProvider from "@/components/client-provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import Cookies from "js-cookie";

const Layout = ({ children }: { children: ReactNode }) => {
  const queryClient = new QueryClient();
  console.log("COOKIES", Cookies.get("token"));
  return (
    <QueryClientProvider client={queryClient}>
      <ClientProvider>{children}</ClientProvider>
    </QueryClientProvider>
  );
};

export default Layout;
