"use client";

import { useState } from "react";
import styles from "./tema.module.css";
import Image from "next/image";

type DigitalToolCardProps = {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function DigitalToolCard({
  title,
  description,
  imageSrc,
  imageAlt,
}: DigitalToolCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      className={styles.digitalFlipCard}
      onClick={() => setIsFlipped((current) => !current)}
      aria-pressed={isFlipped}
      aria-label={`${title}. ${isFlipped ? "Rodyti pavadinimą" : "Rodyti aprašymą"}`}
    >
      <span className={styles.digitalFlipCardInner}>
        <span className={styles.digitalFlipCardFront}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={120}
            height={120}
            className={styles.digitalFlipIcon}
          />
          <strong>{title}</strong>
          <span className={styles.digitalFlipHint}>
            Spausk ir sužinok daugiau
          </span>
        </span>

        <span className={styles.digitalFlipCardBack}>
          <strong>{title}</strong>
          <span>{description}</span>
        </span>
      </span>
    </button>
  );
}
