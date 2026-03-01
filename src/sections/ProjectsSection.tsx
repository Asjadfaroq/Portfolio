"use client";

import type { ComponentType } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaFolderOpen, FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiReact,
  SiFramer,
  SiRedux,
  SiReactrouter,
  SiGooglegemini,
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
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const projects = [
  {
    title: "ResearchX",
    description:
      "AI-powered research document generator that creates comprehensive research papers using advanced AI models.",
    tech: ["TS", "Next.js"],
    image: "/projects/researchx.png",
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "ReelSense",
    description:
      "Movie discovery app powered by Gemini AI for smart search and recommendations. Built with React and React Router for a smooth, modern experience.",
    tech: ["React", "React Router", "Gemini"],
    image: "/projects/ReelSense.png",
    liveUrl: "https://movieapp-1-9vz5.onrender.com/",
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

export function ProjectsSection() {
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
            <h2 className="heading-gradient text-[1.9rem] font-bold tracking-tight md:text-[2.2rem]">
              Featured Projects
            </h2>
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
              className="flex flex-col overflow-hidden rounded-2xl border border-slate-700/70 text-sm text-slate-200 shadow-lg shadow-slate-900/70 transition-colors hover:border-slate-600/80"
              whileHover={{
                y: -6,
                transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] },
              }}
            >
              <div className="relative h-40 w-full overflow-hidden bg-slate-900/70 sm:h-44">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
              <div className="flex flex-1 flex-col gap-3 bg-black p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-base font-semibold text-slate-50">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-3">
                    {project.tech.map((tech) => {
                      const Icon = techIcons[tech];
                      if (!Icon) return null;
                      return (
                        <Icon
                          key={tech}
                          className="text-[1.5rem] md:text-[1.7rem]"
                          style={{ color: techColors[tech] ?? "#e5e7eb" }}
                          title={tech}
                        />
                      );
                    })}
                  </div>
                </div>
                <p className="text-[0.85rem] leading-relaxed text-slate-300">
                  {project.description}
                </p>
              </div>
              <div className="flex items-center gap-4 px-4 pb-3 pt-1 text-xs font-medium">
                <a
                  href={project.liveUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sky-400 transition-colors duration-200 hover:text-sky-300"
                >
                  <FaArrowUpRightFromSquare className="text-sm" />
                  <span>Live Demo</span>
                </a>
                <a
                  href={project.githubUrl ?? "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-slate-400 transition-colors duration-200 hover:text-slate-200"
                >
                  <FaGithub className="text-sm" />
                  <span>GitHub</span>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

