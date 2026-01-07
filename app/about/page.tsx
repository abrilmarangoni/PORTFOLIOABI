"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import { useState, useEffect } from "react";

const profileImage = "/abi.jpeg";

export default function AboutPage() {
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
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Content */}
      <div className="flex flex-col items-center px-6 md:px-8 py-16 md:py-24 lg:py-32 pb-32 relative z-10">
        <div className="w-full max-w-[550px] flex flex-col">
          {/* Back link */}
          <a 
            href="/"
            className="text-[#999] text-[13px] hover:text-white transition-colors mb-8"
          >
            ← Back to home
          </a>

          {/* Header with title and image */}
          <div className="flex items-center justify-between gap-6 mb-8">
            <h1 className="text-white text-[24px] font-normal leading-tight flex-1">
              I wrote &quot;Hello World&quot; in HTML at 12 and my whole personality shaped around it
            </h1>
            {/* Small image in corner */}
            <div className="w-[120px] h-[120px] border border-[#333] rounded-[10px] overflow-hidden relative flex-shrink-0">
              <Image
                src={profileImage}
                alt="Abril Marangoni"
                fill
                className="object-cover"
                priority
                sizes="120px"
              />
            </div>
          </div>

          {/* Content sections */}
          <div className="text-[#999] text-[13px] font-normal leading-[1.5] space-y-6 mt-24">
            <div>
              <h2 className="text-white text-[16px] mb-3">Hi, I&apos;m Abie</h2>
              <p className="text-white text-[14px] mb-2">
                <span className="text-[#ff7a28]">Design Engineer</span> (Full-Stack & UX/UI)
              </p>
              <p>
                Full-Stack Developer · UX/UI Postgraduate · Generative AI
              </p>
            </div>

            <div>
              <h2 className="text-white text-[16px] mb-3">What I do</h2>
              <p>
                I&apos;m currently focused on shaping brands and websites for dev tools. 
                I work at the intersection of design, technology, and strategy to create 
                useful, clear, and human solutions.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[16px] mb-3">My approach</h2>
              <p>
                My motivation is simple: build products with real impact by understanding 
                people, the business, and the &quot;why&quot; behind every decision. I believe the 
                best solutions come from deep empathy and clear thinking.
              </p>
            </div>

            <div>
              <h2 className="text-white text-[16px] mb-3">Background</h2>
              <p>
                [Add your background story here - education, journey into design/dev, 
                what inspired you, your path, etc.]
              </p>
            </div>

            <div>
              <h2 className="text-white text-[16px] mb-3">Beyond work</h2>
              <p>
                [Add your interests, hobbies, what you love to do outside of work, 
                music you like, places you&apos;ve been, things that inspire you, etc.]
              </p>
            </div>

            <div>
              <h2 className="text-white text-[16px] mb-3">Location</h2>
              <p>
                I&apos;m based in Mar del Plata, Argentina, where it&apos;s currently{" "}
                <span className="text-[#ff7a28]">{currentTime}</span>.
              </p>
            </div>

            <div className="pt-4">
              <h2 className="text-white text-[16px] mb-3">Let&apos;s connect</h2>
              <div className="flex items-center gap-[26px]">
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
            </div>
          </div>
        </div>
      </div>
      
      <Navigation />
    </main>
  );
}

