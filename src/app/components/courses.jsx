"use client";

import React from "react";
import styles from "./courses.module.css";
import { IconArrowRight } from "@tabler/icons-react";
import Analytics from "../../../public/analytics.jpeg";
import Scrum from "../../../public/scrum.webp";
import ProductDesign from "../../../public/productDesign.webp";
import SoftwareTesting from "../../../public/softwareTesting.jpeg";
import InterviewPrep from "../../../public/interview.webp";
import SoftwareEngineering from "../../../public/engineering.webp";
import ProductMarketing from "../../../public/productMarketing.webp";
import Image from "next/image";

const Courses = () => {
  const arrayOfCourses = [
    {
      id: 1,
      duration: "10 WEEKS",
      name: "Business Analytics",
      byline: "Get resources and core training...",
      link: "",
      image: Analytics,
    },
    {
      id: 2,
      duration: "10 WEEKS",
      name: "Mastering Scrum Framework",
      byline: "Learn to lead Product Management...",
      link: "",
      image: Scrum,
    },
    {
      id: 3,
      duration: "10 WEEKS",
      name: "Product Design",
      byline: "From research, to prototype to...",
      link: "",
      image: ProductDesign,
    },
    {
      id: 4,
      duration: "10 WEEKS",
      name: "Software Testing",
      byline: "Testing software is in high demand...",
      link: "",
      image: SoftwareTesting,
    },
    {
      id: 5,
      duration: "10 WEEKS",
      name: "Interview Prep Course",
      byline: "How companies hire is changing...",
      link: "",
      image: InterviewPrep,
    },
    {
      id: 6,
      duration: "10 WEEKS",
      name: "Software Engineering",
      byline: "Front-end, Back-end, Cloud; get...",
      link: "",
      image: SoftwareEngineering,
    },
    {
      id: 7,
      duration: "10 WEEKS",
      name: "Product Marketing",
      byline: "Learn how to take a product...",
      link: "",
      image: ProductMarketing,
    },
  ];

  return (
    <section id={styles.overallContainer}>
      <div id={styles.container}>
        <div id={styles.heading}>
          <h3>Courses we offer</h3>
          <div id={styles.learnMore}>
            <span id={styles.text}>View all courses</span>
            <span id={styles.arrow}>
              <IconArrowRight />
            </span>
          </div>
        </div>

        <p>
          Courses with globally up-to-date curriculum to give you an headstart
        </p>

        <div id={styles.overallCardsContainer}>
          {arrayOfCourses.map((course) => (
            <section key={course.id} className={styles.card}>
              <div id={styles.image}>
                <Image src={course.image} />
              </div>
              <div id={styles.details}>
                <p id={styles.duration}>{course.duration}</p>
                <p id={styles.name}>{course.name}</p>
                <p id={styles.byline}>{course.byline}</p>
                <div className={styles.learnMoreCursor} id={styles.learnMore}>
                  <span id={styles.text}>Enrol now</span>
                  <span id={styles.arrow}>
                    <IconArrowRight />
                  </span>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
