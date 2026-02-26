"use client";

import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa6";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export function JourneySection() {
  return (
    <section id="journey" className="section">
      <motion.div
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="space-y-5 pb-6 pt-2 md:pt-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-sky-400 md:h-11 md:w-11">
            <FaBriefcase className="text-xl md:text-2xl" />
          </div>
          <h2 className="heading-gradient text-[1.9rem] font-bold tracking-tight md:text-[2.2rem]">
            Professional Journey
          </h2>
        </div>
        <div className="heading-divider" />

        <div className="space-y-8">
          <article className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-slate-50">
                  GSSoC&apos;25
                </h3>
                <p className="text-sm text-sky-400">
                  Project Admin/Maintainer
                </p>
              </div>
              <p className="text-xs text-slate-400">Aug 2025 – Sept 2025</p>
            </div>
            <p className="text-[1.02rem] leading-relaxed text-slate-200">
              As a Project Admin, I reviewed code, merged pull requests, and
              communicated with developers, ensuring smooth project workflow and
              collaboration during GSSoC&apos;25. My full responsibilities
              included:
            </p>
            <ul className="ml-4 list-disc space-y-1.5 text-[1.02rem] leading-relaxed text-slate-200 marker:text-sky-400">
              <li>
                Reviewed code submissions and resolved technical blockers to
                maintain project quality.
              </li>
              <li>
                Collaborated with fellow open-source developers on project
                planning and implementation.
              </li>
              <li>
                Designed and implemented UI/UX solutions with modern animation
                libraries like Framer Motion and GSAP.
              </li>
              <li>
                Managed API integrations and ensured smooth communication across
                the development team.
              </li>
              <li>
                Mentored contributors and facilitated knowledge sharing within
                the community.
              </li>
            </ul>
          </article>

          <article className="space-y-3">
            <div className="flex flex-wrap items-baseline justify-between gap-4">
              <div>
                <h3 className="text-base font-semibold text-slate-50">
                  Sheryians Coding School
                </h3>
                <p className="text-sm text-sky-400">Trainee</p>
              </div>
              <p className="text-xs text-slate-400">May 2025 – Oct 2025</p>
            </div>
            <p className="text-[1.02rem] leading-relaxed text-slate-200">
              Completed an intensive training program focused on modern
              JavaScript, React, and backend fundamentals while working on
              real-world projects and code reviews.
            </p>
          </article>
        </div>
      </motion.div>
    </section>
  );
}

