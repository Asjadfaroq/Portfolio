"use client";

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
} from "react-icons/si";

const skills = [
  {
    label: "JavaScript",
    icon: SiJavascript,
    bg: "#020617",
    accent: "#F7DF1E",
  },
  {
    label: "TypeScript",
    icon: SiTypescript,
    bg: "#020617",
    accent: "#3178C6",
  },
  {
    label: "Tailwind",
    icon: SiTailwindcss,
    bg: "#020617",
    accent: "#38BDF8",
  },
  {
    label: "SCSS",
    icon: SiSass,
    bg: "#020617",
    accent: "#F472B6",
  },
  {
    label: "Framer",
    icon: SiFramer,
    bg: "#020617",
    accent: "#E879F9",
  },
  {
    label: "React",
    icon: SiReact,
    bg: "#020617",
    accent: "#61DAFB",
  },
  {
    label: "Redux",
    icon: SiRedux,
    bg: "#020617",
    accent: "#A855F7",
  },
  {
    label: "Next.js",
    icon: SiNextdotjs,
    bg: "#020617",
    accent: "#FFFFFF",
  },
  {
    label: "Node.js",
    icon: SiNodedotjs,
    bg: "#020617",
    accent: "#4ADE80",
  },
  {
    label: "Express",
    icon: null,
    bg: "#020617",
    accent: "#E5E7EB",
  },
  {
    label: "MongoDB",
    icon: SiMongodb,
    bg: "#020617",
    accent: "#22C55E",
  },
  {
    label: "Supabase",
    icon: SiSupabase,
    bg: "#020617",
    accent: "#22C55E",
  },
  {
    label: "Sanity",
    icon: SiSanity,
    bg: "#020617",
    accent: "#F97316",
  },
  {
    label: "Docker",
    icon: SiDocker,
    bg: "#020617",
    accent: "#3B82F6",
  },
  {
    label: "Vercel",
    icon: SiVercel,
    bg: "#020617",
    accent: "#FFFFFF",
  },
  {
    label: "Git",
    icon: SiGit,
    bg: "#020617",
    accent: "#F97316",
  },
  {
    label: "Postman",
    icon: SiPostman,
    bg: "#020617",
    accent: "#FB923C",
  },
  {
    label: "Cloudflare",
    icon: SiCloudflare,
    bg: "#020617",
    accent: "#FDBA74",
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
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
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
            <h2 className="heading-gradient text-[1.9rem] font-bold tracking-tight md:text-[2.2rem]">
              Tech Arsenal
            </h2>
          </div>
        </div>
        <div className="heading-divider" />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-3 gap-3.5 sm:grid-cols-4 md:grid-cols-6"
        >
          {skills.map((skill) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.label}
                variants={itemVariants}
                className="flex h-24 flex-col items-center justify-center gap-2 rounded-2xl border border-slate-700/60 px-4 py-4 text-xs text-slate-200 shadow-md shadow-slate-900/70 sm:h-28"
                style={{
                  backgroundColor: skill.bg,
                }}
                whileHover={{
                  scale: 1.05,
                  y: -4,
                  transition: { duration: 0.2 },
                }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <div
                  className="flex h-9 w-9 items-center justify-center rounded-xl text-lg sm:h-10 sm:w-10 sm:text-xl"
                  style={{
                    backgroundColor: "#020617",
                    color: skill.accent,
                    boxShadow: `0 0 0 1px ${skill.accent}33`,
                  }}
                >
                  {Icon ? (
                    <Icon />
                  ) : (
                    <span
                      className="text-[0.7rem]"
                      style={{ color: skill.accent }}
                    >
                      EX
                    </span>
                  )}
                </div>
                <span className="text-[0.72rem]">{skill.label}</span>
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </section>
  );
}

