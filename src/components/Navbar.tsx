import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { X, ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import styles from "./Navbar.module.css";

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const location = useLocation();

  // Close menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent background scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <>
      {/* Floating Hamburger Button (Two horizontal lines) */}
      <button 
        className={`${styles.menuTrigger} ${isOpen ? styles.hidden : ""}`}
        onClick={toggleMenu}
        aria-label="Open Menu"
      >
        <span className={styles.menuLine}></span>
        <span className={styles.menuLine}></span>
      </button>

      {/* Fullscreen Overlay Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className={styles.menuOverlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Close Button */}
            <button 
              className={styles.closeBtn} 
              onClick={toggleMenu}
              aria-label="Close Menu"
            >
              <X size={28} />
            </button>

            {/* Menu Content */}
            <div className={styles.menuContent}>
              <div className={styles.brandRow}>
                <span className={styles.logoLabel}>LUCAS REIS</span>
                <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className={styles.emailLink}>
                  {PORTFOLIO_DATA.profile.email}
                </a>
              </div>

              <nav className={styles.navLinks}>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.5 }}
                >
                  <Link 
                    to="/" 
                    className={`${styles.navItem} ${location.pathname === "/" ? styles.active : ""}`}
                  >
                    Home
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.5 }}
                >
                  <Link 
                    to="/about" 
                    className={`${styles.navItem} ${location.pathname === "/about" ? styles.active : ""}`}
                  >
                    About me
                  </Link>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  <Link 
                    to="/projects" 
                    className={`${styles.navItem} ${location.pathname.startsWith("/projects") ? styles.active : ""}`}
                  >
                    Featured Work
                  </Link>
                </motion.div>
              </nav>

              {/* Bottom Info Row */}
              <div className={styles.menuFooter}>
                <div className={styles.socials}>
                  {PORTFOLIO_DATA.socials.slice(0, 3).map((social, index) => (
                    <a 
                      key={index} 
                      href={social.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={styles.socialLink}
                    >
                      {social.name}
                      <ArrowUpRight size={12} />
                    </a>
                  ))}
                </div>
                <div className={styles.copyright}>
                  © {new Date().getFullYear()} Lucas Reis. All rights reserved.
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
