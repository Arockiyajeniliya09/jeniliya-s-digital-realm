import { motion } from "framer-motion";
import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import { z } from "zod";
import { Section } from "./Section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(150),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const info = [
  { icon: Phone, label: "Phone", value: "+91 7397584497", href: "tel:+917397584497" },
  { icon: Mail, label: "Email", value: "jeniliyajosephraj@gmail.com", href: "mailto:jeniliyajosephraj@gmail.com" },
  { icon: MapPin, label: "Location", value: "Tharuvaikulam, Thoothukudi, Tamil Nadu" },
];

export function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      toast.error(res.error.issues[0].message);
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Thanks! Your message has been sent.");
      setForm({ name: "", email: "", subject: "", message: "" });
    }, 900);
  };

  return (
    <Section id="contact" eyebrow="Contact" title="Let's build something together" subtitle="Have a project, opportunity or just want to say hi? My inbox is always open.">
      <div className="grid lg:grid-cols-5 gap-6">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          {info.map((i) => {
            const Wrapper = i.href ? "a" : "div";
            return (
              <Wrapper
                key={i.label}
                {...(i.href ? { href: i.href } : {})}
                className="glass rounded-2xl p-5 flex items-start gap-4 hover:shadow-glow hover:-translate-y-1 transition-all"
              >
                <div className="w-11 h-11 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0 shadow-glow">
                  <i.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider">{i.label}</p>
                  <p className="font-medium break-words">{i.value}</p>
                </div>
              </Wrapper>
            );
          })}
        </motion.div>

        <motion.form
          onSubmit={onSubmit}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-3 glass rounded-3xl p-6 sm:p-8 space-y-4"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Input
              placeholder="Your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              maxLength={100}
              className="bg-background/50"
            />
            <Input
              type="email"
              placeholder="Your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              maxLength={255}
              className="bg-background/50"
            />
          </div>
          <Input
            placeholder="Subject"
            value={form.subject}
            onChange={(e) => setForm({ ...form, subject: e.target.value })}
            maxLength={150}
            className="bg-background/50"
          />
          <Textarea
            placeholder="Your message..."
            rows={6}
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
            maxLength={1000}
            className="bg-background/50 resize-none"
          />
          <Button
            type="submit"
            disabled={loading}
            size="lg"
            className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
          >
            <Send className="w-4 h-4 mr-2" />
            {loading ? "Sending..." : "Send Message"}
          </Button>
        </motion.form>
      </div>
    </Section>
  );
}
