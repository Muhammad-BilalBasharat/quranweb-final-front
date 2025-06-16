"use client"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { useState } from "react"

export default function ChangePassword() {
    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = (checked) => {
        setShowPassword(checked);
    };
    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Change Password</CardTitle>
                <CardDescription>Change your password</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid grid-cols-2 gap-5">
                    <div className="grid gap-2">
                        <Label htmlFor="previous-password">Previous Password</Label>
                        <Input type={showPassword ? "text" : "password"} id="previous-password" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="new-password">New Password</Label>
                        <Input type={showPassword ? "text" : "password"} id="new-password" />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="confirm-new-password">Confirm New Password</Label>
                        <Input type={showPassword ? "text" : "password"} id="confirm-new-password" />
                    </div>
                    <div className="flex col-span-2 gap-5 items-center">
                        <Button type="submit" color="primary">
                            Change Password
                        </Button>

                        <div className="flex gap-2 items-center">
                            <Checkbox id="showPassword"
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
