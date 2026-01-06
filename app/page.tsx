import AboutSection, { AboutImage } from "@/components/AboutSection";
import SelectedWork from "@/components/SelectedWork";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black relative overflow-hidden">
      {/* Vertical decorative lines */}
      <div className="hidden lg:block absolute left-[calc(50%-320px)] top-0 bottom-0 w-px opacity-60" style={{ backgroundImage: 'repeating-linear-gradient(180deg, #333 0, #333 4px, transparent 4px, transparent 8px)' }} />
      <div className="hidden lg:block absolute right-[calc(50%-320px)] top-0 bottom-0 w-px opacity-60" style={{ backgroundImage: 'repeating-linear-gradient(180deg, #333 0, #333 4px, transparent 4px, transparent 8px)' }} />

      {/* Centered single column layout */}
      <div className="flex flex-col items-center px-6 md:px-8 py-16 md:py-24 lg:py-32 pb-32 relative z-10">
        {/* Image */}
        <div className="w-full max-w-[550px]">
          <AboutImage />
        </div>
        
        {/* Horizontal line after image - full width */}
        <div className="w-full my-16 lg:my-24">
          <div className="h-px w-full opacity-80" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #333 0, #333 4px, transparent 4px, transparent 8px)' }} />
        </div>
        
        {/* Content */}
        <div className="w-full max-w-[550px] flex flex-col">
          <AboutSection />
        </div>
        
        {/* Horizontal line between Let's Connect and Selected Work - full width */}
        <div className="w-full my-16 lg:my-24">
          <div className="h-px w-full opacity-80" style={{ backgroundImage: 'repeating-linear-gradient(90deg, #333 0, #333 4px, transparent 4px, transparent 8px)' }} />
        </div>
        
        <div className="w-full max-w-[550px] flex flex-col">
          <SelectedWork />
        </div>
      </div>
      <Navigation />
    </main>
  );
}
