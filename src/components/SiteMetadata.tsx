
import { useEffect } from "react";
import type { SiteMetadata as SiteMetadataType } from "../config/siteMetadata";

type Props = {
  metadata: SiteMetadataType;
};

export default function SiteMetadata({ metadata }: Props) {
  useEffect(() => {
    document.title = metadata.title;

    let favicon = document.querySelector<HTMLLinkElement>(
      'link[rel="icon"]',
    );

    if (!favicon) {
      favicon = document.createElement("link");
      favicon.rel = "icon";
      document.head.appendChild(favicon);
    }

    favicon.href = metadata.faviconUrl;

    let description = document.querySelector<HTMLMetaElement>(
      'meta[name="description"]',
    );

    if (!description) {
      description = document.createElement("meta");
      description.name = "description";
      document.head.appendChild(description);
    }

    description.content = metadata.description;
  }, [metadata]);

  return null;
}
