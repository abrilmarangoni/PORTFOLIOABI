"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const profileImage = "/perfilabi.jpeg";

export function AboutImage() {
  return (
    <a href="/about" className="aspect-[551/352] border border-[#333] rounded-[10px] overflow-hidden relative w-full block group cursor-pointer">
      <Image
        src={profileImage}
        alt="Abril Marangoni"
        fill
        className="object-cover transition-all duration-300 group-hover:brightness-[0.4]"
        priority
        sizes="(max-width: 768px) 100vw, 550px"
      />
      {/* Hover overlay text */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <span className="text-white text-[16px] font-normal">not so important facts about me →</span>
      </div>
    </a>
  );
}

export default function AboutSection() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const timeString = now.toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
        timeZone: "America/Argentina/Buenos_Aires",
      });
      setCurrentTime(timeString.toLowerCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {/* Name */}
      <h1 className="text-white text-[16px] font-normal leading-tight">
        Abie Marangoni
      </h1>

      {/* About */}
      <div className="text-[#999] text-[13px] font-normal leading-[1.5] mt-4">
        <p>
          Design Engineer — Generative AI @{" "}
          <span className="text-[#ff7a28]">The University of Texas at Austin.</span>
        </p>
        <p className="mt-6">
          I'm currently focused on shaping brands and websites for dev tools.
        </p>
        <p className="mt-6">
          I work at the intersection of design, technology, and strategy to create useful, clear, and human solutions. My motivation is simple: build products with real impact by understanding people, the business, and the "why" behind every decision.
        </p>
        <p className="mt-6">
          I'm based in Mar del Plata, Arg, where it's currently{" "}
          <span className="text-white">{currentTime}</span>.
        </p>
      </div>

      {/* Let's Connect Header */}
      <h3 className="text-white text-[16px] font-normal leading-tight mt-8">
        Let's Connect
      </h3>

      {/* Links */}
      <div className="flex items-center gap-[26px] text-[#999] text-[13px] mt-4">
        <a
          href="mailto:abril@example.com"
          className="relative hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#ff7a28] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:origin-left"
        >
          Email ↗
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#ff7a28] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:origin-left"
        >
          LinkedIn ↗
        </a>
        <a
          href="https://twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="relative hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#ff7a28] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:origin-left"
        >
          Twitter ↗
        </a>
        <a
          href="/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="relative hover:text-white transition-colors after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[1px] after:bg-[#ff7a28] after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:ease-in-out after:origin-left"
        >
          CV ↗
        </a>
      </div>
    </>
  );
}
