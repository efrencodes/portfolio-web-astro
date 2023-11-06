import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  site: "https://www.efrencodes.com/",
  integrations: [
    tailwind(),
    mdx(),
    sitemap({
      changefreq: "weekly",
      priority: 0.7,
      customPages: [
        "https://www.efrencodes.com/articulos/como-convertir-un-numero-a-formato-de-moneda-en-javascript",
        "https://www.efrencodes.com/articulos/dominando-el-arte-de-los-slots-en-astro",
      ],
    }),
  ],
  output: "static",
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    },
  }),
});
