/* NextJS Declarations */
"use client";
/* End NextJS Declarations */

/* NextJS Component Imports */
import config from "../../../../../next.config";
import Image from "next/image";
/* End NextJS Component Imports */

/* Style Imports */
import styles from "./acc-item.module.css";
/* End Style Imports */

/* Accordion Item  Types */
interface SectionItem {
  perc: string;
  title: string;
}

interface Section {
  key: string;
  skillList: SectionItem[];
  title: string;
}

interface AccordionItemProps {
  data: {
    def: boolean;
    key: string;
    sections: Section[];
    title: string;
  };
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
function SectionTitle({ len, title }: { len: number; title: string }) {
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
  const arrowImagelink = () => {
    return `${config.basePath}/global-assets/images/arrow.png`;
  };
  return (
    <section className={styles.acc_item_wrap}>
      <section className={styles.acc_item_inner}>
        <section className={styles.acc_item_title}>
          <div>
            <h3>{data.title}</h3>
          </div>
          <div>
            <Image
              alt={"Accordion Image Arrow"}
              src={arrowImagelink()}
              width={23}
              height={19}
            />
          </div>
        </section>
        <section className={`${styles.acc_item_content}`}>
          {data.sections.map((section) => {
            return (
              <section key={section.key} className={styles.acc_item_sec}>
                <SectionTitle
                  len={data.sections.length}
                  title={section.title}
                />
                <section className={styles.skills_wrap}>
                  {section.skillList.map((skill) => {
                    return (
                      <section className={styles.skill_item} key={skill.title}>
                        <h5>{skill.title}</h5>
                        <section className={styles.progress_wrap}>
                          <section
                            className={styles.progress_inner}
                            style={{ width: skill.perc + "%" }}
                          >
                            <p>{skill.perc}%</p>
                          </section>
                        </section>
                      </section>
                    );
                  })}
                </section>
              </section>
            );
          })}
        </section>
      </section>
    </section>
  );
}
