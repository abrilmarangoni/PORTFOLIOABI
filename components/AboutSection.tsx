"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const profileImage = "/perfilabi.jpeg";

export function AboutImage() {
  return (
    <>
      {/* Name */}
      <h1 className="text-white text-[16px] font-normal leading-tight mb-8">
        Abie Marangoni
      </h1>
      
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
      
      {/* Title */}
      <p className="text-white text-[16px] font-normal leading-tight mt-8">
        <span className="text-[#ff7a28]">Design Engineer</span> (Full-Stack & UX/UI)
      </p>
    </>
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
      {/* About */}
      <div className="text-[#999] text-[13px] font-medium leading-[1.5]">
        <p>
          Full-Stack Developer · UX/UI Postgraduate · Generative AI
        </p>
        <p className="mt-6">
          Hi I&apos;m Abie a nerd who loves AI, math, and building things. I spend most of my time coding—apps, websites, systems—and using AI tools to move faster and think better.
        </p>
        <p className="mt-6">
          I care about the people using what I build. Design, for me, is the layer that turns code into something approachable, expressive, and human.
        </p>
        <p className="mt-6">
          I&apos;m based in Mar del Plata, Arg, where it&apos;s currently{" "}
          <span className="text-[#ff7a28]">{currentTime}</span>.
        </p>
      </div>
    </>
  );
}
