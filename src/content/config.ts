import { defineCollection, z } from "astro:content";

const blog = defineCollection({
    schema: z.object({
        title: z.string(),
        description: z.string(),
        date: z.coerce.date(),
        tags: z.array(z.string()).default(['others']),
        authors: z.array(z.string()).default(['efrencodes']),
        ogImage: z.string(),
        cover: z.string(),
        keywords: z.string(),
        slug: z.string(),
        order: z.number()
    })
})

export const collections = { blog };