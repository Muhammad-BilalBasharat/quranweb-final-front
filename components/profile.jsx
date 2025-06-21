"use client"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import { Card, CardHeader, CardContent, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { axiosRequest } from "@/lib/axiosReq"
import { Loader } from "lucide-react"
import toast, { Toaster } from "react-hot-toast"

export default function Profile() {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [saving, setSaving] = useState(false)

    const { register, handleSubmit, reset, formState: { isDirty } } = useForm({
        defaultValues: { name: "", email: "", phone: "", address: "" }
    })

    useEffect(() => {
        async function fetchUser() {
            const res = await axiosRequest({
                method: "GET",
                url: process.env.NEXT_PUBLIC_API_URL + "/auth/me",
            })
            if (res.success) {
                setUser(res.data.data)
                reset({
                    name: res.data.data.name || "",
                    email: res.data.data.email || "",
                    phone: res.data.data.phone || "",
                    address: res.data.data.address || "",
                })
            }
            setLoading(false)
        }
        fetchUser()
    }, [reset])

const onSubmit = async (data) => {
    setSaving(true)
    const res = await axiosRequest({
        method: "PUT",
        url: process.env.NEXT_PUBLIC_API_URL + `/auth/users/${user._id}`,
        data,
    })
    if (res.success) {
        setUser({
            ...res.data.data,
            phone: data.phone,
            address: data.address,
        });
        reset({
            name: res.data.data.name || "",
            email: res.data.data.email || "",
            phone: data.phone,
            address: data.address,
        });
        toast.success("Profile updated successfully!");
    } else {
        toast.error(res.error?.message || "Failed to update profile.")
    }
    setSaving(false)
}

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[60vh]">
                <div className="flex flex-col items-center gap-3">
                    <Loader className="animate-spin text-primary w-12 h-12" />
                    <span className="text-lg text-muted-foreground">Loading profile...</span>
                </div>
                <Toaster position="top-center" />
            </div>
        )
    }

    if (!user) return <div className="flex items-center justify-center min-h-[60vh] text-lg text-destructive">User not found.<Toaster position="top-center" /></div>

    return (
        <>
            <Toaster position="top-center" />
            <Card>
                <CardHeader>
                    <CardTitle className="text-xl">Profile Information</CardTitle>
                    <CardDescription>View and manage your personal information</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit(onSubmit)}>
                        <div className="space-y-2">
                            <Label htmlFor="name">Full Name</Label>
                            <Input id="name" {...register("name")} disabled={saving} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email Address</Label>
                            <Input id="email" type="email" {...register("email")} disabled={saving} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone Number</Label>
                            <Input id="phone" {...register("phone")} disabled={saving} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="address">Address</Label>
                            <Input id="address" {...register("address")} disabled={saving} />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="role">Role</Label>
                            <Input id="role" value={user.role === "admin" ? "Admin" : user.role || ""} readOnly />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="joinDate">Joined Date</Label>
                            <Input id="joinDate" value={user.createdAt ? new Date(user.createdAt).toLocaleDateString() : ""} readOnly />
                        </div>
                        <div className="col-span-2 flex gap-3 items-center">
                            <Button type="submit" disabled={saving || !isDirty} className="mt-2">
                                {saving ? (
                                    <Loader className="animate-spin w-5 h-5 mr-2" />
                                ) : (
                                    "Save Changes"
                                )}
                            </Button>
                        </div>
                    </form>
                </CardContent>
                <CardFooter className="flex justify-end">
                    <div className="text-sm text-muted-foreground">
                        Last updated: {user.updatedAt ? new Date(user.updatedAt).toLocaleDateString() : ""}
                    </div>
                </CardFooter>
            </Card>
        </>
    )
}