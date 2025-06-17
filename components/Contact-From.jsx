import { Mail, MapPin, Phone, User, MessageCircle, Send } from "lucide-react";

export default function ContactForm() {
    return (
        <div>
            {/* Contact Information Section */}
            <div className="grid grid-cols-3 gap-5 mb-10">
                {/* Mail address */}
                <div className="flex items-start gap-4 border border-gray-300 p-5 rounded hover:shadow-md hover:-translate-y-1.5 duration-300 transform">
                    <div>
                        <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="mb-1 text-lg font-semibold text-extra-dark">Mail address</h3>
                        <p className="mb-1 text-gray-500">support@akdesignerart.com</p>
                    </div>
                </div>

                {/* Office address */}
                <div className="flex items-start gap-4 border border-gray-300 p-5 rounded hover:shadow-md hover:-translate-y-1.5 duration-300 transform">
                    <div>
                        <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                        <h3 className="mb-1 text-lg font-semibold text-extra-dark">Office address</h3>
                        <p className="mb-1 text-gray-500">Main Shakargarh Road Zafarwal District</p>
                    </div>
                </div>

                {/* Phone Number */}
                <div className="flex items-start gap-4 border border-gray-300 p-5 rounded hover:shadow-md hover:-translate-y-1.5 duration-300 transform">
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
                <div className="p-10 rounded border border-extra-dark">
                    <div className="mb-6">
                        <h2 className="mb-2 text-2xl font-semibold text-extra-dark">Drop Us A Message</h2>
                        <p className="text-sm text-gray-500">Your Email Address Will Not Be Published.</p>
                    </div>
                    <form className="space-y-6">
                        {/* First Row */}
                        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder="Enter Your Full Name *"
                                    className="px-4 py-3 w-full text-sm rounded border border-gray-300 focus:border-extra-dark focus:outline-none"
                                    required
                                />
                                <User className="absolute right-4 top-1/2 w-4 h-4 transform -translate-y-1/2 text-extra-dark" />
                            </div>

                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email *"
                                    className="px-4 py-3 w-full text-sm rounded border border-gray-300 focus:border-extra-dark focus:outline-none"
                                    required
                                />
                                <Mail className="absolute right-4 top-1/2 w-4 h-4 transform -translate-y-1/2 text-extra-dark" />
                            </div>
                        </div>

                        {/* Second Row */}
                        <div className="grid grid-cols-1 gap-6">
                            <div className="relative">
                                <input
                                    type="tel"
                                    placeholder="Enter Your Phone *"
                                    className="px-4 py-3 w-full text-sm rounded border border-gray-300 focus:border-extra-dark focus:outline-none"
                                    required
                                />
                                <Phone className="absolute right-4 top-1/2 w-4 h-4 transform -translate-y-1/2 text-extra-dark" />
                            </div>
                        </div>

                        {/* Message Field */}
                        <div className="relative">
                            <textarea
                                placeholder="Enter Your Message *"
                                rows="6"
                                className="px-4 py-3 w-full text-sm rounded border border-gray-300 resize-none focus:border-extra-dark focus:outline-none"
                                required
                            ></textarea>
                            <MessageCircle className="absolute top-4 right-4 w-4 h-4 text-extra-dark" />
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