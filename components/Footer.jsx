'use client';

import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
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
              <li>
                <Link href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Home
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Owner
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Support Section */}
          <div>
            <h3 className="mb-4 font-semibold text-white">SUPPORT</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                Privacy & Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources Section */}
          <div>
            <h3 className="mb-4 font-semibold text-white">RESOURCES</h3>
            <ul className="space-y-3 text-xs">
              <li>
                <Link href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  How To Pay
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                FAQ's
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-300 transition-colors duration-200 hover:text-white">
                  Demo Lecture
                </a>
              </li>
             
           
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