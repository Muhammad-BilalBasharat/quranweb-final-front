"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.png"
import { usePathname } from "next/navigation"

export default function Navbar() {
  const pathname = usePathname()
  
  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/contact-us', text: 'Contact Us' },
    { href: '/tuition-fee', text: 'Tuition Fee' },
    { href: '/faq', text: 'FAQ' },
  ]
  return (
    <nav className="flex items-center justify-between px-10 text-sm shadow-md bg-extra-dark py-1.5 top-0 fixed w-full z-50">
        <div className="relative aspect-square w-15 overflow-hidden rounded-full">
            <Image 
            src={logo}
            alt="Logo"
            fill
            className="object-cover"
            />
        </div>
      <ul className="flex items-center gap-5 font-semibold">
        {navLinks.map((link, index) => {
          const isActive = link.href.startsWith('#') 
            ? pathname === '/' && window.location.hash === link.href
            : pathname === link.href
          
          return (
            <li key={index} className="relative">
              <Link 
                href={link.href} 
                className={`text-white hover:text-extra-muted transition duration-300 relative`}
              >
                {link.text}
                {isActive && (
                  <div className="w-5 h-1 rounded-full bg-extra-muted absolute -bottom-2 right-1/2 left-1/2 -translate-x-1/2"></div>
                )}
              </Link>
            </li>
          )
        })}
      </ul>
      <Link href={"/makkah-live"} className="bg-secondary hover:bg-primary transition duration-300 text-white p-2 rounded-sm">Makkah Live</Link>
    </nav>
  )
}