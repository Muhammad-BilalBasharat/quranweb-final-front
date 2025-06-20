"use client";
import { useAuthStore } from "@/api/authStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  const user = useAuthStore((state) => state.user);
  const token = useAuthStore((state) => state.token);
  const router = useRouter();

  useEffect(() => {
    if (!user && !token) {
      router.replace("/login");
    }
  }, [user,token, router]);

  if (!user) return null;
  return (
    <>
      <h1>Welcome to the Dashboard</h1>
    </>
  );
}
