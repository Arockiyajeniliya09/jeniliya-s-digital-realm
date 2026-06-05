import { motion } from "framer-motion";
import { Award, Briefcase, BookOpen, Trophy } from "lucide-react";
import { Section } from "./Section";

const items = [
  {
    icon: Award,
    title: "Certifications",
    points: [
      "Web Development Fundamentals",
      "Python Programming Certification",
      "JavaScript Essentials",
    ],
  },
  {
    icon: Briefcase,
    title: "Internship Experience",
    points: [
      "Web Development Intern",
      "Hands-on experience with real client projects",
      "Collaborated using Git and modern workflows",
    ],
  },
  {
    icon: BookOpen,
    title: "Workshops",
    points: [
      "Full Stack Development Bootcamp",
      "UI/UX Design Workshop",
      "Open Source Contribution Drive",
    ],
  },
  {
    icon: Trophy,
    title: "Academic Achievements",
    points: [
      "Consistent academic performer",
      "Active participant in coding events",
      "Department-level project recognition",
    ],
  },
];

export function Achievements() {
  return (
    <Section id="achievements" eyebrow="Milestones" title="Achievements & experience" subtitle="A snapshot of certifications, experiences and recognitions along the way.">
      <div className="grid md:grid-cols-2 gap-5">
        {items.map((it, i) => (
          <motion.div
            key={it.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-3xl p-7 hover:shadow-glow hover:-translate-y-1 transition-all"
          >
            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center shadow-glow">
                <it.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-lg font-semibold">{it.title}</h3>
            </div>
            <ul className="space-y-2">
              {it.points.map((p) => (
                <li key={p} className="text-sm text-muted-foreground flex gap-2">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gradient-primary shrink-0" />
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
