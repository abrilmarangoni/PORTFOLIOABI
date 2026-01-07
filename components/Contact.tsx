"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface ContactItem {
  platform: string;
  value: string;
  href: string;
  icon: React.ReactNode;
}

function LinkedInIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6Z" fill="none"/>
      <rect x="2" y="9" width="4" height="12" fill="none"/>
      <circle cx="4" cy="4" r="2" fill="none"/>
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" fill="white" opacity="0.8"/>
    </svg>
  );
}

function GmailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="4" width="20" height="16" rx="2" fill="none"/>
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" fill="none"/>
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8"/>
      <circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.5" fill="none" opacity="0.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill="white" opacity="0.8"/>
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="white" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" fill="none"/>
    </svg>
  );
}

const contactItems: ContactItem[] = [
  {
    platform: "LinkedIn",
    value: "Abril Marangoni",
    href: "https://www.linkedin.com/in/abril-marangoni-49924327a/",
    icon: <LinkedInIcon />
  },
  {
    platform: "X",
    value: "@AbieMarangoni",
    href: "https://x.com/AbieMarangoni",
    icon: <XIcon />
  },
  {
    platform: "Gmail",
    value: "abie.marangoni@gmail.com",
    href: "mailto:abie.marangoni@gmail.com",
    icon: <GmailIcon />
  },
  {
    platform: "Instagram",
    value: "@abie.studio",
    href: "https://www.instagram.com/abie.studio?igsh=MXB5aDcxdDlrY3ppNg%3D%3D&utm_source=qr",
    icon: <InstagramIcon />
  },
  {
    platform: "Phone",
    value: "+54 9 223 550 0594",
    href: "tel:+5492235500594",
    icon: <PhoneIcon />
  }
];

export default function Contact() {
  const [hovered, setHovered] = useState<number | null>(null);
  const hoverSize = 50;

  const getColSizes = () => {
    if (hovered === null) {
      return "1fr 1fr 1fr 1fr 1fr";
    }
    const hoveredFraction = hoverSize;
    const nonHoveredFraction = (100 - hoverSize) / 4;

    return contactItems.map((_, index) => 
      index === hovered ? `${hoveredFraction}fr` : `${nonHoveredFraction}fr`
    ).join(" ");
  };

  return (
    <section className="w-full">
      {/* Title */}
      <h2 className="text-white text-[18px] font-normal mb-8">
        Contact
      </h2>

      {/* Contact Grid with Slide Effect - Mobile: vertical stack, Desktop: horizontal grid */}
      <div
        className="relative w-full hidden md:grid gap-0"
        style={{
          gridTemplateColumns: getColSizes(),
          gridTemplateRows: "200px",
          transition: "grid-template-columns 0.8s ease-in-out",
        }}
      >
        {contactItems.map((item, index) => (
          <motion.div
            key={index}
            className="relative h-full"
            style={{
              transition: "transform 0.8s ease-in-out",
            }}
            onMouseEnter={() => setHovered(index)}
            onMouseLeave={() => setHovered(null)}
          >
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="block h-full transition-all duration-300 relative overflow-hidden bg-black group border border-[#333] rounded-[10px] md:rounded-none md:first:rounded-l-[10px] md:last:rounded-r-[10px] md:[&:not(:first-child)]:border-l-0 md:[&:not(:last-child)]:border-r-0"
            >
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ opacity: hovered === index ? 0 : 1 }}>
                <div className="flex items-center justify-center">
                  {item.icon}
                </div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300" style={{ opacity: hovered === index ? 1 : 0 }}>
                <div className="flex items-center gap-1 text-[13px] font-normal text-white group-hover:text-[#FF6B35] transition-colors cursor-pointer">
                  <span>{item.value}</span>
                  <svg 
                    width="15" 
                    height="15" 
                    viewBox="0 0 15 15" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 transition-all duration-300 group-hover:rotate-[-35deg]"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path 
                      d="M5 3L10 7.5L5 12" 
                      stroke="currentColor"
                      fill="none"
                    />
                  </svg>
                </div>
              </div>
            </a>
          </motion.div>
        ))}
      </div>
      
      {/* Mobile: Vertical stack */}
      <div className="relative w-full flex flex-col gap-0 md:hidden">
        {contactItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="block h-[80px] transition-all duration-300 relative overflow-hidden bg-black group border border-[#333] rounded-[10px] flex items-center justify-center gap-2 px-4"
          >
            <div className="flex items-center justify-center">
              {item.icon}
            </div>
            <div className="flex items-center gap-1 text-[13px] font-normal text-white group-hover:text-[#FF6B35] transition-colors">
              <span>{item.value}</span>
              <svg 
                width="15" 
                height="15" 
                viewBox="0 0 15 15" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="flex-shrink-0 transition-all duration-300 group-hover:rotate-[-35deg]"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path 
                  d="M5 3L10 7.5L5 12" 
                  stroke="currentColor"
                  fill="none"
                />
              </svg>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

