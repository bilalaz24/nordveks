export type SiteMetadata = {
  siteName: string;
  title: string;
  description: string;
  faviconUrl: string;
};

const nordveks: SiteMetadata = {
  siteName: "Nordveks",
  title: "Nordveks — Websites for Small Businesses",
  description: "Thoughtfully designed websites for small businesses.",
  faviconUrl: "/favicon.ico",
};

export const clientSites: Record<string, SiteMetadata> = {
  barber: {
    siteName: "FORM.",
    title: "FORM. Barbershop | Book Your Appointment",
    description: "Modern barbering with personal service.",
    faviconUrl: "/favicons/form.svg",
  },

  restaurant: {
    siteName: "Linden",
    title: "Linden Restaurant | Food & Reservations",
    description: "Discover Linden Restaurant and make a reservation.",
    faviconUrl: "/favicons/linden.svg",
  },

  studio: {
    siteName: "Stillform",
    title: "Stillform | Pilates & Movement",
    description: "Find your balance at Stillform.",
    faviconUrl: "/favicons/stillform.svg",
  },
};

export function getSiteMetadata(): SiteMetadata {
  const hostname = window.location.hostname.toLowerCase();
  const pathname = window.location.pathname.toLowerCase();

  // Match client subdomains.
  if (hostname.startsWith("form.")) return clientSites.barber;
  if (hostname.startsWith("linden.")) return clientSites.restaurant;
  if (hostname.startsWith("stillform.")) return clientSites.studio;

  // Match demo routes on the Nordveks domain.
  if (pathname.startsWith("/demo/barber")) return clientSites.barber;
  if (pathname.startsWith("/demo/restaurant")) {
    return clientSites.restaurant;
  }
  if (pathname.startsWith("/demo/studio")) return clientSites.studio;

  // The official Nordveks site remains branded as Nordveks.
  return nordveks;
}