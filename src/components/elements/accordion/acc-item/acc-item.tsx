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
interface AccordionItemProps {
  key: string,
  def: boolean,
  title: string,
  skillList: Array<skillItem>
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
export default function AccordionItem({ def, skillList, title }: AccordionItemProps) {
  /* State Declarations */
  const [isActive, setIsActive] = useState(def ? true : false);
  /* End State Declarations */

  const currRot = isActive ? 'none' : '180deg';
  const expanded = isActive ? 'expanded' : 'collapsed';

  console.log(currRot);
  return (
    <section className={styles.acc_item_wrap}>
      <section className={styles.acc_item_inner}>
        <section className={styles.acc_item_title}>
          <button>
            <div>
              <h3>{title}</h3>
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
          className={styles.accordion_item_content, styles.expanded}
          aria-expanded={isActive}
        >
          {
            skillList.map(( skill, index ) => (
              <section className='skillItem' key={skill.title}>
                <h4>{ skill.title }</h4>
                <section className={styles.progressWrap}>
                  <section className={styles.progressInner} style={{ width: skill.perc }}>
                    <p>{skill.perc}</p>
                  </section>
                </section>
              </section>
            ))
          }
        </section>
      </section>
    </section>
  );
}
