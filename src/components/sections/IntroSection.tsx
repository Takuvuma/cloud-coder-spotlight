import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download } from "lucide-react";

export const IntroSection = () => {
  return (
    <section id="intro" className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl w-full text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-4 duration-700">
            Takudzwa Vuma
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-2 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Software Engineer | Cloud Security Engineer
          </p>
          <p className="text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Building secure, scalable solutions with modern technology
          </p>
        </div>

        <div className="flex flex-wrap gap-4 justify-center mb-8 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-300">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <a href="#contact">Get in Touch</a>
          </Button>
          <Button asChild size="lg" variant="outline">
            <a href="#projects">View Projects</a>
          </Button>
        </div>

        <div className="flex gap-4 justify-center animate-in fade-in slide-in-from-bottom-4 duration-700 delay-400">
          <Button size="icon" variant="ghost" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
            <a href="https://linkedin.com/in/takudzwa-vuma" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
            <a href="https://github.com/takuvuma" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button size="icon" variant="ghost" asChild className="hover:bg-primary/10 hover:text-primary transition-colors">
            <a href="mailto:takudzwa.vuma@talladega.edu">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
