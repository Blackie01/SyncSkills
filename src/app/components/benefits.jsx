"use client";

import React from "react";
import styles from "./benefits.module.css";
import FlipCard from "./flipCard";
import { IconArrowRight } from "@tabler/icons-react";

const Benefits = () => {
  return (
    <section id={styles.overallContainer}>
      <div>
        <p id={styles.title}>Time is a limited resource</p>
      </div>

      <div id={styles.flipCardContainer}>
        <FlipCard
        margin="3rem"
          color="#e6e6fa"
          title={
            <div className={styles.towerHeader}>
              <div>
                <h2>Secure your dream</h2>
                <p>Guaranteed</p>
              </div>
              <div className={styles.cardLearnMore}>
                <p>Learn more</p>
              </div>
            </div>
          }
        >
          <div className={styles.towerBody}>
            <p>
              Our end-to-end solutions ensures that you are well equip with the
              skills and resources you need to secure a dream job and be
              competent.
            </p>
            <div id={styles.learnMore}>
              <span id={styles.text}>Learn more</span>
              <span id={styles.arrow}>
                <IconArrowRight />
              </span>
            </div>
          </div>
        </FlipCard>
        <FlipCard
          color="#fffdd6"
          title={
            <div className={styles.towerHeader}>
              <div>
                <h2>Mentors to guide</h2>
                <p>with empathy</p>
              </div>

              <div className={styles.cardLearnMore}>
                <p>Learn more</p>
              </div>
            </div>
          }
        >
          <div className={styles.towerBody}>
            <p>
              We understand that learning can feel lonely and overwhelming
              sometimes, that is why we have experts who will guide you to
              success.
            </p>
            <div id={styles.learnMore}>
              <span id={styles.text}>Learn more</span>
              <span id={styles.arrow}>
                <IconArrowRight />
              </span>
            </div>
          </div>
        </FlipCard>
        <FlipCard
        margin="3rem"

          color="#fffdd6"
          title={
            <div className={styles.towerHeader}>
              <div>
                <h2>Automatic access</h2>
                <p>to our tech accelerator</p>
              </div>

              <div className={styles.cardLearnMore}>
                <p>Learn more</p>
              </div>
            </div>
          }
        >
          <div className={styles.towerBody}>
            <p>
              The best results come from when our learners and students can
              apply their skills, we have partnered with Jacinth Solutions, an
              Australian based software company to enable them gain real work
              experience.
            </p>
            <div id={styles.learnMore}>
              <span id={styles.text}>Learn more</span>
              <span id={styles.arrow}>
                <IconArrowRight />
              </span>
            </div>
          </div>
        </FlipCard>
        <FlipCard
          color="#9c96b0"
          title={
            <div className={styles.towerHeader}>
              <div>
                <h2>Learn flexibly</h2>
                <p>all online</p>
              </div>
              <div className={styles.cardLearnMore}>
                <p>Learn more</p>
              </div>
            </div>
          }
        >
          <div className={styles.towerBody}>
            <p>
              With the understanding that you have different commitments
              already, we have gone to great length to ensure you can flexibly
              learn and acquire new skills through our guided course.
            </p>
            <div id={styles.learnMore}>
              <span id={styles.text}>Learn more</span>
              <span id={styles.arrow}>
                <IconArrowRight />
              </span>
            </div>
          </div>
        </FlipCard>
      </div>
    </section>
  );
};

export default Benefits;
