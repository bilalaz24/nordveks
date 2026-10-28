
import { customers, type CustomerConfig } from "../data/customers";

export type SiteMetadata = {
  siteName: string;
  title: string;
  description: string;
  faviconUrl: string;
};

const nordveks: SiteMetadata = {
  siteName: "Nordveks",
  title: "Nordveks — Hemsidor för företag",
  description:
    "Professionella hemsidor för småföretag. Genomtänkt design, fast pris och enkel lansering.",
  faviconUrl: "/favicon.ico",
};

const customerMetadata = (
  customer: CustomerConfig,
  faviconUrl: string,
): SiteMetadata => ({
  siteName: customer.name,
  title: `${customer.name} | ${customer.category
    .toLowerCase()
    .replace(/\b\w/g, (char) => char.toUpperCase())} i ${customer.location}`,
  description: customer.heroDescription,
  faviconUrl,
});

const faviconByCustomer: Record<string, string> = {
  rook: "/favicons/rook.svg",
  linden: "/favicons/linden.svg",
  stillform: "/favicons/stillform.svg",
};

export const clientSites: Record<string, SiteMetadata> = {
  rook: customerMetadata(customers.rook, faviconByCustomer.rook),
  linden: customerMetadata(customers.linden, faviconByCustomer.linden),
  stillform: customerMetadata(
    customers.stillform,
    faviconByCustomer.stillform,
  ),
};

export function getSiteMetadata(): SiteMetadata {
  const hostname = window.location.hostname.toLowerCase();
  const pathname = window.location.pathname.toLowerCase();

  // Official Nordveks website.
  if (
    hostname === "nordveks.se" ||
    hostname === "www.nordveks.se" ||
    hostname === "localhost" ||
    hostname === "127.0.0.1"
  ) {
    const demoMatch = pathname.match(
      /^\/demo\/(barber|restaurant|studio)(?:\/|$)/,
    );

    if (demoMatch) {
      const demoKey = {
        barber: "rook",
        restaurant: "linden",
        studio: "stillform",
      }[demoMatch[1]];

      if (demoKey) {
        return clientSites[demoKey];
      }
    }

    return nordveks;
  }

  // Match a client's subdomain, e.g. rook.nordveks.se.
  const subdomain = hostname.split(".")[0];

  if (clientSites[subdomain]) {
    return clientSites[subdomain];
  }

  // Fallback for unknown domains.
  return nordveks;
}
