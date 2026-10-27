import "./LandingPage.css";
import NordveksModel from "./NordveksModel";

const demos = [
  {
    number: "01",
    name: "FORM.",
    category: "BARBERSHOP",
    description: "A sharp, modern identity for a contemporary barbershop.",
    href: "/demo/barber",
    className: "demo-card--barber",
  },
  {
    number: "02",
    name: "LINDEN",
    category: "RESTAURANT",
    description: "A warm, distinctive online presence for a local restaurant.",
    href: "/demo/restaurant",
    className: "demo-card--restaurant",
  },
  {
    number: "03",
    name: "STILLFORM",
    category: "PILATES & MOVEMENT",
    description: "A calm, confident digital experience for a movement studio.",
    href: "/demo/studio",
    className: "demo-card--studio",
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
        <a href="#pricing">Pricing</a>
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
            Modern websites for small businesses. Thoughtful design, clear pricing,
            and a direct line to the person building your site.
            </p>


          <div className="hero-actions">
            <a className="button button-primary" href="#work">
              Explore the work <span aria-hidden="true">↘</span>
            </a>
            <a className="text-link" href="#contact">
              Have a project in mind?
            </a>
          </div>

        </div>



        <div className="hero-art hero-art--3d">
        <div className="model-grid" />
        <NordveksModel />
        </div>



        <div className="hero-index">
          <span>01 / 03</span>
          <span>DESIGNED WITH INTENTION</span>
        </div>
      </section>

      <section className="intro-section">
        <p className="eyebrow">
            WEB DESIGN & DEVELOPMENT · SWEDEN
        </p>
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

            
        <section className="pricing-section" id="pricing">
        <div className="pricing-heading">
            <p className="eyebrow">STRAIGHTFORWARD PRICING</p>
            <h2>
            A better website.
            <br />
            <span>Without the big-agency price.</span>
            </h2>
            <p>
            Start with what your business actually needs. No unnecessary features,
            complicated platforms, or unclear costs.
            </p>
        </div>

        <div className="pricing-card">
            <div>
            <p className="eyebrow">THE STARTER WEBSITE</p>
            <h3>Everything essential, done properly.</h3>
            <p>
                A custom-designed, mobile-friendly one-page website with your
                business information, services, contact details, and a clear way
                for customers to reach you. Scope agreed before work begins.
            </p>
            </div>

            <div className="pricing-value">
            <strong>1 490 kr</strong>
            <span>Starting price · one-time build fee</span>
            </div>
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
