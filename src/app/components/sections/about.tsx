"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import AboutCards from "../UI/aboutCard";


export default function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="relative py-28 px-6 bg-neutral-950 text-neutral-100 overflow-hidden"
    >
      {/* subtle background glow */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent" />

      <div className="max-w-6xl mx-auto grid gap-16 md:grid-cols-2 md:items-center">
        
        {/* LEFT - IMAGE */}
  <div className="relative flex justify-center md:justify-center">
  
  {/* Rotating glow ring */}
  <div className="absolute w-72 h-72 animate-slow-spin rounded-full bg-gradient-to-tr from-blue-700 via-cyan-600 to-blue-600 opacity-40 blur-xl" />

  {/* Mask layer (to keep ring thin) */}
  <div className="absolute w-64 h-64 rounded-full bg-neutral-950" />

  {/* Image container */}
  <div className="group relative w-64 h-64 overflow-hidden rounded-full border border-neutral-800 bg-neutral-900/60">
    <Image
      src="/projects/imgprueba6.jpg"
      alt="Foto de Carolina"
      fill
      className="object-cover"
    />
  </div>

</div>

        {/* RIGHT - CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          {/* Title */}
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              Sobre mí
            </h2>
            <div className="mt-3 w-16 h-0.5 bg-blue-400 rounded-full relative">
              <div className="absolute inset-0 bg-blue-400 blur-sm opacity-60" />
            </div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-neutral-400 leading-relaxed">
            Soy desarrolladora web con enfoque full stack. Disfruto construir interfaces limpias, intuitivas y accesibles, respaldadas por una base técnica sólida en backend.
            </p>

            <p className="text-neutral-400 leading-relaxed">
              Trabajo con React, Next.js y Tailwind CSS en el frontend, y con NestJS y SQL Server en el backend, priorizando arquitectura escalable, APIs bien estructuradas y soluciones mantenibles.
            </p>
          </div>

          {/* Cards */}
          
            <AboutCards/>
          
        </motion.div>
      </div>
    </motion.section>
  );
}