import Logo from "./Logo";

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <Logo />
        <span>Webbdesign för småföretag i Göteborg</span>
        <span>© {new Date().getFullYear()} Nordveks</span>
      </div>
    </footer>
  );
}

export default SiteFooter;