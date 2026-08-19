import Image from "next/image";
import Link from "next/link";

const resources = [
  {
    title: "Testai ir pasitikrinimai",
    description:
      "Atlik diagnostines ir kartojimo užduotis, pasitikrink žinias ir iš karto sužinok rezultatą.",
    icon: "/images/icons/testai.png",
    iconAlt: "",
    href: "/veiklos",
    action: "Atidaryti testus",
  },
  {
    title: "PDF mokymosi priemonės",
    description:
      "Atsisiųsk užduočių, kartojimo ir mokymosi lapus, kuriuos gali naudoti ekrane arba atsispausdinti.",
    icon: "/images/icons/pdf-priemones.png",
    iconAlt: "",
  },
  {
    title: "Kūrybinės užduotys",
    description:
      "Kurk, tyrinėk, stebėk ir pritaikyk žinias atlikdamas praktines bei kūrybines užduotis.",
    icon: "/images/icons/kurybines-uzduotys.png",
    iconAlt: "",
  },
  {
    title: "Mokytojams",
    description:
      "Mokymui skirtos priemonės, užduočių lapai, veiklų idėjos ir kita medžiaga pamokoms.",
    icon: "/images/icons/mokytojams.png",
    iconAlt: "",
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
        <p className="section-label">Mokymosi priemonės</p>

        <h2 id="library-title">Pasirink, kas domina</h2>

        <div className="learning-library__grid">
          {resources.map((resource) => {
            if (resource.href) {
              return (
                <Link
                  className="resource-card resource-card--available"
                  href={resource.href}
                  key={resource.title}
                >
                  <span className="resource-card__icon" aria-hidden="true">
                    <Image
                      src={resource.icon}
                      alt={resource.iconAlt}
                      width={44}
                      height={44}
                    />
                  </span>

                  <h3>{resource.title}</h3>

                  <p>{resource.description}</p>

                  <span className="resource-card__action">
                    {resource.action}
                    <span aria-hidden="true">→</span>
                  </span>
                </Link>
              );
            }

            return (
              <article className="resource-card" key={resource.title}>
                <span className="resource-card__icon" aria-hidden="true">
                  <Image
                    src={resource.icon}
                    alt={resource.iconAlt}
                    width={44}
                    height={44}
                  />
                </span>

                <h3>{resource.title}</h3>

                <p>{resource.description}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
