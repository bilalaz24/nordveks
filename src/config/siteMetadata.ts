
import type { CustomerConfig } from "../data/customers";

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
  faviconUrl: "/favicon.svg",
};

/**
 * Convert a customer's saved configuration into browser metadata.
 */
export function createSiteMetadata(
  customer: CustomerConfig,
): SiteMetadata {
  return {
    siteName: customer.name,
    title: `${customer.name} | ${customer.category} i ${customer.location}`,
    description: customer.heroDescription,
    faviconUrl: customer.faviconUrl || "/favicon.svg",
  };
}

/**
 * Use this only to identify the official Nordveks website.
 * Customer resolution should happen through your database,
 * not a hardcoded list of customer names or subdomains.
 */
export function isNordveksDomain(hostname: string): boolean {
  const host = hostname.toLowerCase();

  return (
    host === "nordveks.se" ||
    host === "www.nordveks.se" ||
    host === "localhost" ||
    host === "127.0.0.1"
  );
}

export function getNordveksMetadata(): SiteMetadata {
  return nordveks;
}
