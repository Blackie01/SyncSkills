'use client'

import React from "react"
import styles from './mission.module.css'


const Mission = () => {
    return (
        <section id={styles.container}>
        <div id={styles.imageContainer}>
            <p id={styles.mission}><span>our</span> Mission</p>
            <p id={styles.vision}><span>your</span> Vision</p>
        </div>
        <div id={styles.textContainer}>
            <p>Be a part of the number: 15% by 2028.</p>
            <p>That&apos;s the number of people we want to help transition into Tech Australia. 
            We&apos;ll achieve this by offering specialized training programs anchored by industry leaders
            </p>
        </div>
        </section>
    )
}

export default Mission