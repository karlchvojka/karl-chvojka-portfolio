'use client'

import Head from "next/head";
import styles from "@/styles/Home.module.css";

/* Component Imports */
import Header from '@/components/modules/Header/Header';
/* End Component Imports */
export default function Home() {
  return (
    <>
      <Head>
        <title>Karl Chvojka's Portfolio</title>
        <meta name="description" content="Karl Chvojka's Web Developer Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <Header />
      <div className={`${styles.page}`} >
        <main className={styles.main}>
          <p>Test</p>
        </main>
      </div>
    </>
  );
}
