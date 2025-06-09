"use client";

import "./globals.css";
import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const qc = new QueryClient();

  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Toaster position="top-center" richColors />
        <QueryClientProvider client={qc}>{children}</QueryClientProvider>
      </body>
    </html>
  );
}
