"use client";

import { motion } from "framer-motion";
import { FaEnvelopeOpenText, FaArrowRight } from "react-icons/fa6";

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="space-y-5 pb-8 pt-2 md:pt-4"
      >
        <div className="flex items-center justify-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-sky-400 md:h-11 md:w-11">
            <FaEnvelopeOpenText className="text-xl md:text-2xl" />
          </div>
          <h2 className="heading-gradient text-[1.9rem] font-bold tracking-tight md:text-[2.2rem]">
            Let&apos;s Build Something Amazing
          </h2>
        </div>
        <div className="heading-divider" />

        <div className="flex flex-col items-center text-center">
          <p className="max-w-xl text-sm text-slate-300">
            Ready to bring your ideas to life? I&apos;m always excited to
            collaborate on innovative projects and help transform your
            vision into reality.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:asjadfarooq22@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-500/50 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:bg-slate-800/80 hover:text-sky-300"
            >
              <FaEnvelopeOpenText className="text-sky-400" />
              asjadfarooq22@gmail.com
            </a>
            <a
              href="https://github.com/Asjadfaroq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-500/50 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-sky-400 hover:bg-slate-800/80 hover:text-sky-300"
            >
              <FaArrowRight className="text-sky-400" />
              Source code on GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
