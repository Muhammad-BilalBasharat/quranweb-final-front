"use client";
import { Mail, MapPin, Phone, User, MessageCircle, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import {toast} from "react-hot-toast";
import { axiosRequest } from "@/lib/axiosReq";

export default function ContactForm() {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        const endpoint = `${process.env.NEXT_PUBLIC_API_URL}/contact/send-email`;
        const toastId = toast.loading("Sending message...");
        try {
            const res = await axiosRequest({
                method: "POST",
                url: endpoint,
                data,
                headers: { "Content-Type": "application/json" },
            });
            if (res.success) {
                toast.success("Message sent successfully!", { id: toastId });
                reset();
            } else {
                toast.error(res.details || "Failed to send message", { id: toastId });
            }
        } catch (err) {
            toast.error("Something went wrong!", { id: toastId });
        }
    };
    return (
        <div>
            {/* Contact Information Section */}
            <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
                {/* Mail address */}
                <div className="flex items-start gap-4 border border-gray-300 p-4 xs:p-4 sm:p-5 rounded hover:shadow-md hover:-translate-y-1.5 duration-300 transform">
                    <div>
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="mb-1 text-lg font-semibold text-extra-dark">Mail address</h3>
                        <p className="mb-1 text-gray-500">muhammadbasharat@gmail.com</p>
                    </div>
                </div>

                {/* Office address */}
                <div className="flex items-start gap-4 border border-gray-300 p-4 xs:p-4 sm:p-5 rounded hover:shadow-md hover:-translate-y-1.5 duration-300 transform">
                    <div>
                        <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="mb-1 text-lg font-semibold text-extra-dark">Office address</h3>
                        <p className="mb-1 text-gray-500">Main Zafarwal Road Shakargarh City</p>
                    </div>
                </div>

                {/* Phone Number */} 
                <div className="flex items-start gap-4 border border-gray-300 p-4 xs:p-4 sm:p-5 rounded hover:shadow-md hover:-translate-y-1.5 duration-300 transform">
                    <div>
                        <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="mb-1 text-lg font-semibold text-extra-dark">Phone Number</h3>
                        <p className="mb-1 text-gray-500">+923071080008</p>
                    </div>
                </div>
            </div>

            {/* Contact Form Section */}
            <div>
                <div className="p-4 xs:p-4 sm:p-10 rounded border border-extra-dark">
                    <div className="mb-6">
                        <h2 className="mb-2 text-2xl font-semibold text-extra-dark">Drop Us A Message</h2>
                        <p className="text-sm text-gray-500">Your Email Address Will Not Be Published.</p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        {/* First Row */}
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter Your Full Name *"
                                    className="px-4 py-3 w-full text-sm rounded border border-gray-300 focus:border-extra-dark focus:outline-none"
                                    {...register("name", { required: "Full Name is required" })}
                                />
                                <User className="absolute right-4 top-1/2 w-4 h-4 transform -translate-y-1/2 text-extra-dark" />
                                {errors.name && (
                                    <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>
                                )}
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email *"
                                    className="px-4 py-3 w-full text-sm rounded border border-gray-300 focus:border-extra-dark focus:outline-none"
                                    {...register("email", { required: "Email is required" })}
                                />
                                <Mail className="absolute right-4 top-1/2 w-4 h-4 transform -translate-y-1/2 text-extra-dark" />
                                {errors.email && (
                                    <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="Enter Your Phone *"
                                    className="px-4 py-3 w-full text-sm rounded border border-gray-300 focus:border-extra-dark focus:outline-none"
                                    {...register("phone", { required: "Phone is required" })}
                                />
                                <Phone className="absolute right-4 top-1/2 w-4 h-4 transform -translate-y-1/2 text-extra-dark" />
                                {errors.phone && (
                                    <p className="text-xs text-red-500 mt-1">{errors.phone.message}</p>
                                )}
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                            <textarea
                                placeholder="Enter Your Message *"
                                rows="6"
                                className="px-4 py-3 w-full text-sm rounded border border-gray-300 resize-none focus:border-extra-dark focus:outline-none"
                                {...register("message", { required: "Message is required" })}
                            ></textarea>
                            <MessageCircle className="absolute top-4 right-4 w-4 h-4 text-extra-dark" />
                            {errors.message && (
                                <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-end">
                            <button
                                type="submit"
                                className="flex gap-2 items-center px-4 py-2 font-semibold text-white rounded transition-colors bg-dark hover:bg-extra-dark"
                            >
                                Send Message
                                <Send className="w-4 h-4" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}