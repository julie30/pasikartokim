const planItems = [
  {
    step: "01",
    label: "Dabar",
    title: "PDF ir aiškios užduotys",
    description: "Ruošiamos teorijos ir užduočių knygos 1–5 klasėms.",
    icon: "📘",
  },
  {
    step: "02",
    label: "Toliau",
    title: "Žaidybiniai lygiai",
    description: "Užduotys taps interaktyvios, su žvaigždutėmis ir progresu.",
    icon: "⭐",
  },
  {
    step: "03",
    label: "Vėliau",
    title: "Mokytojų klasės",
    description: "Mokytojos galės pakviesti mokinius ir sekti mokymosi eigą.",
    icon: "🏫",
  },
];

export default function FuturePlan() {
  return (
    <section className="future-section" aria-labelledby="future-title">
      <div className="future-section__inner">
        <div className="future-section__header">
          <p className="section-label">Ateities planas</p>

          <h2 id="future-title">Platforma augs palaipsniui</h2>

          <p className="future-section__intro">
            Pasikartokim.lt kuriama etapais: nuo aiškių PDF užduočių iki
            interaktyvios mokymosi platformos su progresu ir klasėmis.
          </p>
        </div>

        <div className="future-road" aria-label="Pasikartokim.lt kūrimo kelias">
          <div className="future-road__line" aria-hidden="true"></div>

          {planItems.map((item) => (
            <div className="future-road__step" key={item.step}>
              <div className="future-road__marker">
                <span className="future-road__number">{item.step}</span>
                <span className="future-road__icon" aria-hidden="true">
                  {item.icon}
                </span>
              </div>

              <div className="future-road__text">
                <span>{item.label}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}