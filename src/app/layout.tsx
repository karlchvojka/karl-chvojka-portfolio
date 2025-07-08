import type { Metadata } from "next";
import "styles/globals.css";
import { montserrat_init } from  "styles/fonts.tsx";

export const metadata: Metadata = {
  title: "Karl Chvojka's Portfolio",
  description: "Karl Chvojka's Web Developer Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
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


