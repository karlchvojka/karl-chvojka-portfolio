/* NextJS Imports */
import type { Metadata } from "next";
/* End NextJS Imports */

/* Component Imports */
import Header from "components/layout/header/header.js"
/* End Component Imports */

/* Style Imports */
import "styles/variables.css";
import "styles/globals.css";
import { lato, montserrat_init, robotoCond } from  "styles/fonts";
import styles from "./layout.module.css"
/* End Style Imports */

export const metadata: Metadata = {
  title: "Karl Chvojka's Portfolio",
  description: "Karl Chvojka's Web Developer Portfolio",
};

/**
 * RootLayout
 *
 * Root Layout Component
 *
 * @returns RootLayout Component
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${lato.variable} ${montserrat_init.variable} ${robotoCond.variable} antialiased`}>
        <div className="page_wrap">
          <Header />
          {children}
          <footer className={styles.footer_wrap}>
            <p>2025 - Karl Chvojka</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
