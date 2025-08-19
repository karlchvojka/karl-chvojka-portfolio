/* NextJS Declarations */
'use client';
/* End NextJS Declarations */

/* Component Imports */
import AccordionItem from './acc-item/acc-item';
/* End Component Imports */

/* Style Imports */
import styles from './accordion.module.css';
/* End Style Imports */
interface SectionItem {
  key: string;
  skillList: [];
  title: string;
}

interface SectionWrap {
  def: boolean;
  key: string;
  sections: SectionItem[];
  title: string;
}

interface AccordionWrapProps {
  data: SectionWrap[];
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
        data.map(sectionWrap => {
          return (
            <AccordionItem
              key={sectionWrap.key}
              data={sectionWrap}
            />
          );
        })
      }
    </section>
  );
};
