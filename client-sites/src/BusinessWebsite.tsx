
import "./BusinessWebsite.css";
import type { CSSProperties } from "react";
import type { CustomerConfig, SectionKey } from "./data/customers";

type Props = {
  config: CustomerConfig;
};

function BusinessWebsite({ config }: Props) {
  const { theme } = config;

  const renderSection = (section: SectionKey) => {
    switch (section) {
      case "intro":
        return (
          <section className="biz-intro" id="about" key={section}>
            <p className="biz-eyebrow">A LITTLE DIFFERENT</p>
            <h2>
              {config.aboutTitle}
              <br />
              <em>{config.aboutEmphasis}</em>
            </h2>
            <p className="biz-intro-description">
              {config.aboutDescription}
            </p>
          </section>
        );

      case "offerings":
        return (
          <section className="biz-offerings" id="offerings" key={section}>
            <div className="biz-section-heading">
              <div>
                <p className="biz-eyebrow">{config.offeringsLabel}</p>
                <h2>
                  {config.offeringsTitle}{" "}
                  <em>{config.offeringsEmphasis}</em>
                </h2>
              </div>
              <p>
                Thoughtfully prepared.
                <br />
                Every single time.
              </p>
            </div>

            <div className="biz-offering-list">
              {config.offerings.map((offering, index) => (
                <article className="biz-offering" key={offering.name}>
                  <span className="biz-offering-number">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="biz-offering-info">
                    <h3>{offering.name}</h3>
                    <p>{offering.description}</p>
                  </div>

                  <span className="biz-offering-price">
                    {offering.price}
                  </span>
                </article>
              ))}
            </div>
          </section>
        );

      case "visit":
        return (
          <section className="biz-visit" id="contact" key={section}>
            <div>
              <p className="biz-eyebrow">COME ON IN</p>
              <h2>
                We'd love to
                <br />
                <em>see you.</em>
              </h2>
            </div>

            <div className="biz-visit-details">
              <p>{config.contact.address}</p>

              <a href={`tel:${config.contact.phone.replace(/\s/g, "")}`}>
                {config.contact.phone}
              </a>

              <a href={`mailto:${config.contact.email}`}>
                {config.contact.email}
              </a>

              <div className="biz-hours">
                {config.hours.map((hour) => (
                  <div className="biz-hour" key={hour.days}>
                    <span>{hour.days}</span>
                    <span>{hour.time}</span>
                  </div>
                ))}
              </div>

              <a
                className="biz-button biz-button-dark"
                href={`mailto:${config.contact.email}?subject=${encodeURIComponent(
                  `Enquiry for ${config.name}`
                )}`}
              >
                Get in touch ↗
              </a>
            </div>
          </section>
        );
    }
  };

  return (
    <main
      className="business-site"
      style={
        {
          "--biz-bg": theme.background,
          "--biz-surface": theme.surface,
          "--biz-text": theme.text,
          "--biz-muted": theme.muted,
          "--biz-primary": theme.primary,
          "--biz-primary-text": theme.primaryText,
          "--biz-border": theme.border,
        } as CSSProperties
      }
    >
      <nav className="biz-navbar">
        <a className="biz-brand" href="#home">
          {config.name}
        </a>

        <div className="biz-nav-links">
          <a href="#offerings">
            {config.slug === "restaurant" ? "Menu" : "Services"}
          </a>
          <a href="#about">About</a>
          <a href="#contact">Visit us</a>
        </div>

        <a className="biz-nav-cta" href="#contact">
          Get in touch ↗
        </a>
      </nav>

      <section className="biz-hero" id="home">
        <div className="biz-hero-copy">
          <p className="biz-eyebrow">
            {config.category} · {config.location}
          </p>

          <h1>
            {config.heroTitle}
            <br />
            <em>{config.heroEmphasis}</em>
          </h1>

          <p className="biz-hero-description">
            {config.heroDescription}
          </p>

          <div className="biz-hero-actions">
            <a className="biz-button biz-button-primary" href="#offerings">
              Explore {config.slug === "restaurant" ? "the menu" : "services"} ↗
            </a>
            <a className="biz-text-link" href="#about">
              {config.tagline}
            </a>
          </div>

          <div className="biz-hero-note">
            <span className="biz-status-dot" />
            {config.tagline.toUpperCase()}
          </div>
        </div>

        <div
          className="biz-hero-image"
          role="img"
          aria-label={`${config.name} — ${config.category}`}
          style={{ backgroundImage: `url("${config.heroImage}")` }}
        >
          <div className="biz-image-label">
            <span>THE EXPERIENCE</span>
            <span>{config.location}</span>
          </div>
        </div>
      </section>

      {config.sections.map(renderSection)}

      <footer className="biz-footer">
        <a className="biz-brand" href="#home">
          {config.name}
        </a>
        <p>{config.category} · {config.location}</p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default BusinessWebsite;
