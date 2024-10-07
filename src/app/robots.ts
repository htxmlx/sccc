import { BASE_URL } from "@/config/site";
import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: "*",
            allow: ["/", "/missions", "/prayer-requests", "/schedule"],
            disallow: [],
        },
        sitemap: `${BASE_URL}/sitemap.xml`,
    };
}
