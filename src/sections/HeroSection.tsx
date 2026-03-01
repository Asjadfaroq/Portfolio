"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaXTwitter,
  FaInstagram,
  FaLocationDot,
} from "react-icons/fa6";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const iconHover = { scale: 1.1 };
const iconTap = { scale: 0.95 };
const spring = { type: "spring" as const, stiffness: 400, damping: 20 };

export function HeroSection() {
  return (
    <section id="about" className="section">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col gap-6 pb-6 pt-4 md:flex-row md:items-center md:gap-10 md:pt-6"
      >
        <div className="flex flex-1 items-start gap-7">
          <div className="flex flex-col items-center gap-3">
            <motion.div
              variants={itemVariants}
              className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border border-slate-700/70 bg-slate-900/90 md:h-40 md:w-40"
              whileHover={{ scale: 1.02 }}
              transition={spring}
            >
              <Image
                src="/avatar-placeholder.svg"
                alt="Profile"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div variants={itemVariants} className="flex items-center gap-2 text-sm text-slate-300">
              <FaLocationDot className="text-sky-400" />
              <span>Riyadh, Saudi Arabia</span>
            </motion.div>
            <motion.div variants={itemVariants} className="mt-2 flex items-center gap-3.5 text-slate-400">
              <motion.a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-900 transition-colors hover:bg-slate-200"
                whileHover={iconHover}
                whileTap={iconTap}
                transition={spring}
              >
                <FaGithub className="text-lg" />
              </motion.a>
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-[1.4rem] font-semibold text-sky-500 transition-colors hover:text-sky-400"
                whileHover={iconHover}
                whileTap={iconTap}
                transition={spring}
              >
                <FaLinkedin />
              </motion.a>
              <motion.a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-900 transition-colors hover:bg-slate-200"
                whileHover={iconHover}
                whileTap={iconTap}
                transition={spring}
              >
                <FaXTwitter className="text-base" />
              </motion.a>
              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-2xl border-2 border-pink-500 text-pink-500 transition-colors hover:border-pink-400 hover:text-pink-400"
                whileHover={iconHover}
                whileTap={iconTap}
                transition={spring}
              >
                <FaInstagram className="text-base" />
              </motion.a>
            </motion.div>
          </div>
          <div className="space-y-3">
            <motion.button
              variants={itemVariants}
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-transparent px-4 py-2.5 text-xs font-medium text-slate-100 transition-colors hover:border-sky-500 hover:bg-slate-900/60 hover:text-sky-400"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={spring}
            >
              Schedule a call
            </motion.button>
            <motion.div variants={itemVariants} className="space-y-2">
              <h1 className="text-[3.1rem] font-extrabold tracking-tight text-slate-50 sm:text-[3.5rem]">
                Asjad Farooq
              </h1>
              <p className="text-[1.1rem] text-slate-200">
                Full-Stack Engineer • Next.js, React, Node.js
              </p>
            </motion.div>
            <motion.p
              variants={itemVariants}
              className="max-w-xl text-justify text-[1.02rem] leading-relaxed text-slate-300"
            >
              Self-taught Full-Stack developer from Saudi Arabia, specializing in
              modern web technologies and open-source development. Passionate
              about building scalable applications with Next.js and
              contributing to the developer community through open-source
              projects.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

