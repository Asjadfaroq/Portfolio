"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FaFolderOpen, FaGithub, FaArrowUpRightFromSquare, FaMagnifyingGlassPlus } from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiFramer,
  SiRedux,
  SiReactrouter,
  SiGooglegemini,
  SiDotnet,
  SiPostgresql,
  SiSupabase,
  SiHuggingface,
} from "react-icons/si";

const techIcons: Record<string, ComponentType<{ className?: string }>> = {
  TS: SiTypescript,
  "Next.js": SiNextdotjs,
  Tailwind: SiTailwindcss,
  React: SiReact,
  Framer: SiFramer,
  Redux: SiRedux,
  "React Router": SiReactrouter,
  Gemini: SiGooglegemini,
  ".NET": SiDotnet,
  PostgreSQL: SiPostgresql,
  Supabase: SiSupabase,
  "Hugging Face": SiHuggingface,
};

const techColors: Record<string, string> = {
  TS: "#3178c6",
  "Next.js": "#f9fafb",
  Tailwind: "#38bdf8",
  React: "#61dafb",
  Framer: "#8b5cf6",
  Redux: "#a855f7",
  "React Router": "#CA4245",
  Gemini: "#8E75B2",
  ".NET": "#512bd4",
  PostgreSQL: "#4169e1",
  Supabase: "#3ecf8e",
  "Hugging Face": "#ffd21e",
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  },
};

const projects = [
  {
    title: "Doc Intelligence",
    description:
      "Production-ready RAG system for querying PDFs and documents with cited answers. Built with ASP.NET Core, Next.js, EF Core, and Supabase (PostgreSQL + pgvector), using Hugging Face for embeddings and Groq for fast, reliable responses.",
    tech: ["Next.js", ".NET", "TS", "PostgreSQL", "Supabase", "Hugging Face"],
    image: "/projects/fillchat.png",
    liveUrl: "https://documentintelligenceplatform.vercel.app/",
    githubUrl: "https://github.com/Asjadfaroq/document-intelligence-platform",
  },
  {
    title: "ReelSense",
    description:
      "Movie discovery app powered by Gemini AI for smart search and recommendations. Built with React and React Router for a smooth, modern experience.",
    tech: ["React", "React Router", "Gemini"],
    image: "/projects/ReelSense.png",
    liveUrl: "https://reel-sense.vercel.app",
    githubUrl: "https://github.com/Asjadfaroq/ReelSense",
  },
  {
    title: "Freshmart Store",
    description:
      "Modern grocery store web application with clean UI and efficient state management with Redux.",
    tech: ["Redux", "Next.js"],
    image: "/projects/freshmart.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Nike GT Cut Academy EP",
    description:
      "Product landing page with immersive visuals and smooth scroll-based animations.",
    tech: ["React", "Framer"],
    image: "/projects/nike-gt-cut.png",
    liveUrl: "#",
    githubUrl: "#",
  },
];

type SelectedProjectImage = {
  src: string;
  title: string;
};

export function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<SelectedProjectImage | null>(null);

  useEffect(() => {
    if (!selectedImage) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedImage(null);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <section id="projects" className="section">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-5 pb-6 pt-2 md:pt-4"
      >
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-sky-400 md:h-11 md:w-11">
              <FaFolderOpen className="text-xl md:text-2xl" />
            </div>
            <div className="flex items-center gap-2">
              <h2 className="heading-gradient text-[1.9rem] font-bold tracking-tight md:text-[2.2rem]">
                Featured Projects
              </h2>
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-sky-500/80 to-sky-400/40" aria-hidden />
            </div>
          </div>
        </div>
        <div className="heading-divider" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid gap-5 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-slate-700/50 bg-slate-950/80 text-sm text-slate-200 shadow-[0_4px_24px_-4px_rgba(0,0,0,0.5)] transition-[border-color,box-shadow] duration-300 hover:border-sky-500/25 hover:shadow-[0_8px_32px_-4px_rgba(0,0,0,0.6),0_0_0_1px_rgba(56,189,248,0.08)]"
              whileHover={{
                y: -4,
                transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
              }}
            >
              {/* Accent stripe */}
              <div className="absolute left-0 top-0 z-10 h-full w-1 bg-gradient-to-b from-sky-500/70 via-sky-400/40 to-transparent opacity-90" />
              <button
                type="button"
                onClick={() =>
                  setSelectedImage({ src: project.image, title: project.title })
                }
                className="relative h-40 w-full overflow-hidden border-b border-slate-700/50 bg-slate-900/70 text-left sm:h-44 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500/70 focus-visible:ring-inset"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover scale-105 transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/15 to-transparent" />
                <span className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-400/60 bg-black/60 backdrop-blur-sm">
                    <FaMagnifyingGlassPlus className="text-slate-200 text-sm" />
                  </span>
                </span>
              </button>
              <div className="flex flex-1 flex-col gap-3 border-b border-slate-800/80 bg-black px-5 py-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold tracking-tight text-slate-50">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    {project.tech.map((tech) => {
                      const Icon = techIcons[tech];
                      const color = techColors[tech];
                      if (!Icon) return null;
                      return (
                        <span
                          key={tech}
                          className="inline-flex shrink-0 items-center text-[1rem] md:text-[1.1rem]"
                          style={{ color: color ?? "currentColor" }}
                        >
                          <Icon className="shrink-0 text-[1rem] md:text-[1.1rem]" />
                        </span>
                      );
                    })}
                  </div>
                </div>
                <p className="text-[0.85rem] leading-relaxed text-slate-400">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-3 border-t border-slate-800/80 bg-black px-5 py-3">
                <a
                  href={project.liveUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-600/80 bg-black px-3 py-1.5 text-xs font-medium text-sky-300 transition-colors duration-200 hover:border-sky-500/50 hover:text-sky-200"
                >
                  <FaArrowUpRightFromSquare className="text-xs" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-600/80 bg-black px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-slate-500 hover:text-slate-50"
                >
                  <FaGithub className="text-xs" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {selectedImage && (
          <div
            aria-hidden
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/70 px-4"
            onClick={() => setSelectedImage(null)}
          >
            <div
              className="relative max-h-[80vh] w-full max-w-4xl overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/95 shadow-2xl shadow-black/80"
              onClick={(event) => event.stopPropagation()}
            >
              <div className="relative h-[55vh] w-full sm:h-[65vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 80vw"
                />
              </div>
              <div className="flex items-center justify-between gap-3 border-t border-slate-800/80 bg-slate-950/95 px-4 py-2.5 text-xs text-slate-300">
                <span className="truncate">{selectedImage.title}</span>
                <button
                  type="button"
                  onClick={() => setSelectedImage(null)}
                  className="rounded-md border border-slate-600/80 px-2 py-0.5 text-[0.7rem] font-medium text-slate-100 hover:border-sky-500 hover:text-sky-300"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </motion.div>
    </section>
  );
}

