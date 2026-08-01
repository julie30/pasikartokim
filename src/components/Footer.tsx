export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <a className="site-footer__logo" href="/" aria-label="Pasikartokim.lt pradžia">
          <img src="/images/logo.svg" alt="Pasikartokim.lt" />
        </a>

        <p className="site-footer__description">
          Lietuviška mokymosi platforma vaikams, tėvams ir mokytojams.
          Kartojimas, pasiruošimas ir mokymasis žaismingai.
        </p>

        <nav className="site-footer__nav" aria-label="Puslapio nuorodos">
          <a href="#biblioteka">Mokymosi biblioteka</a>
          <a href="#klases">Klasės</a>
          <a href="#palaikyti-projekta">Palaikyti projektą</a>
        </nav>

        <div className="site-footer__bottom">
          <p>© {currentYear} Pasikartokim.lt. Visos teisės saugomos.</p>
          <p>Kuriama palaipsniui kaip edukacinis projektas.</p>
        </div>
      </div>
    </footer>
  );
}