import { Code2, Cloud, Database, Shield, Languages, Users, FileCode2, Zap, Lock, Globe, Terminal, Box, Flame, Network, Server, GitBranch } from "lucide-react";

export const SkillsSection = () => {
  const skills = [
    { name: "Python", icon: FileCode2, color: "#3776AB" },
    { name: "JavaScript", icon: FileCode2, color: "#F7DF1E" },
    { name: "TypeScript", icon: FileCode2, color: "#3178C6" },
    { name: "React JS", icon: Zap, color: "#61DAFB" },
    { name: "HTML/CSS", icon: Code2, color: "#E34F26" },
    { name: "SQL", icon: Database, color: "#4479A1" },
    { name: "Swift", icon: Zap, color: "#FA7343" },
    { name: "Git", icon: GitBranch, color: "#F05032" },
    { name: "Linux", icon: Terminal, color: "#FCC624" },
    { name: "Azure", icon: Cloud, color: "#0078D4" },
    { name: "Google Cloud", icon: Cloud, color: "#4285F4" },
    { name: "Amazon EC2", icon: Cloud, color: "#FF9900" },
    { name: "Firebase", icon: Flame, color: "#FFCA28" },
    { name: "Visual Studio", icon: Code2, color: "#5C2D91" },
    { name: "PyCharm", icon: Code2, color: "#21D789" },
    { name: "MongoDB", icon: Database, color: "#47A248" },
    { name: "Xcode", icon: Box, color: "#147EFB" },
    { name: "ServiceNow", icon: Server, color: "#62D84E" },
    { name: "Cisco Routers", icon: Network, color: "#1BA0D7" },
    { name: "Firewalls", icon: Shield, color: "#E74C3C" },
    { name: "VPN", icon: Lock, color: "#9B59B6" },
    { name: "Network Security", icon: Shield, color: "#E67E22" },
    { name: "Vulnerability Scanning", icon: Shield, color: "#C0392B" },
    { name: "MITRE ATT&CK", icon: Shield, color: "#34495E" },
    { name: "Microsoft Defender", icon: Shield, color: "#00A4EF" },
    { name: "CodePath", icon: Users, color: "#8E44AD" },
    { name: "ColorStack", icon: Users, color: "#E91E63" },
    { name: "TMCF", icon: Users, color: "#3498DB" },
    { name: "UNCF", icon: Users, color: "#E74C3C" },
    { name: "NSBE", icon: Users, color: "#F39C12" },
    { name: "National Cyber League", icon: Users, color: "#16A085" },
  ];

  const coursework = [
    "Fundamentals of Programming",
    "Data Structures & Algorithms",
    "Statistics",
    "Network & Data Communications",
    "Digital Forensics & Investigations",
    "Information Security and Policies",
    "Software Engineering"
  ];

  return (
    <section id="skills" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Skills & Tools</h2>
        <p className="text-muted-foreground text-center mb-12 text-lg">
          Learned by securing networks all night and debugging all day!
        </p>
        
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 bg-secondary/80 backdrop-blur-sm rounded-lg border border-border/50 hover:border-primary/50 transition-all duration-300"
              >
                <Icon className="h-4 w-4" style={{ color: skill.color }} />
                <span className="text-sm font-medium">{skill.name}</span>
              </div>
            );
          })}
        </div>

        <div className="mt-8">
          <h3 className="text-xl font-semibold mb-4 text-center">Relevant Coursework</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {coursework.map((course, idx) => (
              <div
                key={idx}
                className="px-4 py-2 bg-card/50 backdrop-blur-sm rounded-lg border border-border/50 text-sm"
              >
                {course}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
