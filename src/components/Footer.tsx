import Image from "next/image";
import Link from "next/link";

const currentYear = new Date().getFullYear();

export default function Footer() {

  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <Link className="site-footer__logo" href="/" aria-label="Pasikartokim.lt pradžia">
          <Image
            src="/images/logo.svg"
            alt="Pasikartokim.lt"
            width={340}
            height={91}
          />
        </Link>

        <p className="site-footer__description">
          Lietuviška mokymosi platforma vaikams, tėvams ir mokytojams.
          Kartojimas, pasiruošimas ir mokymasis žaismingai.
        </p>

        <nav className="site-footer__nav" aria-label="Puslapio nuorodos">
          <Link href="/#biblioteka">Mokymosi biblioteka</Link>
          <Link href="/#klases">Klasės</Link>
          <Link href="/palaikyti-projekta">Palaikyti projektą</Link>
        </nav>

        <div className="site-footer__bottom">
          <p>© {currentYear} Pasikartokim.lt. Visos teisės saugomos.</p>
          <p>Kuriama palaipsniui kaip edukacinis projektas.</p>
        </div>
      </div>
    </footer>
  );
}