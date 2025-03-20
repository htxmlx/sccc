import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import Section from "@/components/section";
import SundayServiceSchedule from "@/modules/services/sunday-service-schedule";
import ServicesStats from "@/modules/services/services-stats";
import Headline from "@/components/headline";

export const metadata: Metadata = {
    title: siteConfig.services.title,
    description: siteConfig.services.description,
};

export default function Services() {
    return (
        <Section>
            <Headline
                title="Our Services"
                subtitle="We offer a variety of services to meet your spiritual needs."
            />
            <SundayServiceSchedule />
            <ServicesStats />
        </Section>
    );
}
