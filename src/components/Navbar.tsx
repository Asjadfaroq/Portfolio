"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

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

  const headerClass = scrolled
    ? "sticky top-0 z-20 bg-black/70 backdrop-blur"
    : "sticky top-0 z-20 bg-black";

  return (
    <header className={headerClass}>
      <div className="flex w-full items-center justify-start px-4 py-4 md:px-6">
        <Link
          href="#top"
          className="flex items-center gap-3 text-sm font-medium text-slate-100"
        >
          <div className="h-9 w-9 rounded-full border border-slate-700/70 bg-gradient-to-br from-sky-500/40 via-slate-900 to-emerald-500/40 shadow-lg shadow-sky-500/30" />
          <span className="text-sm font-semibold tracking-[0.18em] text-slate-200">
            asjad.site
          </span>
        </Link>
      </div>
    </header>
  );
}

