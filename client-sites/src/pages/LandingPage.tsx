import "./LandingPage.css";
const demos = [
  {
    number: "01",
    name: "FORM.",
    category: "BARBERSHOP",
    description: "A modern, confident look for a barbershop.",
    href: "/demo/barber",
    className: "demo-card--barber",
  },
  {
    number: "02",
    name: "LINDEN",
    category: "RESTAURANT",
    description: "A warm, editorial look for a neighbourhood restaurant.",
    href: "/demo/restaurant",
    className: "demo-card--restaurant",
  },
];

const process = [
  {
    number: "01",
    title: "We talk",
    description:
      "We discuss your business, what you need, and what a website should accomplish for you.",
  },
  {
    number: "02",
    title: "I design",
    description:
      "I build a website around your business, with your content, services, and visual identity.",
  },
  {
    number: "03",
    title: "We launch",
    description:
      "Once you approve the result, we arrange the domain and publishing details and get your website online.",
  },
];

function LandingPage() {
  return (
    <main className="landing-page">
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="Nordveks home">
          nordveks<span>.</span>
        </a>

        <nav className="site-nav" aria-label="Main navigation">
          <a href="#work">Selected work</a>
          <a href="#process">How it works</a>
          <a className="nav-contact" href="#contact">
            Let's talk <span aria-hidden="true">↗</span>
          </a>
        </nav>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <p className="eyebrow">
            INDEPENDENT WEB DESIGN · GOTHENBURG
          </p>

          <h1>
            Your business.
            <br />
            <span>Better online.</span>
          </h1>

          <p className="hero-description">
            Thoughtful, modern websites for local businesses.
            Designed around what makes your business yours.
          </p>

          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore the work <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#contact">
              Have a project in mind?
            </a>
          </div>

          <div className="hero-note">
            <span className="status-dot" />
            Personal service. No complicated platforms.
          </div>
        </div>

        <div className="hero-art" aria-label="Abstract website design illustration">
          <div className="art-topline">
            <span>NORDVEKS STUDIO</span>
            <span>DESIGN / 001</span>
          </div>

          <div className="art-orbit art-orbit-one" />
          <div className="art-orbit art-orbit-two" />

          <div className="art-center">
            <span className="art-kicker">A BETTER FIRST IMPRESSION</span>
            <div className="art-symbol">n<span>.</span></div>
            <span className="art-caption">Made for your business.</span>
          </div>

          <div className="art-bottomline">
            <span>STRATEGY</span>
            <span>DESIGN</span>
            <span>DEVELOPMENT</span>
          </div>
        </div>

        <div className="hero-index">
          <span>01 / 03</span>
          <span>DESIGNED WITH INTENTION</span>
        </div>
      </section>

      <section className="intro-section">
        <p className="eyebrow">SMALL BUSINESS, BIG POTENTIAL</p>
        <div className="intro-content">
          <h2>
            A website should do more than exist.
            <span> It should make people take your business seriously.</span>
          </h2>
          <p>
            Your website is often where a potential customer forms their first
            impression. I create clear, considered websites that help people
            understand what you do, explore what you offer, and get in touch.
          </p>
        </div>
      </section>

      <section className="work-section" id="work">
        <div className="section-heading">
          <div>
            <p className="eyebrow">A LOOK AT THE POSSIBILITIES</p>
            <h2>Selected concepts<span>.</span></h2>
          </div>
          <p className="section-aside">
            Different businesses.
            <br />
            Different personalities.
            <br />
            One thoughtful approach.
          </p>
        </div>

        <div className="demo-grid">
          {demos.map((demo) => (
            <a
              className={`demo-card ${demo.className}`}
              href={demo.href}
              key={demo.number}
            >
              <div className="demo-preview">
                <div className="preview-window">
                  <div className="preview-bar">
                    <span />
                    <span />
                    <span />
                    <small>{demo.category.toLowerCase()}.site</small>
                  </div>
                  <div className="preview-content">
                    <span className="preview-label">{demo.category}</span>
                    <strong>{demo.name}</strong>
                    <span className="preview-line" />
                    <span className="preview-line preview-line-short" />
                    <span className="preview-cta">DISCOVER MORE ↗</span>
                  </div>
                </div>
                <span className="preview-number">{demo.number}</span>
                <span className="preview-open">View demo ↗</span>
              </div>

              <div className="demo-info">
                <div>
                  <h3>{demo.name}</h3>
                  <p>{demo.description}</p>
                </div>
                <span className="demo-arrow" aria-hidden="true">↗</span>
              </div>
            </a>
          ))}
        </div>

        <p className="demo-disclaimer">
          These are illustrative design concepts, not client projects.
        </p>
      </section>

      <section className="approach-section" id="approach">
        <div className="approach-heading">
          <p className="eyebrow">THE NORDVEKS APPROACH</p>
          <h2>
            Good design.
            <br />
            <span>Without the unnecessary.</span>
          </h2>
        </div>

        <div className="approach-points">
          <article>
            <span>01</span>
            <h3>Designed for you</h3>
            <p>
              A website shaped around your business, your customers, and your
              goals — not a generic one-size-fits-all template.
            </p>
          </article>
          <article>
            <span>02</span>
            <h3>Clear from the start</h3>
            <p>
              We discuss the scope, pricing, domain, and ongoing costs before
              work begins, so you know what to expect.
            </p>
          </article>
          <article>
            <span>03</span>
            <h3>A real person to contact</h3>
            <p>
              You work directly with the person designing and building your
              website. No self-service platform to figure out.
            </p>
          </article>
        </div>
      </section>

      <section className="process-section" id="process">
        <div className="section-heading">
          <div>
            <p className="eyebrow">STRAIGHTFORWARD BY DESIGN</p>
            <h2>From first chat to launch<span>.</span></h2>
          </div>
          <p className="section-aside">
            Every project starts with a conversation,
            not a checkout page.
          </p>
        </div>

        <div className="process-grid">
          {process.map((step) => (
            <article className="process-card" key={step.number}>
              <span className="process-number">{step.number}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-topline">
          <span className="eyebrow">HAVE A BUSINESS TO BUILD?</span>
          <span className="contact-index">LET'S MAKE IT HAPPEN ↙</span>
        </div>

        <h2>
          Let's make your
          <br />
          <span>next first impression.</span>
        </h2>

        <p>
          Tell me a little about your business and what you're looking for.
          We'll take it from there.
        </p>

        <a
          className="button button-light"
          href="mailto:hello@nordveks.se?subject=Website%20enquiry"
        >
          Get in touch <span aria-hidden="true">↗</span>
        </a>

        <span className="contact-small">
          No commitment. Just a conversation.
        </span>
      </section>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#home">
          nordveks<span>.</span>
        </a>
        <span>Independent web design · Gothenburg, Sweden</span>
        <a href="#home">Back to top ↑</a>
        <span className="footer-year">
          © {new Date().getFullYear()} Nordveks
        </span>
      </footer>
    </main>
  );
}

export default LandingPage;
