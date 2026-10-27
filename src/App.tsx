
import LandingPage from "./pages/LandingPage";
import BusinessWebsite from "./BusinessWebsite";
import { resolveCustomer, ROOT_DOMAIN } from "./resolveCustomer";

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
    return <BusinessWebsite config={customer} />;
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        padding: "48px 7%",
        background: "#f5f3ec",
        color: "#20271f",
        fontFamily: "sans-serif",
      }}
    >
      <h1>Website not found</h1>
      <p>We couldn't find a website at this address.</p>
      <a href="/">Back to Nordveks</a>
    </main>
  );
}

export default App;
