import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ProjectCard } from "../components/ProjectCard";
import { FAQ } from "../components/FAQ";
import { Transition } from "../components/Transition";
import styles from "./Home.module.css";

export const Home: React.FC = () => {
  const featuredProjects = PORTFOLIO_DATA.projects.slice(0, 4);
  const [nyTime, setNyTime] = useState<string>("");



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
        {/* Fullscreen Hero Section styled exactly like Lurais */}
        <section className={styles.heroSection}>
          <div className={styles.heroCard}>
            {/* Background Image Container */}
            <div className={styles.bgContainer}>
              <img src="/hero-bg.jpg" alt="Hero Background" className={styles.bgImage} />
              <div className={styles.bgOverlay}></div>
            </div>

            {/* Overlays */}
            {/* Header overlay */}
            <div className={styles.heroHeader}>
              <div className={styles.logoLabel}>LUCAS REIS</div>
              <a href={`mailto:${PORTFOLIO_DATA.profile.email}`} className={styles.mailLink}>
                {PORTFOLIO_DATA.profile.email.toUpperCase()}
              </a>
              <div className={styles.headerRight}>
                {/* Time Display stacked exactly like Lurais */}
                <div className={styles.timeDisplay}>
                  <span className={styles.timeZone}>NEW YORK /</span>
                  <span className={styles.timeValue}>{nyTime}</span>
                </div>
              </div>
            </div>

            {/* Mid roles overlay */}
            <div className={styles.rolesList}>
              <span>Designer</span>
              <span>Creative Director</span>
              <span>AI Artist</span>
            </div>

            {/* Huge Center Heading overlay */}
            <div className={styles.bigHeadline}>
              <span className={styles.headlineWord}>Vision</span>
              <span className={styles.headlineWord}>Portfolio</span>
            </div>

            {/* Bottom details overlay */}
            <div className={styles.heroBottomRow}>
              <div className={styles.projectCounter}>
                <span className={styles.counterNum}>/26</span>
                <span className={styles.counterLabel}>Selected Projects</span>
              </div>
              <div className={styles.socialOverlay}>
                <a href="#">X</a>
                <a href="#">LI</a>
                <a href="#">BE</a>
              </div>
            </div>
          </div>

          <div className={styles.heroFooter}>
            <span className={styles.footerLabel}>Portfolio</span>
          </div>
        </section>

        {/* Scrollable Container containing the overlay cards */}
        <div className={styles.scrollWrapper}>
          
          {/* Introduction Card (slides up over the Hero Card like a drawer) */}
          <section className={styles.introCardSection}>
            <div className={styles.introCard}>
              
              {/* Left Sidebar Column with Rotated Watermark tag and Divider line */}
              <div className={styles.cardSidebar}>
                <div className={styles.verticalSidebarTag}>
                  /about me
                </div>
              </div>

              {/* Right Main Content */}
              <div className={styles.cardInnerContent}>
                
                {/* Header boundary line */}
                <div className={styles.cardHeaderBar}>
                  <span className={styles.headerIndex}>01</span>
                  <div className={styles.headerLine}></div>
                  <span className={styles.headerTag}>/INTRODUCTION</span>
                </div>

                {/* Big Headline */}
                <h2 className={styles.introHeadline}>
                  I craft visual systems where design meets technology. <span className={styles.textGray}>My work blends human insight with machine precision —</span> without losing meaning.
                </h2>

                {/* Profile detail row with Slideshow */}
                <div className={styles.profileBioRow}>
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

                  {/* Resume button with corner ticks decoration */}
                  <div className={styles.resumeContainer}>
                    <a href="/resume.pdf" target="_blank" rel="noreferrer" className={styles.cornerTickBtn}>
                      <span className={`${styles.tick} ${styles.tickTL}`}></span>
                      <span className={`${styles.tick} ${styles.tickTR}`}></span>
                      <span className={`${styles.tick} ${styles.tickBL}`}></span>
                      <span className={`${styles.tick} ${styles.tickBR}`}></span>
                      RESUME
                    </a>
                  </div>
                </div>

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

          {/* Featured Projects Card Section */}
          <section className={styles.projectsSection}>
            <div className={styles.projectsCard}>
              
              <div className={styles.cardSidebar}>
                <div className={styles.verticalSidebarTag}>
                  /featured
                </div>
              </div>

              <div className={styles.cardInnerContent}>
                <div className={styles.cardHeaderBar}>
                  <span className={styles.headerIndex}>02</span>
                  <div className={styles.headerLine}></div>
                  <span className={styles.headerTag}>/FEATURED</span>
                </div>

                <div className={styles.sectionHeader}>
                  <h2 className={styles.bestWorksTitle}>.. best works</h2>
                  <Link to="/projects" className={styles.viewAllLink}>
                    View Archive
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className={styles.projectsGrid}>
                  {featuredProjects.map((project, index) => (
                    <ProjectCard key={project.slug} project={project} index={index} />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Principles / Process Section Refactored to match Lurais mockups */}
          <section className={styles.principlesSection}>
            <div className={styles.principlesCard}>
              
              <div className={styles.cardSidebar}>
                <div className={styles.verticalSidebarTag}>
                  /principles
                </div>
              </div>

              <div className={styles.cardInnerContent}>
                <div className={styles.cardHeaderBar}>
                  <span className={styles.headerIndex}>03</span>
                  <div className={styles.headerLine}></div>
                  <span className={styles.headerTag}>/PHILOSOPHY</span>
                </div>

                <div className={styles.principlesHeadlineRow}>
                  <span className={styles.principlesSubtitle}>Formats are tailored for<br />web, social media, or print.</span>
                  <h2 className={styles.principlesTitle}>.. work principles</h2>
                  <span className={styles.principlesFocus}>Every project is tailored to the client and business</span>
                </div>

                {/* Visual grid cards exactly matching Lurais */}
                <div className={styles.principlesVisualGrid}>
                  {/* Card 1: Transparency */}
                  <div className={styles.transparencyCard}>
                    <img src="/transparency.png" alt="Transparency bg" className={styles.principleBg} onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://framerusercontent.com/images/MbOULKEWtjVEIBlPX4m8LgzvUq4.png";
                    }} />
                    <div className={styles.principleOverlay}>
                      <h3>Transparency</h3>
                      <p>we discuss goals and outcomes before starting</p>
                    </div>
                  </div>

                  {/* Card 2: Smart Aesthetics */}
                  <div className={styles.smartCard}>
                    <img src="/vr-glasses.png" alt="Smart aesthetics bg" className={styles.principleBg} onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://framerusercontent.com/images/uHQ7Baalyd8GmCy1Qj9jHVeKco.png";
                    }} />
                    <div className={styles.principleOverlay}>
                      <span className={styles.badgeText}>Not beauty for its own sake, but storytelling and impact</span>
                      <h3>Smart aesthetics</h3>
                    </div>
                  </div>

                  {/* Card 3: Honesty Card */}
                  <div className={styles.honestyCard}>
                    <div className={styles.honestyIcons}>
                      <span className={styles.iconK}>K</span>
                      <span className={styles.iconFlower}>🌸</span>
                      <span className={styles.iconSailboat}>⛵</span>
                    </div>
                    <h4>HONESTY ABOUT TECHNOLOGY</h4>
                  </div>

                  {/* Card 4: Value-Driven Design */}
                  <div className={styles.valueCard}>
                    <img src="/value-design.png" alt="Value design bg" className={styles.principleBg} onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://framerusercontent.com/images/8bF2nQq9COJeBd7BfBPuMNZGFDI.png";
                    }} />
                    <div className={styles.principleOverlay}>
                      <h4>VALUE-DRIVEN DESIGN</h4>
                      <p>visuals serve your goals</p>
                    </div>
                  </div>

                  {/* Right side vertical column containing VR Clock card and Copyright card */}
                  <div className={styles.rightStackColumn}>
                    {/* Card 5: VR clock */}
                    <div className={styles.vrClockCard}>
                      <div className={styles.vrClockHeader}>
                        <span>13:15</span>
                      </div>
                      <img src="https://framerusercontent.com/images/6DCUF0PWH8VnLBSsNhJNTRe2ozw.png" alt="VR VR" className={styles.vrClockBg} />
                      <p>I respect deadlines and take full ownership of quality.</p>
                    </div>

                    {/* Card 6: Copyright card */}
                    <div className={styles.copyrightCard}>
                      <div className={styles.copyrightSymbol}>©</div>
                      <p>I never use unlicensed work</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* Experience Section Refactored to match Lurais experience mockup */}
          <section className={styles.experienceSection}>
            <div className={styles.experienceCard}>
              
              <div className={styles.cardSidebar}>
                <div className={styles.verticalSidebarTag}>
                  /experience
                </div>
              </div>

              <div className={styles.cardInnerContent}>
                <div className={styles.cardHeaderBar}>
                  <span className={styles.headerIndex}>04</span>
                  <div className={styles.headerLine}></div>
                  <span className={styles.headerTag}>/ABOUT</span>
                </div>

                <div className={styles.experienceMainLayout}>
                  {/* Left Column Stats */}
                  <div className={styles.statsSidebar}>
                    <div className={styles.statItem}>
                      <span className={styles.statNum}>2</span>
                      <span className={styles.statLabel}>awwwards</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statNum}>1000</span>
                      <span className={styles.statLabel}>lectures</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statNum}>200+</span>
                      <span className={styles.statLabel}>students</span>
                    </div>
                    <div className={styles.statItem}>
                      <span className={styles.statNum}>460</span>
                      <span className={styles.statLabel}>portfolio works</span>
                    </div>
                  </div>

                  {/* Middle Bio Info */}
                  <div className={styles.experienceMiddle}>
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
                  </div>

                  {/* Right Speaker Photo */}
                  <div className={styles.experienceRight}>
                    <img src="/lucas-portrait.jpg" alt="Lucas Reis speaking" className={styles.speakerPhoto} />
                  </div>
                </div>

                {/* bottom facts and figures 2x2 grid layout */}
                <div className={styles.factsGridContainer}>
                  {/* Col 1 Row 1: Label */}
                  <div className={styles.factCellTitle}>
                    <span>/facts & figures</span>
                  </div>

                  {/* Col 2 Row 1: 108 projects */}
                  <div className={styles.factCellCard}>
                    <div className={styles.factCellContent}>
                      <span className={styles.factCellNum}>108</span>
                      <span className={styles.factCellBullet}>•</span>
                      <span className={styles.factCellText}>Projects completed</span>
                    </div>
                  </div>

                  {/* Col 1 Row 2: 21 years */}
                  <div className={styles.factCellCardWithBorder}>
                    <div className={styles.factCellContent}>
                      <span className={styles.factCellNum}>21</span>
                      <span className={styles.factCellBullet}>•</span>
                      <span className={styles.factCellText}>Years of experience</span>
                    </div>
                  </div>

                  {/* Col 2 Row 2: 98 satisfied */}
                  <div className={styles.factCellCardPlain}>
                    <div className={styles.factCellContent}>
                      <span className={styles.factCellNum}>98</span>
                      <span className={styles.factCellBullet}>•</span>
                      <span className={styles.factCellText}>Satisfied clients</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* FAQ Area (including Still Have Questions overlay) */}
          <div className={styles.faqCardWrapper}>
            <div className={styles.faqCardInner}>
              <FAQ />

              {/* Still have questions cta box inside the FAQ card */}
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
