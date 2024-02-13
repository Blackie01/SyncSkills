// components/FlipCard.js
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styles from "./flipCard.module.css";

const FlipCard = ({ title, children, color, margin }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    // Initial state
    gsap.set(card, { transformStyle: "preserve-3d" });

    // Hover animation
    card.addEventListener("mouseenter", () => {
      gsap.to(card, { rotationY: 180, duration: 0.6, ease: "power3.inOut" });
    });

    card.addEventListener("mouseleave", () => {
      gsap.to(card, { rotationY: 0, duration: 0.6, ease: "power3.inOut" });
    });

    return () => {
      card.removeEventListener("mouseenter", () => {});
      card.removeEventListener("mouseleave", () => {});
    };
  }, []);

  return (
    <div style={{marginTop: margin}} className={styles.flipCard} ref={cardRef}>
      <div
        style={{
          backgroundColor: color,
          backgroundImage: `radial-gradient(#000 0.5px, transparent 0.5px), radial-gradient(#000 0.5px, ${color} 0.5px)`,
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0,10px 10px",
        }}
        className={styles.flipCardFront}
      >
        <div className={styles.flipCardFrontH3}>{title}</div>
      </div>
      <div className={styles.flipCardBack}>
        <p>{children}</p>
      </div>
    </div>
  );
};

export default FlipCard;
