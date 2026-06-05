import { motion } from "framer-motion";
import { Section } from "./Section";
import { Users, MessageSquare, Lightbulb, Clock, Crown } from "lucide-react";

const tech = [
  { name: "HTML", value: 95 },
  { name: "CSS", value: 90 },
  { name: "JavaScript", value: 85 },
  { name: "Bootstrap", value: 85 },
  { name: "React.js", value: 80 },
  { name: "Node.js", value: 75 },
  { name: "Express.js", value: 72 },
  { name: "MongoDB", value: 75 },
  { name: "Python", value: 85 },
  { name: "Java", value: 75 },
  { name: "C", value: 80 },
  { name: "C++", value: 75 },
];

const soft = [
  { name: "Problem Solving", icon: Lightbulb },
  { name: "Communication", icon: MessageSquare },
  { name: "Teamwork", icon: Users },
  { name: "Leadership", icon: Crown },
  { name: "Time Management", icon: Clock },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="Skills" title="My technical toolbox" subtitle="A mix of languages, frameworks and human skills I bring to every project.">
      <div className="grid lg:grid-cols-2 gap-10">
        <div className="glass rounded-3xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
          <div className="space-y-5">
            {tech.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
              >
                <div className="flex justify-between text-sm font-medium mb-2">
                  <span>{s.name}</span>
                  <span className="text-primary">{s.value}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${s.value}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: i * 0.05, ease: "easeOut" }}
                    className="h-full bg-gradient-primary rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="glass rounded-3xl p-6 sm:p-8">
          <h3 className="text-xl font-semibold mb-6">Professional Skills</h3>
          <div className="grid sm:grid-cols-2 gap-4">
            {soft.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
                className="group glass rounded-2xl p-5 flex items-center gap-4 hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform">
                  <s.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <span className="font-medium">{s.name}</span>
              </motion.div>
            ))}
          </div>

          <div className="mt-8 grid grid-cols-3 gap-3">
            {["Git", "VS Code", "Figma", "Node.js", "Tailwind", "MongoDB"].map((t) => (
              <span key={t} className="text-center text-xs font-medium glass rounded-full px-3 py-2">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
