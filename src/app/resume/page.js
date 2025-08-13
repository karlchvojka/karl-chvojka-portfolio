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

function SectionTitle({len, title}) {
  if (len > 1) {
    return <h4>{title}</h4>
  }
}

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

      <section className={styles.work_exp}>
        <h2>Work Experience</h2>
        {
          resume.workExperience.placements.map(( place, index ) => (
            <section className={styles.workplace} key={ place.company + index}>
              <h3>{ place.company }</h3>
              <section className={styles.workplace_header}>
                <h4>{ place.position }</h4>
                <p>{ place.dates }</p>
              </section>
              <p className={styles.keywords}>
                <span>Noteable Keywords: </span>
                {
                  place.keywords.map(( keyword, index ) => (
                    <span key={keyword + index}>{keyword}, </span>
                  ))
                }
              </p>
              <p>{ place.desc }</p>
            </section>
          ))
        }
      </section>

      <section className={styles.skills}>
        <h2>Notable Skills</h2>
        <section className={styles.skills_wrap}>
          {
            skills.map(( par_sec, index) => {
              return (
                <section className={styles.parsec_wrap} key={ par_sec.key }>
                  <h3>{par_sec.title}</h3>
                  {
                    par_sec.sections.map(( section, index) => (
                      <section className={styles.section_wrap} key={section.key}>
                        <SectionTitle
                          len={par_sec.sections.length}
                          title={section.title}
                        />
                        <p>
                          {
                            section.skillList.map(( skill, index, {length})  => { 
                              if (length - 1 === index) {
                                return <span key={skill.title + index}>{skill.title}</span>
                              } else {
                                return <span key={skill.title + index}>{skill.title}, </span>
                              }
                            })
                          }
                        </p>
                      </section>
                    ))
                  }
                </section>
              );
            })
          }
        </section>
      </section>

      <section className={styles.education}>
        <h2>Education</h2>
        {
          education.map((school, index) => (
            <section className={styles.ed_item} key={school.location + index}>
              <h3>{ school.location }</h3>
              <section className={styles.ed_header}>
                <h4>{ school.program }</h4>
                <p>{ school.dates }</p>
              </section>
              <p>{ school.desc }</p>
              <p>{ school.topics }</p>
            </section>
          ))
        }
      </section>
    </div>
  );
}
