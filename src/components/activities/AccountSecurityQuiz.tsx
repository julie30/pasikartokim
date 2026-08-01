"use client";

import ActivitySupport from "@/components/activities/ActivitySupport";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  accountSecurityScenarios,
  type AccountSecurityAnswerId,
  type AccountSecuritySkillId,
} from "@/data/paskyrosSaugumas";
import styles from "@/app/veiklos/internetines-apgavystes/activity.module.css";

type QuizPhase = "intro" | "question" | "result";

type SkillScore = {
  correct: number;
  total: number;
};

type SkillScores = Record<AccountSecuritySkillId, SkillScore>;

const skillNames: Record<AccountSecuritySkillId, string> = {
  stiprumas: "Slaptažodžių stiprumas",
  unikalumas: "Skirtingų slaptažodžių naudojimas",
  kodai: "Patvirtinimo kodų apsauga",
  prisijungimas: "Saugus prisijungimas ir paskyros atkūrimas",
};

function createEmptySkillScores(): SkillScores {
  return {
    stiprumas: {
      correct: 0,
      total: 0,
    },
    unikalumas: {
      correct: 0,
      total: 0,
    },
    kodai: {
      correct: 0,
      total: 0,
    },
    prisijungimas: {
      correct: 0,
      total: 0,
    },
  };
}

export default function AccountSecurityQuiz() {
  const [phase, setPhase] = useState<QuizPhase>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedAnswerId, setSelectedAnswerId] =
    useState<AccountSecurityAnswerId | null>(null);

  const [answers, setAnswers] = useState<
    Record<number, AccountSecurityAnswerId>
  >({});

  const quizTopRef = useRef<HTMLElement | null>(null);

  const currentScenario = accountSecurityScenarios[currentIndex];
  const isAnswered = selectedAnswerId !== null;

  const selectedAnswer = currentScenario.answers.find(
    (answer) => answer.id === selectedAnswerId,
  );

  const isSelectedAnswerCorrect =
    selectedAnswerId === currentScenario.correctAnswerId;

  const totalCorrect = useMemo(() => {
    return accountSecurityScenarios.reduce((score, scenario) => {
      if (answers[scenario.id] === scenario.correctAnswerId) {
        return score + 1;
      }

      return score;
    }, 0);
  }, [answers]);

  const skillScores = useMemo(() => {
    const scores = createEmptySkillScores();

    accountSecurityScenarios.forEach((scenario) => {
      scores[scenario.skill].total += 1;

      if (answers[scenario.id] === scenario.correctAnswerId) {
        scores[scenario.skill].correct += 1;
      }
    });

    return scores;
  }, [answers]);

  const weakestSkill = useMemo(() => {
    const skillEntries = Object.entries(skillScores) as [
      AccountSecuritySkillId,
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
    ((currentIndex + 1) / accountSecurityScenarios.length) * 100;

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

  function selectAnswer(answerId: AccountSecurityAnswerId) {
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
      currentIndex === accountSecurityScenarios.length - 1;

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
          Registracija nereikalinga. Niekada neįvesk savo tikro
          slaptažodžio.
        </p>
      </div>
    );
  }

  if (phase === "result") {
    const skillEntries = Object.entries(skillScores) as [
      AccountSecuritySkillId,
      SkillScore,
    ][];

    return (
      <section
        ref={quizTopRef}
        className={styles.resultCard}
        aria-labelledby="account-result-title"
      >
        <p className={styles.eyebrow}>Veikla baigta</p>

        <h2 id="account-result-title">Tavo rezultatas</h2>

        <p className={styles.totalScore}>
          {totalCorrect} iš {accountSecurityScenarios.length}
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
              totalCorrect === accountSecurityScenarios.length,
            )}
          </p>
        </div>

        <div className={styles.skillResults}>
          {skillEntries.map(([skillId, score]) => (
            <article className={styles.skillResult} key={skillId}>
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
      aria-labelledby="account-scenario-title"
    >
      <div className={styles.progressArea}>
        <div className={styles.progressText}>
          <span>
            Situacija {currentIndex + 1} iš{" "}
            {accountSecurityScenarios.length}
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

      <p className={styles.eyebrow}>Paskyros saugumo situacija</p>

      <h2 id="account-scenario-title">
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
              {currentScenario.warningSigns.map((warningSign) => (
                <li key={warningSign}>{warningSign}</li>
              ))}
            </ul>
          </div>

          <p className={styles.safetyRule}>
            <strong>Saugumo taisyklė:</strong>{" "}
            {currentScenario.safetyRule}
          </p>

          <button
            className={styles.nextButton}
            type="button"
            onClick={showNextScenario}
          >
            {currentIndex === accountSecurityScenarios.length - 1
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
    return "Paskyros apsaugos ekspertas! Gerai supranti svarbiausias paskyrų apsaugos taisykles.";
  }

  if (score >= 5) {
    return "Atidus paskyros naudotojas. Daugelyje situacijų pasirinkai saugiai.";
  }

  if (score >= 3) {
    return "Saugumo žinių dar trūksta. Kai kurias taisykles jau žinai, tačiau verta jas pakartoti.";
  }

  return "Laikas sustiprinti paskyros apsaugą. Pradėk nuo skirtingų slaptažodžių ir dviejų veiksmų patvirtinimo.";
}

function getSkillFeedback(
  skill: AccountSecuritySkillId,
  correct: number,
  total: number,
): string {
  const allCorrect = correct === total;

  if (skill === "stiprumas") {
    return allCorrect
      ? "Gerai supranti, kuo ilgi ir sunkiai atspėjami slaptažodžiai yra saugesni."
      : "Venk vardų, gimimo datų, dažnų žodžių ir trumpų slaptažodžių. Rinkis ilgą slaptažodžio frazę.";
  }

  if (skill === "unikalumas") {
    return allCorrect
      ? "Gerai supranti, kad kiekvienai svarbiai paskyrai reikia atskiro slaptažodžio."
      : "Tas pats slaptažodis keliose paskyrose reiškia, kad vienas duomenų nutekėjimas gali paveikti visas paskyras.";
  }

  if (skill === "kodai") {
    return allCorrect
      ? "Moki saugoti prisijungimo kodus ir supranti papildomo patvirtinimo naudą."
      : "Prisijungimo, patvirtinimo ir paskyros atkūrimo kodų niekam neatskleisk.";
  }

  return allCorrect
    ? "Gerai žinai, kaip elgtis svetimame įrenginyje ir pastebėjus nutekintą slaptažodį."
    : "Svetimame įrenginyje neišsaugok slaptažodžio, atsijunk, o nutekintą slaptažodį nedelsdamas pakeisk.";
}

function getPersonalRecommendation(
  skill: AccountSecuritySkillId,
  allCorrect: boolean,
): string {
  if (allCorrect) {
    return "Puikus rezultatas. Toliau reguliariai tikrink paskyrų prisijungimų istoriją ir naudok papildomą patvirtinimą.";
  }

  if (skill === "stiprumas") {
    return "Kurdamas slaptažodį rinkis ilgą ir sunkiai atspėjamą frazę. Nenaudok savo vardo, gimimo datos ar dažnų žodžių.";
  }

  if (skill === "unikalumas") {
    return "Kiekvienai svarbiai paskyrai naudok skirtingą slaptažodį. Vieno slaptažodžio vagystė neturi atrakinti visų paskyrų.";
  }

  if (skill === "kodai") {
    return "Prisijungimo ir atkūrimo kodai veikia kaip laikini slaptažodžiai. Jų niekam nepersiųsk ir nepadiktuok.";
  }

  return "Svetimame įrenginyje visada atsijunk nuo paskyros. Gavęs pranešimą apie nutekėjimą, slaptažodį pakeisk nedelsdamas.";
}