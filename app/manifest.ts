import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Smyrna Christian Church",
        short_name: "Smyrna Church",
        description:
            "Smyrna Christian Church is a community of believers who gather to worship, serve, and grow in their faith.",
        start_url: "/",
        display: "standalone",
        background_color: "#fff",
        theme_color: "#fff",
        icons: [
            {
                src: "app/logo.png",
                sizes: "any",
                type: "image/x-icon",
            },
        ],
    };
}
