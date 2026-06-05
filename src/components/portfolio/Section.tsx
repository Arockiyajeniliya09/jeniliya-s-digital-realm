import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function Section({
  id,
  eyebrow,
  title,
  subtitle,
  children,
}: {
  id: string;
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="py-24 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          {eyebrow && (
            <span className="inline-block px-3 py-1 rounded-full glass text-xs font-semibold tracking-widest uppercase text-primary mb-4">
              {eyebrow}
            </span>
          )}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3">
            {title.split(" ").map((w, i, arr) =>
              i === arr.length - 1 ? (
                <span key={i} className="text-gradient"> {w}</span>
              ) : (
                <span key={i}>{i ? " " : ""}{w}</span>
              )
            )}
          </h2>
          {subtitle && (
            <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
