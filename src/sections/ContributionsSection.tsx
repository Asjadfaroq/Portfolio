"use client";

import { motion } from "framer-motion";
import { FaGithub, FaUsers, FaHeart, FaEye } from "react-icons/fa6";
import { GitHubGraphs } from "@/components/GitHubGraphs";

const statVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] },
  },
};

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

        <motion.div
          className="flex justify-center pb-1"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <div className="w-full max-w-[680px] overflow-x-auto rounded-3xl border border-slate-700/80 px-4 py-3 shadow-lg shadow-slate-950/70 md:px-6 md:py-4">
            <GitHubGraphs username="Asjadfaroq" colorScheme="dark" />
          </div>
        </motion.div>

        <motion.div
          className="-mt-3 flex justify-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.08, delayChildren: 0.1 },
            },
          }}
        >
          <div className="grid w-full max-w-[640px] gap-6 text-[0.8rem] text-slate-300 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: FaUsers, label: "Followers", value: "173", color: "sky" },
              { icon: FaUsers, label: "Following", value: "41", color: "sky" },
              { icon: FaHeart, label: "Love Count", value: "1475", color: "pink" },
              { icon: FaEye, label: "Views", value: "12393", color: "sky" },
            ].map((stat) => {
              const Icon = stat.icon;
              return (
              <motion.div
                key={stat.label}
                variants={statVariants}
                className={`flex min-h-[88px] min-w-[150px] flex-col items-center justify-between rounded-2xl border bg-slate-950/80 px-5 py-3 text-center transition-colors hover:border-opacity-80 ${
                  stat.color === "pink"
                    ? "border-pink-500/50 hover:border-pink-400/60"
                    : "border-sky-500/40 hover:border-sky-400/60"
                }`}
                whileHover={{ scale: 1.03, y: -2 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
              >
                <Icon
                  className={`mb-1 text-lg ${stat.color === "pink" ? "text-pink-400" : "text-sky-400"}`}
                />
                <span className="text-[0.8rem]">{stat.label}</span>
                <div
                  className={`text-base font-semibold ${
                    stat.color === "pink" ? "text-pink-400" : "text-slate-50"
                  }`}
                >
                  {stat.value}
                </div>
              </motion.div>
            );
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}


