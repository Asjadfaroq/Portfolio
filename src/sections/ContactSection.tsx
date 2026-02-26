"use client";

import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa6";

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
        <div className="flex flex-col gap-2 pb-6 md:flex-row md:items-end md:justify-between">
          <div className="flex items-start gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-700/80 bg-slate-900/80 text-sky-400 md:h-11 md:w-11">
              <FaEnvelopeOpenText className="text-xl md:text-2xl" />
            </div>
            <div>
              <h2 className="heading-gradient text-[1.9rem] font-bold tracking-tight md:text-[2.2rem]">
                Let&apos;s Build Something Amazing
              </h2>
              <p className="mt-2 max-w-xl text-sm text-slate-300">
                Ready to bring your ideas to life? I&apos;m always excited to
                collaborate on innovative projects and help transform your
                vision into reality.
              </p>
            </div>
          </div>
          <a
            href="mailto:asjadfarooq22@gmail.com"
            className="mt-3 inline-flex items-center justify-center rounded-full border border-slate-600 bg-slate-900/80 px-4 py-2 text-xs font-medium text-slate-100 transition hover:border-sky-500 hover:text-sky-300 md:mt-0"
          >
            asjadfarooq22@gmail.com
          </a>
        </div>
        <div className="heading-divider" />

        <div className="mt-6 border-t border-slate-800/80 pt-4 text-xs text-slate-500">
          <p>
            Source code available on{" "}
            <a
              href="#"
              className="font-medium text-sky-400 hover:text-sky-300"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </motion.div>
    </section>
  );
}
