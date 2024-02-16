"use client";

import React, { useState, useRef, useEffect } from "react";
import Logo from "../../../public/logo.webp";
import Image from "next/image";
import styles from "./nav.module.css";
import { IconMenu2, IconX } from "@tabler/icons-react";

const Navigation = () => {
  const [openResponsiveMenu, setOpenResponsiveMenu] = useState(false);
  const responsiveMenuRef = useRef();

  const handleResponsiveMenuOpen = () => {
    setOpenResponsiveMenu(!openResponsiveMenu);
  };

  useEffect(() => {
    if (responsiveMenuRef.current) {
      responsiveMenuRef.current.style.transform = openResponsiveMenu
        ? "translateY(0)"
        : "translateY(-100vh)";
    }
  }, [openResponsiveMenu]);

  return (
    <section id={styles.overallContainer}>
      <div id={styles.logoContainer}>
        <Image src={Logo} alt="" />
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

      <div className={styles.hamburger} onClick={handleResponsiveMenuOpen}>
        {openResponsiveMenu ? (
          <IconX style={{ color: "#f4f3f3" }} />
        ) : (
          <IconMenu2 />
        )}
      </div>

      <div ref={responsiveMenuRef} className={styles.responsiveMenu}>
        <div id={styles.respMenuContainer}>
          <p>Home</p>
          <p>About</p>
          <p>Start a Course</p>
          <p>Programs</p>
          <p>Careers</p>
          <p>Blog</p>
          <p id={styles.respLogin}>Login</p>
          <div id={styles.respSignup}>Apply</div>
        </div>
      </div>
    </section>
  );
};

export default Navigation;
