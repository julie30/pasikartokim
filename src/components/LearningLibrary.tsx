const resources = [
  {
    title: "PDF užduotys",
    description: "Atsisiųsk užduočių lapus ir spręsk patogiai.",
    icon: "📄",
  },
  {
    title: "Teorijos lapai",
    description: "Trumpi paaiškinimai prieš atliekant užduotis.",
    icon: "📘",
  },
  {
    title: "Interaktyvios užduotys",
    description: "Užduotys, kurias vėliau bus galima atlikti svetainėje.",
    icon: "🧩",
  },
  {
    title: "Žaidybiniai lygiai",
    description: "Mokymosi kelias su lygiais, misijomis ir žvaigždutėmis.",
    icon: "⭐",
  },
  {
    title: "Kūrybinės misijos",
    description: "Užduotys, kuriose galima kurti, piešti, stebėti ir tyrinėti.",
    icon: "🎨",
  },
  {
    title: "Gamtos stebėjimai",
    description: "Orų, augalų ir aplinkos stebėjimo užduotys.",
    icon: "🌿",
  },
];

export default function LearningLibrary() {
  return (
    <section
      className="learning-library"
      id="biblioteka"
      aria-labelledby="library-title"
    >
      <div className="section-inner">
        <p className="section-label">Mokymosi biblioteka</p>

        <h2 id="library-title">Pasirink, kaip nori mokytis šiandien</h2>

        <div className="learning-library__grid">
          {resources.map((resource) => (
            <article className="resource-card" key={resource.title}>
              <span className="resource-card__icon" aria-hidden="true">
                {resource.icon}
              </span>

              <h3>{resource.title}</h3>

              <p>{resource.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}