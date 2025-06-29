"use client"
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
import Link from "next/link"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { axiosRequest } from "@/lib/axiosReq"
import { useAuthStore } from "@/api/authStore"
import Cookies from "js-cookie"

export function LoginForm({
  className,
  ...props
}) {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const router = useRouter();

  let apiEndpoint = process.env.NEXT_PUBLIC_API_URL_DASH + "/auth/login";

  const onSubmit = async (data) => {
    const response = await axiosRequest({
      url: apiEndpoint,
      method: "POST",
      data,
    });

    reset();

    if (response.success) {
      toast.success("Login successful!");
      const { user, token } = response.data.data;
      useAuthStore.getState().setUser(user);
      useAuthStore.getState().setToken(token);
      Cookies.set("auth_token", token, { secure: true, sameSite: "strict" });
      router.push("/dashboard");
    } else {
      toast.error(
        response.error?.message || response.error || "Login failed. Please try again."
      );
    }
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
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="email">Email/Username</Label>
                <Input id="email" type="email" placeholder="m@example.com" {...register("email")} />
              </div>
              <div className="grid gap-3">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline">
                    Forgot your password?
                  </Link> */}
                </div>
                <Input id="password" type="password" {...register("password")} />
              </div>
              <div className="flex flex-col gap-3">
                <Button type="submit" className="w-full">
                  Login
                </Button>
              </div>
            </div>
            {/* <div className="mt-4 text-center text-sm">
              Don&apos;t have an account?{" "}
              <Link href="/signup" className="underline underline-offset-4">
                Sign Up
              </Link>
            </div> */}
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
