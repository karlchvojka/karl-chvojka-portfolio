/* NextJS Imports */
'use client';
/* End NextJS Imports */

/* Style Imports */
import styles from './resume.module.css';
/* End Style Imports */

/* Data Imports */
import education from 'data/education';
import resume from 'data/resume';
import skills from 'data/skills';
/* End Data Imports */

/**
 * Resume Page
 *
 * Resume Page Component
 *
 * @returns Resume Page Component
 */
export default function Page() {
  return (
    <div className={styles.resume_wrap}>
      <section className={styles.controls}>
        <p>To save as pdf:&nbsp;&nbsp; 1. Right click, click 'Print'&nbsp;&nbsp; 2. Change Destination to 'Save as PDF'&nbsp;&nbsp; 3. Press 'Save'</p>
      </section>

      <section className={styles.contacts}>
        <h1>Karl Chvojka</h1>
        <h2>Front End Web Developer</h2>
        <p>Portfolio: <a href="http://karlchvojka.com">karlchvojka.com</a></p>
        <p>Github: <a href="https://github.com/karlchvojka">https://github.com/karlchvojka</a></p>
        <p>Linkedin: <a href="https://www.linkedin.com/in/karlchvojka/">https://www.linkedin.com/in/karlchvojka</a></p>
        <p>Email: <a href="https://mailto:karl.chvojka@gmail.com">karl.chvojka@gmail.com</a></p>
      </section>
      
      <section className={styles.profile}>
        <h2>Profile</h2>
        <p>I am a Fullstack Web Developer with over 10 Years of industry experience building websites, being part of advertising campaigns, interacting with traditional media, and working in teams of people from a variety of disciplines. I specialize in Frontend Technologies (JavaScript, Responsive design libraries, ReactJS, NextJS, HTML5, CSS3) with knowledge and understanding of backend technologies (Node.js, Ruby on Rails, Relational and Document databases like PostgreSQL, MongoDB, MySQL, etc).</p>
        <p>I also have experience in Project Management, Project budgeting, SEO Techniques, Online and Traditional Advertising, web, graphic, and traditional media design, and how all the parts can work together in an advertising campaign.</p>
      </section>
    </div>
  );
}
