"use client";

import React from "react";
import styles from "./page.module.css";
import Navigation from "./components/nav";
import Hero from "./components/hero";
import TutorsAndCourses from "./components/tutorsAndCourses";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero/>
    </main>
  );
}
