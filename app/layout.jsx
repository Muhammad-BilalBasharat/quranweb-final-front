"use client"
import "./globals.css";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "react-hot-toast";
import { AuthProvider } from "@/components/auth-provider";
import { HydrationBoundary, QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useState } from "react";
import { useEffect } from "react";
import { useAuthStore } from "@/api/authStore";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [queryClient] = useState(() => new QueryClient());

  useEffect(() => {
    useAuthStore.getState().hydrate();
  }, []);

  return (
    <html lang="en" className={cn("h-full antialiased", inter.className)}>
      <body className="flex min-h-screen flex-col">
        <QueryClientProvider client={queryClient}>
          <HydrationBoundary state={undefined}>
            <AuthProvider>{children}</AuthProvider>
          </HydrationBoundary>
        </QueryClientProvider>
        <Toaster />
      </body>
    </html>
  );
}