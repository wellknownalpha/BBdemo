import type { Metadata } from "next";
import { siteConfig } from "./constants";
import { absoluteUrl } from "./utils";

interface SeoProps {
  title: string;
  description?: string;
  path?: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path,
  ogImage,
  noIndex,
}: SeoProps): Metadata {
  const fullTitle = title === "Home" ? siteConfig.name : `${title} | ${siteConfig.name}`;
  const desc = description || siteConfig.description;
  const url = path ? absoluteUrl(path) : siteConfig.url;
  const image = ogImage || siteConfig.ogImage;

  return {
    title: fullTitle,
    description: desc,
    metadataBase: new URL(siteConfig.url),
    openGraph: {
      title: fullTitle,
      description: desc,
      url,
      siteName: siteConfig.name,
      images: [{ url: image, width: 1200, height: 630 }],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: desc,
      images: [image],
    },
    robots: noIndex ? { index: false, follow: false } : undefined,
    alternates: { canonical: url },
  };
}
