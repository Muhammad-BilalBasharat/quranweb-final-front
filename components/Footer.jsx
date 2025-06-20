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
    { href: "/faq", text: "FAQ's" },
    { href: "/demo-lecture", text: "Demo Lecture" },
  ]
};
export default function Footer() {
  const { about, support, resources } = footerLinks;
  return (
    <footer className="text-sm text-white bg-extra-dark">
      <div className="px-5 pt-10 pb-5">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 gap-8 mb-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Contact Information */}
          <div className="col-span-2 space-y-4 text-xs">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-secondary" />
              <span
                className="transition-colors duration-200 hover:text-secondary"
              >
                support@akdesignerart.com
              </span>
            </div>

            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-secondary" />
              <span
                className="transition-colors duration-200 hover:text-secondary"
              >
                +923071080008
              </span>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="flex-shrink-0 w-4 h-4 text-secondary" />
              <span className="leading-relaxed transition-colors duration-200 hover:text-secondary">
                Main Shakargarh Road Zafarwal District Narowal Punjab Pakistan
              </span>
            </div>

            {/* Social Media Icons */}
            <div className="flex pt-4 space-x-4">
              <Link
                href="#"
                className="flex justify-center items-center w-8 h-8 bg-white rounded-full transition-colors duration-200 text-slate-800 hover:bg-secondary hover:text-white"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="flex justify-center items-center w-8 h-8 bg-white rounded-full transition-colors duration-200 text-slate-800 hover:bg-secondary hover:text-white"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="flex justify-center items-center w-8 h-8 bg-white rounded-full transition-colors duration-200 text-slate-800 hover:bg-secondary hover:text-white"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="flex justify-center items-center w-8 h-8 bg-white rounded-full transition-colors duration-200 text-slate-800 hover:bg-secondary hover:text-white"
              >
                <Youtube className="w-4 h-4" />
              </Link>
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
          &copy; {new Date().getFullYear()} AK Designer Art. All rights reserved.
        </div>
      </div>
    </footer>
  );
}