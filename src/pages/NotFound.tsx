import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Transition } from "../components/Transition";
import styles from "./NotFound.module.css";

export const NotFound: React.FC = () => {
  return (
    <Transition>
      <div className={styles.notFoundPage}>
        <div className={styles.content}>
          <span className={styles.label}>404</span>
          <h1 className={styles.title}>Page Not Found</h1>
          <p className={styles.description}>
            The page you are looking for doesn't exist or has been moved to a new address.
          </p>
          <Link to="/" className={styles.homeBtn}>
            <ArrowLeft size={16} />
            Back to Home
          </Link>
        </div>
      </div>
    </Transition>
  );
};
