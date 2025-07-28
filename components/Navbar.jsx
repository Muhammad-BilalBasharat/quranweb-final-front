"use client"
import Image from "next/image"
import Link from "next/link"
import logo from "@/public/logo.png"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Header from "./Header"


export default function Navbar() {
  const pathname = usePathname()
  const [mobileOpen, setMobileOpen] = useState(false)

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About' },
    { href: '/contact-us', text: 'Contact Us' },
    { href: '/tuition-fee', text: 'Tuition Fee' },
    { href: '/faq', text: 'FAQ' },
    { href: '/learn-quran', text: 'Learn Quran' },
  ]

  return (
    <>
      <Header />
      <nav className="flex items-center justify-between px-2 xs:px-4 sm:px-6 lg:px-10 text-sm shadow-md bg-extra-dark py-1.5 top-8 fixed w-full z-50">
        {/* Logo - Left Side */}
        <div className="flex items-center gap-2">
          <div className="relative aspect-square w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 overflow-hidden rounded-full">
            <Image
              src={logo}
              alt="Logo"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Desktop Navigation - Center */}
        <ul className="hidden md:flex items-center gap-2 md:gap-3 lg:gap-5 font-semibold absolute left-1/2 -translate-x-1/2 whitespace-nowrap">
          {navLinks.map((link, index) => {
            const isActive = link.href.startsWith('#')
              ? pathname === '/' && typeof window !== "undefined" && window.location.hash === link.href
              : pathname === link.href
            return (
              <li key={index} className="relative">
                <Link
                  href={link.href}
                  className="text-white hover:text-extra-muted transition duration-300 relative text-xs md:text-sm whitespace-nowrap"
                >
                  {link.text}
                  {isActive && (
                    <div className="w-5 h-1 rounded-full bg-extra-muted absolute -bottom-2 left-1/2 -translate-x-1/2"></div>
                  )}
                </Link>
              </li>
            )
          })}
        </ul>

        {/* Makkah Live Button - Right Side */}
        <Link
          href="/makkah-live"
          className="hidden md:inline-block bg-secondary hover:bg-primary transition duration-300 text-white px-3 py-2 rounded-sm text-xs sm:text-sm font-semibold whitespace-nowrap"
        >
          Makkah Live
        </Link>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden flex items-center justify-center"
          onClick={() => setMobileOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5 xs:w-7 xs:h-7 text-white" />
        </button>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="fixed inset-0 z-[100] bg-black/40 flex md:hidden">
            {/* Drawer Content */}
            <div className="bg-extra-dark w-3/4 xs:w-3/4 max-w-xs h-full p-5 xs:p-5 flex flex-col">
              {/* Header */}
              <div className="flex items-center justify-between mb-5 xs:mb-5">
                <div className="relative aspect-square w-12 h-12 xs:w-12 xs:h-12 overflow-hidden rounded-full">
                  <Image
                    src={logo}
                    alt="Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <button
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5 xs:w-7 xs:h-7 text-white" />
                </button>
              </div>

              {/* Mobile Navigation */}
              <ul className="flex flex-col gap-5 xs:gap-5 font-semibold mb-5 xs:mb-5">
                {navLinks.map((link, index) => {
                  const isActive = link.href.startsWith('#')
                    ? pathname === '/' && typeof window !== "undefined" && window.location.hash === link.href
                    : pathname === link.href
                  return (
                    <li key={index} className="relative">
                      <Link
                        href={link.href}
                        className="text-white hover:text-extra-muted transition duration-300 relative block py-1.5 text-sm xs:text-base"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.text}
                        {isActive && (
                          <div className="w-5 h-1 rounded-full bg-extra-muted absolute -bottom-1 left-0"></div>
                        )}
                      </Link>
                    </li>
                  )
                })}
              </ul>

              {/* Makkah Live Button */}
              <Link
                href="/makkah-live"
                className="bg-secondary hover:bg-primary transition duration-300 text-white p-3 rounded-sm text-center font-semibold text-sm xs:text-base"
                onClick={() => setMobileOpen(false)}
              >
                Makkah Live
              </Link>
            </div>

            {/* Overlay */}
            <div className="flex-1" onClick={() => setMobileOpen(false)} />
          </div>
        )}
      </nav>
    </>
  )
}