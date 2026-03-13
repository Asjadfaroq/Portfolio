 "use client";

 import { motion } from "framer-motion";

 type BackgroundOrbitsProps = {
   className?: string;
 };

 export function BackgroundOrbits({ className }: BackgroundOrbitsProps) {
   return (
     <div
       aria-hidden
       className={["pointer-events-none absolute inset-0 -z-10 overflow-hidden", className]
         .filter(Boolean)
         .join(" ")}
     >
       <motion.div
         className="absolute -left-32 top-[-6rem] h-72 w-72 rounded-full bg-sky-500/15 blur-3xl"
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
       />
       <motion.div
         className="absolute right-[-4rem] top-32 h-64 w-64 rounded-full bg-emerald-500/10 blur-3xl"
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
       />
       <motion.div
         className="absolute -bottom-32 left-16 h-72 w-72 rounded-full bg-sky-400/5 blur-3xl"
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
       />
     </div>
   );
 }

