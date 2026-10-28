import SiteHeader from "../components/SiteHeader";
import SiteFooter from "../components/SiteFooter";
import "../styles/site.css";
import "./NotFoundPage.css";

function NotFoundPage() {
  const goBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.assign("/");
    }
  };

  return (
    <main className="site not-found-page">
      <SiteHeader />

      <section className="container not-found-content">
        <p className="not-found-code">Fel 404</p>
        <h1>Sidan hittades inte</h1>
        <p className="not-found-text">
          Sidan du letar efter finns inte, eller så har adressen blivit fel. Gå
          tillbaka till startsidan så hittar du rätt.
        </p>

        <div className="not-found-actions">
          <a className="button button-primary" href="/">
            Till startsidan
          </a>
          <button type="button" className="button button-secondary" onClick={goBack}>
            Gå tillbaka
          </button>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

export default NotFoundPage;