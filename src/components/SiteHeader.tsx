import Logo from "./Logo";
import { CONTACT_HREF } from "../contact";

function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <a className="site-logo" href="/" aria-label="Nordveks startsida">
          <Logo />
        </a>
        <a className="button button-primary button-small" href={CONTACT_HREF}>
          Kontakta oss
        </a>
      </div>
    </header>
  );
}

export default SiteHeader;