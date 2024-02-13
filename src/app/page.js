"use client";

import React from "react";
import styles from "./page.module.css";
import Navigation from "./components/nav";
import Hero from "./components/hero";
import TutorsAndCourses from "./components/tutorsAndCourses";
import Mission from "./components/mission";
import Benefits from "./components/benefits";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero/>
      <Mission/>
      <Benefits/>
    </main>
  );
}
