import React from "react";
import { FaMapMarkerAlt, FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { name: "HOME", href: "/landing" },
  { name: "DOCS", href: "/docs" },
  { name: "API REFERENCE", href: "/our-story" },
  { name: "GUIDES", href: "/news" },
  { name: "USE CASES", href: "/suppliers" },
  { name: "CONTACT", href: "/contact" },
];

export default function NavBar() {
  return (
    <nav className="bg-[#D3D7DF] py-8 px-10 sticky top-0 z-50">
      <div className="border border-[#05192F] rounded-none flex items-center justify-between h-20 shadow-xl">
        <div className="flex items-center h-full">
          <div className="flex items-center px-6 h-full border-r border-[#05192F]">
            <Image
              src="/blue-logo.png"
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
            />
          </div>

          <div className="flex space-x-10 px-8 h-full items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-[#05192F] text-base font-semibold tracking-wide hover:text-[#4471a1] transition"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center h-full">
          <div className="flex items-center px-6 h-full">
            <span className="text-[#05192F] text-xs uppercase font-semibold mr-3">
              Find your nearest supplier
            </span>
            <FaMapMarkerAlt className="text-[#05192F] text-lg mx-1" />
          </div>
          <div className="h-full border-l border-[#05192F] mx-3"></div>
          <div className="flex items-center space-x-4 px-6 h-full">
            <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <FaTwitter className="text-[#05192F] text-lg hover:text-white" />
            </a>
            <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FaFacebookF className="text-[#05192F] text-lg hover:text-white" />
            </a>
            <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <FaInstagram className="text-[#05192F] text-lg hover:text-white" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}








