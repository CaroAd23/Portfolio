"use client";

import { SlArrowDown } from "react-icons/sl";
import { motion } from "framer-motion";

export default function Hero() {
  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4rem)] items-center overflow-hidden"
    >
      {/* GRID SUTIL */}
      <div className="absolute inset-0 -z-30 opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px]" />

      {/* GRADIENTE ANIMADO */}
      <motion.div
        className="absolute -z-20 h-[600px] w-[600px] rounded-full blur-[140px]"
        style={{
          background:
            "radial-gradient(circle at center, rgba(59,130,246,0.35), transparent 70%)",
        }}
        animate={{
          scale: [1, 1.15, 1],
          x: [0, 40, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="max-w-2xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          {/* Intro */}
          <motion.p variants={item} className="mb-4 text-sm text-accent">
            Hola, soy Carolina
          </motion.p>

          {/* Headline limpio */}
          <motion.h1
            variants={item}
            className="text-5xl md:text-6xl font-semibold leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-400 via-sky-300 to-blue-500 bg-clip-text text-transparent">
              Full Stack
            </span>
            <span className="animated-gradient font-semibold"> Developer</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.h2
            variants={item}
            className="mt-4 text-xl md:text-2xl text-neutral-300 font-normal"
          >
            Creando aplicaciones web modernas y escalables.
          </motion.h2>

          {/* Descripción */}
          <motion.p
            variants={item}
            className="mt-6 text-base text-muted max-w-lg"
          >
            Desarrollo soluciones full stack con frontend moderno y backend
            estructurado, priorizando arquitectura limpia y APIs REST claras.
          </motion.p>

          {/* Botones */}
          <div className="mt-8 flex gap-4">
            <motion.a
              variants={item}
              whileHover={{ y: -3, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white border border-blue-500 transition-all hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
            >
              Ver proyectos
            </motion.a>

            <motion.a
              variants={item}
              whileHover={{ y: -3, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white border border-blue-500 transition-all hover:bg-blue-500 hover:shadow-[0_0_25px_rgba(59,130,246,0.4)]"
            >
              Descargar CV
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Flecha */}
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted text-xs"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <SlArrowDown className="size-6" />
      </motion.div>
    </section>
  );
}
