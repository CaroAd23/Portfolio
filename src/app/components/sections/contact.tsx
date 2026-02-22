"use client";

import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  return (
    <section id="contact" className="relative py-28 px-6 bg-neutral-950">
      <div className="max-w-4xl mx-auto text-center space-y-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="space-y-4"
        >
          <h2 className="text.3xl md:text-4xl font-semibold tracking-tight">
            Contacto
          </h2>
          
          <div className="mx-auto w-16 h-0.5 bg-blue-400 rounded-full" />
          <p className="text-neutral-400 max-w-xl mx-auto">
            Estoy abierta a nuevas oportunidades y colaboraciones. Si quieres
            trabajar conmigo o conversar sobre un proyecto, estaré encantada de
            conectar. <br />
            Mi email: 
            <span className="text-blue-500 font-semibold"> alcarazcarolina332@gmail.com</span>
          </p>
        </motion.div>
        <motion.a
          href="mailto:alcarazcarolina332@gmail.com"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="inline-block rounded-lg bg-blue-500 px-6 py-3 text-sm font-medium text-white transition-all duration-300 hover:bg-blue-400"
        >
          Enviar Email
        </motion.a>
        <div className="flex justify-center gap-6 pt-6">
          <a
            href="https://github.com/CaroAd23"
            target="_blank"
            className="text-neutral-400 hover:text-blue-400 transition-colors duration-300 text-xl"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            className="text-neutral-400 hover:text-blue-400 transition-colors duration-300 text-xl"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </section>
  );
}
