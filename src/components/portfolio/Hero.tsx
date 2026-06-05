import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Download, Mail, FolderGit2 } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import profileAsset from "@/assets/jeniliya.jpg.asset.json";

const roles = ["Full Stack Developer", "BCA Student", "UI/UX Enthusiast", "Problem Solver"];

function Typer() {
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [del, setDel] = useState(false);

  useEffect(() => {
    const current = roles[i % roles.length];
    const t = setTimeout(
      () => {
        if (!del) {
          setText(current.slice(0, text.length + 1));
          if (text.length + 1 === current.length) setTimeout(() => setDel(true), 1400);
        } else {
          setText(current.slice(0, text.length - 1));
          if (text.length - 1 === 0) {
            setDel(false);
            setI((p) => p + 1);
          }
        }
      },
      del ? 40 : 80
    );
    return () => clearTimeout(t);
  }, [text, del, i]);

  return (
    <span className="text-gradient">
      {text}
      <span className="inline-block w-[2px] h-[1em] bg-primary align-middle ml-1 animate-blink" />
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 bg-mesh">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 items-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="order-2 lg:order-1"
        >
          <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium mb-6">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            Available for internships & opportunities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.05] mb-4">
            Hi, I'm <span className="text-gradient">Arockiya Jeniliya J</span>
          </h1>
          <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium mb-6 min-h-[2em]">
            I'm a <Typer />
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            A passionate BCA student crafting clean, performant and elegant web experiences.
            I love turning ideas into beautiful, scalable digital products.
          </p>

          <div className="flex flex-wrap gap-3 mb-8">
            <a href="/resume.pdf" download>
              <Button size="lg" className="bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow">
                <Download className="w-4 h-4 mr-2" /> Download Resume
              </Button>
            </a>
            <a href="#projects">
              <Button size="lg" variant="outline" className="glass">
                <FolderGit2 className="w-4 h-4 mr-2" /> View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="glass">
                <Mail className="w-4 h-4 mr-2" /> Contact Me
              </Button>
            </a>
          </div>

          <div className="flex items-center gap-3">
            {[
              { icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
              { icon: FaGithub, href: "https://github.com", label: "GitHub" },
              { icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
              { icon: FaEnvelope, href: "mailto:jeniliyajosephraj@gmail.com", label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-11 h-11 rounded-full glass flex items-center justify-center hover:scale-110 hover:text-primary transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="order-1 lg:order-2 flex justify-center"
        >
          <div className="relative animate-float">
            <div className="absolute -inset-6 rounded-full bg-gradient-primary opacity-60 blur-3xl animate-glow-pulse" />
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full p-1 bg-gradient-primary shadow-glow">
              <div className="w-full h-full rounded-full overflow-hidden glass">
                <img
                  src={profileAsset.url}
                  alt="Arockiya Jeniliya J"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
