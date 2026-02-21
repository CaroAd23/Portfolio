"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { Projects } from "../../types/projects";

interface Props {
  project: Projects;
}

export default function ProjectCard({ project }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group overflow-hidden rounded-2xl border border-neutral-800/60 bg-neutral-900/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-blue-500/40"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/40 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>
      <div className="p-6">
        <h3 className=" text-xl font-semibold text-white transition-colors duration-300 group-hover:text-blue-400">
          {project.title}
        </h3>
        <p className=" mt-3 text-sm leading-relaxed text-neutral-400">
          {project.description}
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span
              key={tech}
              className="rounded-md bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-400 transition-colors duration-300 group-hover:bg-blue-500/20"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-6 flex items-center gap-4 opacity-70 transition-opacity duration-300 group-hover:opacity-100">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white"
            >
              <FiGithub />
              código
            </a>
          )}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              className="flex items-center gap-1 text-sm text-neutral-300 hover:text-white"
            >
              <FiExternalLink />
              Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
