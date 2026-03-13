import { HeroSection } from "@/sections/HeroSection";
import { JourneySection } from "@/sections/JourneySection";
import { TechStackSection } from "@/sections/TechStackSection";
import { ProjectsSection } from "@/sections/ProjectsSection";
import { ContributionsSection } from "@/sections/ContributionsSection";
import { ContactSection } from "@/sections/ContactSection";
import { Navbar } from "@/components/Navbar";
import { PageTransition } from "@/components/PageTransition";

export default function Home() {
  return (
    <div className="min-h-screen text-slate-100">
      <Navbar />
      <PageTransition>
        <main className="space-y-10 pb-14 pt-6 md:space-y-12 md:pt-8">
          <HeroSection />
          <JourneySection />
          <TechStackSection />
          <ProjectsSection />
          <ContributionsSection />
          <ContactSection />
        </main>
      </PageTransition>
    </div>
  );
}
