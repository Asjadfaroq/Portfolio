"use client";

import { motion } from "framer-motion";
import { FaGithub, FaUsers, FaHeart, FaEye } from "react-icons/fa6";
import { GitHubGraphs } from "@/components/GitHubGraphs";

export function ContributionsSection() {
  return (
    <section id="contributions" className="section">
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
              <FaGithub className="text-xl md:text-2xl" />
            </div>
            <h2 className="heading-gradient text-[1.9rem] font-bold tracking-tight md:text-[2.2rem]">
              GitHub Contributions
            </h2>
          </div>
        </div>
        <div className="heading-divider" />

        <div className="flex justify-center pb-1">
          <div className="w-full max-w-[680px] overflow-x-auto rounded-3xl border border-slate-700/80 px-4 py-3 shadow-lg shadow-slate-950/70 md:px-6 md:py-4">
            <GitHubGraphs username="Asjadfaroq" colorScheme="dark" />
          </div>
        </div>

        <div className="-mt-3 flex justify-center">
          <div className="grid w-full max-w-[640px] gap-6 text-[0.8rem] text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex min-h-[88px] min-w-[150px] flex-col items-center justify-between rounded-2xl border border-sky-500/40 bg-slate-950/80 px-5 py-3 text-center">
              <FaUsers className="mb-1 text-lg text-sky-400" />
              <span className="text-[0.8rem]">Followers</span>
              <div className="text-base font-semibold text-slate-50">173</div>
            </div>

            <div className="flex min-h-[88px] min-w-[150px] flex-col items-center justify-between rounded-2xl border border-sky-500/40 bg-slate-950/80 px-5 py-3 text-center">
              <FaUsers className="mb-1 text-lg text-sky-400" />
              <span className="text-[0.8rem]">Following</span>
              <div className="text-base font-semibold text-slate-50">41</div>
            </div>

            <div className="flex min-h-[88px] min-w-[150px] flex-col items-center justify-between rounded-2xl border border-pink-500/50 bg-slate-950/80 px-5 py-3 text-center">
              <FaHeart className="mb-1 text-lg text-pink-400" />
              <span className="text-[0.8rem]">Love Count</span>
              <div className="text-base font-semibold text-pink-400">1475</div>
            </div>

            <div className="flex min-h-[88px] min-w-[150px] flex-col items-center justify-between rounded-2xl border border-sky-500/40 bg-slate-950/80 px-5 py-3 text-center">
              <FaEye className="mb-1 text-lg text-sky-400" />
              <span className="text-[0.8rem]">Views</span>
              <div className="text-base font-semibold text-slate-50">12393</div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}


