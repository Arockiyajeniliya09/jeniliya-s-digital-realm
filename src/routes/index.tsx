import { createFileRoute } from "@tanstack/react-router";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/portfolio/Navbar";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Achievements } from "@/components/portfolio/Achievements";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";
import { Loader } from "@/components/portfolio/Loader";
import { Toaster } from "@/components/ui/sonner";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Arockiya Jeniliya J — Full Stack Developer & BCA Student" },
      {
        name: "description",
        content:
          "Portfolio of Arockiya Jeniliya J — BCA student & aspiring Full Stack Developer. Projects, skills, achievements and contact.",
      },
      { property: "og:title", content: "Arockiya Jeniliya J — Full Stack Developer" },
      {
        property: "og:description",
        content:
          "Modern portfolio showcasing projects, skills and experience of an aspiring Full Stack Developer.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <ThemeProvider>
      <Loader />
      <div className="relative min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Achievements />
          <Contact />
        </main>
        <Footer />
        <Toaster richColors position="bottom-right" />
      </div>
    </ThemeProvider>
  );
}
