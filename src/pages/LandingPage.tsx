import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import { CONTACT_EMAIL, CONTACT_HREF } from "../contact";
import "../styles/site.css";
import "./LandingPage.css";

const demos = [
  {
    name: "ROOK.",
    type: "Barberare",
    description:
      "En modern och stilren hemsida för en barbershop, med tjänster och tydlig kontakt.",
    href: "https://rook.nordveks.se",
    className: "demo-card--barber",
  },
  {
    name: "Linden",
    type: "Restaurang",
    description:
      "En varm och inbjudande hemsida för en lokal restaurang som vill locka fler gäster.",
    href: "https://linden.nordveks.se",
    className: "demo-card--restaurant",
  },
  {
    name: "STILLFORM",
    type: "Pilates- och träningsstudio",
    description:
      "En lugn och överskådlig hemsida för en studio som vill nå nya kunder.",
    href: "https://stillform.nordveks.se",
    className: "demo-card--studio",
  },
];

const steps = [
  {
    title: "Du berättar",
    text: "Du beskriver ditt företag, dina tjänster och vilken känsla du vill att hemsidan ska förmedla. Vi tar det vidare därifrån.",
  },
  {
    title: "Vi bygger",
    text: "Vi tar fram din hemsida med dina texter, dina tjänster och din stil. Du slipper allt tekniskt.",
  },
  {
    title: "Du är live",
    text: "Din hemsida publiceras direkt på din egen adress, till exempel dittforetag.nordveks.se.",
  },
];

const included = [
  {
    title: "Design efter ditt företag",
    text: "Din hemsida utformas utifrån dina kunder och din stil, inte en färdig mall.",
  },
  {
    title: "Allt kunderna behöver veta",
    text: "Dina tjänster, kontaktuppgifter och ett enkelt sätt för kunder att höra av sig.",
  },
  {
    title: "Fungerar överallt",
    text: "Sidan ser bra ut och är lätt att använda på både mobil, surfplatta och dator.",
  },
  {
    title: "Din egen adress",
    text: "Hemsidan går live på dittforetag.nordveks.se och du kan börja dela länken direkt.",
  },
];

const compareRows = [
  {
    label: "Pris",
    us: "Från 1 290 kr",
    agency: "Ofta flera tusen till tiotusentals kronor",
    diy: "Billigt i pengar, dyrt i tid",
  },
  {
    label: "Tid till live",
    us: "Efter att detaljerna är på plats",
    agency: "Ofta flera veckor",
    diy: "Ofta flera dagar",
  },
  {
    label: "Din insats",
    us: "Du beskriver vad du behöver",
    agency: "Flera möten och omgångar",
    diy: "Du gör allt själv",
  },
  {
    label: "Resultat",
    us: "Professionell design för just ditt företag",
    agency: "Professionell design",
    diy: "Beror på din erfarenhet",
  },
];

function LandingPage() {
  return (
    <main className="site">
      <SiteHeader />

      <section className="hero">
        <div className="container">
          <h1>En professionell hemsida. Redo att lansera.</h1>
          <p className="hero-text">
            Berätta om ditt företag så bygger vi din hemsida och sätter den live
            på din adress. Fast pris, inget krångel och inget stort
            projekt.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href={CONTACT_HREF}>
              Kom igång
            </a>
            <a className="button button-secondary" href="#exempel">
              Se exempel
            </a>
          </div>

          <ul className="hero-facts">
            <li>Från 1 290 kr</li>
            <li>Vi sköter allt tekniskt</li>
            <li>Ingen förpliktelse</li>
          </ul>
        </div>
      </section>

      <section className="section section--tint">
        <div className="container">
          <div className="section-head">
            <h2>Så enkelt är det</h2>
            <p>
              Inget projekt att planera. Du berättar om ditt företag, resten
              sköter vi.
            </p>
          </div>

          <ol className="steps">
            {steps.map((step, index) => (
              <li className="step" key={step.title}>
                <span className="step-number">Steg {index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section" id="exempel">
        <div className="container">
          <div className="section-head">
            <h2>Så kan din hemsida se ut</h2>
            <p>
              Här är tre exempelsidor för olika typer av företag. Klicka på ett
              exempel för att öppna hela sidan och se hur den fungerar.
            </p>
          </div>

          <div className="demo-grid">
            {demos.map((demo) => (
              <a
                className={`demo-card ${demo.className}`}
                href={demo.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Öppna exempelsidan ${demo.name} i ny flik`}
                key={demo.name}
              >
                <div className="demo-screen" aria-hidden="true">
                  <div className="demo-dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="demo-name">{demo.name}</div>
                </div>
                <div className="demo-info">
                  <span className="demo-tag">Exempel: {demo.type}</span>
                  <h3>{demo.name}</h3>
                  <p>{demo.description}</p>
                  <span className="demo-link">Öppna exempelsidan</span>
                </div>
              </a>
            ))}
          </div>

          <p className="demo-note">
            Det här är exempel och inte riktiga kunder. Din hemsida utformas helt
            efter ditt företag.
          </p>
        </div>
      </section>

      <section className="section section--tint" id="pris">
        <div className="container">
          <div className="section-head">
            <h2>Ett fast pris för en komplett hemsida</h2>
            <p>Du vet vad det kostar innan vi börjar.</p>
          </div>

          <div className="offer">
            <ul className="offer-list">
              {included.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ul>

            <div className="price-panel">
              <p className="price-label">Komplett hemsida</p>
              <p className="price">Från 1 290 kr</p>
              <p className="price-note">
                Engångskostnad för bygget. Omfattning och pris bestäms innan vi
                börjar.
              </p>
              <a className="button button-primary" href={CONTACT_HREF}>
                Kom igång
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <h2>Det enklaste sättet att få en hemsida</h2>
            <p>
              Så här skiljer sig Nordveks från de vanligaste alternativen.
            </p>
          </div>

          <div className="compare-wrap">
            <table className="compare">
              <thead>
                <tr>
                  <td />
                  <th scope="col" className="compare-us">
                    Nordveks
                  </th>
                  <th scope="col">Webbyrå</th>
                  <th scope="col">Bygga själv</th>
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    <td className="compare-us">{row.us}</td>
                    <td>{row.agency}</td>
                    <td>{row.diy}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="demo-note">
            Jämförelsen bygger på vanliga förhållanden. Pris och tid varierar
            mellan leverantörer.
          </p>
        </div>
      </section>

      <section className="cta" id="kontakt">
        <div className="container">
          <div className="cta-inner">
            <h2>Redo att komma igång?</h2>
            <p>
              Berätta kort om ditt företag och vad du söker, så hör vi av oss.
            </p>
            <a className="button button-light" href={CONTACT_HREF}>
              Kom igång
            </a>
            <p className="cta-small">
              Ingen förpliktelse, hör av dig så hittar vi en lösning som passar ditt företag. Du kan mejla{" "}
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
            </p>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

export default LandingPage;