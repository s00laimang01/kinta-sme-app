"use client";

import { type FC, type ReactNode, useEffect, useState } from "react";
import { Loader2 } from "lucide-react";
import { Toaster } from "./ui/sonner";
import { useQuery } from "@tanstack/react-query";
import { useUserStore } from "@/stores/user.store";
import { getUser } from "@/lib/utils";
import { Sidebar } from "./dashboard/sidebar";
import { Header } from "./dashboard/header";
import { usePathname } from "next/navigation";
import { useMediaQuery, useWindowSize } from "@uidotdev/usehooks";
import { useAuthentication } from "@/hooks/use-authentication";

const DashboardProvider: FC<{ children: ReactNode; isMobile?: boolean }> = ({
  children,
}) => {
  const { isAuthenticated: status, isLoading: isAuthenticating } =
    useAuthentication();
  const { setUser } = useUserStore();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const { width = 0 } = useWindowSize();

  const isMobile = (width || 0) < 768;

  // Close sidebar on route change on mobile
  useEffect(() => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  }, [pathname, isMobile]);

  // Use React Query to fetch user data
  const { isLoading, data } = useQuery({
    queryKey: ["user", status],
    queryFn: () => getUser(),
    enabled: status,
  });

  // Set user data when available
  useEffect(() => {
    if (data && status) {
      setUser(data);
    }
  }, [data, status]);

  // Show loading state while checking authentication or fetching data
  if (isAuthenticating || isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 size={50} className="animate-spin" />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white">
      <Toaster position="top-center" richColors />

      <div className="md:flex min-h-screen bg-background w-full">
        <Sidebar open={sidebarOpen} onOpenChange={setSidebarOpen} />
        <div className="flex flex-1 flex-col">
          <Header onMenuButtonClick={() => setSidebarOpen(true)} />
          <main className="flex-1 p-4 md:p-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export default DashboardProvider;
