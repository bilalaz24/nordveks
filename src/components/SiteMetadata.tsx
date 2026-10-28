import { useEffect } from "react";
import { getSiteMetadata } from "../config/siteMetadata";

export default function SiteMetadata() {
  useEffect(() => {
    const site = getSiteMetadata();

    document.title = site.title;

    // Update the favicon without adding duplicate icon tags.
    let favicon = document.querySelector<HTMLLinkElement>(
      'link[rel="icon"]',
    );

    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }

    favicon.href = site.faviconUrl;

    // Update the description too.
    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content = site.description;
  }, []);

  return null;
}