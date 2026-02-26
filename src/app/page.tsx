import { HeroSection } from "@/sections/HeroSection";
import { JourneySection } from "@/sections/JourneySection";
import { TechStackSection } from "@/sections/TechStackSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContributionsSection } from "@/sections/ContributionsSection";
import { ContactSection } from "@/sections/ContactSection";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <main className="space-y-6 pb-12 pt-4 md:space-y-8 md:pt-6">
        <HeroSection />
        <JourneySection />
        <TechStackSection />
        <ProjectsSection />
        <ContributionsSection />
        <ContactSection />
      </main>
    </div>
  );
}
