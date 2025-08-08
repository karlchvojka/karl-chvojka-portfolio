/* NextJS Declarations */
'use client';
/* End NextJS Declarations */

/* Framework Imports */
import { useState } from 'react';
/* End Framework Imports*/

/* Component Imports */
import Image from 'next/image';
/* End Component Imports */

/* Style Imports */
import styles from './acc-item.module.css';
/* End Style Imports */

/* Types Imports */
import { skillItem } from 'src/types/data.interface';

/* End Types Imports */
/* Accordion Item Prop Types */
interface dataTypes {
  key: string,
  def: boolean,
  title: string,
  skillList: Array<skillItem>
}

interface AccordionItemProps {
  data: Object<dataTypes>
}
/* End Accordion Item Prop Types */

/**
 * Accordion Item
 *
 * Accordion Item Component
 * @param { string } key Key for the component
 * @param { boolean } def Defines if item is open or not by default
 * @param { string } title Title of the section
 * @param { Array } skillList List of skills
 *
 * @returns Accordion Item Component
 */
export default function AccordionItem({ data }: AccordionItemProps) {
  console.log('acc item', data);
  /* State Declarations */
  const [isActive, setIsActive] = useState(data.def ? true : false);
  /* End State Declarations */

  const currRot = isActive ? 'none' : '180deg';
  const expanded = isActive ? 'expanded' : 'collapsed';

  return (
    <section className={styles.acc_item_wrap}>
      <section className={styles.acc_item_inner}>
        <section className={styles.acc_item_title}>
          <button onClick={ () => setIsActive(!isActive) }>
            <div>
              <h3>{data.title}</h3>
            </div>
            <div>
              <Image
                alt="Accordion Arrow Image"
                height={19}
                src="/global-assets/images/arrow.png"
                style={{ transform: 'rotate(' + currRot + ')' }}
                width={23}
              />
            </div>
          </button>
        </section>
        <section
          className={`${styles.acc_item_content} ${expanded}`}
          aria-expanded={isActive}
        >
          {
           // data.skillList.map(( skill, index ) => (
           //   <section className={styles.skill_item} key={skill.title}>
           //     <h4>{ skill.title }</h4>
           //     <section className={styles.progress_wrap}>
           //       <section className={styles.progress_inner} style={{ width: skill.perc }}>
           //         <p>{skill.perc}%</p>
           //       </section>
           //     </section>
           //   </section>
           // ))
          }
        
        </section>
      </section>
    </section>
  );
}
