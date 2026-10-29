
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

  const offeringsName = isRestaurant ? "the menu" : "our services";

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

    // Progressive enhancement: no hidden content unless animation is supported.
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

    // Parallax elements move in response to their position in the viewport.
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

        // Avoid unnecessary work for elements far outside the viewport.
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
                A little about us
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
                    Something to look forward to.
                    <br />
                    Something to come back for.
                  </>
                ) : (
                  <>
                    Thoughtfully considered.
                    <br />
                    Made personal to you.
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
              <span>{isRestaurant ? "Plan your visit" : "Let's talk"}</span>
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
                  Inside {config.name}
                </p>

                <h2>
                  A closer look.
                  <br />
                  <em>The little things.</em>
                </h2>
              </div>

              <p className="biz-section-aside">
                A glimpse of the place, the details, and the experience.
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
                  Kind words
                </p>

                <h2>
                  It's better
                  <br />
                  <em>when shared.</em>
                </h2>
              </div>

              <p className="biz-section-aside">
                Experiences told in their own words.
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
                Your next step
              </p>

              <h2>
                {isRestaurant ? (
                  <>
                    Make it
                    <br />
                    <em>a visit.</em>
                  </>
                ) : (
                  <>
                    Good things
                    <br />
                    <em>start here.</em>
                  </>
                )}
              </h2>

              <p className="biz-visit-intro">
                {isRestaurant
                  ? `We look forward to welcoming you to ${config.name}.`
                  : `Get in touch with ${config.name}. We'd love to hear from you.`}
              </p>
            </div>

            <div className="biz-visit-card">
              <div className="biz-visit-card-heading">
                <span className="biz-visit-card-label">FIND US</span>
                <span className="biz-visit-card-icon" aria-hidden="true">
                  ↘
                </span>
              </div>

              <address className="biz-visit-address">
                {config.contact.address}
              </address>

              <div className="biz-visit-contact-list">
                <a href={`tel:${config.contact.phone.replace(/\s/g, "")}`}>
                  <span>Phone</span>
                  <span>{config.contact.phone}</span>
                </a>

                {config.contact.email && (
                  <a href={`mailto:${config.contact.email}`}>
                    <span>Email</span>
                    <span>{config.contact.email}</span>
                  </a>
                )}
              </div>

              <div className="biz-hours" aria-label="Opening hours">
                <div className="biz-hours-heading">
                  <span>Opening hours</span>
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
                  `Enquiry for ${config.name}`
                )}`}
              >
                <span>Get in touch</span>
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
        Skip to content
      </a>

      <Navbar
        brand={config.name}
        theme={config.theme}
        links={[
          { label: "About", href: "#intro" },
          {
            label: isRestaurant ? "Menu" : "Services",
            href: "#offerings",
          },
          ...(config.gallery?.length
            ? [{ label: "Gallery", href: "#gallery" }]
            : []),
          { label: "Visit", href: "#contact" },
        ]}
        contactHref="#contact"
        contactLabel="Let's talk"
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
                <span>Explore {offeringsName}</span>
                <span className="biz-button-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>

              <a className="biz-text-link" href="#intro">
                <span>Meet {config.name}</span>
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
                  A LITTLE SOMETHING ABOUT US
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

        <p className="biz-footer-meta">
          {config.category}
          <span aria-hidden="true"> · </span>
          {config.location}
        </p>

        <a className="biz-footer-top" href="#home">
          <span>Back to top</span>
          <span aria-hidden="true">↑</span>
        </a>
      </footer>
    </main>
  );
}

export default BusinessWebsite;
