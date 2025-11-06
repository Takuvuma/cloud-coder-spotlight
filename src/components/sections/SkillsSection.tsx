import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Cloud, Database, Shield, Languages, Users } from "lucide-react";

export const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: ["Python", "JavaScript", "TypeScript", "React JS", "HTML/CSS", "SQL", "Swift", "Git", "Linux"]
    },
    {
      title: "Cloud & Platforms",
      icon: Cloud,
      skills: ["Azure", "Google Cloud", "Amazon EC2", "Firebase"]
    },
    {
      title: "Development Tools",
      icon: Database,
      skills: ["Visual Studio", "PyCharm", "MongoDB", "Xcode", "ServiceNow"]
    },
    {
      title: "Security & Networking",
      icon: Shield,
      skills: ["Cisco Routers", "Firewalls", "VPN", "Network Security", "Vulnerability Scanning", "MITRE ATT&CK", "Microsoft Defender"]
    },
    {
      title: "Languages",
      icon: Languages,
      skills: ["English (Fluent)", "Shona (Native)", "Zulu (Native)"]
    },
    {
      title: "Professional Affiliations",
      icon: Users,
      skills: ["CodePath", "ColorStack", "TMCF", "UNCF", "NSBE", "National Cyber League"]
    }
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Skills & Tools</h2>
        
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <Card key={index} className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-gradient-to-br from-primary to-accent rounded-lg">
                  <category.icon className="h-5 w-5 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge key={idx} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 mt-6 shadow-[var(--shadow-card)]">
          <h3 className="text-lg font-semibold mb-3">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Fundamentals of Programming",
              "Data Structures & Algorithms",
              "Statistics",
              "Network & Data Communications",
              "Digital Forensics & Investigations",
              "Information Security and Policies",
              "Software Engineering"
            ].map((course, idx) => (
              <Badge key={idx} variant="outline">
                {course}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};
