"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const profileImage = "/perfilabi.jpeg";

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
      });
      setCurrentTime(timeString.toLowerCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6 mb-8 lg:mb-10 xl:mb-12">
      {/* Profile Image - Ocupa 1 columna */}
      <div className="aspect-[496/317] border border-[#333] rounded-[16px] overflow-hidden relative">
        <Image
          src={profileImage}
          alt="Abril Marangoni"
          fill
          className="object-cover"
          priority
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>

      {/* About Content - Ocupa 2 columnas, texto llega hasta mitad del tercer cuadrante */}
      <div className="lg:col-span-2 flex flex-col lg:pr-[25%]">
        {/* Name */}
        <h1 className="text-white text-[14px] lg:text-[15px] xl:text-[16px] font-normal leading-tight">
          Abril Marangoni
        </h1>
        
        {/* Title */}
        <p className="text-[#999] text-[12px] lg:text-[13px] xl:text-[13px] font-normal mt-2">
          Design Engineer — Generative AI @ The University of Texas at Austin.
        </p>

        {/* About Me Header */}
        <h2 className="text-white text-[14px] lg:text-[15px] xl:text-[16px] font-normal mt-8 lg:mt-10 xl:mt-12 leading-tight">
          About Me
        </h2>

        {/* About Me Content */}
        <div className="text-[#999] text-[12px] lg:text-[13px] xl:text-[13px] font-normal leading-[1.6] mt-2 flex-1">
          <p>
            I'm currently focused on shaping brands and websites for dev tools.
          </p>
          <p className="mt-3">
            I work at the intersection of design, technology, and strategy to create useful, clear, and human solutions. My motivation is simple: build products with real impact by understanding people, the business, and the "why" behind every decision.
          </p>
          <p className="mt-3">
            I'm based in Mar del Plata, Argentina, where it's currently{" "}
            <span className="text-white">{currentTime}</span>.
          </p>
        </div>

        {/* Let's Connect - alineado con el final de la imagen */}
        <div className="flex flex-wrap items-center gap-4 lg:gap-6 mt-8">
          <span className="text-[#999] text-[12px] lg:text-[13px] font-normal">
            Let's Connect
          </span>
          <a
            href="mailto:abril@example.com"
            className="text-white text-[12px] lg:text-[13px] hover:text-[#999] transition-colors"
            aria-label="Send email"
          >
            Email ↗
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[12px] lg:text-[13px] hover:text-[#999] transition-colors"
            aria-label="Visit LinkedIn profile"
          >
            LinkedIn ↗
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[12px] lg:text-[13px] hover:text-[#999] transition-colors"
            aria-label="Visit Twitter profile"
          >
            Twitter ↗
          </a>
          <a
            href="/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white text-[12px] lg:text-[13px] hover:text-[#999] transition-colors"
            aria-label="Download CV"
          >
            CV ↗
          </a>
        </div>
      </div>
    </section>
  );
}
