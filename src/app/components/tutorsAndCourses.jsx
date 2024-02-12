"use client";

import React from "react";
import styles from "./tutorsAndCourses.module.css";
import Image from "next/image";
import CodeImg from "../../../public/code2.webp";
import ProductImg from "../../../public/product.jpeg";
import DesignImg from "../../../public/design.webp";
import Tutor1 from "../../../public/tutor1.webp";
import Tutor2 from "../../../public/tutor2.jpeg";
import Tutor3 from "../../../public/tutor3.webp";
import { IconBrandMeta, IconBrandAws, IconBrandRevolut, IconBrandCashapp, IconBrandCoinbase, IconBrandVisa, IconBrandVimeo, IconBrandAdobe, IconBrandAirbnb, IconBrandAmazon } from "@tabler/icons-react";

const TutorsAndCourses = () => {
  return (
    <section id={styles.overallContainer}>
      <div id={styles.courses}>
        <div className={styles.sub}>
          <p>
            Learn on-demand Tech skills
          </p>
          <div id={styles.image1} className={styles.imageContainer}>
            <Image src={CodeImg} />
          </div>
        </div>
        <div className={styles.sub}>
          <div id={styles.image2} className={styles.imageContainer}>
            <Image src={ProductImg} />
          </div>
          <div id={styles.image3} className={styles.imageContainer}>
            <Image src={DesignImg} />
          </div>
        </div>
      </div>

      <div id={styles.impact}>
        <p>our students have ended up at</p>
        <div id={styles.impactLogos}>
        <IconBrandAws/>
        <IconBrandCashapp/>
        <IconBrandCoinbase/>
        <IconBrandMeta/>
        <IconBrandRevolut/>
        <IconBrandAdobe/>
        <IconBrandAirbnb/>
        {/* <IconBrandVimeo/>
        <IconBrandVisa/>
        <IconBrandAmazon/> */}
        </div>
      </div>

      <div id={styles.tutors}>
        <div className={styles.sub}>
          <div id={styles.tutor2} className={styles.imageContainer}>
            <Image src={Tutor2} />
          </div>
          <div id={styles.tutor3} className={styles.imageContainer}>
            <Image src={Tutor3} />
          </div>
        </div>
        <div className={styles.sub}>
          <p>
            Learn from world class expert tutors
          </p>
          <div id={styles.tutor1} className={styles.imageContainer}>
            <Image src={Tutor1} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorsAndCourses;
