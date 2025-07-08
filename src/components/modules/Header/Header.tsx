'use client'

import styles from  "./Header.module.css";
import { Montserrat } from 'next/font/google';

export const montserrat_init = Montserrat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-montserrat',
  weight: '300',
});
/**
 * Header
 *
 * Header Component
 *
 * @returns Header Component
 */
export default function Header() {
  return (
  <header className={styles.header, `${montserrat_init.variable}`}>     
      <p>Header test</p>
  </header>
  )
}
