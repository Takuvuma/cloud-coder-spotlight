import { Card } from "@/components/ui/card";
import { Building2, MapPin, Calendar } from "lucide-react";

export const ExperienceSection = () => {
  const experiences = [
    {
      title: "Information Technology Intern",
      company: "Talladega College",
      location: "Talladega, AL",
      period: "Jan 2024 – Present",
      responsibilities: [
        "Managed and troubleshot over 200 hardware and software issues weekly, achieving an 87% resolution rate within 24 hours",
        "Implemented optimized asset management system using ServiceNow, reducing inventory discrepancies by 30%",
        "Configured and maintained network security with Cisco routers, firewalls, and VPNs, improving system uptime to 99.3%",
        "Managed IT support tickets from staff and students, prioritizing issues and ensuring timely resolutions"
      ]
    },
    {
      title: "IT Help Desk Intern",
      company: "Century Computers",
      location: "Harare, Zimbabwe",
      period: "January 2022 - June 2023",
      responsibilities: [
        "Provided technical support by troubleshooting hardware, software, and network issues, ensuring minimal downtime",
        "Configured and maintained ADSL modems, Cisco routers, and Ubiquiti outdoor antennas, improving network connectivity",
        "Installed and configured Windows operating systems, managed user accounts, and ensured system security",
        "Delivered remote and on-site IT support, resolving VPN issues and training users on cybersecurity best practices"
      ]
    }
  ];

  return (
    <section id="experience" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Experience</h2>
        
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <Card key={index} className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 bg-card/50 backdrop-blur-sm border-primary/20">
              <div className="mb-4">
                <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                  <div className="flex items-center gap-1">
                    <Building2 className="h-4 w-4" />
                    <span>{exp.company}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="h-4 w-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{exp.period}</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-2">
                {exp.responsibilities.map((responsibility, idx) => (
                  <li key={idx} className="text-muted-foreground flex items-start">
                    <span className="text-primary mr-2 mt-1">•</span>
                    <span>{responsibility}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
