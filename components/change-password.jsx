"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { axiosRequest } from "@/lib/axiosReq"

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm();
    const apiEndpoint = process.env.NEXT_PUBLIC_API_URL + `/auth/change-password`;
    

    const handleShowPassword = (checked) => {
        setShowPassword(checked);
    };

    const onSubmit = async (data) => {
        if (data["new-password"] !== data["confirm-new-password"]) {
            toast.error("New password and confirm password do not match.");
            return;
        }

        const res = await axiosRequest({
            method: "PUT",
            url: apiEndpoint,
            data: {
                oldPassword: data["previous-password"],
                newPassword: data["new-password"],
                confirmPassword: data["confirm-new-password"],
            },
        });

        if (res.success) {
            toast.success("Password changed successfully.");
            reset();
        } else if (Array.isArray(res.error?.error)) {
            res.error.error.forEach((err) => toast.error(err));
        } else {
            toast.error(res.error?.message || "Failed to change password.");
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Change Password</CardTitle>
                <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <Label htmlFor="previous-password">Previous Password</Label>
                        <Input
                            type={showPassword ? "text" : "password"}
                            id="previous-password"
                            {...register("previous-password", { required: "Previous password is required" })}
                        />
                        {errors["previous-password"] && (
                            <span className="text-red-500 text-xs">{errors["previous-password"].message}</span>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input
                            type={showPassword ? "text" : "password"}
                            id="new-password"
                            {...register("new-password", { required: "New password is required" })}
                        />
                        {errors["new-password"] && (
                            <span className="text-red-500 text-xs">{errors["new-password"].message}</span>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                        <Input
                            type={showPassword ? "text" : "password"}
                            id="confirm-new-password"
                            {...register("confirm-new-password", { required: "Please confirm your new password" })}
                        />
                        {errors["confirm-new-password"] && (
                            <span className="text-red-500 text-xs">{errors["confirm-new-password"].message}</span>
                        )}
                    </div>
                    <div className="flex col-span-2 gap-5 items-center">
                        <Button type="submit" color="primary" disabled={isSubmitting}>
                            {isSubmitting ? "Changing..." : "Change Password"}
                        </Button>
                        <div className="flex gap-2 items-center">
                            <Checkbox
                                id="showPassword"
                                onCheckedChange={handleShowPassword}
                                checked={showPassword}
                            />
                            <Label htmlFor="showPassword">Show Password</Label>
                        </div>
                    </div>
                </form>
            </CardContent>
        </Card>
    )
}