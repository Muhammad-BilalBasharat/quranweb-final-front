"use client";
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import Link from "next/link";
import Cookies from "js-cookie"
import { useAuthStore } from "@/api/authStore"

export function SignupForm({
  className,
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = (checked) => {
    setShowPassword(checked);
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    // collect form data here
    // const data = {...};
    // const response = await axiosRequest({ ... });
    // if (response.success) {
    //   const { user, token } = response.data.data;
    //   useAuthStore.getState().setUser(user);
    //   useAuthStore.getState().setToken(token);
    //   Cookies.set("auth_token", token, { secure: true, sameSite: "strict" });
    //   router.push("/dashboard");
    // }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Login to your account</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSignup}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="firstName">First Name</Label>
                <Input id="firstName" type="text" placeholder="First Name" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="lastName">Last Name</Label>
                <Input id="lastName" type="text" placeholder="Last Name" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="username@email.com" required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="password">Password</Label>
                <Input id="password" type={showPassword ? "text" : "password"} required />
              </div>
              <div className="grid gap-3">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input id="confirmPassword" type={showPassword ? "text" : "password"} required />
              </div>
              <div className="flex items-center gap-2">
                <Checkbox id="showPassword"
                  onCheckedChange={handleShowPassword}
                  checked={showPassword}
                />
                <Label htmlFor="showPassword">Show Password</Label>
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Sign Up
                </Button>
              </div>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline underline-offset-4">
                Login
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}