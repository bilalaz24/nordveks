import { useEffect, useRef } from "react";
import "./BusinessWebsite.css";
import type { CSSProperties } from "react";
import type { CustomerConfig, SectionKey } from "./data/customers";
import Navbar from "./components/Navbar";

type Props = {
  config: CustomerConfig;
};

function BusinessWebsite({ config }: Props) {
  const siteRef = useRef<HTMLElement | null>(null);
  const { theme } = config;

  const isRestaurant =
    config.category === "RESTAURANT" || config.slug === "restaurant";

  const offeringsName = isRestaurant ? "menyn" : "våra tjänster";

  useEffect(() => {
    const root = siteRef.current;
    if (!root) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const revealItems = Array.from(
      root.querySelectorAll<HTMLElement>(".biz-reveal")
    );

    let observer: IntersectionObserver | undefined;

    // Progressiv förbättring: dölj inget innehåll om animering inte stöds.
    if (!reduceMotion && "IntersectionObserver" in window) {
      root.classList.add("biz-motion-ready");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
              observer?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -40px 0px",
        }
      );

      revealItems.forEach((item) => observer?.observe(item));
    } else {
      revealItems.forEach((item) => item.classList.add("is-visible"));
    }

    // Parallax-element rör sig beroende på sin position i visningsfönstret.
    const parallaxItems = reduceMotion
      ? []
      : Array.from(root.querySelectorAll<HTMLElement>("[data-parallax]"));

    let animationFrame = 0;

    const updateParallax = () => {
      animationFrame = 0;
      const viewportHeight = window.innerHeight;

      if (viewportHeight <= 0) return;

      parallaxItems.forEach((element) => {
        const rect = element.getBoundingClientRect();

        // Undvik onödigt arbete för element långt utanför visningsfönstret.
        if (rect.bottom < -100 || rect.top > viewportHeight + 100) {
          return;
        }

        const depthValue = Number(element.dataset.parallax ?? "0.5");
        const depth = Number.isFinite(depthValue)
          ? Math.max(0, Math.min(1.5, depthValue))
          : 0.5;

        const direction =
          element.dataset.parallaxDirection === "reverse" ? -1 : 1;

        const progress =
          (rect.top + rect.height / 2 - viewportHeight / 2) /
          (viewportHeight / 2);

        const clampedProgress = Math.max(-1, Math.min(1, progress));
        const offset = Math.max(
          -22,
          Math.min(22, -clampedProgress * 22 * depth * direction)
        );

        element.style.setProperty("--parallax-y", `${offset.toFixed(2)}px`);
      });
    };

    const scheduleParallax = () => {
      if (!animationFrame) {
        animationFrame = window.requestAnimationFrame(updateParallax);
      }
    };

    if (parallaxItems.length > 0) {
      updateParallax();
      window.addEventListener("scroll", scheduleParallax, {
        passive: true,
      });
      window.addEventListener("resize", scheduleParallax);
    }

    return () => {
      observer?.disconnect();

      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener("scroll", scheduleParallax);
      window.removeEventListener("resize", scheduleParallax);

      root.classList.remove("biz-motion-ready");

      revealItems.forEach((item) => {
        item.classList.remove("is-visible");
      });

      parallaxItems.forEach((item) => {
        item.style.removeProperty("--parallax-y");
      });
    };
  }, [config.slug, config.sections]);

  const renderSection = (section: SectionKey) => {
    switch (section) {
      case "intro":
        return (
          <section
            className="biz-intro biz-reveal"
            id="intro"
            key={section}
          >
            <div className="biz-intro-inner">
              <p className="biz-eyebrow">
                <span className="biz-eyebrow-line" aria-hidden="true" />
                Lite om oss
              </p>

              <h2>
                {config.aboutTitle}
                <br />
                <em>{config.aboutEmphasis}</em>
              </h2>

              <p className="biz-intro-description">
                {config.aboutDescription}
              </p>

              <span className="biz-intro-symbol" aria-hidden="true">
                ✳
              </span>
            </div>
          </section>
        );

      case "offerings":
        return (
          <section
            className="biz-offerings biz-reveal"
            id="offerings"
            key={section}
          >
            <div className="biz-section-heading">
              <div className="biz-section-heading-main">
                <p className="biz-eyebrow">
                  <span className="biz-eyebrow-line" aria-hidden="true" />
                  {config.offeringsLabel}
                </p>

                <h2>
                  {config.offeringsTitle}{" "}
                  <em>{config.offeringsEmphasis}</em>
                </h2>
              </div>

              <p className="biz-section-aside">
                {isRestaurant ? (
                  <>
                    Något att se fram emot.
                    <br />
                    Något att återvända för.
                  </>
                ) : (
                  <>
                    Genomtänkt in i minsta detalj.
                    <br />
                    Anpassat efter just dig.
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

                  <div className="biz-offering-end">
                    <span className="biz-offering-price">
                      {offering.price}
                    </span>
                    <span className="biz-offering-arrow" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                </article>
              ))}
            </div>

            <a className="biz-section-link" href="#contact">
              <span>
                {isRestaurant ? "Planera ditt besök" : "Låt oss prata"}
              </span>
              <span aria-hidden="true">↗</span>
            </a>
          </section>
        );

      case "gallery":
        if (!config.gallery?.length) return null;

        return (
          <section
            className="biz-gallery biz-reveal"
            id="gallery"
            key={section}
          >
            <div className="biz-section-heading">
              <div className="biz-section-heading-main">
                <p className="biz-eyebrow">
                  <span className="biz-eyebrow-line" aria-hidden="true" />
                  Hos {config.name}
                </p>

                <h2>
                  Upptäck mer.
                  <br />
                  <em>De små detaljerna.</em>
                </h2>
              </div>

              <p className="biz-section-aside">
                En glimt av platsen, detaljerna och upplevelsen.
              </p>
            </div>

            <div className="biz-gallery-grid">
              {config.gallery.map((image, index) => (
                <figure
                  className="biz-gallery-item"
                  key={image.src}
                  data-parallax="0.3"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    decoding="async"
                  />

                  <span className="biz-gallery-index" aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </figure>
              ))}
            </div>
          </section>
        );

      case "testimonials":
        if (!config.testimonials?.length) return null;

        return (
          <section
            className="biz-testimonials biz-reveal"
            id="testimonials"
            key={section}
          >
            <div className="biz-section-heading">
              <div className="biz-section-heading-main">
                <p className="biz-eyebrow">
                  <span className="biz-eyebrow-line" aria-hidden="true" />
                  Vänliga ord
                </p>

                <h2>
                  Upplevelsen blir bättre
                  <br />
                  <em>när den delas.</em>
                </h2>
              </div>

              <p className="biz-section-aside">
                Upplevelser berättade med egna ord.
              </p>
            </div>

            <div className="biz-testimonial-grid">
              {config.testimonials.map((review, index) => (
                <article
                  className="biz-testimonial"
                  key={`${review.name}-${review.quote}`}
                >
                  <div className="biz-testimonial-top">
                    <span className="biz-testimonial-mark" aria-hidden="true">
                      “
                    </span>
                    <span className="biz-testimonial-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <blockquote>{review.quote}</blockquote>

                  <div className="biz-testimonial-person">
                    <span className="biz-testimonial-avatar" aria-hidden="true">
                      {review.name.trim().charAt(0).toUpperCase()}
                    </span>

                    <div>
                      <p className="biz-testimonial-name">{review.name}</p>

                      {review.detail && (
                        <p className="biz-testimonial-detail">
                          {review.detail}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </section>
        );

      case "visit":
        return (
          <section
            className="biz-visit biz-reveal"
            id="contact"
            key={section}
          >
            <div className="biz-visit-heading">
              <p className="biz-eyebrow">
                <span className="biz-eyebrow-line" aria-hidden="true" />
                Ditt nästa steg
              </p>

              <h2>
                {isRestaurant ? (
                  <>
                    Gör det till
                    <br />
                    <em>ett besök.</em>
                  </>
                ) : (
                  <>
                    Något bra
                    <br />
                    <em>börjar här.</em>
                  </>
                )}
              </h2>

              <p className="biz-visit-intro">
                {isRestaurant
                  ? `Vi ser fram emot att välkomna dig till ${config.name}.`
                  : `Kontakta ${config.name}. Vi ser fram emot att höra från dig.`}
              </p>
            </div>

            <div className="biz-visit-card">
              <div className="biz-visit-card-heading">
                <span className="biz-visit-card-label">HITTA HIT</span>
                <span className="biz-visit-card-icon" aria-hidden="true">
                  ↘
                </span>
              </div>

              <address className="biz-visit-address">
                {config.contact.address}
              </address>

              <div className="biz-visit-contact-list">
                <a href={`tel:${config.contact.phone.replace(/\s/g, "")}`}>
                  <span>Telefon</span>
                  <span>{config.contact.phone}</span>
                </a>

                {config.contact.email && (
                  <a href={`mailto:${config.contact.email}`}>
                    <span>E-post</span>
                    <span>{config.contact.email}</span>
                  </a>
                )}
              </div>

              <div className="biz-hours" aria-label="Öppettider">
                <div className="biz-hours-heading">
                  <span>Öppettider</span>
                  <span className="biz-hours-icon" aria-hidden="true">
                    ◷
                  </span>
                </div>

                {config.hours.map((hour) => (
                  <div className="biz-hour" key={hour.days}>
                    <span>{hour.days}</span>
                    <span>{hour.time}</span>
                  </div>
                ))}
              </div>

              <a
                className="biz-button biz-button-dark biz-visit-button"
                href={`mailto:${config.contact.email}?subject=${encodeURIComponent(
                  `Förfrågan till ${config.name}`
                )}`}
              >
                <span>Kontakta oss</span>
                <span aria-hidden="true">↗</span>
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
      ref={siteRef}
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
        Hoppa till innehållet
      </a>

      <Navbar
        brand={config.name}
        theme={config.theme}
        links={[
          { label: "Om oss", href: "#intro" },
          {
            label: isRestaurant ? "Meny" : "Tjänster",
            href: "#offerings",
          },
          ...(config.gallery?.length
            ? [{ label: "Galleri", href: "#gallery" }]
            : []),
          { label: "Besök oss", href: "#contact" },
        ]}
        contactHref="#contact"
        contactLabel="Kontakta oss"
      />

      <div id="main-content">
        <section
          className="biz-hero"
          id="home"
          aria-labelledby="biz-hero-title"
        >
          <div className="biz-hero-copy">
            <p className="biz-eyebrow biz-hero-eyebrow">
              <span className="biz-hero-eyebrow-dot" aria-hidden="true" />
              {config.category}
              <span className="biz-hero-separator" aria-hidden="true">
                /
              </span>
              {config.location}
            </p>

            <h1 id="biz-hero-title">
              {config.heroTitle}
              <br />
              <em>{config.heroEmphasis}</em>
            </h1>

            <p className="biz-hero-description">
              {config.heroDescription}
            </p>

            <div className="biz-hero-actions">
              <a className="biz-button biz-button-primary" href="#offerings">
                <span>Upptäck {offeringsName}</span>
                <span className="biz-button-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a className="biz-text-link" href="#intro">
                <span>Lär känna {config.name}</span>
                <span aria-hidden="true">↓</span>
              </a>
            </div>

            <div className="biz-hero-note">
              <span className="biz-status-dot" aria-hidden="true" />
              <span>{config.tagline}</span>
            </div>
          </div>

          <div className="biz-hero-visual">
            <div
              className="biz-hero-decoration"
              aria-hidden="true"
              data-parallax="1.1"
              data-parallax-direction="reverse"
            />

            <div
              className="biz-hero-image"
              data-parallax="0.75"
              role="img"
              aria-label={`${config.name} — ${config.category}, ${config.location}`}
              style={
                {
                  "--biz-hero-image": `url("${config.heroImage}")`,
                } as CSSProperties
              }
            >
              <div className="biz-image-label" aria-hidden="true">
                <span>{config.name}</span>
                <span>{config.location}</span>
              </div>
            </div>

            <div className="biz-hero-card">
              <span className="biz-hero-card-symbol" aria-hidden="true">
                ✳
              </span>

              <div>
                <span className="biz-hero-card-label">
                  LITE OM OSS
                </span>
                <p>{config.tagline}</p>
              </div>
            </div>

            <span className="biz-hero-side-label" aria-hidden="true">
              {config.category} · {config.location}
            </span>
          </div>
        </section>

        {config.sections.map(renderSection)}
      </div>

<footer className="biz-footer">
  <a className="biz-footer-brand" href="#home">
    <span>{config.name}</span>
  </a>

  <div className="biz-footer-meta">
    <p>
      {config.category}
      <span aria-hidden="true"> · </span>
      {config.location}
    </p>

    <address>
      {config.contact.address}
    </address>

    {config.contact.email && (
      <a href={`mailto:${config.contact.email}`}>
        {config.contact.email}
      </a>
    )}
  </div>

  <div className="biz-footer-bottom">
    <a
      className="biz-footer-top"
      href="#home"
    >
      <span>Tillbaka till toppen</span>
      <span aria-hidden="true">↑</span>
    </a>

    <a
      className="biz-footer-credit"
      href="https://nordveks.se"
      target="_blank"
      rel="noopener noreferrer"
    >
      Drivs med <span>Nordveks</span>
    </a>
  </div>
</footer>
 
    </main>
  );
}

export default BusinessWebsite;