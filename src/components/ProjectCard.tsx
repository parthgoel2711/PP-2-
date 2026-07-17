import React from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import type { Project } from "../data/portfolioData";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const numberStr = (index + 1).toString().padStart(2, "0");

  return (
    <motion.div
      className={styles.cardWrapper}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ y: -6 }}
    >
      <Link to={`/projects/${project.slug}`} className={styles.card}>
        <div className={styles.imageContainer}>
          <img
            src={project.coverImage}
            alt={project.title}
            className={styles.image}
            loading="lazy"
          />
          <div className={styles.overlay}>
            <motion.div
              className={styles.arrowCircle}
              initial={{ scale: 0.6, opacity: 0 }}
              whileHover={{ scale: 1, opacity: 1 }}
            >
              <ArrowUpRight size={24} className={styles.arrow} />
            </motion.div>
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.topInfo}>
            <span className={styles.number}>{numberStr}</span>
            <span className={styles.category}>/{project.category.split(" / ")[0]}</span>
          </div>

          <div className={styles.titleRow}>
            <h3 className={styles.title}>{project.title}</h3>
            <span className={styles.clientYear}>
              {project.client} • {project.year}
            </span>
          </div>

          <p className={styles.subtitle}>{project.subtitle}</p>
        </div>
      </Link>
    </motion.div>
  );
};
