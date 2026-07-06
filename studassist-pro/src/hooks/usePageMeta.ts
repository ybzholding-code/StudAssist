import { useEffect } from "react";

interface PageMeta {
  title: string;
  description?: string;
  image?: string;
  canonical?: string;
}

function setMeta(selector: string, attr: string, value: string) {
  let el = document.querySelector(selector) as HTMLMetaElement | null;
  if (!el) {
    el = document.createElement("meta");
    const [attrName, attrValue] = selector.replace("meta[", "").replace("]", "").split("=");
    el.setAttribute(attrName, attrValue.replace(/"/g, ""));
    document.head.appendChild(el);
  }
  el.setAttribute(attr, value);
}

function setCanonical(href: string) {
  let el = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

const BASE_URL = "https://www.studassist.ma";
const DEFAULT_IMAGE = `${BASE_URL}/favicon.png`;

export function usePageMeta({ title, description, image, canonical }: PageMeta) {
  useEffect(() => {
    const fullTitle = `${title} | STUDASSIST`;
    const fullImage = image ? `${BASE_URL}${image}` : DEFAULT_IMAGE;
    const fullCanonical = canonical ? `${BASE_URL}${canonical}` : `${BASE_URL}${window.location.pathname}`;

    document.title = fullTitle;

    if (description) {
      setMeta('meta[name="description"]', "content", description);
      setMeta('meta[property="og:description"]', "content", description);
      setMeta('meta[name="twitter:description"]', "content", description);
    }

    setMeta('meta[property="og:title"]', "content", fullTitle);
    setMeta('meta[property="og:image"]', "content", fullImage);
    setMeta('meta[property="og:url"]', "content", fullCanonical);
    setMeta('meta[property="og:type"]', "content", "website");
    setMeta('meta[name="twitter:card"]', "content", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "content", fullTitle);
    setMeta('meta[name="twitter:image"]', "content", fullImage);

    setCanonical(fullCanonical);

    return () => {
      document.title = "STUDASSIST — Orientation Scolaire & Accompagnement Académique";
    };
  }, [title, description, image, canonical]);
}
