
import Logo from "./Logo";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-brand-top">
              <Logo />
            </div>

            <p className="footer-description">
              Bra företag förtjänar bra hemsidor.
              Vi skapar genomtänkta digitala
              upplevelser för småföretag.
            </p>

            <span className="footer-location">
              <span className="footer-location-dot" />
              Göteborg, Sverige
            </span>
          </div>

          <div className="footer-column">
            <span className="footer-label">VÅRA TJÄNSTER</span>
            <span>Webbdesign</span>
            <span>Företagshemsidor</span>
            <span>Digital närvaro</span>
          </div>

          <div className="footer-contact">
            <span className="footer-label">HAR DU EN IDÉ?</span>
            <h3>
              Låt oss skapa
              <br />
              något bra.
            </h3>
            <a
              className="footer-contact-link"
              href="mailto:hello.nordveks@gmail.com"
            >
              Kontakta oss
              <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">
            © {new Date().getFullYear()} Nordveks
          </span>

          <span className="footer-partnership">
            Ett ungdomsdrivet projekt med koppling till UngDrive
          </span>

          <span className="footer-made">
            Byggt med omtanke <span aria-hidden="true">✳</span>
          </span>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
