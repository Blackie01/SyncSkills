"use client";

import React from "react";
import styles from "./hero.module.css";
import TutorsAndCourses from "./tutorsAndCourses";

const Hero = () => {
  return (
    <section id={styles.overallContainer}>
      <div id={styles.largeTextContainer}>
        <p id={styles.largeText}>
          Kickstart a Tech Career <br />{" "}
          <span style={{ color: "#e83240", color: "rgb(62, 64, 149)" }}>
            in 90 days
          </span>
        </p>
        <p id={styles.subtitle}>
          All you need is your motivation. SyncSkills provides you with{" "}
          <br id={styles.subtitleBreak} />
          every other thing you need to start right in Tech.
        </p>
        <div id={styles.buttons}>
          <div id={styles.explore}>Explore</div>
          <div id={styles.apply}>Apply now</div>
        </div>
      </div>
      <TutorsAndCourses />
    </section>
  );
};

export default Hero;
