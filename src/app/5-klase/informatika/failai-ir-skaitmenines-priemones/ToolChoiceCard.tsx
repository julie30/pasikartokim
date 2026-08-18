"use client";

import { useState } from "react";
import styles from "./tema.module.css";

type ToolChoiceCardProps = {
  task: string;
  options: string[];
  correctIndex: number;
};

export default function ToolChoiceCard({
  task,
  options,
  correctIndex,
}: ToolChoiceCardProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isAnswered = selectedIndex !== null;
  const isCorrect = selectedIndex === correctIndex;

  return (
    <div className={styles.toolPracticeCard}>
      <p className={styles.toolPracticeTask}>{task}</p>

      <div className={styles.toolPracticeOptions}>
        {options.map((option, index) => (
          <button
            key={option}
            type="button"
            onClick={() => setSelectedIndex(index)}
            aria-pressed={selectedIndex === index}
            data-state={
              selectedIndex !== index
                ? "idle"
                : index === correctIndex
                  ? "correct"
                  : "incorrect"
            }
          >
            {option}
          </button>
        ))}
      </div>

      {isAnswered && (
        <p
          className={styles.toolPracticeFeedback}
          data-feedback={isCorrect ? "correct" : "incorrect"}
          aria-live="polite"
        >
          {isCorrect
            ? "Teisingai! Ši priemonė geriausiai tinka šiai užduočiai."
            : "Dar ne. Pagalvok, kokių funkcijų reikia šiai užduočiai, ir pasirink kitą variantą."}
        </p>
      )}
    </div>
  );
}
