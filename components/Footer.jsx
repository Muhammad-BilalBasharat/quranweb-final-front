'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

const footerLinks = {
  about: [
    { href: "/", text: "Home" },
    { href: "/about", text: "About Us" },
    { href: "/owner", text: "Owner" },
  ],
  support: [
    { href: "/privacy-policy", text: "Privacy & Policy" },
    { href: "/terms-condition", text: "Terms & Conditions" },
    { href: "/contact-us", text: "Contact Us" },
  ],
  resources: [
    { href: "/how-to-pay", text: "How To Pay" },
    { href: "/faq", text: "FAQ's" }
  ]
};

const footerSocialLinks = [
  { socialIcon: <Facebook className="w-4 h-4"/>, href: "#", hoverColor: "hover:bg-primary" },
  { socialIcon: <Instagram className="w-4 h-4"/>, href: "#", hoverColor: "hover:bg-rose-400" },
  { socialIcon: <Twitter className="w-4 h-4"/>, href: "#", hoverColor: "hover:bg-primary" },
  { socialIcon: <Youtube className="w-4 h-4"/>, href: "#", hoverColor: "hover:bg-red-600" },
]



export default function Footer() {
  const { about, support, resources } = footerLinks;
  return (
    <footer className="text-sm text-white bg-extra-dark mb-0 mt-auto">
      <div className="px-2 xs:px-2 sm:px-5 pt-10 pb-5">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-8 xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="col-span-1 xs:col-span-2 space-y-4 text-xs">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-secondary" />
              <span
                className="transition-colors duration-200 hover:text-secondary"
              >
                learnquranonline.io@gmail.com
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-secondary" />
              <span
                className="transition-colors duration-200 hover:text-secondary"
              >
                +1 (732) 347-5534
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="flex-shrink-0 w-4 h-4 text-secondary" />
              <span className="leading-relaxed transition-colors duration-200 hover:text-secondary">
                Narowal,Punjab,Pakistan
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex pt-4 space-x-4">
              {
                footerSocialLinks.map(({ socialIcon, href, hoverColor }, i) => (
                  <Link key={i}
                    href={href}
                    className={`flex justify-center items-center w-8 h-8 bg-white rounded-full transition-colors duration-200 text-slate-800 hover:text-white ${hoverColor}`}
                  >
                    {socialIcon}
                  </Link>
                ))
              }
            </div>
          </div>

          {/* About Section */}
          <div>
            <h3 className="mb-4 font-semibold text-white">ABOUT</h3>
            <ul className="space-y-3 text-xs">
              {
                about.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-300 transition-colors duration-200 hover:text-white">
                      {link.text}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="mb-4 font-semibold text-white">SUPPORT</h3>
            <ul className="space-y-3 text-xs">
              {
                support.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-300 transition-colors duration-200 hover:text-white">
                      {link.text}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="mb-4 font-semibold text-white">RESOURCES</h3>
            <ul className="space-y-3 text-xs">
              {
                resources.map((link, i) => (
                  <li key={i}>
                    <Link href={link.href} className="text-gray-300 transition-colors duration-200 hover:text-white">
                      {link.text}
                    </Link>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-muted"></div>
        <div className="mt-5 text-xs text-center text-gray-200">
          &copy; {new Date().getFullYear()} Learn Quran Online. All rights reserved.
        </div>
      </div>
    </footer>
  );
}