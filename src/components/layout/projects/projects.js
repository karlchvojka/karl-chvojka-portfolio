/* NextJS Declarations */
"use client";
/* End NextJS Declarations */

/* Component Imports */
import ProjectCard from "components/elements/project-card/project-card.tsx";
import SectionHeader from "components/elements/sec-head/sec-head.tsx";
/* End Component Imports */

/* Style Imports */
import styles from "./projects.module.css";
/* End Style Imports */

/* Asset Imports */
import projects from "data/projects";
/* End Asset Imports */

/**
 * Projects Section
 *
 * Project Section Component
 *
 * @returns Project Section Component
 */
export default function Projects() {
  return (
    <section className={styles.projects_section}>
      <SectionHeader title="Projects" />

      <section className={styles.projects_wrap}>
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            projDesc={project.desc}
            projGit={project.git}
            projImg={project.image}
            projTech={project.tech}
            projTitle={project.title}
          />
        ))}
      </section>
    </section>
  );
}
