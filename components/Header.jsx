import { Mail, Phone, User } from "lucide-react"
import Link from "next/link"

export default function Header() {
  return (
    <header className="bg-primary text-white px-5 py-2 fixed top-0 w-full z-50 text-xs">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div className="flex items-center space-x-5">

          <div className="flex items-center space-x-0.5">
            <Mail size={14} />
            <span>learnquranonline.io@gmail.com</span>
          </div>

          <div className="flex items-center space-x-0.5">
            <Phone size={14} />
            <span>+1 (732) 347-5534</span>
          </div>

        </div>
        <div className="sm:flex items-center space-x-0.5 xs:hidden">
          <User size={14} />
          <Link href="/contact-us" className="hover:underline underline-offset-2">
            Contact Us
          </Link>
        </div>
      </div>
    </header>
  )
}
