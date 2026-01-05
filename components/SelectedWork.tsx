"use client";

import { SentientSphere } from "./SentientSphere";

interface ProjectCardProps {
  title: string;
  projectName: string;
  date: string;
  children?: React.ReactNode;
}

function ProjectCard({ title, projectName, date, children }: ProjectCardProps) {
  return (
    <div className="group cursor-pointer">
      {/* Image container */}
      <div className="bg-black border border-[#333] rounded-t-[16px] aspect-[496/280] flex items-center justify-center overflow-hidden">
        {children ? (
          children
        ) : (
          <p className="text-white text-[14px] lg:text-[16px] xl:text-[18px] font-normal">{title}</p>
        )}
      </div>
      {/* Footer */}
      <div className="bg-[#111] border border-[#333] border-t-0 rounded-b-[16px] h-[56px] lg:h-[64px] xl:h-[69px] px-4 flex items-center justify-between">
        <p className="text-white text-[11px] lg:text-[12px] xl:text-[13px] font-normal">{projectName}</p>
        <p className="text-[#999] text-[11px] lg:text-[12px] xl:text-[13px] font-normal">{date}</p>
      </div>
    </div>
  );
}

export default function SelectedWork() {
  return (
    <section className="mb-16 lg:mb-20 xl:mb-24">
      {/* Título con más espacio arriba para separar de la sección anterior */}
      <h2 className="text-white text-[16px] lg:text-[17px] xl:text-[18px] font-normal mb-6 lg:mb-7 xl:mb-8 mt-8 lg:mt-12 xl:mt-16 2xl:mt-20">
        Selected Work
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5 xl:gap-6">
        <ProjectCard
          title=""
          projectName="3d Orb Loop"
          date="Dec 22, 2025"
        >
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/senal.mp4" type="video/mp4" />
          </video>
        </ProjectCard>
        <ProjectCard
          title=""
          projectName="ABA AI - full stack project"
          date="Dec 28, 2025"
        >
          <SentientSphere />
        </ProjectCard>
        <ProjectCard
          title="Basement's Challenge Loop"
          projectName="Project Name"
          date="Dec 22, 2025"
        />
      </div>
    </section>
  );
}
