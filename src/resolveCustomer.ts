
import { customers } from "./data/customers";

export const ROOT_DOMAIN = "nordveks.se";

export function resolveCustomer(
  hostname: string,
  _pathname: string
) {
  const host = hostname.toLowerCase().split(":")[0];

  // Local development: don't resolve customer sites on localhost.
  if (host === "localhost" || host === "127.0.0.1") {
    return null;
  }

  // Don't resolve customer sites on the main domain.
  if (host === ROOT_DOMAIN || host === `www.${ROOT_DOMAIN}`) {
    return null;
  }

  // Production customer subdomains: barber.nordveks.se
  if (host.endsWith(`.${ROOT_DOMAIN}`)) {
    const subdomain = host.slice(0, -(ROOT_DOMAIN.length + 1));

    // Don't treat www or nested subdomains as customers.
    if (!subdomain || subdomain === "www" || subdomain.includes(".")) {
      return null;
    }

    return customers[subdomain] ?? null;
  }

  return null;
}
