import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Linkedin, Github, MapPin } from "lucide-react";

export const ContactSection = () => {
  return (
    <section id="contact" className="min-h-screen py-20 px-6 flex items-center">
      <div className="max-w-4xl mx-auto w-full">
        <h2 className="section-title">Get in Touch</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                <Mail className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Email</h3>
                <a href="mailto:takudzwa.vuma@talladega.edu" className="text-muted-foreground hover:text-primary transition-colors">
                  takudzwa.vuma@talladega.edu
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                <Phone className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">Phone</h3>
                <a href="tel:+12564931036" className="text-muted-foreground hover:text-primary transition-colors">
                  (256) 493-1036
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                <Linkedin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">LinkedIn</h3>
                <a 
                  href="https://linkedin.com/in/takudzwa-vuma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  linkedin.com/in/takudzwa-vuma
                </a>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                <Github className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="font-semibold mb-2">GitHub</h3>
                <a 
                  href="https://github.com/takuvuma" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  github.com/takuvuma
                </a>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 mt-6 shadow-[var(--shadow-card)]">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold mb-2">Location</h3>
              <p className="text-muted-foreground">Talladega, AL</p>
            </div>
          </div>
        </Card>

        <div className="mt-8 text-center">
          <p className="text-muted-foreground mb-4">
            I'm always open to discussing new opportunities, collaborations, or just connecting!
          </p>
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity">
            <a href="mailto:takudzwa.vuma@talladega.edu">Send Message</a>
          </Button>
        </div>
      </div>
    </section>
  );
};
