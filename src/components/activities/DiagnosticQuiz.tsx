"use client";

import Image from "next/image";

import { useEffect, useMemo, useRef, useState } from "react";

import {
  closestCenter,
  DndContext,
  type DragEndEvent,
  KeyboardSensor,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";

import {
  arrayMove,
  SortableContext,
  sortableKeyboardCoordinates,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";

import { CSS } from "@dnd-kit/utilities";

import { diagnosticData } from "@/data/diagnosticData";

import type { DiagnosticAreaId } from "@/data/diagnosticTypes";

import styles from "@/app/5-klase/informatika/ka-jau-moku/diagnostic.module.css";

type DiagnosticPhase = "intro" | "question" | "result";

type SortableOrderingItemProps = {
  id: string;
  label: string;
  index: number;
  totalItems: number;
  disabled: boolean;
  onMoveUp: () => void;
  onMoveDown: () => void;
};

function SortableOrderingItem({
  id,
  label,
  index,
  totalItems,
  disabled,
  onMoveUp,
  onMoveDown,
}: SortableOrderingItemProps) {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id,
    disabled,
  });

  const itemStyle = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const itemClassName = isDragging
    ? `${styles.orderingItem} ${styles.draggingItem}`
    : styles.orderingItem;

  return (
    <div
      ref={setNodeRef}
      className={itemClassName}
      style={itemStyle}
      {...attributes}
      {...listeners}
    >
      <span className={styles.orderingNumber}>{index + 1}</span>

      <span className={styles.orderingLabel}>{label}</span>

      <div className={styles.orderingControls}>
        <button
          type="button"
          onClick={onMoveUp}
          disabled={disabled || index === 0}
          aria-label={`Perkelti „${label}“ aukštyn`}
        >
          ↑
        </button>

        <button
          type="button"
          onClick={onMoveDown}
          disabled={disabled || index === totalItems - 1}
          aria-label={`Perkelti „${label}“ žemyn`}
        >
          ↓
        </button>
      </div>
    </div>
  );
}

export default function DiagnosticQuiz() {
  const [phase, setPhase] = useState<DiagnosticPhase>("intro");

  const [currentIndex, setCurrentIndex] = useState(0);

  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);

  const [answers, setAnswers] = useState<Record<string, string>>({});

  const [orderedItemIds, setOrderedItemIds] = useState<string[]>([]);

  const [isOrderingChecked, setIsOrderingChecked] = useState(false);

  const quizTopRef = useRef<HTMLElement | null>(null);

  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 6,
      },
    }),
    useSensor(TouchSensor, {
      activationConstraint: {
        delay: 150,
        tolerance: 5,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const currentQuestion = diagnosticData.questions[currentIndex];

  const isAnswered = selectedAnswerId !== null;

  const hasChoiceOptions =
    currentQuestion.type === "singleChoice" ||
    currentQuestion.type === "gridChoice" ||
    currentQuestion.type === "imageChoice";

  const selectedOption = hasChoiceOptions
    ? currentQuestion.options.find((option) => option.id === selectedAnswerId)
    : undefined;

  const isSelectedAnswerCorrect =
    hasChoiceOptions && selectedAnswerId === currentQuestion.correctAnswerId;

  const isOrderingCorrect =
    currentQuestion.type === "ordering" &&
    orderedItemIds.length === currentQuestion.correctOrder.length &&
    orderedItemIds.every(
      (itemId, index) => itemId === currentQuestion.correctOrder[index],
    );

  const totalCorrect = useMemo(() => {
    return diagnosticData.questions.reduce((score, question) => {
      const answer = answers[question.id];

      if (!answer) {
        return score;
      }

      if (question.type === "ordering") {
        const correctOrder = question.correctOrder.join("|");

        return answer === correctOrder ? score + 1 : score;
      }

      if (
        question.type === "singleChoice" ||
        question.type === "gridChoice" ||
        question.type === "imageChoice"
      ) {
        return answer === question.correctAnswerId ? score + 1 : score;
      }

      return score;
    }, 0);
  }, [answers]);

  const areaScores = useMemo(() => {
    const scores: Record<DiagnosticAreaId, { correct: number; total: number }> =
      {
        digitalTools: { correct: 0, total: 0 },
        algorithms: { correct: 0, total: 0 },
        data: { correct: 0, total: 0 },
        onlineSafety: { correct: 0, total: 0 },
      };

    diagnosticData.questions.forEach((question) => {
      scores[question.area].total += 1;

      const answer = answers[question.id];

      if (!answer) {
        return;
      }

      if (question.type === "ordering") {
        if (answer === question.correctOrder.join("|")) {
          scores[question.area].correct += 1;
        }

        return;
      }

      if (
        question.type === "singleChoice" ||
        question.type === "gridChoice" ||
        question.type === "imageChoice"
      ) {
        if (answer === question.correctAnswerId) {
          scores[question.area].correct += 1;
        }
      }
    });

    return scores;
  }, [answers]);

  const recommendedTopics = (() => {
    const missedRecommendationIds = new Set(
      diagnosticData.questions
        .filter((question) => {
          const answer = answers[question.id];

          if (!answer) {
            return true;
          }

          if (question.type === "ordering") {
            return answer !== question.correctOrder.join("|");
          }

          return answer !== question.correctAnswerId;
        })
        .map((question) => question.recommendationId),
    );

    const missedRecommendations = diagnosticData.recommendations
      .filter((recommendation) =>
        missedRecommendationIds.has(recommendation.id),
      )
      .sort((a, b) => a.priority - b.priority);

    const weakestAreas = (
      Object.entries(areaScores) as [
        DiagnosticAreaId,
        { correct: number; total: number },
      ][]
    )
      .filter(([, score]) => score.correct < score.total)
      .sort(([, a], [, b]) => {
        const aResult = a.correct / a.total;
        const bResult = b.correct / b.total;

        return aResult - bResult;
      });

    const selectedRecommendations: (typeof diagnosticData.recommendations)[number][] =
      [];

    for (const [areaId] of weakestAreas) {
      const recommendation = missedRecommendations.find(
        (item) =>
          item.area === areaId &&
          !selectedRecommendations.some((selected) => selected.id === item.id),
      );

      if (recommendation) {
        selectedRecommendations.push(recommendation);
      }

      if (selectedRecommendations.length === 3) {
        break;
      }
    }

    if (selectedRecommendations.length < 3) {
      for (const recommendation of missedRecommendations) {
        const alreadySelected = selectedRecommendations.some(
          (selected) => selected.id === recommendation.id,
        );

        if (!alreadySelected) {
          selectedRecommendations.push(recommendation);
        }

        if (selectedRecommendations.length === 3) {
          break;
        }
      }
    }

    return selectedRecommendations;
  })();

  const progress = ((currentIndex + 1) / diagnosticData.questions.length) * 100;

  useEffect(() => {
    if (currentQuestion.type === "ordering") {
      setOrderedItemIds(currentQuestion.items.map((item) => item.id));
    } else {
      setOrderedItemIds([]);
    }
  }, [currentQuestion]);

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

  function startDiagnostic() {
    setCurrentIndex(0);
    setSelectedAnswerId(null);
    setAnswers({});
    setPhase("question");
    scrollToQuizStart();
  }

  function selectAnswer(answerId: string) {
    if (selectedAnswerId !== null) {
      return;
    }

    setSelectedAnswerId(answerId);

    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: answerId,
    }));
  }

  function moveOrderedItem(itemId: string, direction: "up" | "down") {
    setOrderedItemIds((currentItems) => {
      const currentPosition = currentItems.indexOf(itemId);
      const newPosition =
        direction === "up" ? currentPosition - 1 : currentPosition + 1;

      if (
        currentPosition === -1 ||
        newPosition < 0 ||
        newPosition >= currentItems.length
      ) {
        return currentItems;
      }

      const updatedItems = [...currentItems];

      [updatedItems[currentPosition], updatedItems[newPosition]] = [
        updatedItems[newPosition],
        updatedItems[currentPosition],
      ];

      return updatedItems;
    });
  }

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (!over || active.id === over.id || isOrderingChecked) {
      return;
    }

    setOrderedItemIds((currentItems) => {
      const oldIndex = currentItems.indexOf(String(active.id));

      const newIndex = currentItems.indexOf(String(over.id));

      if (oldIndex === -1 || newIndex === -1) {
        return currentItems;
      }

      return arrayMove(currentItems, oldIndex, newIndex);
    });
  }

  function checkOrdering() {
    if (currentQuestion.type !== "ordering" || isOrderingChecked) {
      return;
    }

    setIsOrderingChecked(true);

    setAnswers((previousAnswers) => ({
      ...previousAnswers,
      [currentQuestion.id]: orderedItemIds.join("|"),
    }));
  }

  function showNextQuestion() {
    const isLastQuestion = currentIndex === diagnosticData.questions.length - 1;

    if (isLastQuestion) {
      setPhase("result");
      scrollToQuizStart();
      return;
    }

    setCurrentIndex((previousIndex) => previousIndex + 1);
    setSelectedAnswerId(null);
    setIsOrderingChecked(false);
    scrollToQuizStart();
  }

  function restartDiagnostic() {
    setCurrentIndex(0);
    setSelectedAnswerId(null);
    setAnswers({});
    setOrderedItemIds([]);
    setIsOrderingChecked(false);
    setPhase("question");

    scrollToQuizStart();
  }

  if (phase === "intro") {
    return (
      <div className={styles.quizStart}>
        <button
          className={styles.startButton}
          type="button"
          onClick={startDiagnostic}
        >
          Pradėti pasitikrinimą
        </button>

        <p className={styles.registrationNote}>
          Registracija nereikalinga. Rezultatas nebus vertinamas pažymiu.
        </p>
      </div>
    );
  }

  if (phase === "result") {
    return (
      <section
        ref={quizTopRef}
        className={styles.resultCard}
        aria-labelledby="diagnostic-result-title"
      >
        <p className={styles.eyebrow}>Pasitikrinimas baigtas</p>

        <h2 id="diagnostic-result-title">Tavo rezultatai</h2>

        <p className={styles.totalScore}>
          {totalCorrect} iš {diagnosticData.questions.length}
        </p>

        <div className={styles.areaResults}>
          {(
            Object.entries(areaScores) as [
              DiagnosticAreaId,
              { correct: number; total: number },
            ][]
          ).map(([areaId, score]) => (
            <article className={styles.areaResult} key={areaId}>
              <div className={styles.areaResultHeading}>
                <h3>{diagnosticData.areas[areaId].title}</h3>

                <strong>
                  {score.correct} iš {score.total}
                </strong>
              </div>

              <p>{diagnosticData.areas[areaId].description}</p>
            </article>
          ))}
        </div>

        {recommendedTopics.length > 0 && (
          <section
            className={styles.recommendations}
            aria-labelledby="recommendations-title"
          >
            <p className={styles.eyebrow}>Kitas žingsnis</p>

            <h3 id="recommendations-title">Ką verta pakartoti?</h3>

            <div className={styles.recommendationList}>
              {recommendedTopics.map((recommendation) => (
                <article
                  className={styles.recommendationCard}
                  key={recommendation.id}
                >
                  <h4>{recommendation.title}</h4>

                  <p>{recommendation.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        <div className={styles.resultActions}>
          <button
            className={styles.startButton}
            type="button"
            onClick={restartDiagnostic}
          >
            Pakartoti pasitikrinimą
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      ref={quizTopRef}
      className={styles.quizCard}
      aria-labelledby="diagnostic-question-title"
    >
      <div className={styles.progressArea}>
        <div className={styles.progressText}>
          <span>
            Užduotis {currentIndex + 1} iš {diagnosticData.questions.length}
          </span>

          <span>{Math.round(progress)} %</span>
        </div>

        <div
          className={styles.progressTrack}
          role="progressbar"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          aria-label="Pasitikrinimo pažanga"
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
        {diagnosticData.areas[currentQuestion.area].title}
      </p>

      <h2 id="diagnostic-question-title">{currentQuestion.title}</h2>

      <div className={styles.scenario}>
        {currentQuestion.scenario.map((line, index) => (
          <p key={`${currentQuestion.id}-${index}`}>{line}</p>
        ))}
      </div>

      <h3 className={styles.question}>{currentQuestion.question}</h3>

      {currentQuestion.type === "singleChoice" && (
        <div className={styles.answers} aria-label="Atsakymų variantai">
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswerId === option.id;
            const isCorrect = option.id === currentQuestion.correctAnswerId;

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
                key={option.id}
                onClick={() => selectAnswer(option.id)}
                disabled={isAnswered}
                aria-pressed={isSelected}
              >
                <span>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {currentQuestion.type === "ordering" && (
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={orderedItemIds}
            strategy={verticalListSortingStrategy}
          >
            <div className={styles.orderingList} aria-label="Veiksmų seka">
              {orderedItemIds.map((itemId, index) => {
                const item = currentQuestion.items.find(
                  (currentItem) => currentItem.id === itemId,
                );

                if (!item) {
                  return null;
                }

                return (
                  <SortableOrderingItem
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    index={index}
                    totalItems={orderedItemIds.length}
                    disabled={isOrderingChecked}
                    onMoveUp={() => moveOrderedItem(item.id, "up")}
                    onMoveDown={() => moveOrderedItem(item.id, "down")}
                  />
                );
              })}
            </div>
          </SortableContext>
        </DndContext>
      )}

      {currentQuestion.type === "ordering" && !isOrderingChecked && (
        <button
          className={styles.checkButton}
          type="button"
          onClick={checkOrdering}
        >
          Patikrinti seką
        </button>
      )}

      {currentQuestion.type === "ordering" && isOrderingChecked && (
        <div
          className={
            isOrderingCorrect
              ? `${styles.feedback} ${styles.correctFeedback}`
              : `${styles.feedback} ${styles.wrongFeedback}`
          }
          aria-live="polite"
        >
          <h3>
            {isOrderingCorrect
              ? currentQuestion.correctFeedback.title
              : currentQuestion.incorrectFeedback.title}
          </h3>

          <p>
            {isOrderingCorrect
              ? currentQuestion.correctFeedback.text
              : currentQuestion.incorrectFeedback.text}
          </p>

          <button
            className={styles.nextButton}
            type="button"
            onClick={showNextQuestion}
          >
            Kita užduotis
          </button>
        </div>
      )}

      {currentQuestion.type === "gridChoice" && (
        <div className={styles.gridTask}>
          <div className={styles.commandList} aria-label="Robotuko komandos">
            {currentQuestion.grid.commands.map((command, index) => (
              <span key={`${currentQuestion.id}-${index}-${command}`}>
                {index + 1}. {command}
              </span>
            ))}
          </div>

          <div
            className={styles.robotGrid}
            style={{
              gridTemplateColumns: `repeat(${currentQuestion.grid.columns}, minmax(0, 1fr))`,
            }}
            aria-label={currentQuestion.grid.accessibilityText}
          >
            {currentQuestion.grid.cells.map((cell) => {
              const isStartCell = cell.id === currentQuestion.grid.startCellId;

              return (
                <div
                  className={
                    isStartCell
                      ? `${styles.gridCell} ${styles.startCell}`
                      : styles.gridCell
                  }
                  key={cell.id}
                >
                  <span className={styles.cellLabel}>{cell.label}</span>

                  {isStartCell && currentQuestion.characterImage && (
                    <Image
                      className={styles.robotImage}
                      src={currentQuestion.characterImage.src}
                      alt={currentQuestion.characterImage.alt}
                      width={currentQuestion.characterImage.width}
                      height={currentQuestion.characterImage.height}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className={styles.answers} aria-label="Atsakymų variantai">
            {currentQuestion.options.map((option) => {
              const isSelected = selectedAnswerId === option.id;

              const isCorrect = option.id === currentQuestion.correctAnswerId;

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
                  key={option.id}
                  onClick={() => selectAnswer(option.id)}
                  disabled={isAnswered}
                  aria-pressed={isSelected}
                >
                  <span>{option.label}</span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {currentQuestion.type === "imageChoice" && (
        <div
          className={styles.imageChoices}
          aria-label="Paveikslėlių atsakymų variantai"
        >
          {currentQuestion.options.map((option) => {
            const isSelected = selectedAnswerId === option.id;

            const isCorrect = option.id === currentQuestion.correctAnswerId;

            let optionClassName = styles.imageChoiceButton;

            if (isAnswered && isCorrect) {
              optionClassName = `${styles.imageChoiceButton} ${styles.correctAnswer}`;
            } else if (isAnswered && isSelected) {
              optionClassName = `${styles.imageChoiceButton} ${styles.wrongAnswer}`;
            } else if (isAnswered) {
              optionClassName = `${styles.imageChoiceButton} ${styles.inactiveAnswer}`;
            }

            return (
              <button
                className={optionClassName}
                type="button"
                key={option.id}
                onClick={() => selectAnswer(option.id)}
                disabled={isAnswered}
                aria-pressed={isSelected}
              >
                <Image
                  className={styles.imageChoiceImage}
                  src={option.image.src}
                  alt={option.image.alt}
                  width={option.image.width}
                  height={option.image.height}
                />

                <span className={styles.imageChoiceLabel}>{option.label}</span>
              </button>
            );
          })}
        </div>
      )}

      {hasChoiceOptions && isAnswered && selectedOption && (
        <div
          className={
            isSelectedAnswerCorrect
              ? `${styles.feedback} ${styles.correctFeedback}`
              : `${styles.feedback} ${styles.wrongFeedback}`
          }
          aria-live="polite"
        >
          <h3>{selectedOption.feedback.title}</h3>

          <p>{selectedOption.feedback.text}</p>

          <button
            className={styles.nextButton}
            type="button"
            onClick={showNextQuestion}
          >
            {currentIndex === diagnosticData.questions.length - 1
              ? "Rodyti rezultatus"
              : "Kita užduotis"}
          </button>
        </div>
      )}
    </section>
  );
}
