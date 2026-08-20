"use client";

import { useState, type FormEvent } from "react";
import Image from "next/image";
import styles from "@/app/palaikyti-projekta/palaikyti-projekta.module.css";

export default function SupportIdeaForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [contactMethod, setContactMethod] = useState<"email" | "phone" | "">(
    "",
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setIsSubmitting(true);
    setStatus("idle");
    setMessage("");

    try {
      const response = await fetch("/api/pasiulymai", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.get("name"),
          contactMethod,
          email: formData.get("email"),
          phone: formData.get("phone"),
          city: formData.get("city"),
          school: formData.get("school"),
          suggestion: formData.get("suggestion"),
        }),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Pasiūlymo išsiųsti nepavyko.");
      }

      setStatus("success");
      setMessage("Ačiū! Jūsų pasiūlymas sėkmingai išsiųstas.");

      form.reset();
      setContactMethod("");
    } catch (error) {
      setStatus("error");

      setMessage(
        error instanceof Error ? error.message : "Pasiūlymo išsiųsti nepavyko.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <article
      className={`${styles.card} ${styles.ideaCard} ${
        isOpen ? styles.ideaCardOpen : ""
      }`}
    >
      <div className={styles.ideaContent}>
        <span className={styles.icon} aria-hidden="true">
          <Image src="/images/icons/ideja.png" alt="" width={68} height={68} />
        </span>

        <h3>Pasiūlyti veiklos temą</h3>

        <p>
          Pasidalykite idėja, kokios temos, užduoties ar mokymosi priemonės
          norėtumėte Pasikartokim.lt.
        </p>

        <button
          className={styles.ideaButton}
          type="button"
          aria-expanded={isOpen}
          aria-controls="support-idea-form"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? "Uždaryti formą" : "Siūlyti"}
        </button>
      </div>

      {isOpen && (
        <form
          id="support-idea-form"
          className={styles.ideaForm}
          onSubmit={handleSubmit}
        >
          <div className={styles.field}>
            <label htmlFor="support-name">
              Vardas <span aria-hidden="true">*</span>
            </label>

            <input
              id="support-name"
              name="name"
              type="text"
              autoComplete="name"
              required
            />
          </div>

          <fieldset className={styles.contactFieldset}>
            <legend>Kaip galime su jumis susisiekti?</legend>

            <p>
              Pasirinkite vieną kontaktavimo būdą ir nurodykite savo kontaktą.
            </p>

            <div className={styles.contactOptions}>
              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="email"
                  checked={contactMethod === "email"}
                  onChange={() => setContactMethod("email")}
                  required
                />
                El. paštu
              </label>

              <label>
                <input
                  type="radio"
                  name="contactMethod"
                  value="phone"
                  checked={contactMethod === "phone"}
                  onChange={() => setContactMethod("phone")}
                  required
                />
                Telefonu
              </label>
            </div>

            {contactMethod === "email" && (
              <div className={styles.field}>
                <label htmlFor="support-email">
                  El. pašto adresas <span aria-hidden="true">*</span>
                </label>

                <input
                  id="support-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                />
              </div>
            )}

            {contactMethod === "phone" && (
              <div className={styles.field}>
                <label htmlFor="support-phone">
                  Telefono numeris <span aria-hidden="true">*</span>
                </label>

                <input
                  id="support-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                />
              </div>
            )}
          </fieldset>

          <div className={styles.field}>
            <label htmlFor="support-city">
              Miestas
              <span className={styles.optional}> Neprivaloma</span>
            </label>

            <input
              id="support-city"
              name="city"
              type="text"
              autoComplete="address-level2"
            />
          </div>

          <div className={styles.field}>
            <label htmlFor="support-school">
              Mokyklos pavadinimas
              <span className={styles.optional}> Neprivaloma</span>
            </label>

            <input id="support-school" name="school" type="text" />
          </div>

          <div className={styles.field}>
            <label htmlFor="support-suggestion">
              Jūsų pasiūlymas <span aria-hidden="true">*</span>
            </label>

            <textarea
              id="support-suggestion"
              name="suggestion"
              rows={6}
              required
              placeholder="Aprašykite temą, veiklą, užduotį ar kitą idėją..."
            />
          </div>

          <button
            className={styles.submitButton}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Siunčiama..." : "Siųsti pasiūlymą"}
          </button>
          {status !== "idle" && (
            <p
              className={
                status === "success" ? styles.formSuccess : styles.formError
              }
              role="status"
            >
              {message}
            </p>
          )}
        </form>
      )}
    </article>
  );
}
