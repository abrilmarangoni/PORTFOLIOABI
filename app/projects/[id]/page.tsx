"use client";

import { useParams } from "next/navigation";
import { useState } from "react";

const projectsData: Record<string, { name: string; date: string; description?: string; layout: number }> = {
  "aba-ai": {
    name: "ABA AI - full stack project",
    date: "Dec 28, 2025",
    description: "A full-stack AI project built with modern technologies.",
    layout: 1,
  },
  "3d-orb-loop": {
    name: "3d Orb Loop",
    date: "Dec 22, 2025",
    description: "An interactive 3D orb animation with procedural effects.",
    layout: 2,
  },
  "basement-challenge": {
    name: "Basement's Challenge Loop",
    date: "Dec 22, 2025",
    description: "A creative challenge project for Basement Studio.",
    layout: 3,
  },
  "sand-website": {
    name: "Sand - Website Design",
    date: "Dec 22, 2025",
    description: "Website design project with smooth animations.",
    layout: 4,
  },
};

function ViewSwitch({ 
  activeView, 
  onSwitch 
}: { 
  activeView: "overview" | "details"; 
  onSwitch: (view: "overview" | "details") => void;
}) {
  return (
    <div className="relative inline-flex">
      {/* Corner decorations */}
      <div className="absolute -top-1.5 -left-1.5 w-4 h-4 border-l border-t border-[#444]" />
      <div className="absolute -top-1.5 -right-1.5 w-4 h-4 border-r border-t border-[#444]" />
      <div className="absolute -bottom-1.5 -left-1.5 w-4 h-4 border-l border-b border-[#444]" />
      <div className="absolute -bottom-1.5 -right-1.5 w-4 h-4 border-r border-b border-[#444]" />
      
      {/* Switch container */}
      <div className="bg-[#111] border border-[#333] flex">
        <button
          onClick={() => onSwitch("overview")}
          className={`px-12 py-5 text-[14px] font-normal transition-all duration-200 ${
            activeView === "overview" 
              ? "text-white bg-[#2a2a2a]" 
              : "text-[#555] hover:text-[#888]"
          }`}
        >
          Overview
        </button>
        <div className="w-px bg-[#333]" />
        <button
          onClick={() => onSwitch("details")}
          className={`px-12 py-5 text-[14px] font-normal transition-all duration-200 ${
            activeView === "details" 
              ? "text-white bg-[#2a2a2a]" 
              : "text-[#555] hover:text-[#888]"
          }`}
        >
          Details
        </button>
      </div>
    </div>
  );
}

function MockupPlaceholder({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center gap-3 text-[#333]">
      <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="opacity-50">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <path d="M21 15l-5-5L5 21" />
      </svg>
      <span className="text-[12px] font-normal">{label}</span>
    </div>
  );
}

// Layout 1: Large hero + tall side + 2 squares + 2 wide
function Layout1() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="md:col-span-2 aspect-[16/9] bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 1" />
        </div>
        <div className="row-span-2 aspect-[9/16] md:aspect-auto bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 2" />
        </div>
        <div className="aspect-square bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 3" />
        </div>
        <div className="aspect-square bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 4" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="aspect-[16/10] bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 5" />
        </div>
        <div className="aspect-[16/10] bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 6" />
        </div>
      </div>
    </div>
  );
}

// Layout 2: 3 equal columns + full width + 2 wide
function Layout2() {
  return (
    <div className="flex flex-col gap-20">
      <div className="grid grid-cols-3 gap-8 w-full">
        <div className="flex items-center justify-center">
          <img src="/91.png" alt="Mockup 1" className="w-full object-contain" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/92.png" alt="Mockup 2" className="w-full object-contain" />
        </div>
        <div className="flex items-center justify-center">
          <img src="/93.png" alt="Mockup 3" className="w-full object-contain" />
        </div>
      </div>
      <div className="rounded-[12px] overflow-hidden border border-[#555] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-contain"
        >
          <source src="/94.mp4?v=2" type="video/mp4" />
        </video>
      </div>
      <div className="rounded-[12px] overflow-hidden w-full">
        <img src="/96.png" alt="Mockup 5" className="w-full object-contain" />
      </div>
      <div className="rounded-[12px] overflow-hidden border border-[#555] w-full">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full object-contain"
        >
          <source src="/95.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

// Layout 3: Masonry style - tall left + stacked right + 3 bottom
function Layout3() {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="row-span-2 aspect-[3/4] md:aspect-auto md:min-h-[500px] bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 1" />
        </div>
        <div className="aspect-video bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 2" />
        </div>
        <div className="aspect-video bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 3" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="aspect-square bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 4" />
        </div>
        <div className="aspect-square bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 5" />
        </div>
        <div className="aspect-square bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 6" />
        </div>
      </div>
    </div>
  );
}

// Layout 4: Full width hero + 4 grid + wide bottom
function Layout4() {
  return (
    <div className="flex flex-col gap-4">
      <div className="aspect-[21/9] bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
        <MockupPlaceholder label="Mockup 1" />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="aspect-square bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 2" />
        </div>
        <div className="aspect-square bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 3" />
        </div>
        <div className="aspect-square bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 4" />
        </div>
        <div className="aspect-square bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
          <MockupPlaceholder label="Mockup 5" />
        </div>
      </div>
      <div className="aspect-[16/7] bg-[#111] border border-[#333] rounded-[12px] flex items-center justify-center overflow-hidden hover:border-[#444] transition-colors">
        <MockupPlaceholder label="Mockup 6" />
      </div>
    </div>
  );
}

export default function ProjectPage() {
  const params = useParams();
  const projectId = params.id as string;
  const project = projectsData[projectId];
  const [activeView, setActiveView] = useState<"overview" | "details">("overview");

  const renderLayout = () => {
    switch (project?.layout) {
      case 1:
        return <Layout1 />;
      case 2:
        return <Layout2 />;
      case 3:
        return <Layout3 />;
      case 4:
        return <Layout4 />;
      default:
        return <Layout1 />;
    }
  };

  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
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

        {/* Project Title */}
        <div className="w-full max-w-[1200px] mb-12">
          <h1 className="text-white text-[24px] sm:text-[28px] font-normal mb-2">
            {project?.name || "Project"}
          </h1>
          <p className="text-[#999] text-[13px] font-normal">
            {project?.date || ""}
          </p>
        </div>

        {/* Switch */}
        <div className="w-full max-w-[1200px] mb-20 flex justify-center">
          <ViewSwitch activeView={activeView} onSwitch={setActiveView} />
        </div>

        {/* Project Content */}
        <div className="w-full max-w-[1200px]">
          {activeView === "overview" ? (
            renderLayout()
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[400px]">
              <p className="text-[#333] text-[14px] font-normal">
                Project details coming soon...
              </p>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}
