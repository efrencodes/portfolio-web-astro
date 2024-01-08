import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.date(),
        tags: z.array(z.string()).default(['others']),
        authors: z.array(z.string()).default(['efrencodes']),
        ogImage: z.string(),
        cover: z.string(),
        keywords: z.string(),
        slug: z.string()
    })
})

export const collections = { blog };