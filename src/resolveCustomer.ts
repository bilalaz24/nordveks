
import { customers } from "./data/customers";

export const ROOT_DOMAIN = "nordveks.se";

export function resolveCustomer(
  hostname: string,
  pathname: string
) {
  const host = hostname.toLowerCase().split(":")[0];

    // Local development and demos on the main domain
    if (
    host === "localhost" ||
    host === "127.0.0.1" ||
    host === ROOT_DOMAIN ||
    host === `www.${ROOT_DOMAIN}`
    ) {
    const match = pathname.match(/^\/demo\/([^/]+)\/?$/);
    if (match) return customers[match[1]] ?? null;

    // Local root is the landing page, handled by App.tsx.
    if (host === "localhost" || host === "127.0.0.1") {
        return null;
    }
    }

  // Production subdomains: barber.nordveks.se
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
