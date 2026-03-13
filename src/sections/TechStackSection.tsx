"use client";

import type { ComponentType } from "react";
import { motion } from "framer-motion";
import { FaCode } from "react-icons/fa6";
import {
  SiJavascript,
  SiTypescript,
  SiTailwindcss,
  SiFramer,
  SiReact,
  SiRedux,
  SiNextdotjs,
  SiNodedotjs,
  SiSass,
  SiMongodb,
  SiSupabase,
  SiSanity,
  SiDocker,
  SiVercel,
  SiGit,
  SiPostman,
  SiCloudflare,
  SiDotnet,
  SiSqlite,
  SiRedis,
  SiGraphql,
  SiJest,
  SiPrisma,
  SiKubernetes,
  SiFigma,
  SiSwagger,
  SiStorybook,
  SiPostgresql,
  SiHuggingface,
  SiGooglegemini,
} from "react-icons/si";

type Skill = {
  label: string;
  icon: ComponentType<{ className?: string }> | null;
  bg: string;
  accent: string;
  abbrev?: string;
};

const skillCategories: { title: string; skills: Skill[] }[] = [
  {
    title: "Frontend",
    skills: [
      { label: "JavaScript", icon: SiJavascript, bg: "#020617", accent: "#F7DF1E" },
      { label: "TypeScript", icon: SiTypescript, bg: "#020617", accent: "#3178C6" },
      { label: "React", icon: SiReact, bg: "#020617", accent: "#61DAFB" },
      { label: "Next.js", icon: SiNextdotjs, bg: "#020617", accent: "#FFFFFF" },
      { label: "Tailwind", icon: SiTailwindcss, bg: "#020617", accent: "#38BDF8" },
      { label: "SCSS", icon: SiSass, bg: "#020617", accent: "#F472B6" },
      { label: "Framer", icon: SiFramer, bg: "#020617", accent: "#E879F9" },
      { label: "Redux", icon: SiRedux, bg: "#020617", accent: "#A855F7" },
    ],
  },
  {
    title: "Backend",
    skills: [
      { label: "Node.js", icon: SiNodedotjs, bg: "#020617", accent: "#4ADE80" },
      { label: "Express", icon: null, bg: "#020617", accent: "#E5E7EB", abbrev: "EX" },
      { label: ".NET", icon: SiDotnet, bg: "#020617", accent: "#512BD4" },
      { label: "C#", icon: null, bg: "#020617", accent: "#239120", abbrev: "C#" },
      { label: "ASP.NET Core", icon: null, bg: "#020617", accent: "#512BD4", abbrev: "ASP" },
      { label: "EF Core", icon: null, bg: "#020617", accent: "#512BD4", abbrev: "EF" },
      { label: "LINQ", icon: null, bg: "#020617", accent: "#E5E7EB", abbrev: "LINQ" },
      { label: "GraphQL", icon: SiGraphql, bg: "#020617", accent: "#E10098" },
    ],
  },
  {
    title: "Database & APIs",
    skills: [
      { label: "PostgreSQL", icon: SiPostgresql, bg: "#020617", accent: "#4169E1" },
      { label: "MongoDB", icon: SiMongodb, bg: "#020617", accent: "#22C55E" },
      { label: "Supabase", icon: SiSupabase, bg: "#020617", accent: "#3ECF8E" },
      { label: "Redis", icon: SiRedis, bg: "#020617", accent: "#DC382D" },
      { label: "Prisma", icon: SiPrisma, bg: "#020617", accent: "#0EA5E9" },
      { label: "SQL Server", icon: SiSqlite, bg: "#020617", accent: "#CC2927" },
      { label: "Sanity", icon: SiSanity, bg: "#020617", accent: "#F97316" },
    ],
  },
  {
    title: "AI & LLMs",
    skills: [
      { label: "Hugging Face", icon: SiHuggingface, bg: "#020617", accent: "#FFD21E" },
      { label: "Groq", icon: null, bg: "#020617", accent: "#E85D04", abbrev: "Groq" },
      { label: "Gemini", icon: SiGooglegemini, bg: "#020617", accent: "#8E75B2" },
      { label: "OpenAI", icon: null, bg: "#020617", accent: "#412991", abbrev: "GPT" },
      { label: "RAG", icon: null, bg: "#020617", accent: "#38BDF8", abbrev: "RAG" },
      { label: "LLM", icon: null, bg: "#020617", accent: "#A78BFA", abbrev: "LLM" },
    ],
  },
  {
    title: "DevOps & Tools",
    skills: [
      { label: "Docker", icon: SiDocker, bg: "#020617", accent: "#3B82F6" },
      { label: "Kubernetes", icon: SiKubernetes, bg: "#020617", accent: "#326CE5" },
      { label: "Vercel", icon: SiVercel, bg: "#020617", accent: "#FFFFFF" },
      { label: "Git", icon: SiGit, bg: "#020617", accent: "#F97316" },
      { label: "Postman", icon: SiPostman, bg: "#020617", accent: "#FB923C" },
      { label: "Cloudflare", icon: SiCloudflare, bg: "#020617", accent: "#FDBA74" },
      { label: "Jest", icon: SiJest, bg: "#020617", accent: "#C21325" },
    ],
  },
  {
    title: "Design & Docs",
    skills: [
      { label: "Figma", icon: SiFigma, bg: "#020617", accent: "#F24E1E" },
      { label: "Swagger", icon: SiSwagger, bg: "#020617", accent: "#85EA2D" },
      { label: "Storybook", icon: SiStorybook, bg: "#020617", accent: "#FF4785" },
    ],
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.04,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function TechStackSection() {
  return (
    <section id="tech" className="section">
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
              <FaCode className="text-xl md:text-2xl" />
            </div>
            <div className="flex items-center gap-2">
              <h2 className="heading-gradient text-[1.9rem] font-bold tracking-tight md:text-[2.2rem]">Tech Arsenal</h2>
              <span className="h-1 w-8 rounded-full bg-gradient-to-r from-sky-500/80 to-sky-400/40" aria-hidden />
            </div>
          </div>
        </div>
        <div className="heading-divider" />

        <div className="space-y-8">
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="space-y-3"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400">
                {category.title}
              </h3>
              <motion.div
                variants={containerVariants}
                className="grid grid-cols-4 gap-2.5 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8"
              >
                {category.skills.map((skill) => {
                  const Icon = skill.icon;
                  const displayText = skill.abbrev ?? skill.label;
                  return (
                    <motion.div
                      key={skill.label}
                      variants={itemVariants}
                      className="flex h-20 flex-col items-center justify-center gap-1.5 rounded-xl border border-slate-700/60 px-2.5 py-2.5 text-slate-200 shadow-md shadow-slate-900/70"
                      style={{
                        backgroundColor: skill.bg,
                        boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.3), 0 2px 4px -2px rgb(0 0 0 / 0.2)",
                      }}
                      whileHover={{
                        scale: 1.05,
                        y: -4,
                        boxShadow: `0 0 20px ${skill.accent}40, 0 0 40px ${skill.accent}25, 0 8px 16px -4px rgb(0 0 0 / 0.4)`,
                        transition: { duration: 0.2 },
                      }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    >
                      <div
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-sm sm:h-8 sm:w-8 sm:text-base"
                        style={{
                          backgroundColor: "#020617",
                          color: skill.accent,
                          boxShadow: `0 0 0 1px ${skill.accent}33`,
                        }}
                      >
                        {Icon ? (
                          <Icon className="size-full p-0.5" />
                        ) : (
                          <span
                            className="text-[0.5rem] font-bold leading-none sm:text-[0.55rem]"
                            style={{ color: skill.accent }}
                          >
                            {displayText}
                          </span>
                        )}
                      </div>
                      <span className="max-w-full truncate text-center text-[0.6rem] font-medium leading-tight">
                        {skill.label}
                      </span>
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

