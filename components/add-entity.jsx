"use client"
import { useForm } from "react-hook-form";
import {toast} from "react-hot-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Button } from "./ui/button";
import { axiosRequest } from "@/lib/axiosReq";

export default function AddEntityForm({ formTitle, entityType, onSuccess }) {
    const apiEndpoint = process.env.NEXT_PUBLIC_API_URL + `/${entityType}/create-${entityType}`;
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    const onSubmit = async (data) => {
        try {
            const response = await axiosRequest({
                method: "POST",
                url: apiEndpoint,
                data
            });
            onSuccess?.(response.data);
            reset();
            toast.success(`${capitalize(entityType)} added successfully!`);
        } catch (error) {
            console.error("Error submitting form:", error);
            toast.error(`Failed to add ${capitalize(entityType)}. Please try again.`);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-xl">{formTitle}</CardTitle>
                <CardDescription>Add a new {entityType} to the system</CardDescription>
            </CardHeader>
            <CardContent>
                <form className="grid grid-cols-2 gap-5" onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid gap-2">
                        <Label htmlFor="name">{capitalize(entityType)} Name</Label>
                        <Input type="text" id="name" {...register("name", { required: true })} />
                        {errors.name && <span className="text-xs text-red-500">Name is required</span>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">{capitalize(entityType)} Email</Label>
                        <Input type="email" id="email" {...register("email", { required: true })} />
                        {errors.email && <span className="text-xs text-red-500">Email is required</span>}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">{capitalize(entityType)} Phone</Label>
                        <Input type="tel" id="phone" {...register("phone", { required: true })} />
                        {errors.phone && <span className="text-xs text-red-500">Phone is required</span>}
                    </div>
                    <div className="flex items-center col-span-2 gap-5">
                        <Button type="submit">
                            Add {capitalize(entityType)}
                        </Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
}