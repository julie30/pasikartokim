import Image from "next/image";
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

          <h2 id="support-title">
            Padėk kurti daugiau nemokamų mokymosi veiklų
          </h2>

          <p>
            „Pasikartokim.lt“ kuriamas kaip lengvai prieinama mokymosi
            platforma. Savanoriškas projekto palaikymas padeda kurti naujas
            temas ir veiklas, rengti mokymosi priemones bei prižiūrėti ir
            tobulinti svetainę.
          </p>

          <div className="support-section__actions">
            <Link className="button button-primary" href="/palaikyti-projekta">
              Palaikyti projektą
            </Link>
          </div>
        </div>

        <div className="support-section__visual" aria-hidden="true">
          <div className="support-section__heart">
            <Image
              src="/images/icons/sirdis.png"
              alt=""
              width={64}
              height={64}
            />
          </div>

          <strong>Kiekvienas žingsnis padeda augti</strong>

          <p>Daugiau temų. Daugiau veiklų. Daugiau galimybių mokytis.</p>
        </div>
      </div>
    </section>
  );
}
