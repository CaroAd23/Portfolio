"use client";
import { motion } from "framer-motion";
import SkillsRadar from "../UI/skillsRadar";
import {
  SiNextdotjs,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNestjs,
  SiMysql,
  SiTypeorm,
  SiGit,
} from "react-icons/si";

export default function Skills() {
  return (
    <section
      id="skills"
      className="relative py-24 px-6 bg-neutral-950 text-neutral-100"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="mb-20 space-y-4 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
            Stack
          </h2>
          <div className="w-16 h-0.5 bg-blue-400 rounded-full mx-auto lg:mx-0" />
          <p className="text-neutral-400 max-w-xl mx-auto lg:mx-0">
            Tecnologías que utilizo para construir aplicaciones fullstack
            modernas y escalables.
          </p>
        </div>

        <div className="grid gap-12 lg:grid-cols-2 items-center">
          
          {/* Columna izquierda: tarjetas */}
          <div className="space-y-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-blue-400 font-medium">
                Frontend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Skill icon={<SiNextdotjs />} name="Next.js" />
                <Skill icon={<SiReact />} name="React" />
                <Skill icon={<SiTailwindcss />} name="Tailwind CSS" />
                <Skill icon={<SiTypescript />} name="TypeScript" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-blue-400 font-medium">
                Backend
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Skill icon={<SiNestjs />} name="NestJS" />
                <Skill icon={<SiTypeorm />} name="Type ORM" />
                <Skill icon={<SiMysql />} name="MySQL" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h3 className="text-blue-400 font-medium">
                Herramientas
              </h3>
              <div className="grid grid-cols-2 gap-4">
                <Skill icon={<SiGit />} name="Git & GitHub" />
              </div>
            </motion.div>
          </div>

          {/* Columna derecha: radar */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <SkillsRadar />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function Skill({ icon, name }: { icon: React.ReactNode; name: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg border border-neutral-800 bg-neutral-900/50 p-3 hover:border-blue-500/40 transition-all duration-300">
      <span className="text-blue-400 text-lg">{icon}</span>
      <span className="text-sm text-neutral-300">{name}</span>
    </div>
  );
}