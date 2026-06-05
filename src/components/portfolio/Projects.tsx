import { motion } from "framer-motion";
import { ExternalLink, Github, Truck, ShoppingBag } from "lucide-react";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";

const projects = [
  {
    icon: Truck,
    title: "Transport Agency Website",
    description:
      "A modern transport management website with vehicle services, booking system, customer support, route details and responsive design.",
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "from-violet-500/30 to-fuchsia-500/30",
  },
  {
    icon: ShoppingBag,
    title: "E-Commerce Website",
    description:
      "An online shopping platform featuring product catalog, shopping cart interface, responsive UI and a smooth user-friendly experience.",
    tech: ["HTML", "CSS", "JavaScript"],
    accent: "from-cyan-500/30 to-blue-500/30",
  },
];

export function Projects() {
  return (
    <Section id="projects" eyebrow="Work" title="Selected projects" subtitle="A few things I've built while learning and exploring the craft.">
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((p, i) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="group glass rounded-3xl overflow-hidden hover:shadow-glow transition-all duration-500"
          >
            <div className={`relative h-52 bg-gradient-to-br ${p.accent} flex items-center justify-center overflow-hidden`}>
              <div className="absolute inset-0 bg-mesh opacity-40" />
              <p.icon className="relative w-20 h-20 text-foreground/80 group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-card/90 via-card/0 to-transparent" />
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{p.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-2">
                <Button size="sm" className="bg-gradient-primary text-primary-foreground">
                  <ExternalLink className="w-3.5 h-3.5 mr-2" /> Live Demo
                </Button>
                <Button size="sm" variant="outline" className="glass">
                  <Github className="w-3.5 h-3.5 mr-2" /> Code
                </Button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </Section>
  );
}
