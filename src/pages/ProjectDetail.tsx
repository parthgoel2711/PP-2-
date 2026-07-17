import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, Calendar, User, Tag, Layers } from "lucide-react";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import { Transition } from "../components/Transition";
import styles from "./ProjectDetail.module.css";

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();

  // Find target project
  const projectIndex = PORTFOLIO_DATA.projects.findIndex((p) => p.slug === slug);
  const project = PORTFOLIO_DATA.projects[projectIndex];

  // Fallback if project doesn't exist
  if (!project) {
    return (
      <Transition>
        <div className={`${styles.notFound} container`}>
          <h2>Project Not Found</h2>
          <p>The project you are looking for does not exist or has been moved.</p>
          <Link to="/projects" className={styles.backBtn}>
            <ArrowLeft size={16} />
            Back to Portfolio
          </Link>
        </div>
      </Transition>
    );
  }

  // Get next project for recommendation footer
  const nextProjectIndex = (projectIndex + 1) % PORTFOLIO_DATA.projects.length;
  const nextProject = PORTFOLIO_DATA.projects[nextProjectIndex];

  return (
    <Transition>
      <div className={styles.projectDetail}>
        {/* Header Hero */}
        <section className={`${styles.hero} container`}>
          <Link to="/projects" className={styles.backLink}>
            <ArrowLeft size={14} />
            Back to portfolio
          </Link>

          <div className={styles.heroContent}>
            <span className={styles.numberLabel}>
              {(projectIndex + 1).toString().padStart(2, "0")}
            </span>
            <h1 className={styles.title}>{project.title}</h1>
            <p className={styles.subtitle}>{project.subtitle}</p>
          </div>

          {/* Meta Data Panel */}
          <div className={styles.metaPanel}>
            <div className={styles.metaItem}>
              <User size={16} className={styles.metaIcon} />
              <div className={styles.metaTexts}>
                <span className={styles.metaLabel}>Client</span>
                <span className={styles.metaValue}>{project.client}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <Calendar size={16} className={styles.metaIcon} />
              <div className={styles.metaTexts}>
                <span className={styles.metaLabel}>Year</span>
                <span className={styles.metaValue}>{project.year}</span>
              </div>
            </div>

            <div className={styles.metaItem}>
              <Tag size={16} className={styles.metaIcon} />
              <div className={styles.metaTexts}>
                <span className={styles.metaLabel}>Role / Category</span>
                <span className={styles.metaValue}>{project.category}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Hero Cover Image */}
        <section className={styles.heroImageSection}>
          <img 
            src={project.coverImage} 
            alt={project.title} 
            className={styles.heroImage} 
          />
        </section>

        {/* Content Details Grid */}
        <section className={`${styles.contentSection} container`}>
          <div className={styles.detailsGrid}>
            {/* Description Details */}
            <div className={styles.descriptionCol}>
              <div className={styles.textBlock}>
                <span className={styles.blockNum}>01 / Brief</span>
                <h3 className={styles.blockTitle}>About Project</h3>
                <p className={styles.blockDesc}>{project.about}</p>
              </div>

              <div className={styles.textBlock}>
                <span className={styles.blockNum}>02 / Process</span>
                <h3 className={styles.blockTitle}>Project Overview</h3>
                <p className={styles.blockDesc}>{project.overview}</p>
              </div>

              <div className={styles.textBlock}>
                <span className={styles.blockNum}>03 / Execution</span>
                <h3 className={styles.blockTitle}>What I Did</h3>
                <p className={styles.blockDesc}>{project.what_i_did}</p>
              </div>
            </div>

            {/* Deliverables Panel */}
            <div className={styles.sidebarCol}>
              <div className={styles.stickyPanel}>
                <div className={styles.panelHeader}>
                  <Layers size={18} />
                  <h3>Deliverables</h3>
                </div>
                <ul className={styles.deliverablesList}>
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className={styles.deliverableItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Showcase */}
        {project.galleryImages && project.galleryImages.length > 0 && (
          <section className={`${styles.gallerySection} container`}>
            <span className={styles.galleryLabel}>/ Visual Assets</span>
            <div className={styles.galleryGrid}>
              {project.galleryImages.map((image, idx) => (
                <div key={idx} className={styles.galleryImageContainer}>
                  <img 
                    src={image} 
                    alt={`${project.title} asset ${idx + 1}`} 
                    className={styles.galleryImage}
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Next Project Recommendation footer */}
        <section className={styles.nextProjectSection}>
          <div className="container">
            <div className={styles.nextProjectBox}>
              <span className={styles.nextLabel}>Next Project</span>
              <h2 className={styles.nextTitle}>{nextProject.title}</h2>
              <p className={styles.nextSubtitle}>{nextProject.subtitle}</p>
              
              <Link to={`/projects/${nextProject.slug}`} className={styles.nextBtn}>
                Explore Project
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Transition>
  );
};
