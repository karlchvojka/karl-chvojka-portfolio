/* NextJS Declarations */
"use client";
/* End NextJS Declarations */

/* Asset Imports */
/* End Asset Imports */

/* Style Imports */
import styles from "./hero-image.module.css";
/* End Style Imports */

/**
 * Hero Image
 *
 * Hero Image Component for use on Homepage
 *
 * @returns Hero Image Component
 */
export default function HeroImage() {
  return (
    <section className={styles.hero_wrap}>
      <div>
        <h1> Heya! I&apos;m Karl Chvojka.</h1>
        <p>
          I am a Full-stack developer with 15 years of industry experience
          building websites, advertising campaigns, interacting with traditional
          media, and working in teams of people from a variety of disciplines.
        </p>
        <p>
          I have an unending curiosity for new ideas and processes that helps
          expand my work and skillset. The advancement of technology continues
          to bewilder and inspire me.
        </p>
      </div>
    </section>
  );
}
