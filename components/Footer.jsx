'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-extra-dark text-white text-sm">
      <div className="px-5 pt-10 pb-5">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Contact Information */}
          <div className="col-span-2 space-y-4 text-xs">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-secondary" />
              <span
                className="hover:text-secondary transition-colors duration-200"
              >
                support@akdesignerart.com
              </span>
            </div>
            
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-secondary" />
              <span
                className="hover:text-secondary transition-colors duration-200"
              >
                +923071080008
              </span>
            </div>
            
            <div className="flex items-start space-x-3">
              <MapPin className="w-4 h-4 text-secondary flex-shrink-0" />
              <span className="hover:text-secondary transition-colors duration-200 leading-relaxed">
                Main Shakargarh Road Zafarwal District Narowal Punjab Pakistan
              </span>
            </div>
            
            {/* Social Media Icons */}
            <div className="flex space-x-4 pt-4">
              <Link 
                href="#" 
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-secondary hover:text-white transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </Link>
              <Link 
                href="#" 
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-secondary hover:text-white transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link 
                href="#" 
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-secondary hover:text-white transition-colors duration-200"
              >
                <Twitter className="w-4 h-4" />
              </Link>
              <Link 
                href="#" 
                className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-slate-800 hover:bg-secondary hover:text-white transition-colors duration-200"
              >
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>
          
          {/* About Section */}
          <div>
            <h3 className="font-semibold mb-4 text-white">ABOUT</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Owner
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support Section */}
          <div>
            <h3 className="font-semibold mb-4 text-white">SUPPORT</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Privacy & Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources Section */}
          <div>
            <h3 className="font-semibold mb-4 text-white">RESOURCES</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  How To Pay
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                FAQ's
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Demo Lecture
                </a>
              </li>
             
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors duration-200">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Copyright Section */}
        <div className="border-t border-muted"></div>
        <div className="text-center text-xs text-gray-200 mt-5">
          &copy; {new Date().getFullYear()} AK Designer Art. All rights reserved.
        </div>
      </div>
    </footer>
  );
}