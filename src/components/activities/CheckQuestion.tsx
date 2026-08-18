"use client";

import { useState } from "react";

type CheckQuestionProps = {
  question: string;
  options: string[];
  correctIndex: number;
};

export default function CheckQuestion({
  question,
  options,
  correctIndex,
}: CheckQuestionProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const isAnswered = selectedIndex !== null;
  const isCorrect = selectedIndex === correctIndex;

  return (
    <div>
      <h3>{question}</h3>

      <div>
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
          data-feedback={isCorrect ? "correct" : "incorrect"}
          aria-live="polite"
        >
          {isCorrect
            ? "Teisingai!"
            : "Dar ne. Pagalvok, kuris pasirinkimas būtų tinkamesnis, ir pasirink kitą variantą."}
        </p>
      )}
    </div>
  );
}
