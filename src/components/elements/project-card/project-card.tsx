/* NextJS Declarations */
'use client';
/* End NextJS Declarations */

/* Library Imports */
import { AiFillGithub } from "react-icons/ai";
/* End Library Imports */

/* Style Imports */
import styles from './project-card.module.css';
/* End Style Imports */

/* Project Card Prop Types */
type ProjectCardProps = {
  projDesc: string,
  projGit: string,
  projImg: string,
  projTech: string,
  projTitle: string
};
/* End Project Card Prop Types */

/**
 * Project Card
 *
 * A Display Component for a Project
 *
 * @param { string } projDesc Project Description
 * @param { string } projGit Project Git Repo Link
 * @param { string } projImg Project Image url
 * @param { string } projTech Technology used in Project
 * @param { string } projTitle Project Title
 *
 * @returns Project Card Component
 */
export default function ProjectCard({ 
    projDesc,
    projGit,
    projImg,
    projTech,
    projTitle,
}: ProjectCardProps) {

  const cardImgStyle = { backgroundImage: 'url(' + projImg + ')' };

  return (
    <section className={styles.project_card_wrap}>
      <section className={styles.corner_project_wrap}>
        <section
          className={styles.projImgWrap}
          style={cardImgStyle}
        ></section>
        <h3 id="projTitle">{projTitle}</h3>
        <p id="projDesc">{projDesc}</p>
        <h4>Technology Used:</h4>
        <p id="projTech">{projTech}</p>
        <a href={projGit} target="blank"><AiFillGithub /> View Project</a>
      </section>
    </section>
  );
}
