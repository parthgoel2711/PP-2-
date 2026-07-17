import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { PORTFOLIO_DATA } from "../data/portfolioData";
import styles from "./FAQ.module.css";

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={styles.faqSection}>
      <div className={styles.headerArea}>
        <span className={styles.numberLabel}>02</span>
        <span className={styles.tag}>/faq</span>
      </div>

      <h2 className={styles.sectionTitle}>
        Before you ask me about.<br />There’s what most people want to know.
      </h2>
      
      <p className={styles.sectionSubtitle}>
        Feel free to get in touch — I'll gladly clarify the details and help you decide if this is the right fit for your project.
      </p>

      <div className={styles.accordion}>
        {PORTFOLIO_DATA.faqs.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={index} className={`${styles.item} ${isOpen ? styles.open : ""}`}>
              <button 
                className={styles.questionButton} 
                onClick={() => toggleFAQ(index)}
                aria-expanded={isOpen}
              >
                <span className={styles.questionText}>{item.question}</span>
                <span className={styles.iconWrapper}>
                  {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                </span>
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className={styles.answerWrapper}
                  >
                    <div className={styles.answerContent}>
                      <p className={styles.answerText}>{item.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
