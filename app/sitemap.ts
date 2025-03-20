import { MetadataRoute } from "next";
import { menuItems, siteConfig } from "@/lib/site";

export default function Sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: siteConfig.prodUrl,
            lastModified: new Date(),
            changeFrequency: "yearly" as const,
            priority: 1,
        },
        ...menuItems.map((item) => ({
            url: `${siteConfig.prodUrl}${item.href}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
        {
            url: `${siteConfig.prodUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        },
    ];
}
