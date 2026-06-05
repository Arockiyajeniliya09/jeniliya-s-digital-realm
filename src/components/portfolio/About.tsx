import { motion } from "framer-motion";
import { GraduationCap, Code2, Sparkles, Target } from "lucide-react";
import { Section } from "./Section";

const cards = [
  {
    icon: GraduationCap,
    title: "Education",
    desc: "Pursuing BCA at Kamaraj College with a strong foundation in computer science fundamentals.",
  },
  {
    icon: Code2,
    title: "Web Development",
    desc: "Passionate about crafting modern, performant and beautiful web experiences.",
  },
  {
    icon: Sparkles,
    title: "Design & UX",
    desc: "Interested in UI/UX design, building interfaces that feel intuitive and delightful.",
  },
  {
    icon: Target,
    title: "Career Goal",
    desc: "Aspiring Full Stack Developer aiming to build impactful software products.",
  },
];

const timeline = [
  { year: "2023 – Present", title: "Bachelor of Computer Applications", place: "Kamaraj College, Thoothukudi" },
  { year: "2022 – 2023", title: "Higher Secondary (12th)", place: "Computer Science Stream" },
  { year: "2020 – 2021", title: "Secondary School (10th)", place: "Foundation in Mathematics & Science" },
];

export function About() {
  return (
    <Section id="about" eyebrow="About me" title="A glimpse into my journey" subtitle="Curious mind, builder at heart — focused on shipping meaningful software.">
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5 mb-16">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="glass rounded-2xl p-6 hover:shadow-glow hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center mb-4 shadow-glow">
              <c.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{c.desc}</p>
          </motion.div>
        ))}
      </div>

      <div className="glass rounded-3xl p-8 sm:p-10 mb-12">
        <h3 className="text-xl font-semibold mb-3">Career Objective</h3>
        <p className="text-muted-foreground leading-relaxed">
          To secure a challenging role as a Full Stack Developer where I can leverage my technical
          skills, creativity and passion for problem-solving to contribute to impactful products
          while growing alongside a team of talented engineers.
        </p>
      </div>

      <div className="relative">
        <h3 className="text-2xl font-bold text-center mb-10">Education Timeline</h3>
        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 sm:left-1/2 sm:-translate-x-px top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
          {timeline.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, x: i % 2 ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`relative pl-12 sm:pl-0 sm:w-1/2 mb-10 ${i % 2 ? "sm:ml-auto sm:pl-10" : "sm:pr-10 sm:text-right"}`}
            >
              <div className={`absolute top-2 w-3 h-3 rounded-full bg-gradient-primary shadow-glow left-2.5 sm:left-auto ${i % 2 ? "sm:-left-1.5" : "sm:-right-1.5"}`} />
              <div className="glass rounded-2xl p-5">
                <span className="text-xs font-semibold text-primary">{t.year}</span>
                <h4 className="font-semibold mt-1">{t.title}</h4>
                <p className="text-sm text-muted-foreground">{t.place}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
