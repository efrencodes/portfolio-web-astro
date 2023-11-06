export interface metadataProps {
  url: string;
  title: string;
  description: string;
  keywords: string;
  openGraph: {
    url: string;
    siteName: string;
    images: {
      url: string;
      width: string;
      height: string;
    };
    locale: string;
    type: string;
    creator: string;
  };
}

export const metadataDefault: metadataProps = {
  url: "https://efrencodes.com",
  title: "Efrén Martínez - Frontend Engineer",
  description:
    "Frontend Engineer especializado en #javascript #vue #react #typescript #withastro #nextjs #cypress",
  keywords:
    "querétaro,tecnologia,software,web,desarrollo,fullstack,software engineer,developer,jamstack,vuejs,reactjs,méxico,typescript,tailwindcss,cypress,astro",
  openGraph: {
    url: "https://efrencodes.com",
    siteName: "Efrén Martínez - Frontend Engineer",
    images: {
      url: "/images/profile-efren-martinez.jpg",
      width: "1920",
      height: "1080",
    },
    locale: "es-MX",
    type: "summary_large_image",
    creator: "@efrencodes",
  },
};

export const structuredData = {
  "@context": "http://schema.org",
  "@type": "Person",
  email: "mailto:hey@efrencodes.com",
  image: "",
  jobTitle: "Frontend Engineer",
  name: "Efrén Martínez",
  url: "https://www.efrencodes.com/",
};
