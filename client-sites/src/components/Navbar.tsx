
import { useState } from "react";
import type { CSSProperties } from "react";
import "./Navbar.css";

type NavbarTheme = {
  background: string;
  surface: string;
  surfaceText: string;
  text: string;
  muted: string;
  primary: string;
  primaryText: string;
  border: string;
};

type NavLink = {
  label: string;
  href: string;
};

type NavbarProps = {
  brand: string;
  links: NavLink[];
  contactHref?: string;
  contactLabel?: string;
  theme: NavbarTheme;
};

export default function Navbar({
  brand,
  links,
  contactHref = "#contact",
  contactLabel = "Get in touch",
  theme,
}: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  const themeStyle = {
    "--nav-bg": theme.background,
    "--nav-text": theme.text,
    "--nav-muted": theme.muted,
    "--nav-primary": theme.primary,
    "--nav-primary-text": theme.primaryText,
    "--nav-border": theme.border,
    "--nav-surface": theme.surface,
    "--nav-surface-text": theme.surfaceText,
  } as CSSProperties;

  return (
    <header className="business-site-header" style={themeStyle}>
      <nav className="business-site-navbar" aria-label="Main navigation">
        <a
          className="business-site-navbar__brand"
          href="#top"
          onClick={closeMenu}
        >
          {brand}
        </a>

        <div className="business-site-navbar__desktop-links">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a className="business-site-navbar__cta" href={contactHref}>
          {contactLabel}
          <span aria-hidden="true">↗</span>
        </a>

        <button
          className="business-site-navbar__menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span className={menuOpen ? "is-open" : ""} />
          <span className={menuOpen ? "is-open" : ""} />
        </button>
      </nav>

      <div
        id="mobile-navigation"
        className={`business-site-navbar__mobile-panel${menuOpen ? " is-open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="business-site-navbar__mobile-links">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              style={{ "--link-index": index } as CSSProperties}
              tabIndex={menuOpen ? 0 : -1}
            >
              <span>{String(index + 1).padStart(2, "0")}</span>
              {link.label}
              <span aria-hidden="true">↗</span>
            </a>
          ))}
        </div>

        <a
          className="business-site-navbar__mobile-cta"
          href={contactHref}
          onClick={closeMenu}
          tabIndex={menuOpen ? 0 : -1}
        >
          {contactLabel}
          <span aria-hidden="true">↗</span>
        </a>

        <p className="business-site-navbar__mobile-caption">{brand}</p>
      </div>

      {menuOpen && (
        <button
          className="business-site-navbar__backdrop"
          type="button"
          aria-label="Close navigation menu"
          onClick={closeMenu}
        />
      )}
    </header>
  );
}
