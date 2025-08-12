/* NextJS Imports */
import type { Metadata } from "next";
/* End NextJS Imports */

/* Component Imports */
import Header from "components/layout/header/header.js"
/* End Component Imports */

/* Style Imports */
import "styles/variables.css";
import "styles/globals.css";
import { montserrat_init } from  "styles/fonts.tsx";
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
      <body className={`${montserrat_init.variable} antialiased`}>
        <div className="page_wrap">
          <Header />
          {children}
          <footer className="footer_wrap">
            <p>Footer</p>
          </footer>
        </div>
      </body>
    </html>
  );
}
