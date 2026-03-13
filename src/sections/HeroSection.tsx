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
 import { BackgroundOrbits } from "@/components/BackgroundOrbits";

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
     <section id="about" className="section relative">
       <BackgroundOrbits />
       <motion.div
         variants={containerVariants}
         initial="hidden"
         animate="visible"
         className="flex flex-col gap-7 pb-8 pt-5 md:flex-row md:items-center md:gap-10 md:pt-7"
       >
         <div className="flex flex-1 items-start gap-7">
           <div className="flex flex-col items-center gap-3">
             <motion.div
               variants={itemVariants}
               className="relative h-36 w-36 shrink-0 overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/90 shadow-[0_18px_45px_rgba(15,23,42,0.9)] md:h-40 md:w-40"
               whileHover={{ scale: 1.03, rotate: -1.5 }}
               transition={spring}
             >
               <Image
                 src="/avatar-placeholder.svg"
                 alt="Profile"
                 fill
                 className="object-cover"
               />
             </motion.div>
             <motion.div
               variants={itemVariants}
               className="flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-xs text-slate-300 ring-1 ring-slate-700/60 backdrop-blur-sm"
             >
               <FaLocationDot className="text-sky-400" />
               <span>Riyadh, Saudi Arabia</span>
             </motion.div>
             <motion.div
               variants={itemVariants}
               className="mt-2 flex items-center gap-3.5 text-slate-400"
             >
               <motion.a
                 href="https://github.com/Asjadfaroq"
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
                 href="https://www.linkedin.com/in/asjadfaroq"
                 target="_blank"
                 rel="noreferrer"
                 className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-sky-400 ring-1 ring-sky-500/50 transition-colors hover:bg-slate-800"
                 whileHover={iconHover}
                 whileTap={iconTap}
                 transition={spring}
               >
                 <FaLinkedin className="text-lg" />
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
           <div className="space-y-4">
             <motion.div
               variants={itemVariants}
               className="inline-flex items-center gap-2 rounded-full bg-slate-900/70 px-3 py-1 text-[0.7rem] font-medium text-slate-300 ring-1 ring-slate-700/70 backdrop-blur-sm"
             >
               <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
               <span>Available for select projects & roles</span>
             </motion.div>
             <motion.div variants={itemVariants} className="space-y-2.5">
               <h1 className="text-[2.6rem] font-extrabold tracking-tight text-slate-50 sm:text-[3.2rem] md:text-[3.6rem]">
                 <span className="heading-gradient block">Asjad Farooq</span>
               </h1>
               <p className="text-[1.05rem] text-slate-200 md:text-[1.1rem]">
                 Full-Stack Engineer ·{" "}
                 <span className="text-sky-300">Next.js</span>,{" "}
                 <span className="text-sky-300">React</span>, Node.js
               </p>
             </motion.div>
             <motion.p
               variants={itemVariants}
               className="max-w-xl text-sm text-slate-300 md:text-[0.98rem] md:leading-relaxed"
             >
               Self-taught full‑stack engineer crafting performant, production-grade experiences
               for startups and enterprises. I specialise in designing clean architectures,
               refined interfaces, and reliable systems that scale with the product.
             </motion.p>
             <motion.div
               variants={itemVariants}
               className="mt-3 flex flex-wrap items-center gap-3"
             >
               <motion.a
                 href="#projects"
                 className="inline-flex items-center justify-center gap-2 rounded-xl bg-sky-500 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_18px_35px_rgba(56,189,248,0.35)] transition-colors hover:bg-sky-400"
                 whileHover={{ scale: 1.03, y: -1 }}
                 whileTap={{ scale: 0.98, y: 0 }}
                 transition={spring}
               >
                 View selected work
               </motion.a>
               <motion.a
                 href="#contact"
                 className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-600 bg-transparent px-4 py-2.5 text-sm font-medium text-slate-100 transition-colors hover:border-sky-500 hover:bg-slate-900/70 hover:text-sky-300"
                 whileHover={{ scale: 1.03, y: -1 }}
                 whileTap={{ scale: 0.98, y: 0 }}
                 transition={spring}
               >
                 Let&apos;s talk
               </motion.a>
             </motion.div>
           </div>
         </div>
       </motion.div>
     </section>
   );
 }

