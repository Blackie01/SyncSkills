"use client";

import React from "react";
import styles from "./tools.module.css";
import {
  IconBrandSlack,
  IconBrandTrello,
  IconBrandVscode,
  IconBrandFigma,
  IconBrandUbuntu,
} from "@tabler/icons-react";

const Tools = () => {
  return (
    <section id={styles.overallContainer}>
      <div id={styles.absoluteBackground}></div>
      <div className={styles.individualContainer}>
        <p className={styles.identifier}>For you?</p>
        <h2 className={styles.title}>
          This program is for you, and you know it
        </h2>
        <p className={styles.subtitle}>
          This course is perfect for you if you&apos;re itching for a career
          switch-up. It&apos;s all about helping you boost your skills, giving
          you an edge in the tech world and opening doors for your career to
          grow. If you&apos;re dreaming of a job that&apos;s not just rewarding
          but also future-proof, this program is exactly what you need. And hey,
          if flexibility is important to you, we&apos;ve got that covered too.
          We&apos;re here to make sure this course fits right into your life and
          schedule.
        </p>
      </div>

      <div id={styles.toolsToLearn}>
        <h4>Tools you&apos;ll learn</h4>
        <div id={styles.logoContainer}>
          <div className={styles.logoName}>
            <IconBrandSlack className={styles.logo} />
            Slack
          </div>
          <div className={styles.logoName}>
            <IconBrandTrello className={styles.logo} />
            Trello
          </div>
          <div className={styles.logoName}>
            <IconBrandVscode className={styles.logo} />
            VsCode
          </div>
          <div className={styles.logoName}>
            <IconBrandFigma className={styles.logo} />
            Figma
          </div>
          <div className={styles.logoName}>
            <IconBrandUbuntu className={styles.logo} />
            Ubuntu
          </div>
        </div>
      </div>
    </section>
  );
};

export default Tools;
