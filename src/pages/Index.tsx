import { PortfolioSidebar } from "@/components/PortfolioSidebar";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { IntroSection } from "@/components/sections/IntroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ContactSection } from "@/components/sections/ContactSection";

const Index = () => {
  return (
    <div className="flex min-h-screen w-full relative">
      <AnimatedBackground />
      <PortfolioSidebar />
      
      <main className="flex-1 md:ml-64 relative z-10">
        <IntroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ExperienceSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  );
};

export default Index;
