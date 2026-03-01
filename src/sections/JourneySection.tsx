"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa6";

const sectionVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
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

export function JourneySection() {
  return (
    <section id="journey" className="section">
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-5 pb-6 pt-2 md:pt-4"
      >
        <motion.div variants={cardVariants} className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-sky-400 md:h-11 md:w-11">
            <FaBriefcase className="text-xl md:text-2xl" />
          </div>
          <h2 className="heading-gradient text-[1.9rem] font-bold tracking-tight md:text-[2.2rem]">
            Professional Journey
          </h2>
        </motion.div>
        <motion.div variants={cardVariants} className="heading-divider" />

        <div className="space-y-3">
          <motion.article
            variants={cardVariants}
            className="group space-y-1.5 rounded-xl border border-slate-800/50 bg-slate-950/30 px-3 py-2.5 transition-colors hover:border-slate-700/50 md:px-4 md:py-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">Rakeez Solutions</h3>
              <p className="text-[0.7rem] text-slate-400 tabular-nums">Dec 2025 – Present · 4 mos</p>
            </div>
            <p className="text-[0.75rem] text-sky-400/90">Senior Software Engineer · Riyadh, Saudi Arabia · On-site</p>
            <p className="text-[0.85rem] leading-snug text-slate-300/90 max-w-xl">
              Driving AI and generative AI for HR and product. Software infrastructure and design at scale.
            </p>
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="group space-y-1.5 rounded-xl border border-slate-800/50 bg-slate-950/30 px-3 py-2.5 transition-colors hover:border-slate-700/50 md:px-4 md:py-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">Seha Invest</h3>
              <p className="text-[0.7rem] text-slate-400 tabular-nums">Dec 2024 – Nov 2025 · 1 yr</p>
            </div>
            <p className="text-[0.75rem] text-sky-400/90">Senior Software Engineer · Riyadh, Saudi Arabia · On-site</p>
            <p className="text-[0.85rem] leading-snug text-slate-300/90 max-w-xl">
              Owned software infrastructure and system design. Scalable, production-grade systems and cross-functional delivery.
            </p>
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="group space-y-1.5 rounded-xl border border-slate-800/50 bg-slate-950/30 px-3 py-2.5 transition-colors hover:border-slate-700/50 md:px-4 md:py-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">CanDev Software Agency</h3>
              <p className="text-[0.7rem] text-slate-400 tabular-nums">Oct 2023 – Sep 2024 · 1 yr</p>
            </div>
            <p className="text-[0.75rem] text-sky-400/90">Full Stack Developer · Gujrat District, Punjab, Pakistan · Hybrid</p>
            <p className="text-[0.85rem] leading-snug text-slate-300/90 max-w-xl">
              Led full-stack and cross-platform delivery from design to production. APIs, data layer, CI/CD, and cloud deployments.
            </p>
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="group space-y-1.5 rounded-xl border border-slate-800/50 bg-slate-950/30 px-3 py-2.5 transition-colors hover:border-slate-700/50 md:px-4 md:py-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">GulzarSoft</h3>
              <p className="text-[0.7rem] text-slate-400 tabular-nums">Oct 2022 – Sep 2023 · 1 yr</p>
            </div>
            <p className="text-[0.75rem] text-sky-400/90">Full-Stack Developer · Gujrat District, Punjab, Pakistan · On-site</p>
            <p className="text-[0.85rem] leading-snug text-slate-300/90 max-w-xl">
              Led cloud-based streaming product end-to-end. APIs, media pipelines, payments, and live production deployments.
            </p>
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="group space-y-1.5 rounded-xl border border-slate-800/50 bg-slate-950/30 px-3 py-2.5 transition-colors hover:border-slate-700/50 md:px-4 md:py-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">PureLogics</h3>
              <p className="text-[0.7rem] text-slate-400 tabular-nums">Mar 2022 – Aug 2022 · 6 mos</p>
            </div>
            <p className="text-[0.75rem] text-sky-400/90">Frontend Developer · Lahore, Punjab, Pakistan · On-site</p>
            <p className="text-[0.85rem] leading-snug text-slate-300/90 max-w-xl">
              Built responsive UIs, payments, and API integration. Agile delivery for enterprise and customer-facing applications.
            </p>
          </motion.article>

          <motion.article
            variants={cardVariants}
            className="group space-y-1.5 rounded-xl border border-slate-800/50 bg-slate-950/30 px-3 py-2.5 transition-colors hover:border-slate-700/50 md:px-4 md:py-3"
          >
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-sm font-semibold text-slate-50">Cyber Silo</h3>
              <p className="text-[0.7rem] text-slate-400 tabular-nums">Feb 2021 – Jan 2022 · 1 yr</p>
            </div>
            <p className="text-[0.75rem] text-sky-400/90">Frontend Developer · Lahore, Punjab, Pakistan · On-site</p>
            <p className="text-[0.85rem] leading-snug text-slate-300/90 max-w-xl">
              Developed dynamic, responsive web and mobile applications with component-based architecture. REST APIs, auth, and production-ready delivery.
            </p>
          </motion.article>
        </div>
      </motion.div>
    </section>
  );
}

