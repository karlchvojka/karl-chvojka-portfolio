/* NextJS Declarations */
'use client';
/* End NextJS Declarations */

/* Framework Imports */
import { useState } from 'react';
/* End Framework Imports*/

/* Style Imports */
import styles from './acc-item.module.css';
/* End Style Imports */

/* Accordion Item  Types */

// Type Imports
import { skillItem } from 'src/types/skillItem';

// Accordion Item Prop Types
interface dataTypes {
  key: string,
  def: boolean,
  title: string,
  skillList: Array<skillItem>
}

interface AccordionItemProps {
  data: Object<dataTypes>
}

interface SectionTitleProps {
  len: number,
  title: string
}

/* End Accordion Item Types */

/**
 * Section Title
 *
 * Sub Component to return title if there is more than one item in the sections array
 * 
 * @param { number } len Length of sections array
 * @param { title } title Title of the section
 * 
 * @returns HTML For section title
 */
function SectionTitle({ len, title }: SectionTitleProps) {
  if (len > 1) {
    return <h4 key={title}>{title}</h4>;
  }
}

/**
 * Accordion Item
 *
 * Accordion Item Component
 * @param { Object } data - Data for the full Accordion Item
 *
 * @returns Accordion Item Component
 */
export default function AccordionItem({ data }: AccordionItemProps) {
  /* State Declarations */
  const [isActive, setIsActive] = useState(data.def ? true : false);
  /* End State Declarations */

  const expanded = isActive ? 'expanded' : 'collapsed';

  return (
    <section className={styles.acc_item_wrap}>
      <section className={styles.acc_item_inner}>
        <section className={styles.acc_item_title}>
          <button onClick={() => setIsActive(!isActive)}>
            <div>
              <h3>{data.title}</h3>
            </div>
            <div>
              <img
                alt={"Accordion Image Arrow"}
                src={"/global-assets/images/arrow.png"}
              />
            </div>
          </button>
        </section>
        <section
          className={`${styles.acc_item_content} ${expanded}`}
          aria-expanded={isActive}
        >
          {
            data.sections.map(( section ) => (
              <section key={section.key} className={styles.acc_item_sec}>
                
                <SectionTitle 
                  len={data.sections.length}
                  title={section.title}
                /> 
                <section className={styles.skills_wrap}>
                {
                  section.skillList.map(( skill ) => (
                    <section className={styles.skill_item} key={skill.title}>
                      <h5 key={skill.title}>{skill.title}</h5>
                      <section className={styles.progress_wrap}>
                        <section className={styles.progress_inner} style={{ width: skill.perc + '%' }}>
                          <p>{skill.perc}%</p>
                        </section>
                      </section>
                    </section>
                  ))
                }
                </section>
              </section>
            ))
          }
        </section>
      </section>
    </section>
  );
}
