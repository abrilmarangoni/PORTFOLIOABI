"use client";

import { useState } from "react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "#", label: "Home", underline: true },
    { href: "#about", label: "About", underline: false },
    { href: "#work", label: "Work", underline: false },
    { href: "#projects", label: "Projects", underline: false },
    { href: "#contact", label: "Contact", underline: false },
  ];

  return (
    <nav className="fixed bottom-4 md:bottom-8 left-1/2 -translate-x-1/2 z-50">
      {/* Desktop Navigation - Always visible */}
      <div className="hidden md:flex backdrop-blur-[5px] bg-[rgba(17,17,17,0.5)] border border-[#333] rounded-[10px] h-[54px] px-12 items-center justify-center">
        <div className="flex items-center gap-[42px] text-[15px] text-white whitespace-nowrap">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={link.underline ? "underline decoration-solid underline-offset-2 hover:text-[#999] transition-colors" : "hover:text-[#999] transition-colors"}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation - Hamburger Menu */}
      <div className="md:hidden w-[calc(100vw-32px)] max-w-[600px]">
        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="backdrop-blur-[5px] bg-[rgba(17,17,17,0.5)] border border-[#333] rounded-[10px] h-[54px] w-[54px] flex items-center justify-center transition-all duration-300"
          aria-label="Toggle menu"
        >
          <div className="flex flex-col gap-1.5 w-5">
            <span
              className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                isOpen ? "rotate-45 translate-y-1.5" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                isOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-full bg-white transition-all duration-300 ${
                isOpen ? "-rotate-45 -translate-y-1.5" : ""
              }`}
            />
          </div>
        </button>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="absolute bottom-[64px] left-0 right-0 backdrop-blur-[5px] bg-[rgba(17,17,17,0.95)] border border-[#333] rounded-[10px] overflow-hidden">
            <div className="flex flex-col">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`px-6 py-4 text-[13px] text-white hover:text-[#999] transition-colors border-b border-[#333] last:border-b-0 ${
                    link.underline ? "underline decoration-solid underline-offset-2" : ""
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
