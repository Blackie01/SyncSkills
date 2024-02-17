"use client";

import React from "react";
import styles from "./page.module.css";
import Navigation from "./components/nav";
import Hero from "./components/hero";
import Mission from "./components/mission";
import Benefits from "./components/benefits";
import Offers from "./components/offers";
import Courses from "./components/courses";
import Tools from "./components/tools";
import FaqSection from "./components/faqs";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <Navigation />
      <Hero />
      <Mission />
      <Benefits />
      <Offers />
      <Courses />
      <Tools />
      <FaqSection />
      <Footer />
    </main>
  );
}
