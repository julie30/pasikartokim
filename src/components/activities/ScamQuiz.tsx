"use client";

import ActivitySupport from "@/components/activities/ActivitySupport";
import { useMemo, useRef, useState } from "react";
import {
  scamScenarios,
  type AnswerId,
  type SkillId,
} from "@/data/internetinesApgavystes";
import styles from "@/app/veiklos/internetines-apgavystes/activity.module.css";

type QuizPhase = "intro" | "question" | "result";

type SkillScore = {
  correct: number;
  total: number;
};

type SkillScores = Record<SkillId, SkillScore>;

const skillNames: Record<SkillId, string> = {
  duomenys: "Asmens ir paskyros duomenų apsauga",
  skuba: "Skubos ir spaudimo atpažinimas",
  saltinis: "Siuntėjo, nuorodų ir svetainių tikrinimas",
  informacija: "Informacijos patikimumo vertinimas",
};

function createEmptySkillScores(): SkillScores {
  return {
    duomenys: {
      correct: 0,
      total: 0,
    },
    skuba: {
      correct: 0,
      total: 0,
    },
    saltinis: {
      correct: 0,
      total: 0,
    },
    informacija: {
      correct: 0,
      total: 0,
    },
  };
}

export default function ScamQuiz() {
  const [phase, setPhase] = useState<QuizPhase>("intro");

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedAnswerId, setSelectedAnswerId] =
    useState<AnswerId | null>(null);

  const [answers, setAnswers] = useState<Record<number, AnswerId>>(
    {},
  );

  const quizTopRef = useRef<HTMLElement | null>(null);

  const currentScenario = scamScenarios[currentIndex];

  const isAnswered = selectedAnswerId !== null;

  const selectedAnswer = currentScenario.answers.find(
    (answer) => answer.id === selectedAnswerId,
  );

  const isSelectedAnswerCorrect =
    selectedAnswerId === currentScenario.correctAnswerId;

  const totalCorrect = useMemo(() => {
    return scamScenarios.reduce((score, scenario) => {
      const answer = answers[scenario.id];

      if (answer === scenario.correctAnswerId) {
        return score + 1;
      }

      return score;
    }, 0);
  }, [answers]);

  const skillScores = useMemo(() => {
    const scores = createEmptySkillScores();

    scamScenarios.forEach((scenario) => {
      scores[scenario.skill].total += 1;

      if (answers[scenario.id] === scenario.correctAnswerId) {
        scores[scenario.skill].correct += 1;
      }
    });

    return scores;
  }, [answers]);

  const weakestSkill = useMemo(() => {
    const skillEntries = Object.entries(skillScores) as [
      SkillId,
      SkillScore,
    ][];

    return skillEntries.reduce((weakest, current) => {
      const weakestResult =
        weakest[1].total === 0
          ? 1
          : weakest[1].correct / weakest[1].total;

      const currentResult =
        current[1].total === 0
          ? 1
          : current[1].correct / current[1].total;

      return currentResult < weakestResult ? current : weakest;
    })[0];
  }, [skillScores]);

  const progress =
    ((currentIndex + 1) / scamScenarios.length) * 100;

  function scrollToQuizStart() {
    /*
     * Laukiame, kol React atnaujins klausimą arba rezultatų ekraną.
     * Tada slenkame į testo pradžią, o ne į viso puslapio viršų.
     */
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

  function selectAnswer(answerId: AnswerId) {
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
      currentIndex === scamScenarios.length - 1;

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
          Registracija nereikalinga. Rezultatą pamatysi iš karto.
        </p>
      </div>
    );
  }

  if (phase === "result") {
    return (
      <section
        ref={quizTopRef}
        className={styles.resultCard}
        aria-labelledby="result-title"
      >
        <p className={styles.eyebrow}>Veikla baigta</p>

        <h2 id="result-title">Tavo rezultatas</h2>

        <p className={styles.totalScore}>
          {totalCorrect} iš {scamScenarios.length}
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
              totalCorrect === scamScenarios.length,
            )}
          </p>
        </div>

        <div className={styles.skillResults}>
          {Object.entries(skillScores).map(
            ([skillId, score]) => {
              const typedSkillId = skillId as SkillId;

              return (
                <article
                  className={styles.skillResult}
                  key={typedSkillId}
                >
                  <div className={styles.skillResultHeading}>
                    <h3>{skillNames[typedSkillId]}</h3>

                    <strong>
                      {score.correct} iš {score.total}
                    </strong>
                  </div>

                  <p>
                    {getSkillFeedback(
                      typedSkillId,
                      score.correct,
                      score.total,
                    )}
                  </p>
                </article>
              );
            },
          )}
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

          <a className={styles.secondaryButton} href="/veiklos">
            Grįžti į pradžią
          </a>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={quizTopRef}
      className={styles.quizCard}
      aria-labelledby="scenario-title"
    >
      <div className={styles.progressArea}>
        <div className={styles.progressText}>
          <span>
            Situacija {currentIndex + 1} iš{" "}
            {scamScenarios.length}
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

      <p className={styles.eyebrow}>Internetinė situacija</p>

      <h2 id="scenario-title">{currentScenario.title}</h2>

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

          if (isAnswered && isSelected && isCorrect) {
            answerClassName = `${styles.answerButton} ${styles.correctAnswer}`;
          }

          if (isAnswered && isSelected && !isCorrect) {
            answerClassName = `${styles.answerButton} ${styles.wrongAnswer}`;
          }

          if (isAnswered && !isSelected) {
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
                  <li key={warningSign}>{warningSign}</li>
                ),
              )}
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
            {currentIndex === scamScenarios.length - 1
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
    return "Saugumo detektyvas! Gerai pastebi dažniausius internetinių apgavysčių požymius.";
  }

  if (score >= 5) {
    return "Atidus interneto naudotojas. Daugelyje situacijų pasirinkai saugiai.";
  }

  if (score >= 3) {
    return "Besimokantis tikrinti. Jau atpažįsti dalį pavojų, tačiau kai kurios žinutės dar gali suklaidinti.";
  }

  return "Laikas sustoti ir patikrinti. Neskubėk, neatskleisk duomenų ir pasitark su patikimu suaugusiuoju.";
}

function getSkillFeedback(
  skill: SkillId,
  correct: number,
  total: number,
): string {
  const allCorrect = correct === total;

  if (skill === "duomenys") {
    return allCorrect
      ? "Gerai supranti, kad slaptažodžių ir banko kortelės duomenų negalima atskleisti dėl prizo ar virtualių daiktų."
      : "Prisimink: net mažas mokestis ar vertingas prizas nepadaro svetainės patikimos.";
  }

  if (skill === "skuba") {
    return allCorrect
      ? "Gerai pastebi, kai tave bandoma išgąsdinti arba priversti veikti nepagalvojus."
      : "Žodžiai „tik dabar“, „per 10 minučių“ ir grasinimai dažnai naudojami tam, kad nespėtum patikrinti informacijos.";
  }

  if (skill === "saltinis") {
    return allCorrect
      ? "Moki nepasitikėti vien pažįstamu vardu, logotipu ar gražiu svetainės dizainu."
      : "Prieš spausdamas nuorodą patikrink siuntėją, interneto adresą ir informaciją oficialioje svetainėje.";
  }

  return allCorrect
    ? "Supranti, kad įtikinamai parašytas atsakymas dar nėra patikimas šaltinis."
    : "DI gali pateikti netikslų atsakymą užtikrintu tonu. Svarbius faktus reikia patikrinti patikimuose šaltiniuose.";
}

function getPersonalRecommendation(
  skill: SkillId,
  allCorrect: boolean,
): string {
  if (allCorrect) {
    return "Puikus rezultatas. Nepamiršk, kad sukčių metodai nuolat keičiasi. Net ir pažįstamai atrodantį prašymą verta patikrinti kitu būdu.";
  }

  if (skill === "duomenys") {
    return "Slaptažodžių, banko kortelės duomenų ir saugos kodų niekam neatskleisk dėl prizo, žaidimo monetų ar mažo patvirtinimo mokesčio.";
  }

  if (skill === "skuba") {
    return "Žodžiai „tik dabar“, „liko kelios minutės“ arba grasinimas užblokuoti paskyrą dažnai naudojami tam, kad nespėtum pagalvoti.";
  }

  if (skill === "saltinis") {
    return "Prieš spausdamas žinutėje gautą nuorodą pats atidaryk oficialią programėlę arba įvesk žinomą svetainės adresą.";
  }

  return "DI ir internete pateiktą informaciją tikrink patikimuose šaltiniuose. Užtikrintas atsakymo tonas dar neįrodo, kad faktas teisingas.";
}