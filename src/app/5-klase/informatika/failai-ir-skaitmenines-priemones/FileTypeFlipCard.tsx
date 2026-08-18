"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./tema.module.css";

type FileTypeFlipCardProps = {
  extension: string;
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
};

export default function FileTypeFlipCard({
  extension,
  title,
  description,
  imageSrc,
  imageAlt,
}: FileTypeFlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <button
      type="button"
      className={styles.fileTypeFlipCard}
      onClick={() => setIsFlipped((current) => !current)}
      aria-pressed={isFlipped}
      aria-label={`${extension} – ${title}. ${
        isFlipped ? "Rodyti ikoną" : "Rodyti paaiškinimą"
      }`}
    >
      <span className={styles.fileTypeFlipInner}>
        <span className={styles.fileTypeFlipFront}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            width={180}
            height={180}
            className={styles.fileTypeFlipImage}
          />

          <strong>{extension}</strong>

          <span className={styles.fileTypeFlipHint}>
            Spausk ir sužinok
          </span>
        </span>

        <span className={styles.fileTypeFlipBack}>
          <span className={styles.fileTypeFlipExtension}>
            {extension}
          </span>

          <strong>{title}</strong>

          <span className={styles.fileTypeFlipDescription}>
            {description}
          </span>
        </span>
      </span>
    </button>
  );
}