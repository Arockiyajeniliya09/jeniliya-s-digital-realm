import { ArrowUp } from "lucide-react";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa6";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border mt-10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 grid md:grid-cols-3 gap-10">
        <div>
          <p className="font-display font-bold text-xl">
            <span className="text-gradient">Jeniliya</span>.dev
          </p>
          <p className="text-sm text-muted-foreground mt-3 max-w-xs">
            Building thoughtful, modern web experiences. Always learning, always shipping.
          </p>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Quick links</h4>
          <ul className="space-y-2">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex gap-3">
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
                className="w-10 h-10 rounded-full glass flex items-center justify-center hover:text-primary hover:scale-110 transition-all"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Arockiya Jeniliya J. All rights reserved.
          </p>
          <Button
            variant="outline"
            size="sm"
            className="glass"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <ArrowUp className="w-3.5 h-3.5 mr-2" /> Back to top
          </Button>
        </div>
      </div>
    </footer>
  );
}
