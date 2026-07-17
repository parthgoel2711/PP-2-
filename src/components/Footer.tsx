import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Border Bar with Column Headers */}
      <div className={styles.topHeadersBar}>
        <div className={styles.headerCol}>LUCAS REIS</div>
        <div className={styles.headerCol}><a href="https://instagram.com" target="_blank" rel="noreferrer">INSTAGRAM</a></div>
        <div className={styles.headerCol}><a href="https://x.com" target="_blank" rel="noreferrer">X(TWITTER)</a></div>
        <div className={styles.headerCol}><a href="https://linkedin.com" target="_blank" rel="noreferrer">LINKEDIN</a></div>
        <div className={styles.headerCol}><a href="https://behance.net" target="_blank" rel="noreferrer">BEHANCE</a></div>
        <div className={styles.headerCol}><a href="https://dribbble.com" target="_blank" rel="noreferrer">DRIBBLE</a></div>
        <div className={styles.headerCol}><a href="https://youtube.com" target="_blank" rel="noreferrer">YOUTUBE</a></div>
        <div className={styles.headerCol}><a href="https://facebook.com" target="_blank" rel="noreferrer">FACEBOOK</a></div>
      </div>

      {/* Main Content Area */}
      <div className={styles.footerMain}>
        <div className={styles.leftCol}>
          <div className={styles.availabilityRow}>
            <span className={styles.pulseDot}></span>
            I'm available for new project
          </div>
          <h2 className={styles.footerTitle}>Let's work<br />together</h2>
        </div>

        <div className={styles.rightCol}>
          <div className={styles.btnContainer}>
            <a href="https://calendly.com" target="_blank" rel="noreferrer" className={styles.cornerTickBtn}>
              <span className={`${styles.tick} ${styles.tickTL}`}></span>
              <span className={`${styles.tick} ${styles.tickTR}`}></span>
              <span className={`${styles.tick} ${styles.tickBL}`}></span>
              <span className={`${styles.tick} ${styles.tickBR}`}></span>
              BOOK A CALL WITH ME
            </a>
          </div>
        </div>
      </div>

      {/* Giant Bottom Ticker Text */}
      <div className={styles.giantTextContainer}>
        <h1 className={styles.giantText}>GET IN TOUCH</h1>
        <div className={styles.bottomGlowLine}></div>
      </div>
    </footer>
  );
};
