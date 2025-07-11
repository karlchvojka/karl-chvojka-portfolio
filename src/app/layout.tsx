/* NextJS Imports */
import type { Metadata } from "next";
/* End NextJS Imports */

/* Style Imports */
import "styles/variables.css";
import "styles/globals.css";
import { montserrat_init } from  "styles/fonts.tsx";
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
}: Readonly <{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat_init.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
