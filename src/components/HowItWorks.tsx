const steps = [
  {
    number: "1",
    title: "Pasirink klasę",
    description: "Pradėk nuo savo klasės arba pakartok ankstesnių klasių temas.",
  },
  {
    number: "2",
    title: "Mokykis laisvai",
    description: "Užduotis ir PDF lapus galima peržiūrėti be prisijungimo.",
  },
  {
    number: "3",
    title: "Sek progresą",
    description: "Prisijungęs mokinys gali matyti savo lygius ir pasiekimus.",
  },
  {
    number: "4",
    title: "Prisijunk prie klasės",
    description: "Mokytojos pakvietimu mokinys gali prisijungti prie klasės.",
  },
];

export default function HowItWorks() {
  return (
    <section className="how-section" aria-labelledby="how-title">
      <div className="section-inner">
        <p className="section-label">Kaip veikia?</p>

        <div className="how-section__header">
          <h2 id="how-title">Mokytis galima taip, kaip patogiausia</h2>

          <p>
            Pasikartokim.lt galima naudoti be prisijungimo, individualiai sekant
            savo progresą arba prisijungus prie mokytojos klasės.
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