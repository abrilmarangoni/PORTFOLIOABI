import AboutSection from "@/components/AboutSection";
import SelectedWork from "@/components/SelectedWork";
import DailyMathChallenge from "@/components/DailyMathChallenge";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      {/* Márgenes proporcionales: ~11% del ancho en todos los tamaños */}
      <div className="max-w-[1920px] mx-auto px-[11%] py-[6.5%]">
        <AboutSection />
        <SelectedWork />
        <DailyMathChallenge />
      </div>
      <Navigation />
    </main>
  );
}
