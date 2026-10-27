import "./BusinessWebsite.css";
import type { CSSProperties } from "react";
import type { CustomerConfig, SectionKey } from "./data/customers";
import Navbar from "./components/Navbar";

type Props = {
  config: CustomerConfig;
};

function BusinessWebsite({ config }: Props) {
  const { theme } = config;
  const isRestaurant = config.slug === "restaurant";
  const offeringsName = isRestaurant ? "the menu" : "services";

  const renderSection = (section: SectionKey) => {
    switch (section) {
      case "intro":
        return (
          <section className="biz-intro" id="about" key={section}>
            <p className="biz-eyebrow">A little different</p>
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
                {isRestaurant ? (
                  <>
                    Made with care.
                    <br />
                    Served with intention.
                  </>
                ) : (
                  <>
                    Good craft.
                    <br />
                    No shortcuts.
                  </>
                )}
              </p>
            </div>

            <div className="biz-offering-list">
              {config.offerings.map((offering, index) => (
                <article className="biz-offering" key={offering.name}>
                  <span className="biz-offering-number" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="biz-offering-info">
                    <h3>{offering.name}</h3>
                    <p>{offering.description}</p>
                  </div>

                  <span className="biz-offering-price">{offering.price}</span>
                </article>
              ))}
            </div>
          </section>
        );
    
            
        case "gallery":
        if (!config.gallery?.length) return null;

        return (
            <section className="biz-gallery" id="gallery" key={section}>
            <div className="biz-section-heading">
                <div>
                <p className="biz-eyebrow">A closer look</p>
                <h2>
                    The place.
                    <br />
                    <em>The details.</em>
                </h2>
                </div>
                <p>A glimpse of the experience.</p>
            </div>

            <div className="biz-gallery-grid">
                {config.gallery.map((image) => (
                <figure className="biz-gallery-item" key={image.src}>
                    <img src={image.src} alt={image.alt} loading="lazy" />
                </figure>
                ))}
            </div>
            </section>
        );

        case "testimonials":
        if (!config.testimonials?.length) return null;

        return (
            <section
            className="biz-testimonials"
            id="testimonials"
            key={section}
            >
            <div className="biz-section-heading">
                <div>
                <p className="biz-eyebrow">Kind words</p>
                <h2>
                    Don't just take
                    <br />
                    <em>our word.</em>
                </h2>
                </div>
            </div>

            <div className="biz-testimonial-grid">
                {config.testimonials.map((review) => (
                <article
                    className="biz-testimonial"
                    key={`${review.name}-${review.quote}`}
                >
                    <span className="biz-testimonial-mark" aria-hidden="true">
                    “
                    </span>
                    <blockquote>{review.quote}</blockquote>
                    <p className="biz-testimonial-name">{review.name}</p>
                    {review.detail && (
                    <p className="biz-testimonial-detail">{review.detail}</p>
                    )}
                </article>
                ))}
            </div>
            </section>
        );


      case "visit":
        return (
          <section className="biz-visit" id="contact" key={section}>
            <div>
              <p className="biz-eyebrow">Come on in</p>
              <h2>
                {isRestaurant ? (
                  <>
                    Your table
                    <br />
                    <em>awaits.</em>
                  </>
                ) : (
                  <>
                    We'd love to
                    <br />
                    <em>see you.</em>
                  </>
                )}
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

              <div className="biz-hours" aria-label="Opening hours">
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
                Contact us <span aria-hidden="true">↗</span>
              </a>
            </div>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <main
      id="top"
      className="business-site"
      style={
        {
            "--biz-bg": theme.background,
            "--biz-surface": theme.surface,
            "--biz-surface-text": theme.surfaceText,
            "--biz-text": theme.text,
            "--biz-muted": theme.muted,
            "--biz-primary": theme.primary,
            "--biz-primary-text": theme.primaryText,
            "--biz-border": theme.border,
        } as CSSProperties
      }
    >
      <a className="biz-skip-link" href="#main-content">
        Skip to content
      </a>

        <Navbar
        brand={config.name}
        theme={config.theme}
        links={[
        { label: "About", href: "#intro" },
        {
            label: config.category === "RESTAURANT" ? "Menu" : "Services",
            href: "#offerings",
        },
        ...(config.gallery?.length
            ? [{ label: "Gallery", href: "#gallery" }]
            : []),
        { label: "Visit", href: "#visit" },
        ]}
        contactHref="#visit"
        contactLabel="Get in touch"
        />

      <div id="main-content">
        <section className="biz-hero" id="home" aria-labelledby="biz-hero-title">
          <div className="biz-hero-copy">
            <p className="biz-eyebrow">
              {config.category} <span aria-hidden="true">·</span>{" "}
              {config.location}
            </p>

            <h1 id="biz-hero-title">
              {config.heroTitle}
              <br />
              <em>{config.heroEmphasis}</em>
            </h1>

            <p className="biz-hero-description">{config.heroDescription}</p>

            <div className="biz-hero-actions">
              <a className="biz-button biz-button-primary" href="#offerings">
                Explore {offeringsName} <span aria-hidden="true">↗</span>
              </a>
              <a className="biz-text-link" href="#about">
                Get to know us ↓
              </a>
            </div>

            <div className="biz-hero-note">
              <span className="biz-status-dot" aria-hidden="true" />
              <span>{config.tagline}</span>
            </div>
          </div>

          <div
            className="biz-hero-image"
            role="img"
            aria-label={`${config.name} — ${config.category}`}
            style={{ backgroundImage: `url("${config.heroImage}")` }}
          >
            <div className="biz-image-label">
              <span>{isRestaurant ? "AT THE TABLE" : "THE EXPERIENCE"}</span>
              <span>{config.location}</span>
            </div>
          </div>
        </section>

        {config.sections.map(renderSection)}
      </div>

      <footer className="biz-footer">
        <a className="biz-brand" href="#home">
          {config.name}
        </a>
        <p>
          {config.category} <span aria-hidden="true">·</span> {config.location}
        </p>
        <a href="#home">Back to top ↑</a>
      </footer>
    </main>
  );
}

export default BusinessWebsite;
