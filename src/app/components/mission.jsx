"use client";

import React from "react";
import styles from "./mission.module.css";
import Image from "next/image";
import Mission1 from '../../../public/mission.jpeg'
import { IconArrowRight } from "@tabler/icons-react";

const Mission = () => {
  return (
    <section id={styles.container}>
      <div id={styles.imageContainer}>
       <Image src={Mission1} alt=''/>
      </div>
      <div id={styles.textContainer}>
        <p id={styles.headline}>Be a part of the number: <span>15% by 2028.</span></p>
        <p id={styles.subtitle}>
          That&apos;s the number of people we want to help transition into Tech
          Australia. We&apos;ll achieve this by offering specialized training
          programs anchored by industry leaders
        </p>

        <div id={styles.learnMore}><span id={styles.text}>Learn more</span><span id={styles.arrow}><IconArrowRight/></span></div>
      </div>
    </section>
  );
};

export default Mission;
