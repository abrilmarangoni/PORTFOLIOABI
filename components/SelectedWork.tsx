"use client";

import { useState, useRef, ReactNode, useEffect } from "react";
import { SentientSphere } from "./SentientSphere";

function VideoWithHover({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Load first frame when component mounts
    if (videoRef.current) {
      const video = videoRef.current;
      const handleLoadedData = () => {
        video.currentTime = 0;
      };
      video.addEventListener('loadeddata', handleLoadedData);
      return () => {
        video.removeEventListener('loadeddata', handleLoadedData);
      };
    }
  }, []);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play().catch(() => {
        // Handle play error silently
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full"
    >
      <video
        ref={videoRef}
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        preload="auto"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

interface ProjectCardProps {
  title: string;
  projectName: string;
  date: string;
  children?: ReactNode;
}

function ProjectCard({ title, projectName, date, children }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer w-full">
      {/* Image container */}
      <div className="bg-black border border-[#333] rounded-t-[16px] aspect-[496/280] relative overflow-hidden">
        {children ? (
          <div className="absolute inset-0 w-full h-full">
            {children}
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-[18px] font-normal">{title}</p>
          </div>
        )}
      </div>
      {/* Footer */}
      <div className="bg-[#111] border border-[#333] border-t-0 rounded-b-[16px] h-[60px] sm:h-[69px] px-4 flex items-center justify-between">
        <p className="text-white text-[12px] sm:text-[13px] font-normal">{projectName}</p>
        <p className="text-[#999] text-[12px] sm:text-[13px] font-normal">{date}</p>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section className="w-full">
      {/* Title */}
      <h2 className="text-white text-[18px] font-normal mb-8">
        Selected Work
      </h2>

      {/* Project Cards - Stacked vertically */}
      <div className="flex flex-col gap-8 sm:gap-12">
        <ProjectCard
          title=""
          projectName="ABA AI - full stack project"
          date="Dec 28, 2025"
        >
          <SentientSphere />
        </ProjectCard>
        <ProjectCard
          title=""
          projectName="3d Orb Loop"
          date="Dec 22, 2025"
        >
          <VideoWithHover src="/senal.mp4" />
        </ProjectCard>
        <ProjectCard
          title=""
          projectName="Basement's Challenge Loop"
          date="Dec 22, 2025"
        >
          <VideoWithHover src="/hooverbasement.mp4" />
        </ProjectCard>
        <ProjectCard
          title=""
          projectName="Sand - Website Design"
          date="Dec 22, 2025"
        >
          <VideoWithHover src="/hooversand.mp4" />
        </ProjectCard>
      </div>
      
      {/* View More */}
      <div className="mt-16 flex justify-center">
        <a 
          href="/projects" 
          className="flex items-center gap-1 text-[#999] text-[13px] font-normal hover:text-[#ff7a28] transition-colors group"
        >
          <span>View More</span>
          <svg 
            width="15" 
            height="15" 
            viewBox="0 0 15 15" 
            fill="none" 
            xmlns="http://www.w3.org/2000/svg"
            className="flex-shrink-0 transition-all duration-300 group-hover:rotate-[-35deg] group-hover:text-[#ff7a28]"
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
        </a>
      </div>
    </section>
  );
}
