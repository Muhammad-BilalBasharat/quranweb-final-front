"use client";

import { useAuthStore } from "@/api/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Cookies from "js-cookie";

export default function DashboardClient() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const setToken = useAuthStore((state) => state.setToken);
  const setUser = useAuthStore((state) => state.setUser);
  const router = useRouter();

  useEffect(() => {
    const cookieToken = Cookies.get("auth_token");
    if (!token && cookieToken) {
      setToken(cookieToken);
    }
    if (!user && !cookieToken) {
      router.replace("/login");
    }
  }, [user, token, setToken, setUser, router]);

  if (!user) return null;
  return (
    <>
      <h1>Welcome to the Dashboard</h1>
    </>
  );
}