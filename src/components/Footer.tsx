import React from "react";
import styles from "./Footer.module.css";

export const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      {/* Top Border Bar with Column Headers */}
      <div className={styles.topHeadersBar}>
        <div className={styles.headerCol}>LUCAS REIS</div>
        <div className={styles.headerCol}><a href="#">INSTAGRAM</a></div>
        <div className={styles.headerCol}><a href="#">X(TWITTER)</a></div>
        <div className={styles.headerCol}><a href="#">LINKEDIN</a></div>
        <div className={styles.headerCol}><a href="#">BEHANCE</a></div>
        <div className={styles.headerCol}><a href="#">DRIBBLE</a></div>
        <div className={styles.headerCol}><a href="#">YOUTUBE</a></div>
        <div className={styles.headerCol}><a href="#">FACEBOOK</a></div>
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
            <a href="#" className={styles.cornerTickBtn}>
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
