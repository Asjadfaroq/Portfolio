"use client";

import { motion } from "framer-motion";
import { FaEnvelopeOpenText, FaArrowRight } from "react-icons/fa6";

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

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

export function ContactSection() {
  return (
    <section id="contact" className="section">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={containerVariants}
        className="space-y-5 pb-8 pt-2 md:pt-4"
      >
        <motion.div variants={itemVariants} className="flex items-center justify-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-sky-400 md:h-11 md:w-11">
            <FaEnvelopeOpenText className="text-xl md:text-2xl" />
          </div>
          <h2 className="heading-gradient text-[1.9rem] font-bold tracking-tight md:text-[2.2rem]">
            Let&apos;s Build Something Amazing
          </h2>
        </motion.div>
        <motion.div variants={itemVariants} className="heading-divider" />

        <motion.div
          variants={itemVariants}
          className="flex flex-col items-center text-center"
        >
          <p className="max-w-xl text-sm text-slate-300">
            Ready to bring your ideas to life? I&apos;m always excited to
            collaborate on innovative projects and help transform your
            vision into reality.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <motion.a
              href="mailto:asjadfarooq22@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-500/50 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-sky-400 hover:bg-slate-800/80 hover:text-sky-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <FaEnvelopeOpenText className="text-sky-400" />
              asjadfarooq22@gmail.com
            </motion.a>
            <motion.a
              href="https://github.com/Asjadfaroq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-sky-500/50 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-sky-400 hover:bg-slate-800/80 hover:text-sky-300"
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <FaArrowRight className="text-sky-400" />
              Source code on GitHub
            </motion.a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
