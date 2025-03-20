import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import Section from "@/components/section";
import GenerateSermon from "@/modules/sermon/generate-sermon";
import Headline from "@/components/headline";

export const metadata: Metadata = {
    title: siteConfig.sermon.title,
    description: siteConfig.sermon.description,
};

export default function Sermon() {
    return (
        <Section>
            <Headline title="Sermons" subtitle="Listen to our past sermons" />
            <GenerateSermon />
        </Section>
    );
}
