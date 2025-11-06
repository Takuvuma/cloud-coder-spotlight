import { Card } from "@/components/ui/card";
import { GraduationCap, Award, BookOpen } from "lucide-react";

export const EducationSection = () => {
  return (
    <section id="education" className="min-h-screen py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title">Education</h2>
        
        <Card className="p-8 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300 mb-6">
          <div className="flex items-start gap-4 mb-6">
            <div className="p-4 bg-foreground rounded-lg">
              <GraduationCap className="h-8 w-8 text-background" />
            </div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold mb-2">Talladega College</h3>
              <p className="text-lg text-muted-foreground mb-1">Bachelor of Science in Computer Information Systems</p>
              <p className="text-muted-foreground">Talladega, AL</p>
              <div className="flex gap-4 mt-3">
                <div className="flex items-center gap-2">
                  <Award className="h-5 w-5 text-primary" />
                  <span className="font-semibold">GPA: 3.91/4.0</span>
                </div>
                <div className="text-muted-foreground">
                  Expected Graduation: May 2027
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="h-5 w-5 text-primary" />
              <h4 className="text-lg font-semibold">Relevant Coursework</h4>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {[
                "Fundamentals of Programming",
                "Data Structures & Algorithms",
                "Statistics",
                "Network & Data Communications",
                "Digital Forensics & Investigations",
                "Information Security and Policies",
                "Software Engineering"
              ].map((course, idx) => (
                <div key={idx} className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-muted-foreground">{course}</span>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};
