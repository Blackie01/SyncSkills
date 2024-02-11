'use client'

import React from "react"
import styles from './hero.module.css'


const Hero = () => {
    return (
        <section >
        <div id={styles.largeTextContainer}>
        <p id={styles.largeText}>Kickstart a Tech Career <br/> in 90 days</p>
        <p id={styles.subtitle}>All you need is your motivation. SyncSkills provides you with <br/>everything you need to start right in Tech.</p>
        <div id={styles.buttons}>
        <div id={styles.explore}>Explore</div>
        <div id={styles.apply}>Apply now</div>
        </div>
        </div>
        </section>
    )
}

export default Hero