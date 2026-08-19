const steps = [
  {
    number: "1",
    title: "Pasirink klasę",
    description:
      "Pradėk nuo savo klasės arba grįžk prie ankstesnių klasių temų, kurias nori pakartoti.",
  },
  {
    number: "2",
    title: "Pasirink temą",
    description:
      "Rask norimą dalyką, temą ar veiklą ir mokykis savo tempu.",
  },
  {
    number: "3",
    title: "Mokykis ir praktikuokis",
    description:
      "Skaityk paaiškinimus, atlik įvairaus sudėtingumo užduotis ir išbandyk interaktyvias veiklas.",
  },
  {
    number: "4",
    title: "Pasitikrink ir pakartok",
    description:
      "Pasitikrink, ką jau supranti, pastebėk, kur dar reikia praktikos, ir grįžk prie sunkesnių vietų.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" aria-labelledby="how-title">
      <div className="section-inner">
        <p className="section-label">Kaip veikia?</p>

        <div className="how-section__header">
          <h2 id="how-title">
            Mokymosi kelias paprastas
          </h2>

          <p>
            Pasikartokim.lt gali naudoti be prisijungimo.
            Pasirink, ką nori mokytis ar pakartoti, ir judėk savo tempu.
          </p>
        </div>

        <div className="how-flow" aria-label="Mokymosi kelias">
          {steps.map((step) => (
            <div className="how-flow__step" key={step.number}>
              <span className="how-flow__number">{step.number}</span>

              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}