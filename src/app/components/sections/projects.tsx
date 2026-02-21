"use client";
import { DevProjects } from "../../data/projects";
import ProjectCard from "../UI/projectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className=" mx-auto max-w-6xl px-6">
        <h2 className="text-3xl font-semibold text-white">Proyectos</h2>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {DevProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
