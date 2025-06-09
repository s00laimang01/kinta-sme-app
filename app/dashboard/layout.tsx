"use client";

import ClientProvider from "@/components/client-provider";
import type { ReactNode } from "react";
import Cookies from "js-cookie";

const Layout = ({ children }: { children: ReactNode }) => {
  console.log("COOKIES", Cookies.get("token"));
  return <ClientProvider>{children}</ClientProvider>;
};

export default Layout;
