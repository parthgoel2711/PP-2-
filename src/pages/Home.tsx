import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ProjectCard } from "../components/ProjectCard";
import { FAQ } from "../components/FAQ";
import { Transition } from "../components/Transition";
import styles from "./Home.module.css";

// Animated counter hook
function useCountUp(target: number, duration = 1.5) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (!inView) return;
    let startTime: number | null = null;
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(target);
    };
    requestAnimationFrame(step);
  }, [inView, target, duration]);

  return { count, ref };
}

// Stagger container variants
const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" as const },
  },
};

// Animated stat item
const StatItem: React.FC<{ target: number; suffix?: string; label: string }> = ({ target, suffix = "", label }) => {
  const { count, ref } = useCountUp(target);
  return (
    <div className={styles.statItem}>
      <span className={styles.statNum} ref={ref}>{count}{suffix}</span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
};

export const Home: React.FC = () => {
  const featuredProjects = PORTFOLIO_DATA.projects.slice(0, 4);
  const [nyTime, setNyTime] = useState<string>("");

  // Hero parallax
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);

  useEffect(() => {
    const updateNYTime = () => {
      try {
        const options: Intl.DateTimeFormatOptions = {
          timeZone: "America/New_York",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        };
        const formatter = new Intl.DateTimeFormat("en-US", options);
        const parts = formatter.formatToParts(new Date());
        const hour = parts.find(p => p.type === "hour")?.value || "12";
        const minute = parts.find(p => p.type === "minute")?.value || "00";
        const dayPeriod = parts.find(p => p.type === "dayPeriod")?.value || "PM";
        setNyTime(`${hour} ${minute} ${dayPeriod.toUpperCase()}`);
      } catch (e) {
        setNyTime("12 00 PM");
      }
    };
    updateNYTime();
    const interval = setInterval(updateNYTime, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Transition>
      <div className={styles.home}>
        {/* Fullscreen Hero Section */}
        <section className={styles.heroSection} ref={heroRef}>
          <div className={styles.heroCard}>
            {/* Background Image with Parallax */}
            <div className={styles.bgContainer}>
              <motion.img
                src="/hero-bg.jpg"
                alt="Hero Background"
                className={styles.bgImage}
                style={{ y: bgY }}
              />
              <div className={styles.bgOverlay}></div>
            </div>

            {/* Header overlay */}
            <motion.div
              className={styles.heroHeader}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.9, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.logoLabel}>LUCAS REIS</div>
              <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className={styles.mailLink}>
                {PORTFOLIO_DATA.profile.email.toUpperCase()}
              </a>
              <div className={styles.headerRight}>
                <div className={styles.timeDisplay}>
                  <span className={styles.timeZone}>NEW YORK /</span>
                  <span className={styles.timeValue}>{nyTime}</span>
                </div>
              </div>
            </motion.div>

            {/* Mid roles overlay */}
            <motion.div
              className={styles.rolesList}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 2.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <span>Designer</span>
              <span>Creative Director</span>
              <span>AI Artist</span>
            </motion.div>

            {/* Huge Center Heading */}
            <motion.div
              className={styles.bigHeadline}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 1.95, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className={styles.headlineWord}>Vision</span>
              <span className={styles.headlineWord}>Portfolio</span>
            </motion.div>

            {/* Bottom details overlay */}
            <motion.div
              className={styles.heroBottomRow}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={styles.projectCounter}>
                <span className={styles.counterNum}>/26</span>
                <span className={styles.counterLabel}>Selected Projects</span>
              </div>
              <div className={styles.socialOverlay}>
                <a href="#">X</a>
                <a href="#">LI</a>
                <a href="#">BE</a>
              </div>
            </motion.div>
          </div>

          <div className={styles.heroFooter}>
            <span className={styles.footerLabel}>Portfolio</span>
          </div>
        </section>

        {/* Scrollable Container */}
        <div className={styles.scrollWrapper}>

          {/* Introduction Card */}
          <section className={styles.introCardSection}>
            <div className={styles.introCard}>
              <div className={styles.cardSidebar}>
                <motion.div
                  className={styles.verticalSidebarTag}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.85 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  /about me
                </motion.div>
              </div>

              <div className={styles.cardInnerContent}>
                <motion.div
                  className={styles.cardHeaderBar}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className={styles.headerIndex}>01</span>
                  <div className={styles.headerLine}></div>
                  <span className={styles.headerTag}>/INTRODUCTION</span>
                </motion.div>

                <motion.h2
                  className={styles.introHeadline}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  I craft visual systems where design meets technology. <span className={styles.textGray}>My work blends human insight with machine precision —</span> without losing meaning.
                </motion.h2>

                <motion.div
                  className={styles.profileBioRow}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                >
                  <img
                    src="/lucas-portrait.jpg"
                    alt="Lucas Reis Portrait"
                    className={styles.profileAvatar}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://framerusercontent.com/images/hm1VWYjGDkxBl6xfaocPHEmz4.jpg";
                    }}
                  />
                  <p className={styles.profileBioText}>
                    I am Lucas Reis — A.I. Artist, Designer, Art Director and Your Strategic Partner in Visual Innovation. I help brands, creators, and businesses transform abstract ideas into powerful visual narratives.
                  </p>
                  <div className={styles.resumeContainer}>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.cornerTickBtn}>
                      <span className={`${styles.tick} ${styles.tickTL}`}></span>
                      <span className={`${styles.tick} ${styles.tickTR}`}></span>
                      <span className={`${styles.tick} ${styles.tickBL}`}></span>
                      <span className={`${styles.tick} ${styles.tickBR}`}></span>
                      RESUME
                    </a>
                  </div>
                </motion.div>

                <div className={styles.cardDivider}></div>

                {/* Worked With Brand Ticker */}
                <div className={styles.workedWithRow}>
                  <span className={styles.workedWithLabel}>/WORKED WITH</span>
                  <div className={styles.logoMarquee}>
                    <div className={styles.logoMarqueeTrack}>
                      <span>facepad</span>
                      <span>airbuy</span>
                      <span>Doodle</span>
                      <span>lpi</span>
                      <span>Doodle</span>
                      <span>facepad</span>
                      <span>airbuy</span>
                      <span>Doodle</span>
                      <span>lpi</span>
                      <span>Doodle</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects */}
          <section className={styles.projectsSection}>
            <div className={styles.projectsCard}>
              <div className={styles.cardSidebar}>
                <motion.div
                  className={styles.verticalSidebarTag}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.85 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  /featured
                </motion.div>
              </div>

              <div className={styles.cardInnerContent}>
                <motion.div
                  className={styles.cardHeaderBar}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className={styles.headerIndex}>02</span>
                  <div className={styles.headerLine}></div>
                  <span className={styles.headerTag}>/FEATURED</span>
                </motion.div>

                <motion.div
                  className={styles.sectionHeader}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  <h2 className={styles.bestWorksTitle}>.. best works</h2>
                  <Link to="/projects" className={styles.viewAllLink}>
                    View Archive
                    <ArrowRight size={16} />
                  </Link>
                </motion.div>

                <div className={styles.projectsGrid}>
                  {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Principles Section */}
          <section className={styles.principlesSection}>
            <div className={styles.principlesCard}>
              <div className={styles.cardSidebar}>
                <motion.div
                  className={styles.verticalSidebarTag}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.85 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  /principles
                </motion.div>
              </div>

              <div className={styles.cardInnerContent}>
                <motion.div
                  className={styles.cardHeaderBar}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className={styles.headerIndex}>03</span>
                  <div className={styles.headerLine}></div>
                  <span className={styles.headerTag}>/PHILOSOPHY</span>
                </motion.div>

                <motion.div
                  className={styles.principlesHeadlineRow}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                >
                  <span className={styles.principlesSubtitle}>Formats are tailored for<br />web, social media, or print.</span>
                  <h2 className={styles.principlesTitle}>.. work principles</h2>
                  <span className={styles.principlesFocus}>Every project is tailored to the client and business</span>
                </motion.div>

                <motion.div
                  className={styles.principlesVisualGrid}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <motion.div variants={itemVariants} className={styles.transparencyCard}>
                    <img src="/transparency.png" alt="Transparency bg" className={styles.principleBg} onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://framerusercontent.com/images/MbOULKEWtjVEIBlPX4m8LgzvUq4.png";
                    }} />
                    <div className={styles.principleOverlay}>
                      <h3>Transparency</h3>
                      <p>we discuss goals and outcomes before starting</p>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className={styles.smartCard}>
                    <img src="/vr-glasses.png" alt="Smart aesthetics bg" className={styles.principleBg} onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://framerusercontent.com/images/uHQ7Baalyd8GmCy1Qj9jHVeKco.png";
                    }} />
                    <div className={styles.principleOverlay}>
                      <span className={styles.badgeText}>Not beauty for its own sake, but storytelling and impact</span>
                      <h3>Smart aesthetics</h3>
                    </div>
                  </motion.div>

                  <motion.div variants={itemVariants} className={styles.honestyCard}>
                    <div className={styles.honestyIcons}>
                      <span className={styles.iconK}>K</span>
                      <span className={styles.iconFlower}>🌸</span>
                      <span className={styles.iconSailboat}>⛵</span>
                    </div>
                    <h4>HONESTY ABOUT TECHNOLOGY</h4>
                  </motion.div>

                  <motion.div variants={itemVariants} className={styles.valueCard}>
                    <img src="/value-design.png" alt="Value design bg" className={styles.principleBg} onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://framerusercontent.com/images/8bF2nQq9COJeBd7BfBPuMNZGFDI.png";
                    }} />
                    <div className={styles.principleOverlay}>
                      <h4>VALUE-DRIVEN DESIGN</h4>
                      <p>visuals serve your goals</p>
                    </div>
                  </motion.div>

                  <div className={styles.rightStackColumn}>
                    <motion.div variants={itemVariants} className={styles.vrClockCard}>
                      <div className={styles.vrClockHeader}>
                        <span>13:15</span>
                      </div>
                      <img src="https://framerusercontent.com/images/6DCUF0PWH8VnLBSsNhJNTRe2ozw.png" alt="VR VR" className={styles.vrClockBg} />
                      <p>I respect deadlines and take full ownership of quality.</p>
                    </motion.div>

                    <motion.div variants={itemVariants} className={styles.copyrightCard}>
                      <div className={styles.copyrightSymbol}>©</div>
                      <p>I never use unlicensed work</p>
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* Experience Section */}
          <section className={styles.experienceSection}>
            <div className={styles.experienceCard}>
              <div className={styles.cardSidebar}>
                <motion.div
                  className={styles.verticalSidebarTag}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 0.85 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  /experience
                </motion.div>
              </div>

              <div className={styles.cardInnerContent}>
                <motion.div
                  className={styles.cardHeaderBar}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                >
                  <span className={styles.headerIndex}>04</span>
                  <div className={styles.headerLine}></div>
                  <span className={styles.headerTag}>/ABOUT</span>
                </motion.div>

                <div className={styles.experienceMainLayout}>
                  {/* Animated Stats */}
                  <motion.div
                    className={styles.statsSidebar}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <StatItem target={2} label="awwwards" />
                    <StatItem target={1000} label="lectures" />
                    <StatItem target={200} suffix="+" label="students" />
                    <StatItem target={460} label="portfolio works" />
                  </motion.div>

                  <motion.div
                    className={styles.experienceMiddle}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                  >
                    <h3 className={styles.experienceHeadline}>
                      I'm Lucas Reis—I design with intent where <span className={styles.textGray}>clarity meets emotional impact, technology enhances</span>
                    </h3>
                    <p className={styles.experienceDesc}>
                      Speaking at design and tech conferences across Europe. Regular design contributor to industry panels and juries.
                    </p>
                    <div className={styles.experienceSocials}>
                      <a href="#">LI</a>
                      <a href="#">X</a>
                      <a href="#">IG</a>
                    </div>
                  </motion.div>

                  <motion.div
                    className={styles.experienceRight}
                    initial={{ opacity: 0, scale: 0.96 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                  >
                    <img src="/lucas-portrait.jpg" alt="Lucas Reis speaking" className={styles.speakerPhoto} />
                  </motion.div>
                </div>

                <motion.div
                  className={styles.factsGridContainer}
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-60px" }}
                >
                  <motion.div variants={itemVariants} className={styles.factCellTitle}>
                    <span>/facts &amp; figures</span>
                  </motion.div>
                  <motion.div variants={itemVariants} className={styles.factCellCard}>
                    <div className={styles.factCellContent}>
                      <span className={styles.factCellNum}>108</span>
                      <span className={styles.factCellBullet}>•</span>
                      <span className={styles.factCellText}>Projects completed</span>
                    </div>
                  </motion.div>
                  <motion.div variants={itemVariants} className={styles.factCellCardWithBorder}>
                    <div className={styles.factCellContent}>
                      <span className={styles.factCellNum}>21</span>
                      <span className={styles.factCellBullet}>•</span>
                      <span className={styles.factCellText}>Years of experience</span>
                    </div>
                  </motion.div>
                  <motion.div variants={itemVariants} className={styles.factCellCardPlain}>
                    <div className={styles.factCellContent}>
                      <span className={styles.factCellNum}>98</span>
                      <span className={styles.factCellBullet}>•</span>
                      <span className={styles.factCellText}>Satisfied clients</span>
                    </div>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* FAQ Area */}
          <div className={styles.faqCardWrapper}>
            <div className={styles.faqCardInner}>
              <FAQ />
              <div className={styles.stillQuestionsBox}>
                <div className={styles.stillLeft}>
                  <h3>Still have questions?</h3>
                  <p>Feel free to get in touch — I'll gladly clarify the details and help you decide if this is the right fit for your project.</p>
                </div>
                <div className={styles.stillRight}>
                  <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className={styles.cornerTickBtn}>
                    <span className={`${styles.tick} ${styles.tickTL}`}></span>
                    <span className={`${styles.tick} ${styles.tickTR}`}></span>
                    <span className={`${styles.tick} ${styles.tickBL}`}></span>
                    <span className={`${styles.tick} ${styles.tickBR}`}></span>
                    ASK ME
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Transition>
  );
};
