"use client";

import { useState } from "react";
import styles from "./algoritminis-mastymas.module.css";

const actions = [
  {
    id: "send",
    text: "Nusiųsti pasirinktą nuotrauką",
  },
  {
    id: "photo",
    text: "Nufotografuoti objektą",
  },
  {
    id: "camera",
    text: "Atidaryti kameros programėlę",
  },
  {
    id: "recipient",
    text: "Pasirinkti, kam siųsti nuotrauką",
  },
];

const correctOrder = ["camera", "photo", "recipient", "send"];

export default function SequenceOrderTask() {
  const [selectedOrder, setSelectedOrder] = useState<string[]>([]);
  const [result, setResult] = useState<"correct" | "incorrect" | null>(null);

  function handleActionClick(id: string) {
    if (result) {
      return;
    }

    if (selectedOrder.includes(id)) {
      setSelectedOrder((current) =>
        current.filter((selectedId) => selectedId !== id)
      );
      return;
    }

    setSelectedOrder((current) => [...current, id]);
  }

  function checkAnswer() {
    if (selectedOrder.length !== actions.length) {
      return;
    }

    const isCorrect = correctOrder.every(
      (id, index) => selectedOrder[index] === id
    );

    setResult(isCorrect ? "correct" : "incorrect");
  }

  function resetTask() {
    setSelectedOrder([]);
    setResult(null);
  }

  return (
    <div className={styles.thinkTask}>
      <p className={styles.smallLabel}>Išbandyk</p>

      <h3>Kokia veiksmų tvarka būtų teisinga?</h3>

      <p>
        Nori nufotografuoti objektą telefonu ir nusiųsti nuotrauką draugui.
        Spausk veiksmus tokia tvarka, kokia juos reikėtų atlikti.
      </p>

      <div className={styles.sequenceTaskOptions}>
        {actions.map((action) => {
          const selectedIndex = selectedOrder.indexOf(action.id);
          const isSelected = selectedIndex !== -1;

          return (
            <button
              key={action.id}
              type="button"
              className={styles.sequenceTaskOption}
              data-selected={isSelected ? "true" : "false"}
              onClick={() => handleActionClick(action.id)}
              disabled={result !== null}
            >
              {isSelected && (
                <span className={styles.sequenceTaskNumber}>
                  {selectedIndex + 1}
                </span>
              )}

              <span>{action.text}</span>
            </button>
          );
        })}
      </div>

      <p className={styles.sequenceTaskProgress}>
        Pasirinkta: {selectedOrder.length} iš {actions.length}
      </p>

      <div className={styles.sequenceTaskActions}>
        {!result && (
          <button
            type="button"
            className={styles.checkTaskButton}
            onClick={checkAnswer}
            disabled={selectedOrder.length !== actions.length}
          >
            Patikrinti
          </button>
        )}

        {selectedOrder.length > 0 && (
          <button
            type="button"
            className={styles.resetTaskButton}
            onClick={resetTask}
          >
            Pradėti iš naujo
          </button>
        )}
      </div>

      {result === "correct" && (
        <div
          className={styles.sequenceFeedback}
          data-feedback="correct"
          role="status"
        >
          <strong>Teisingai!</strong>
          <p>
            Pirmiausia reikia atidaryti kamerą ir padaryti nuotrauką. Tik tada
            galime pasirinkti gavėją ir nuotrauką išsiųsti.
          </p>
        </div>
      )}

      {result === "incorrect" && (
        <div
          className={styles.sequenceFeedback}
          data-feedback="incorrect"
          role="status"
        >
          <strong>Dar ne visai.</strong>
          <p>
            Patikrink, ar kiekvieną veiksmą tuo metu jau galima atlikti.
            Pavyzdžiui, ar galime išsiųsti nuotrauką, kol jos dar
            nenufotografavome?
          </p>
        </div>
      )}
    </div>
  );
}