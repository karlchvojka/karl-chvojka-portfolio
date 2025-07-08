/* NextJS declarations */
'use client';
/* End NextJS declarations */

/* Component Imports */
import Image from 'next/image';
import Link from 'next/link';
/* End Component Imports */

/* Asset Imports */
import hexalogo from './hexapixel-logo.jpg';
/* End Asset Imports */

/* Style Imports */
import styles from  './Header.module.css';
/* End Style Imports */

/** 
 * Header
 *
 * Header Component
 *
 * @returns Header Component
 */
export default function Header() {
  return (
  <header className={styles.headerWrap}>     
      <Image
        src={hexalogo}
        alt="Hexapixel Logo"
        width={35}
        height={53}
      />
      <nav className={styles.navWrap}>
        <Link href="/">Home</Link>
        <Link href="/resume">Resume</Link>
      </nav>
  </header>
  )
}
