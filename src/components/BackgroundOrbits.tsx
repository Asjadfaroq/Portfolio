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
         className="absolute -bottom-32 left-16 h-72 w-72 rounded-full bg-sky-400/5 blur-3xl"
         initial={{ opacity: 0, scale: 0.95 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
       />
     </div>
   );
 }

