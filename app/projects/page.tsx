"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { SentientSphere } from "@/components/SentientSphere";

interface Project {
  id: string;
  name: string;
  date: string;
  type: "video" | "image" | "component";
  media?: string; // path to video or image
  component?: React.ReactNode;
  featured?: boolean; // if it's in Selected Work
}

const allProjects: Project[] = [
  {
    id: "2",
    name: "ABA AI - full stack project",
    date: "Dec 28, 2025",
    type: "component",
    featured: true,
  },
  {
    id: "1",
    name: "3d Orb Loop",
    date: "Dec 22, 2025",
    type: "video",
    media: "/senal.mp4",
    featured: true,
  },
  {
    id: "3",
    name: "Basement's Challenge Loop",
    date: "Dec 22, 2025",
    type: "video",
    media: "/hooverbasement.mp4",
    featured: true,
  },
  {
    id: "4",
    name: "Sand - Website Design",
    date: "Dec 22, 2025",
    type: "video",
    media: "/sand.mp4",
    featured: true,
  },
  // Add more projects here - you can add images or videos
  {
    id: "5",
    name: "Project 5",
    date: "Jan 15, 2025",
    type: "image",
    media: "/placeholder.jpg", // Replace with your image path
  },
  {
    id: "6",
    name: "Project 6",
    date: "Jan 20, 2025",
    type: "image",
    media: "/placeholder.jpg", // Replace with your image path
  },
  {
    id: "7",
    name: "Project 7",
    date: "Feb 1, 2025",
    type: "image",
    media: "/placeholder.jpg", // Replace with your image path
  },
  {
    id: "8",
    name: "Project 8",
    date: "Feb 10, 2025",
    type: "image",
    media: "/placeholder.jpg", // Replace with your image path
  },
  {
    id: "9",
    name: "Project 9",
    date: "Feb 15, 2025",
    type: "image",
    media: "/placeholder.jpg", // Replace with your image path
  },
];

function ProjectCard({ project }: { project: Project }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
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
    <a href={`/projects/${project.id}`} className="group cursor-pointer w-full">
      {/* Image container */}
      <div 
        className="bg-black border border-[#333] rounded-t-[16px] aspect-[496/280] relative overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {project.type === "video" && project.media ? (
          <div className="absolute inset-0 w-full h-full">
            <video
              ref={videoRef}
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              preload="metadata"
            >
              <source src={project.media} type="video/mp4" />
            </video>
          </div>
        ) : project.type === "image" && project.media ? (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={project.media}
              alt={project.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        ) : project.type === "component" && project.id === "2" ? (
          <div className="absolute inset-0 w-full h-full">
            <SentientSphere />
          </div>
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-[18px] font-normal">{project.name}</p>
          </div>
        )}
      </div>
      {/* Footer */}
      <div className="bg-[#111] border border-[#333] border-t-0 rounded-b-[16px] h-[60px] sm:h-[69px] px-4 flex items-center justify-between">
        <p className="text-white text-[12px] sm:text-[13px] font-normal">{project.name}</p>
        <p className="text-[#999] text-[12px] sm:text-[13px] font-normal">{project.date}</p>
      </div>
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Centered single column layout */}
      <div className="flex flex-col items-center px-6 sm:px-8 md:px-12 lg:px-16 py-12 sm:py-16 md:py-24 lg:py-32 pb-24 sm:pb-32 relative z-10">
        {/* Back link */}
        <div className="w-full max-w-[1200px] mb-8">
          <a 
            href="/"
            className="inline-flex items-center gap-1 text-[#999] text-[13px] font-normal hover:text-[#ff7a28] transition-colors group"
          >
            <svg 
              width="15" 
              height="15" 
              viewBox="0 0 15 15" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="flex-shrink-0 transition-all duration-300 group-hover:-translate-x-1"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path 
                d="M10 3L5 7.5L10 12" 
                stroke="currentColor"
                fill="none"
              />
            </svg>
            <span>Back to Home</span>
          </a>
        </div>

        {/* Title */}
        <div className="w-full max-w-[1200px] mb-12">
          <h1 className="text-white text-[24px] sm:text-[28px] font-normal mb-2">
            The Entire Collection
          </h1>
          <p className="text-[#999] text-[13px] font-normal">
            Everything I've managed to finish (so far)
          </p>
        </div>

        {/* Projects Grid */}
        <div className="w-full max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {allProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

