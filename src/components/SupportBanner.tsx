import Link from "next/link";

export default function SupportBanner() {
  return (
    <section
      className="support-section"
      id="palaikyti-projekta"
      aria-labelledby="support-title"
    >
      <div className="support-section__inner">
        <div className="support-section__content">
          <p className="section-label">Palaikyti projektą</p>

          <h2 id="support-title">Padėk kurti daugiau nemokamų mokymosi veiklų</h2>

          <p>
            „Pasikartokim.lt“ turinys yra ir liks nemokamas. Savanoriškas projekto palaikymas padeda kurti naujas veiklas, prižiūrėti svetainę ir palaipsniui plėsti mokymosi biblioteką.
          </p>

          <div className="support-section__actions">
            <Link className="button button-primary" href="/palaikyti-projekta">
              Palaikyti projektą
            </Link>
          </div>
        </div>

        <div className="support-section__visual" aria-hidden="true">
          <span>💛</span>
          <strong>Kiekvienas žingsnis padeda augti</strong>
          <p>Daugiau užduočių. Daugiau klasių. Daugiau mokymosi džiaugsmo.</p>
        </div>
      </div>
    </section>
  );
}