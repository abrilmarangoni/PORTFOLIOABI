"use client";

import { ReactNode } from "react";
import { SentientSphere } from "./SentientSphere";

// Video que se reproduce automáticamente (para la landing)
function VideoAutoPlay({ src, mirrored = false }: { src: string; mirrored?: boolean }) {
  return (
    <div className="w-full h-full">
      <video
        autoPlay
        loop
        muted
        playsInline
        className={`w-full h-full object-cover ${mirrored ? "scale-x-[-1]" : ""}`}
        preload="auto"
      >
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

interface ProjectCardProps {
  projectName: string;
  date: string;
  href: string;
  children?: ReactNode;
}

function ProjectCard({ projectName, date, href, children }: ProjectCardProps) {
  return (
    <a href={href} className="group cursor-pointer w-full block">
      {/* Image container */}
      <div className="bg-black border border-[#333] rounded-t-[16px] aspect-[496/280] relative overflow-hidden">
        {children && (
          <div className="absolute inset-0 w-full h-full">
            {children}
          </div>
        )}
      </div>
      {/* Footer */}
      <div className="bg-[#111] border border-[#333] border-t-0 rounded-b-[16px] h-[60px] sm:h-[69px] px-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <p className="text-white text-[12px] sm:text-[13px] font-normal">{projectName}</p>
        </div>
        <div className="flex items-center gap-4">
          <p className="text-[#999] text-[12px] sm:text-[13px] font-normal">{date}</p>
          <span className="text-[#999] text-[12px] sm:text-[13px] font-normal group-hover:text-[#ff7a28] transition-colors flex items-center gap-1">
            View
            <svg 
              width="12" 
              height="12" 
              viewBox="0 0 15 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="transition-transform duration-300 group-hover:translate-x-1"
            >
              <path 
                d="M5 3L10 7.5L5 12" 
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
            </svg>
          </span>
        </div>
      </div>
    </a>
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
          projectName="ABA AI - full stack project"
          date="Dec 28, 2025"
          href="/projects/aba-ai"
        >
          <SentientSphere />
        </ProjectCard>
        <ProjectCard
          projectName="3d Orb Loop"
          date="Dec 22, 2025"
          href="/projects/3d-orb-loop"
        >
          <VideoAutoPlay src="/senal.mp4" mirrored />
        </ProjectCard>
        <ProjectCard
          projectName="Basement's Challenge Loop"
          date="Dec 22, 2025"
          href="/projects/basement-challenge"
        >
          <VideoAutoPlay src="/hooverbasement.mp4" />
        </ProjectCard>
        <ProjectCard
          projectName="Sand - Website Design"
          date="Dec 22, 2025"
          href="/projects/sand-website"
        >
          <VideoAutoPlay src="/hooversand.mp4" />
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
