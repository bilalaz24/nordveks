
import LandingPage from "./pages/LandingPage";
import BusinessWebsite from "./BusinessWebsite";
import { resolveCustomer, ROOT_DOMAIN } from "./resolveCustomer";
import NotFoundPage from "./pages/NotFoundPage";
import SiteMetadata from "./components/SiteMetadata";

function App() {
  const hostname = window.location.hostname.toLowerCase();
  const pathname = window.location.pathname;

  const isLocal =
    hostname === "localhost" || hostname === "127.0.0.1";

  const isMainDomain =
    hostname === ROOT_DOMAIN || hostname === `www.${ROOT_DOMAIN}`;

  // Your service landing page
  if (
    (isLocal && pathname === "/") ||
    (isMainDomain && pathname === "/")
  ) {
    return <LandingPage />;
  }

  // Your business demo websites and future customer websites
  const customer = resolveCustomer(hostname, pathname);

  if (customer) {
    return (
      <div>
        <BusinessWebsite config={customer} />
        <SiteMetadata />
      </div>
    );
  }

  return <NotFoundPage />;
}

export default App;
