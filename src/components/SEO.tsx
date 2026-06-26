import React, { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
}

export default function SEO({ title, description }: SEOProps) {
  useEffect(() => {
    // Dynamically update page title
    document.title = title;

    // Dynamically locate or create meta description tag
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);
  }, [title, description]);

  return null;
}
