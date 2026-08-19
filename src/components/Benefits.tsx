import Image from "next/image";

const benefits = [
  "Aiškus mokymosi kelias pagal klasę, dalyką ir temą.",
  "Mokymosi medžiagą ir veiklas galima naudoti ir be prisijungimo.",
  "Užduotys kuriamos skirtingo sudėtingumo ir reikalauja ne tik prisiminti, bet ir suprasti bei pritaikyti žinias.",
  "Galima grįžti prie ankstesnių temų, pasitikrinti žinias ir kartoti tai, kas dar kelia sunkumų.",
];

export default function Benefits() {
  return (
    <section className="benefits-section" aria-labelledby="benefits-title">
      <div className="section-inner benefits-section__inner">
        <div className="benefits-section__visual" aria-hidden="true">
          <div className="benefits-section__sun" aria-hidden="true">
            <Image
              src="/images/icons/saule.png"
              alt=""
              width={72}
              height={72}
            />
          </div>

          <div className="benefits-section__note">
            <span>Šiandienos tikslas</span>
            <strong>20 min. kartojimo</strong>
            <p>Trumpai, aiškiai ir savo tempu.</p>
          </div>

          <div className="benefits-section__stats">
            <div>
              <strong>1–12</strong>
              <span>klasės</span>
            </div>

            <div>
              <strong>PDF</strong>
              <span>priemonės</span>
            </div>

            <div>
              <strong>✓</strong>
              <span>pasitikrinimas</span>
            </div>
          </div>
        </div>

        <div className="benefits-section__content">
          <p className="section-label">Kodėl naudinga?</p>

          <h2 id="benefits-title">
            Mokytis aiškiau, savarankiškiau ir savo tempu
          </h2>

          <p>
            Pasikartokim.lt padeda ne tik atlikti užduotis, bet ir suprasti
            temas, pritaikyti žinias bei pastebėti, ką dar verta pakartoti.
          </p>

          <ul className="benefits-list">
            {benefits.map((benefit) => (
              <li key={benefit}>{benefit}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
