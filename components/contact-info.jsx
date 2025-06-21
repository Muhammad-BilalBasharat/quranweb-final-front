"use client"
import { useEffect, useState } from "react"
import { useForm } from "react-hook-form"
import toast from "react-hot-toast"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { axiosRequest } from "@/lib/axiosReq"

export default function ContactInfo() {
    const [loading, setLoading] = useState(true)
    const { register, handleSubmit, reset, setValue, watch, formState: { isSubmitting, errors } } = useForm()
    const [contactId, setContactId] = useState(null)
    const apiEndpoint = process.env.NEXT_PUBLIC_API_URL + `/contact/web-contact`;

    // Fetch contact info on mount
useEffect(() => {
    const fetchContact = async () => {
        setLoading(true)
        const res = await axiosRequest({
            method: "GET",
            url: apiEndpoint,
        })
        if (res.success && res.data && res.data.data && res.data.data[0]) {
            reset(res.data.data[0])
            setContactId(res.data.data[0]._id)
        }
        setLoading(false)
    }
    fetchContact()
}, [reset, apiEndpoint])

    const onSubmit = async (data) => {
        let res
        if (contactId) {
            // Update
            res = await axiosRequest({
                method: "PUT",
                url: `${apiEndpoint}/${contactId}`,
                data,
            })
        } else {
            // Create
            res = await axiosRequest({
                method: "POST",
                url: apiEndpoint,
                data,
            })
        }

        if (res.success) {
            toast.success("Contact info saved!")
            if (res.data && res.data.data && res.data.data[0]) {
                setContactId(res.data.data[0]._id)
                reset(res.data.data[0])
            }
        } else if (Array.isArray(res.error?.error)) {
            res.error.error.forEach((err) => toast.error(err))
        } else {
            toast.error(res.error?.message || "Failed to save contact info.")
        }
    }

    const watchAllFields = watch();

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">Profile Information</CardTitle>
                <CardDescription>View and manage your contact information</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <Label htmlFor="phoneOne">Phone One</Label>
                        <Input type="text" id="phoneOne" {...register("phoneOne")} disabled={loading} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phoneTwo">Phone Two</Label>
                        <Input type="text" id="phoneTwo" {...register("phoneTwo")} disabled={loading} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phoneThree">Phone Three</Label>
                        <Input type="text" id="phoneThree" {...register("phoneThree")} disabled={loading} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="whatsapp">Whatsapp Number</Label>
                        <Input type="text" id="whatsapp" {...register("whatsApp")} disabled={loading} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input type="email" id="email" {...register("email")} disabled={loading} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Input type="text" id="address" {...register("address")} disabled={loading} />
                    </div>

                    <CardHeader className={"col-span-2 -px-5"}>
                        <CardTitle className="text-xl">Social Links</CardTitle>
                        <CardDescription>View and manage your social links</CardDescription>
                    </CardHeader>

                    <div className="grid gap-2">
                        <Label htmlFor="facebook">Facebook Link</Label>
                        <Input type="text" id="facebook" {...register("facebook")} disabled={loading} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="twitter">Twitter Link</Label>
                        <Input type="text" id="twitter" {...register("twitter")} disabled={loading} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="instagram">Instagram Link</Label>
                        <Input type="text" id="instagram" {...register("instagram")} disabled={loading} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="youtube">Youtube Link</Label>
                        <Input type="text" id="youtube" {...register("youtube")} disabled={loading} />
                    </div>

                    <div className="flex col-span-2 gap-5 items-center">
                        <Button type="submit" color="primary" disabled={isSubmitting || loading}>
                            {isSubmitting ? "Saving..." : "Update Contact Info"}
                        </Button>
                    </div>
                </form>
                {/* Debug: Show real-time form values */}
                <pre className="col-span-2 mt-4 bg-gray-100 p-2 text-xs rounded">
                    {JSON.stringify(watchAllFields, null, 2)}
                </pre>
            </CardContent>
        </Card>
    )
}