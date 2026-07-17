import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { FAQ } from "../components/FAQ";
import { Transition } from "../components/Transition";
import styles from "./About.module.css";

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const About: React.FC = () => {
  return (
    <Transition>
      <div className={styles.aboutPage}>
        {/* Intro Hero */}
        <section className={`${styles.aboutHero} container`}>
          <Link to="/" className={styles.backToHome}>
            <ArrowLeft size={14} /> Back to Home
          </Link>
          <div className={styles.heroLayout}>
            <div className={styles.leftCol}>
              <span className={styles.sectionLabel}>01 / Profile</span>
              <h1 className={styles.mainTitle}>About Me</h1>
              
              <div className={styles.factsGrid}>
                {PORTFOLIO_DATA.profile.facts.map((fact, index) => (
                  <div key={index} className={styles.factCard}>
                    <span className={styles.factValue}>{fact.value}</span>
                    <span className={styles.factLabel}>{fact.label}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.rightCol}>
              <h2 className={styles.introHeading}>
                Hi. I'm Lucas. I design with intent where clarity meets emotion and technology enhances, not replaces, the human touch.
              </h2>
              <div className={styles.bioText}>
                <p>
                  I am Lucas Reis — A.I. Artist, Designer, Art Director and Your Strategic Partner in Visual Innovation. I help brands, creators, and businesses transform abstract ideas into powerful visual narratives.
                </p>
                <p>
                  Over the past eight years, I've worked across brand identity, digital products, and digital art production. I believe the future of design lies at the intersection of human empathy and AI-driven scale. By leveraging generative models while maintaining rigorous designer intent, I deliver visual assets that resonate on an emotional level and align perfectly with commercial goals.
                </p>
                <p>
                  Based in Berlin, I collaborate with forward-thinking clients worldwide. When I'm not tweaking prompts or adjusting color curves, I speak at design panels, review portfolio awards, and experiment with custom workflow automation models.
                </p>
              </div>

              <div className={styles.actionRow}>
                <a 
                  href="/resume.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.resumeBtn}
                >
                  Download Resume / CV
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Ticker/Accordion */}
        <div className={styles.faqWrapper}>
          <FAQ />
        </div>
      </div>
    </Transition>
  );
};
