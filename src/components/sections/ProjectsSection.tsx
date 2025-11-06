import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const ProjectsSection = () => {
  const projects = [
    {
      title: "EduPulse",
      description: "A comprehensive college management app built with Swift and Firebase, featuring secure authentication, real-time data synchronization, and role-based access control.",
      technologies: ["Swift", "Firebase", "Xcode", "UIKit", "SwiftUI", "MVVM"],
      highlights: [
        "Implemented secure user authentication and real-time data sync",
        "Built modular features for course scheduling and performance analytics",
        "Applied MVVM design pattern for improved maintainability and scalability",
        "Integrated Cloud Firestore for secure, scalable data management"
      ],
      github: "https://github.com/takuvuma/EduPulse",
    },
    {
      title: "Mastercard Cybersecurity Virtual Experience",
      description: "Completed comprehensive cybersecurity program focusing on risk assessment, threat analysis, and security awareness training.",
      technologies: ["Microsoft Defender", "MITRE ATT&CK", "NIST", "ISO 27001", "LMS"],
      highlights: [
        "Conducted security assessments using vulnerability scanning techniques",
        "Analyzed phishing and social engineering attacks",
        "Gained hands-on experience in incident reporting and risk assessment",
        "Developed targeted security awareness training programs"
      ],
      date: "March 2025",
    },
  ];

  return (
    <section id="projects" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Projects</h2>
        
        <div className="space-y-6">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                  {project.date && (
                    <p className="text-sm text-muted-foreground">{project.date}</p>
                  )}
                </div>
                {project.github && (
                  <Button variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      View Code
                    </a>
                  </Button>
                )}
              </div>

              <p className="text-muted-foreground mb-4">{project.description}</p>

              <div className="mb-4">
                <h4 className="font-semibold mb-2">Key Highlights:</h4>
                <ul className="space-y-2">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="text-muted-foreground text-sm flex items-start">
                      <span className="text-primary mr-2">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
