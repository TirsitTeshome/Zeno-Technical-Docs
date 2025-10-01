import React from "react";
import { FaMapMarkerAlt, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";


const navLinks = [
  { name: "HOME", href: "/landing" },
  { name: "FRONTEND", href: "/frontend" },
  { name: "BACKEND", href: "/backend" },
  { name: "AI", href: "/ai" },
];

export default function NavBar({
  variant = "light",
}: {
  variant?: "light" | "dark";
}) {
  const logoSrc = variant === "dark" ? "/pics/logoo.png" : "/pics/blue-logo.png";
  const bg = variant === "dark" ? "bg-[#151E31]" : "bg-[#D3D7DF]";
  const text = variant === "dark" ? "text-[#D3D7DF]" : "text-[#05192F]";
  const border = variant === "dark" ? "border-[#D3D7DF]" : "border-[#05192F]";
  const hover =
    variant === "dark" ? "hover:text-[#7ba6e0]" : "hover:text-[#4471a1]";
  const shadow =
    variant === "dark"
      ? "shadow-[0_4px_24px_2px_rgba(255,255,255,0.25)]"
      : "shadow-xl";

  return (
    <nav className={`${bg} py-8 px-10 sticky top-0 z-50`}>
      <div
        className={`border ${border} rounded-none flex items-center justify-between h-20 ${shadow}`}
      >
        <div className="flex items-center h-full">
          <div className={`flex items-center px-6 h-full border-r ${border}`}>
            <Image
              src={logoSrc}
              alt="Logo"
              width={70}
              height={70}
              className="object-contain"
              priority
            />
          </div>
          <div className="flex space-x-10 px-8 h-full items-center">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`${text} text-base font-semibold tracking-wide ${hover} transition`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center h-full">
          <div className={`flex items-center px-6 h-full`}>
            <span className={`${text} text-xs uppercase font-semibold mr-3`}>
              CONTACT US
            </span>
            <FaMapMarkerAlt className={`${text} text-lg mx-1`} />
          </div>
          <div className={`h-full border-l ${border} mx-3`}></div>
          <div className="flex items-center space-x-4 px-6 h-full">
            <a
              href="https://twitter.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <FaXTwitter className={`${text} text-lg ${hover}`} />
            </a>
            <a
              href="https://facebook.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF className={`${text} text-lg ${hover}`} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram className={`${text} text-lg ${hover}`} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
