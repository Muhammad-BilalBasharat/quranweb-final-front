import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const navLinks = [
    { href: '#home', text: 'Home' },
    { href: '#about', text: 'About' },
    { href: '#contact', text: 'Contact Us' },
    { href: '#fee', text: 'Pay Fee' },
  ]
  return (
    <nav className="flex items-center justify-between px-10 text-sm shadow-sm bg-neutral-50">
        <div className="relative aspect-square w-15 overflow-hidden">
            <Image 
            src={"https://img.freepik.com/free-vector/colorful-letter-gradient-logo-design_474888-2309.jpg?semt=ais_hybrid&w=740"}
            alt="Logo"
            fill
            className="object-cover"
            />
        </div>
      <ul className="flex items-center gap-5 font-semibold">
        {navLinks.map((link, index) => (
          <li key={index} className="hover:text-primary transition hover:-translate-y-0.5 hover:translate-x-0.5 duration-300">
            <Link href={link.href}>{link.text}</Link>
          </li>
        ))}
      </ul>
      <Link href={"#"} className="bg-primary hover:bg-extra-dark transition duration-300 text-white p-2 rounded-sm">Makkah Live</Link>
    </nav>
  )
}