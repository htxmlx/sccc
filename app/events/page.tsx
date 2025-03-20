import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import Section from "@/components/section";
import FacebookPosts from "@/modules/events/facebook-posts";
import Headline from "@/components/headline";

export const metadata: Metadata = {
    title: siteConfig.events.title,
    description: siteConfig.events.description,
};

export default function Events() {
    return (
        <Section>
            <Headline title="Events" subtitle="Stay up to date with our church events" />
            <FacebookPosts />
        </Section>
    );
}
