import Link from "next/link";

const grades = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export default function GradeSelector() {
  return (
    <section
      className="grades-section"
      id="klases"
      aria-labelledby="grades-title"
    >
      <div className="section-inner">
        <div className="grades-section__header">
          <p className="section-label">1–12 klasės</p>

          <h2 id="grades-title">Pasirink klasę</h2>

          <p>
            Pasirink savo klasę ir mokykis pagal jai skirtas temas.
            Jei reikia, visada gali grįžti prie ankstesnių klasių
            medžiagos ir pakartoti tai, ką jau mokeisi.
          </p>
        </div>

        <div
          className="grades-section__grid"
          aria-label="Klasių pasirinkimas"
        >
          {grades.map((grade) => {
            if (grade === 5) {
              return (
                <Link
                  className="grade-bubble grade-bubble--active"
                  href="/5-klase/informatika"
                  key={grade}
                  aria-label="5 klasė – atidaryti mokymosi turinį"
                >
                  <span className="grade-bubble__number">{grade}</span>
                  <span className="grade-bubble__status">Aktyvi</span>
                </Link>
              );
            }

            return (
              <div
                className="grade-bubble"
                key={grade}
                title={`${grade} klasės turinys ruošiamas`}
              >
                <span className="grade-bubble__number">{grade}</span>
              </div>
            );
          })}
        </div>

        <p className="grades-section__note">
          Šiuo metu aktyvus 5 klasės turinys. Kitų klasių medžiaga
          bus pildoma palaipsniui.
        </p>
      </div>
    </section>
  );
}