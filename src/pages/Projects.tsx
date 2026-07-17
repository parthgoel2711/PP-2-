import React from "react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { ProjectCard } from "../components/ProjectCard";
import { Transition } from "../components/Transition";
import styles from "./Projects.module.css";

import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

export const Projects: React.FC = () => {
  return (
    <Transition>
      <div className={`${styles.projectsPage} container`}>
        <Link to="/" className={styles.backToHome}>
          <ArrowLeft size={14} /> Back to Home
        </Link>
        {/* Header Block */}
        <section className={styles.headerBlock}>
          <span className={styles.sectionLabel}>01 / Portfolio</span>
          <h1 className={styles.pageTitle}>Selected Works</h1>
          <p className={styles.pageSubtitle}>
            {PORTFOLIO_DATA.profile.intro}
          </p>
        </section>

        {/* Projects Grid */}
        <section className={styles.gridSection}>
          <div className={styles.projectsGrid}>
            {PORTFOLIO_DATA.projects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </section>
      </div>
    </Transition>
  );
};
