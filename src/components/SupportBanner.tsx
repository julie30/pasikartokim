export default function SupportBanner() {
  return (
    <section
      className="support-section"
      id="paremti"
      aria-labelledby="support-title"
    >
      <div className="support-section__inner">
        <div className="support-section__content">
          <p className="section-label">Paremti projektą</p>

          <h2 id="support-title">Padėk kurti lietuvišką mokymosi platformą</h2>

          <p>
            Pasikartokim.lt kuriama vaikams, tėvams ir mokytojams. Parama padėtų
            greičiau paruošti daugiau užduočių, PDF knygų, žaidybinių lygių ir
            mokytojų įrankių.
          </p>

          <div className="support-section__actions">
            <a className="button button-primary" href="/paremti">
              Paremti projektą
            </a>

            {/* <a className="button button-secondary" href="#biblioteka">
              Peržiūrėti turinį
            </a> */}
          </div>
        </div>

        <div className="support-section__visual" aria-hidden="true">
          <span>💛</span>
          <strong>Kiekvienas žingsnis padeda augti</strong>
          <p>Daugiau užduočių. Daugiau klasių. Daugiau mokymosi džiaugsmo.</p>
        </div>
      </div>
    </section>
  );
}