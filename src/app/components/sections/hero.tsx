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
    hidden: { opacity: 0, y: 16 },
    show: { opacity: 1, y: 0 },
  };
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center">
      <div className=" mx-auto max-w6xl px-4">
        <motion.div
          className="max-w-3xl"
          variants={container}
          initial="hidden"
          animate="show"
        >
          <motion.p variants={item} className="mb-4 text-sm text-accent">
            Hola, soy Carolina
          </motion.p>
          <motion.h1
            variants={item}
            className="text-4xl font-semibold leading-tinght md:text-6xl"
          >
            Desarrollo Sitios web <br />
            <span className="text-accent">Claros</span>, modernos y
            <span className="text-accent"> humanos</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 text-lg text-muted">
            Frontend Developer enfocada en React, Next.js y diseño minimalista
            con antención al detalle.
          </motion.p>

          <div className="mt-8 flex gap-4">
            <motion.a
              variants={item}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors border border-blue-500 hover:bg-blue-500"
            >
              {" "}
              Ver proyectos{" "}
            </motion.a>
            <motion.a
              variants={item}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              href="#cv.pdf"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-medium text-white transition-colors border border-blue-500 hover:bg-blue-500"
            >
              {" "}
              Descargar CV{" "}
            </motion.a>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10 flex justify-center">
        <motion.div
          className="h-105 w-105 rounded-full bg-blue-500/20 blur-[120px]"
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        ></motion.div>
      </div>
      <motion.div
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted text-xs"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
      >
        <SlArrowDown className="to-blue-500" />
      </motion.div>
    </section>
  );
}
