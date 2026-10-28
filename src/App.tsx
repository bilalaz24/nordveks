
import LandingPage from "./pages/LandingPage";
import BusinessWebsite from "./BusinessWebsite";
import { resolveCustomer, ROOT_DOMAIN } from "./resolveCustomer";
import NotFoundPage from "./pages/NotFoundPage";
import SiteMetadata from "./components/SiteMetadata";
import { createSiteMetadata } from "./config/siteMetadata";

function App() {
  const hostname = window.location.hostname.toLowerCase();
  const pathname = window.location.pathname;

  const isLocal =
    hostname === "localhost" || hostname === "127.0.0.1";

  const isMainDomain =
    hostname === ROOT_DOMAIN || hostname === `www.${ROOT_DOMAIN}`;

  // Official Nordveks landing page.
  if (
    (isLocal && pathname === "/") ||
    (isMainDomain && pathname === "/")
  ) {
    return <LandingPage />;
  }

  // Resolve a demo or customer website from its hostname/path.
  const customer = resolveCustomer(hostname, pathname);

  if (customer) {
    const metadata = createSiteMetadata(customer);

    return (
      <>
        <SiteMetadata metadata={metadata} />
        <BusinessWebsite config={customer} />
      </>
    );
  }

  return <NotFoundPage />;
}

export default App;
