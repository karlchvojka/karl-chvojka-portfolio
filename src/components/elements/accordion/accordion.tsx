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
import { skillItem } from 'src/types/skillItem';

interface sectionItem {
  key: string,
  def: boolean,
  title: string,
  skillList: Array<skillItem>
}

interface SkillsSection {
  key: string,
  sections: Array<sectionItem>,
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
        data.map((section) => (
          <AccordionItem
            data={section}
            key={section.key}
          />
        ))
      }
    </section>
  );
}
