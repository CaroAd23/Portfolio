"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative py-28 px-6 bg-neutral-950 text-neutral-100 overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2">
        
        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Sobre mí
          </h2>

          {/* refined divider */}
          <div className="relative w-16 h-0.5 bg-blue-400 rounded-full">
            <div className="absolute inset-0 bg-blue-400 blur-sm opacity-60" />
          </div>

          <p className="text-neutral-400 leading-relaxed text-base">
            Soy desarrolladora web enfocada en crear interfaces limpias,
            intuitivas y accesibles. Me interesa construir productos digitales
            con atención al detalle y una base técnica sólida.
          </p>

          <p className="text-neutral-400 leading-relaxed text-base">
            Actualmente trabajo con tecnologías modernas como React, Next.js y
            Tailwind CSS, y disfruto aprender continuamente mientras diseño
            experiencias elegantes y funcionales.
          </p>
        </motion.div>

        {/* INFO CARDS */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center gap-6"
        >
          {[
            "Enfoque: Frontend & UI",
            "Tecnologías: React, Next.js, Tailwind",
            "Aprendizaje constante y mejora continua",
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
              className="group relative rounded-xl border border-neutral-800 bg-neutral-900/60 p-5 backdrop-blur-sm transition-all duration-300 hover:border-blue-500/40 hover:shadow-lg"
            >
              {/* subtle glow on hover */}
              <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />
              </div>

              <p className="relative z-10 text-sm text-neutral-300 group-hover:text-neutral-100 transition-colors">
                {item}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
