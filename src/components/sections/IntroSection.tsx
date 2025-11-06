import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail } from "lucide-react";
import { useEffect, useState } from "react";

export const IntroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [displaySubtext, setDisplaySubtext] = useState("");
  const fullName = "Takudzwa Vuma";
  const subtitle = "Software Engineer | Cloud Security Engineer";

  useEffect(() => {
    let nameIndex = 0;
    const nameInterval = setInterval(() => {
      if (nameIndex <= fullName.length) {
        setDisplayText(fullName.slice(0, nameIndex));
        nameIndex++;
      } else {
        clearInterval(nameInterval);
        // Start subtitle animation after name completes
        let subtitleIndex = 0;
        const subtitleInterval = setInterval(() => {
          if (subtitleIndex <= subtitle.length) {
            setDisplaySubtext(subtitle.slice(0, subtitleIndex));
            subtitleIndex++;
          } else {
            clearInterval(subtitleInterval);
          }
        }, 50);
      }
    }, 100);

    return () => clearInterval(nameInterval);
  }, []);

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center px-6 relative">
      <div className="max-w-4xl w-full text-center relative z-10">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground min-h-[4rem] md:min-h-[5rem]">
            {displayText}
            <span className="animate-pulse">|</span>
          </h1>
          <p className="text-xl md:text-2xl mb-2 min-h-[2rem]">
            <span className="text-muted-foreground">{displaySubtext.split('|')[0]}</span>
            {displaySubtext.includes('|') && (
              <>
                <span className="text-muted-foreground"> | </span>
                <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-bold">
                  {displaySubtext.split('|')[1]}
                </span>
              </>
            )}
            {displaySubtext.length > 0 && displaySubtext.length < subtitle.length && (
              <span className="animate-pulse">|</span>
            )}
          </p>
          <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Building secure, scalable solutions with modern technology
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button 
            asChild 
            size="lg" 
            className="bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-[var(--glow-primary)] hover:shadow-[0_0_30px_hsl(270_80%_60%_/_0.6)]"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button 
            asChild 
            size="lg" 
            className="bg-transparent border-2 border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-all shadow-[0_0_20px_hsl(280_85%_65%_/_0.4)] hover:shadow-[0_0_30px_hsl(280_85%_65%_/_0.6)]"
          >
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <Button size="icon" variant="ghost" asChild className="hover:bg-muted transition-colors">
            <a href="https://linkedin.com/in/takudzwa-vuma" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild className="hover:bg-muted transition-colors">
            <a href="https://github.com/takuvuma" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild className="hover:bg-muted transition-colors">
            <a href="mailto:takudzwa.vuma@talladega.edu">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
