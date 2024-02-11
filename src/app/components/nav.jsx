'use client'

import React from "react"
import Logo from '../../../public/logo.webp'
import Image from "next/image"
import styles from './nav.module.css'

const Navigation = () => {
    return (
        <section id={styles.overallContainer}>
        <div id={styles.logoContainer}>
            <Image src={Logo} alt=""/>
        </div>

        <div id={styles.menu}>
            <p>Home</p>
            <p>About</p>
            <p>Start a Course</p>
            <p>Programs</p>
            <p>Careers</p>
            <p>Blog</p>
        </div>

        <div id={styles.access}>
            <div>Apply</div>
            <p>Login</p>
        </div>

        </section>
    )
}

export default Navigation