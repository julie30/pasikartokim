import Link from "next/link";

export default function Hero() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-section__inner">
        <div className="hero-section__content">
          <p className="hero-section__label">
            Žaismingas kartojimas 1–5 klasėms
          </p>

          <h1 id="hero-title">
            Pasikartok ir pasiruošk kitai klasei žaismingai
          </h1>

          <p className="hero-section__text">
            Lietuviška mokymosi platforma vaikams, tėvams ir mokytojams.
            Čia rasi užduotis, teoriją, PDF lapus, žaidybinius lygius ir aiškų
            mokymosi kelią.
          </p>

          <form
            className="hero-section__search"
            role="search"
            aria-label="Užduočių paieška"
          >
            <label htmlFor="search">Ieškoti užduočių</label>
            <input
              id="search"
              name="search"
              type="search"
              placeholder="Pvz. daugyba, skaitymas, 4 klasė"
            />
            <button type="submit">Ieškoti</button>
          </form>

          <div className="hero-section__actions">
            <a className="button button-primary" href="#klases">
              Pradėti mokytis
            </a>
            <a className="button button-secondary" href="#biblioteka">
              Peržiūrėti PDF
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