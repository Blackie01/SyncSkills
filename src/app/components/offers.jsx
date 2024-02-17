"use client";
import React from "react";
import styles from "./offers.module.css";
import Image from "next/image";
import Collab1 from '../../../public/collab1.webp'
import Collab2 from '../../../public/collab2.jpeg'

const Offers = () => {
  return (
    <section id={styles.overallContainer}>
      <section className={styles.content}>
        <div className={styles.main}>
            <div className={styles.individualContainer}>
                <p className={styles.identifier}>Why SyncSkills?</p>
                <h2 className={styles.title}>A fully integrated suite of educational resources and tutors</h2>
                <p className={styles.subtitle}>
                Embark on your journey to a tech career with our all-inclusive online school, offering a complete array of educational resources and expert guidance. From cutting-edge curriculum modules to dedicated mentors, we provide a seamless transition pathway tailored for aspiring tech professionals.
                </p>
            </div>

            <div id={styles.side2} className={styles.side}>
            <div id={styles.collab1}><Image src={Collab1} alt=''/></div>
            <div id={styles.collab2}><Image src={Collab2} alt=''/></div>
        </div>

            <div className={styles.individualContainer}>
                <p className={styles.identifier}>Tutelage</p>
                <h2 className={styles.title}>Expert tutors working with global companies</h2>
                <p className={styles.subtitle}>
                Ready to level up your career game? Dive into our instructor-led program designed to whisk you to success as a savvy Business Analyst, nimble Scrum Master, or visionary Product Owner. Think of it as your personal launchpad to conquer the tech realm with finesse. With us, you won&apos;t just adapt to change — you&apos;ll orchestrate it. 
                </p>
            </div>

            <div className={styles.individualContainer}>
                <p className={styles.identifier}>Intensive</p>
                <h2 className={styles.title}>10 hard weeks of work</h2>
                <p className={styles.subtitle}>
                Gear up for a brain boost every Thursday and Friday for 10 weeks straight! Our weekly sessions are all about putting your skills to the test, honing your knowledge, and ramping up your capabilities. From mastering techniques to building competences, we&apos;ve got your brain&apos;s back with engaging assessments and real-world applications. It&apos;s not just learning—it&apos;s a mental marathon designed to supercharge your intelligence!
                </p>
            </div>

            <div className={styles.individualContainer}>
                <p className={styles.identifier}>Accelerator</p>
                <h2 className={styles.title}>Tech accelerator program like no other</h2>
                <p className={styles.subtitle}>
                Join our tech program geared towards collaboration with industry experts, where you&apos;ll dive deep into building software applications and gain invaluable work experience right here in Australia. It&apos;s more than just a program—it&apos;s a golden opportunity that paves the way for successful career transitions into the tech world. Seize the chance to level up your skills and kickstart your journey towards a thriving tech career.
                </p>
            </div>
        </div>
        <div id={styles.side1} className={styles.side}>
            <div id={styles.collab1}><Image src={Collab1} alt=''/></div>
            <div id={styles.collab2}><Image src={Collab2} alt=''/></div>
        </div>
      </section>
    </section>
  );
};

export default Offers;
