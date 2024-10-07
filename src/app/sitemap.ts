import { BASE_URL } from "@/config/site";
import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: BASE_URL,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/missions`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/prayer-requests`,
            lastModified: new Date(),
        },
        {
            url: `${BASE_URL}/schedule`,
            lastModified: new Date(),
        },
    ];
}
