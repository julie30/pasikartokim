import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-section__inner">
        <div className="hero-section__content">
          <p className="hero-section__label">
            Mokymasis 1–12 klasėms
          </p>

          <h1 id="hero-title">
            Mokykis, kartok ir pasitikrink savo žinias
          </h1>

          <p className="hero-section__text">
            Lietuviška mokymosi ir kartojimosi platforma 1–12 klasių mokiniams.
            Čia rasi aiškiai paaiškintas temas, įvairaus sudėtingumo užduotis,
            interaktyvias veiklas ir mokymosi priemones.
          </p>

          <div className="hero-section__actions">
            <a className="button button-primary" href="#klases">
              Pasirinkti klasę
            </a>

            <a className="button button-secondary" href="#biblioteka">
              Atrasti veiklas
            </a>

            <Link className="button button-support" href="/palaikyti-projekta">
              Palaikyti projektą
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}