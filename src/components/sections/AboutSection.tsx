import { Card } from "@/components/ui/card";
import { Award, MapPin, GraduationCap } from "lucide-react";

export const AboutSection = () => {
  return (
    <section id="about" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">About Me</h2>
        
        <div className="grid gap-6 mb-8">
          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                <GraduationCap className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground mb-1">
                  <strong>Bachelor of Science in Computer Information Systems</strong>
                </p>
                <p className="text-muted-foreground">
                  Talladega College | GPA: 3.91/4.0 | Expected: May 2027
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-2">Location</h3>
                <p className="text-muted-foreground">Talladega, AL</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Phone: (256) 493-1036 | Email: takudzwa.vuma@talladega.edu
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-shadow duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-to-br from-primary to-accent rounded-lg">
                <Award className="h-6 w-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-semibold mb-3">Certifications</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• TryHackMe SOC Level 1</li>
                  <li>• TryHackMe Cyber SEC 101</li>
                  <li>• CISCO Cyber Security Essentials</li>
                  <li>• Cloud-Native Security Posture Management (AWS, Google Cloud, Azure)</li>
                  <li>• Cloud Security and Audit Fundamentals: AWS, Azure, GCP</li>
                </ul>
              </div>
            </div>
          </Card>
        </div>

        <Card className="p-6 shadow-[var(--shadow-card)]">
          <h3 className="text-xl font-semibold mb-4">Leadership & Campus Involvement</h3>
          <div className="space-y-4 text-muted-foreground">
            <div>
              <p className="font-semibold text-foreground">Apple HBCU C2 Student Lead</p>
              <p className="text-sm">Leading a team of 20 students in developing campus applications and teaching Swift UI to middle school students</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">IBM Student Ambassador</p>
              <p className="text-sm">Spearheading initiatives for IBM Skills Build courses and mentoring students in AI and cyber security</p>
            </div>
            <div>
              <p className="font-semibold text-foreground">Google Developers Club: Member</p>
              <p className="text-sm">Participating in cybersecurity initiatives, workshops, and hands-on projects</p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
