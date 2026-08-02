const grades = [
  {
    grade: "1 klasė",
    description: "Raidės, garsai, skaičiai ir pirmieji mokymosi žingsniai.",
    icon: "🌱",
  },
  {
    grade: "2 klasė",
    description: "Skaitymas, rašymas, sudėtis, atimtis ir pasaulio pažinimas.",
    icon: "🌈",
  },
  {
    grade: "3 klasė",
    description: "Teksto suvokimas, tekstiniai uždaviniai ir gamtos temos.",
    icon: "🧭",
  },
  {
    grade: "4 klasė",
    description: "Daugyba, dalyba, trupmenos, skaitymas ir vasaros misijos.",
    icon: "⭐",
    featured: true,
  },
  {
    grade: "5 klasė",
    description: "Pasiruošimas vyresnių klasių ritmui ir savarankiškam mokymuisi.",
    icon: "🚀",
  },
];

export default function GradeSelector() {
  return (
    <section className="grades-section" id="klases" aria-labelledby="grades-title">
      <div className="section-inner">
        <div className="grades-section__header">
          <p className="section-label">Pasirink klasę</p>

          <h2 id="grades-title">Mokykis pagal savo lygį</h2>

          <p>
            Pradėk nuo savo klasės užduočių arba pasirink kartojimą iš ankstesnių
            klasių. Šiuo metu ruošiamos 1–5 klasės, vėliau platforma plėsis iki
            12 klasės.
          </p>
        </div>

        <div className="grades-section__grid">
          {grades.map((item) => (
            <article
              className={`grade-card ${item.featured ? "grade-card--featured" : ""}`}
              key={item.grade}
            >
              {item.featured && (
                <span className="grade-card__badge">Ruošiama pirma</span>
              )}

              <span className="grade-card__icon" aria-hidden="true">
                {item.icon}
              </span>

              <h3>{item.grade}</h3>

              <p>{item.description}</p>

              <span className="grade-card__action">
                Ruošiama
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}