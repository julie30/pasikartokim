const benefits = [
  "Aiškus mokymosi kelias pagal klasę ir lygį.",
  "Galima naudoti be prisijungimo, jei reikia tik užduočių ar PDF.",
  "Prisijungus galima išsaugoti progresą, žvaigždutes ir atliktas užduotis.",
  "Mokytoja galės pakviesti mokinius į klasę ir matyti bendrą eigą.",
];

export default function Benefits() {
  return (
    <section className="benefits-section" aria-labelledby="benefits-title">
      <div className="section-inner benefits-section__inner">
        <div className="benefits-section__visual" aria-hidden="true">
          <div className="benefits-section__sun">☀️</div>

          <div className="benefits-section__note">
            <span>Šiandienos tikslas</span>
            <strong>20 min. kartojimo</strong>
            <p>Trumpai, aiškiai ir be streso.</p>
          </div>

          <div className="benefits-section__stats">
            <div>
              <strong>1–5</strong>
              <span>klasės</span>
            </div>

            <div>
              <strong>PDF</strong>
              <span>užduotys</span>
            </div>

            <div>
              <strong>⭐</strong>
              <span>progresas</span>
            </div>
          </div>
        </div>

        <div className="benefits-section__content">
          <p className="section-label">Kodėl naudinga?</p>

          <h2 id="benefits-title">Mokymasis tampa aiškesnis ir lengviau pradėti</h2>

          <p>
            Pasikartokim.lt kuriama taip, kad vaikas galėtų mokytis savarankiškai,
            o tėvai ar mokytojai greitai suprastų, nuo ko pradėti.
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