/* NextJS Declarations */
'use client';
/* End NextJS Declarations */

/* Component Imports */
import AccordionItem from './acc-item/acc-item.tsx';
/* End Component Imports */

/* Style Imports */
import styles from './accordion.module.css';
/* End Style Imports */

/* Types Declarations */
import { skillItem } from 'src/types/data.interface';

interface SkillsSection {
  def: boolean,
  key: string,
  skillList: Array<skillItem>,
  title: string
}

interface AccordionWrapProps {
  data: Array<SkillsSection>
}
/* End Types Declarations */

/**
 * Accordion Wrap 
 *
 * Accordion Wrap Component
 *
 * @param { array } data - Array of Objects.
 *
 * @returns Accordion Wrap Component
 */
export default function AccordionWrap({ data }: AccordionWrapProps) {
  return (
    <section className={styles.acc_wrap}>
      {
        data.map((section, index) => (
          <AccordionItem
            key={section.key}
            def={section.def}
            skillList={section.skillList}
            title={section.title}
          />
        ))
      }
    </section>
  );
}
