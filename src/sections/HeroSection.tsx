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
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

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
            <div className="relative h-36 w-36 shrink-0 overflow-hidden rounded-full border border-slate-700/70 bg-slate-900/90 md:h-40 md:w-40">
            <Image
              src="/avatar-placeholder.svg"
              alt="Profile"
              fill
              className="object-cover"
            />
          </div>
            <div className="flex items-center gap-2 text-sm text-slate-300">
              <FaLocationDot className="text-sky-400" />
              <span>Riyadh, Saudi Arabia</span>
            </div>
            <div className="mt-2 flex items-center gap-3.5 text-slate-400">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 text-slate-900 transition hover:bg-slate-200"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                className="text-[1.4rem] font-semibold text-sky-500 transition hover:text-sky-400"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-md bg-slate-100 text-slate-900 transition hover:bg-slate-200"
              >
                <FaXTwitter className="text-base" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="flex h-8 w-8 items-center justify-center rounded-2xl border-2 border-pink-500 text-pink-500 transition hover:border-pink-400 hover:text-pink-400"
              >
                <FaInstagram className="text-base" />
              </a>
            </div>
          </div>
          <div className="space-y-3">
            <button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 bg-transparent px-4 py-2.5 text-xs font-medium text-slate-100 transition hover:border-sky-500 hover:bg-slate-900/60 hover:text-sky-400">
              Schedule a call
            </button>
            <div className="space-y-2">
              <h1 className="text-[3.1rem] font-extrabold tracking-tight text-slate-50 sm:text-[3.5rem]">
                Asjad Farooq
              </h1>
              <p className="text-[1.1rem] text-slate-200">
                Full-Stack Engineer • Next.js, React, Node.js
              </p>
            </div>
            <p className="max-w-xl text-justify text-[1.02rem] leading-relaxed text-slate-300">
              Self-taught Full-Stack developer from Saudi Arabia, specializing in
              modern web technologies and open-source development. Passionate
              about building scalable applications with Next.js and
              contributing to the developer community through open-source
              projects.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

