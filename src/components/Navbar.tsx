"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      className="sticky top-0 z-20"
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(0,0,0,0.7)" : "rgba(0,0,0,1)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(0px)",
      }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="flex w-full items-center justify-start px-4 py-4 md:px-6">
        <Link href="#top" className="flex items-center gap-3 text-sm font-medium text-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50 rounded-lg">
          <motion.div
            className="h-9 w-9 rounded-full border border-slate-700/70 bg-gradient-to-br from-sky-500/40 via-slate-900 to-emerald-500/40 shadow-lg shadow-sky-500/30"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          />
          <span className="text-sm font-semibold tracking-[0.18em] text-slate-200 transition-colors duration-200 hover:text-sky-300">
            asjad.site
          </span>
        </Link>
      </div>
    </motion.header>
  );
}
