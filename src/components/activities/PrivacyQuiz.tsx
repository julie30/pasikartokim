"use client";

import ActivitySupport from "@/components/activities/ActivitySupport";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  privacyScenarios,
  type PrivacyAnswerId,
  type PrivacySkillId,
} from "@/data/internetoPrivatumas";
import styles from "@/app/veiklos/internetines-apgavystes/activity.module.css";

type QuizPhase = "intro" | "question" | "result";

type SkillScore = {
  correct: number;
  total: number;
};

type SkillScores = Record<PrivacySkillId, SkillScore>;

const skillNames: Record<PrivacySkillId, string> = {
  "asmeniniai-duomenys": "Asmeninių duomenų apsauga",
  publikavimas: "Atsakingas turinio publikavimas",
  leidimai: "Programėlių leidimų ir duomenų rinkimo vertinimas",
  "skaitmeninis-pedsakas": "Skaitmeninio pėdsako supratimas",
};

function createEmptySkillScores(): SkillScores {
  return {
    "asmeniniai-duomenys": {
      correct: 0,
      total: 0,
    },
    publikavimas: {
      correct: 0,
      total: 0,
    },
    leidimai: {
      correct: 0,
      total: 0,
    },
    "skaitmeninis-pedsakas": {
      correct: 0,
      total: 0,
    },
  };
}

export default function PrivacyQuiz() {
  const [phase, setPhase] = useState<QuizPhase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedAnswerId, setSelectedAnswerId] =
    useState<PrivacyAnswerId | null>(null);

  const [answers, setAnswers] = useState<
    Record<number, PrivacyAnswerId>
  >({});

  const quizTopRef = useRef<HTMLElement | null>(null);

  const currentScenario = privacyScenarios[currentIndex];
  const isAnswered = selectedAnswerId !== null;

  const selectedAnswer = currentScenario.answers.find(
    (answer) => answer.id === selectedAnswerId,
  );

  const isSelectedAnswerCorrect =
    selectedAnswerId === currentScenario.correctAnswerId;

  const totalCorrect = useMemo(() => {
    return privacyScenarios.reduce((score, scenario) => {
      if (answers[scenario.id] === scenario.correctAnswerId) {
        return score + 1;
      }

      return score;
    }, 0);
  }, [answers]);

  const skillScores = useMemo(() => {
    const scores = createEmptySkillScores();

    privacyScenarios.forEach((scenario) => {
      scores[scenario.skill].total += 1;

      if (answers[scenario.id] === scenario.correctAnswerId) {
        scores[scenario.skill].correct += 1;
      }
    });

    return scores;
  }, [answers]);

  const weakestSkill = useMemo(() => {
    const skillEntries = Object.entries(skillScores) as [
      PrivacySkillId,
      SkillScore,
    ][];

    return skillEntries.reduce((weakest, current) => {
      const weakestRatio =
        weakest[1].total === 0
          ? 1
          : weakest[1].correct / weakest[1].total;

      const currentRatio =
        current[1].total === 0
          ? 1
          : current[1].correct / current[1].total;

      return currentRatio < weakestRatio ? current : weakest;
    })[0];
  }, [skillScores]);

  const progress =
    ((currentIndex + 1) / privacyScenarios.length) * 100;

  function scrollToQuizStart() {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        quizTopRef.current?.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      });
    });
  }

  function startQuiz() {
    setPhase("question");
    setCurrentIndex(0);
    setSelectedAnswerId(null);
    setAnswers({});

    scrollToQuizStart();
  }

  function selectAnswer(answerId: PrivacyAnswerId) {
    if (isAnswered) {
      return;
    }

    setSelectedAnswerId(answerId);

    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentScenario.id]: answerId,
    }));
  }

  function showNextScenario() {
    const isLastScenario =
      currentIndex === privacyScenarios.length - 1;

    if (isLastScenario) {
      setPhase("result");
      scrollToQuizStart();
      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
    setSelectedAnswerId(null);

    scrollToQuizStart();
  }

  function restartQuiz() {
    setPhase("question");
    setCurrentIndex(0);
    setSelectedAnswerId(null);
    setAnswers({});

    scrollToQuizStart();
  }

  if (phase === "intro") {
    return (
      <div className={styles.quizStart}>
        <button
          className={styles.startButton}
          type="button"
          onClick={startQuiz}
        >
          Pradėti veiklą
        </button>

        <p className={styles.registrationNote}>
          Registracija nereikalinga. Veikloje nereikės įvesti
          jokių tikrų asmeninių duomenų.
        </p>
      </div>
    );
  }

  if (phase === "result") {
    const skillEntries = Object.entries(skillScores) as [
      PrivacySkillId,
      SkillScore,
    ][];

    return (
      <section
        ref={quizTopRef}
        className={styles.resultCard}
        aria-labelledby="privacy-result-title"
      >
        <p className={styles.eyebrow}>Veikla baigta</p>

        <h2 id="privacy-result-title">Tavo rezultatas</h2>

        <p className={styles.totalScore}>
          {totalCorrect} iš {privacyScenarios.length}
        </p>

        <p className={styles.resultMessage}>
          {getResultMessage(totalCorrect)}
        </p>

        <div className={styles.recommendationCard}>
          <p className={styles.recommendationLabel}>
            Ką verta prisiminti labiausiai?
          </p>

          <p>
            {getPersonalRecommendation(
              weakestSkill,
              totalCorrect === privacyScenarios.length,
            )}
          </p>
        </div>

        <div className={styles.skillResults}>
          {skillEntries.map(([skillId, score]) => (
            <article
              className={styles.skillResult}
              key={skillId}
            >
              <div className={styles.skillResultHeading}>
                <h3>{skillNames[skillId]}</h3>

                <strong>
                  {score.correct} iš {score.total}
                </strong>
              </div>

              <p>
                {getSkillFeedback(
                  skillId,
                  score.correct,
                  score.total,
                )}
              </p>
            </article>
          ))}
        </div>

        <ActivitySupport />

        <div className={styles.resultActions}>
          <button
            className={styles.startButton}
            type="button"
            onClick={restartQuiz}
          >
            Pakartoti veiklą
          </button>

          <Link
            className={styles.secondaryButton}
            href="/veiklos"
          >
            Grįžti į veiklas
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={quizTopRef}
      className={styles.quizCard}
      aria-labelledby="privacy-scenario-title"
    >
      <div className={styles.progressArea}>
        <div className={styles.progressText}>
          <span>
            Situacija {currentIndex + 1} iš{" "}
            {privacyScenarios.length}
          </span>

          <span>{Math.round(progress)} %</span>
        </div>

        <div
          className={styles.progressTrack}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Veiklos pažanga"
        >
          <div
            className={styles.progressBar}
            style={{
              width: `${progress}%`,
            }}
          />
        </div>
      </div>

      <p className={styles.eyebrow}>
        Interneto privatumo situacija
      </p>

      <h2 id="privacy-scenario-title">
        {currentScenario.title}
      </h2>

      <div className={styles.messageCard}>
        {currentScenario.message.map((line, index) => (
          <p key={`${currentScenario.id}-${index}`}>
            {line}
          </p>
        ))}
      </div>

      {currentScenario.context && (
        <p className={styles.scenarioContext}>
          {currentScenario.context}
        </p>
      )}

      <h3 className={styles.question}>
        {currentScenario.question}
      </h3>

      <div
        className={styles.answers}
        aria-label="Atsakymų variantai"
      >
        {currentScenario.answers.map((answer) => {
          const isSelected =
            selectedAnswerId === answer.id;

          const isCorrect =
            answer.id === currentScenario.correctAnswerId;

          let answerClassName = styles.answerButton;

          if (isAnswered && isCorrect) {
            answerClassName = `${styles.answerButton} ${styles.correctAnswer}`;
          } else if (isAnswered && isSelected) {
            answerClassName = `${styles.answerButton} ${styles.wrongAnswer}`;
          } else if (isAnswered) {
            answerClassName = `${styles.answerButton} ${styles.inactiveAnswer}`;
          }

          return (
            <button
              className={answerClassName}
              type="button"
              key={answer.id}
              onClick={() => selectAnswer(answer.id)}
              disabled={isAnswered}
              aria-pressed={isSelected}
            >
              <span className={styles.answerLetter}>
                {answer.id.toUpperCase()}
              </span>

              <span>{answer.text}</span>
            </button>
          );
        })}
      </div>

      {isAnswered && selectedAnswer && (
        <div
          className={
            isSelectedAnswerCorrect
              ? `${styles.feedback} ${styles.correctFeedback}`
              : `${styles.feedback} ${styles.wrongFeedback}`
          }
          aria-live="polite"
        >
          <h3>{selectedAnswer.feedbackTitle}</h3>

          <p>{selectedAnswer.feedback}</p>

          <div className={styles.warningSigns}>
            <h4>Į ką reikėjo atkreipti dėmesį?</h4>

            <ul>
              {currentScenario.warningSigns.map(
                (warningSign) => (
                  <li key={warningSign}>
                    {warningSign}
                  </li>
                ),
              )}
            </ul>
          </div>

          <p className={styles.safetyRule}>
            <strong>Privatumo taisyklė:</strong>{" "}
            {currentScenario.safetyRule}
          </p>

          <button
            className={styles.nextButton}
            type="button"
            onClick={showNextScenario}
          >
            {currentIndex === privacyScenarios.length - 1
              ? "Rodyti rezultatą"
              : "Kita situacija"}
          </button>
        </div>
      )}
    </section>
  );
}

function getResultMessage(score: number): string {
  if (score >= 7) {
    return "Privatumo ekspertas! Gerai supranti, kaip apsaugoti savo ir kitų žmonių informaciją internete.";
  }

  if (score >= 5) {
    return "Atidus interneto naudotojas. Daugelyje situacijų pasirinkai privatumą saugantį sprendimą.";
  }

  if (score >= 3) {
    return "Privatumo žinias dar verta sustiprinti. Kai kurias rizikas jau pastebi, tačiau ne visada.";
  }

  return "Laikas peržiūrėti savo privatumo įpročius. Pradėk nuo profilio matomumo, programėlių leidimų ir viešai skelbiamų duomenų.";
}

function getSkillFeedback(
  skill: PrivacySkillId,
  correct: number,
  total: number,
): string {
  const allCorrect = correct === total;

  if (skill === "asmeniniai-duomenys") {
    return allCorrect
      ? "Gerai supranti, kokių duomenų nereikėtų atskleisti nepažįstamiems žmonėms."
      : "Viešai neskelbk savo mokyklos, adreso, dienotvarkės ar tikslios buvimo vietos.";
  }

  if (skill === "publikavimas") {
    return allCorrect
      ? "Moki įvertinti nuotraukų ir įrašų poveikį savo bei kitų žmonių privatumui."
      : "Prieš skelbdamas patikrink vietos informaciją ir gauk nuotraukoje esančių žmonių sutikimą.";
  }

  if (skill === "leidimai") {
    return allCorrect
      ? "Gerai vertini programėlių prašomus leidimus ir neaiškų duomenų rinkimą."
      : "Programėlėms ir svetainėms pateik tik būtiną informaciją. Nereikalingų leidimų nesuteik.";
  }

  return allCorrect
    ? "Supranti, kad internete paskelbtas turinys gali išlikti net ir jį ištrynus."
    : "Prieš skelbdamas pagalvok, ar neprieštarautum, jeigu įrašas būtų išsaugotas ir vėl parodytas po kelių metų.";
}

function getPersonalRecommendation(
  skill: PrivacySkillId,
  allCorrect: boolean,
): string {
  if (allCorrect) {
    return "Puikus rezultatas. Reguliariai peržiūrėk profilių privatumo nustatymus ir programėlėms suteiktus leidimus.";
  }

  if (skill === "asmeniniai-duomenys") {
    return "Nepažįstamiems žmonėms neatskleisk savo mokyklos, adreso, dienotvarkės ar tikslios buvimo vietos.";
  }

  if (skill === "publikavimas") {
    return "Prieš skelbdamas nuotrauką patikrink, ką ji atskleidžia, ir paprašyk joje esančių žmonių leidimo.";
  }

  if (skill === "leidimai") {
    return "Programėlėms suteik tik jų veikimui būtinus leidimus. Nepildyk neaiškių viktorinų tikrais asmeniniais duomenimis.";
  }

  return "Internete paskelbtas turinys gali būti išsaugotas kitų žmonių. Prieš skelbdamas pagalvok apie ilgalaikes pasekmes.";
}