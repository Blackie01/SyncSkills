"use client";

import React from "react";
import styles from "./page.module.css";
import Navigation from "./components/nav";
import Hero from "./components/hero";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero/>
    </main>
  );
}
