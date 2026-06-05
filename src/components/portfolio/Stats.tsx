import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Projects Built" },
  { value: 12, suffix: "+", label: "Technologies" },
  { value: 3, suffix: "+", label: "Certifications" },
  { value: 100, suffix: "%", label: "Dedication" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.round(v).toString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration: 1.6, ease: "easeOut" });
      return controls.stop;
    }
  }, [inView, to, count]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl font-bold text-gradient">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-8 py-12">
      <div className="glass rounded-3xl p-8 sm:p-10 grid grid-cols-2 md:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <Counter to={s.value} suffix={s.suffix} />
            <p className="text-sm text-muted-foreground mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
