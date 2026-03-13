 "use client";

 import Link from "next/link";
 import { useEffect, useState } from "react";
 import { motion } from "framer-motion";

 const links = [
   { href: "#about", label: "About" },
   { href: "#journey", label: "Journey" },
   { href: "#tech", label: "Tech" },
   { href: "#projects", label: "Projects" },
   { href: "#contributions", label: "GitHub" },
   { href: "#contact", label: "Contact" },
 ];

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
         backgroundColor: scrolled ? "rgba(2,6,23,0.92)" : "rgba(0,0,0,0.9)",
         backdropFilter: scrolled ? "blur(16px)" : "blur(0px)",
       }}
       transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
     >
       <div className="flex w-full items-center justify-between px-4 py-3.5 md:px-6">
         <Link
           href="#top"
           className="flex items-center gap-3 rounded-lg text-sm font-medium text-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-sky-500/50"
         >
           <motion.div
             className="h-9 w-9 rounded-full border border-slate-700/70 bg-gradient-to-br from-sky-500/40 via-slate-900 to-emerald-500/40 shadow-lg shadow-sky-500/30"
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.98 }}
             transition={{ type: "spring", stiffness: 400, damping: 17 }}
           />
           <span className="text-sm font-semibold tracking-[0.18em] text-slate-200 transition-colors duration-200 hover:text-sky-300">
             ASJAD.SITE
           </span>
         </Link>

         <nav className="hidden items-center gap-4 text-xs text-slate-300 md:flex">
           {links.map((link) => (
             <Link
               key={link.href}
               href={link.href}
               className="group relative px-1 py-0.5"
             >
               <span className="transition-colors duration-200 group-hover:text-sky-300">
                 {link.label}
               </span>
               <span className="pointer-events-none absolute inset-x-1 -bottom-1 h-px scale-x-0 rounded-full bg-gradient-to-r from-sky-400/0 via-sky-400/80 to-sky-400/0 transition-transform duration-200 group-hover:scale-x-100" />
             </Link>
           ))}
         </nav>
       </div>
     </motion.header>
   );
 }
