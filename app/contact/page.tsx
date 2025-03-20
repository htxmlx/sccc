import { Metadata } from "next";
import { siteConfig } from "@/lib/site";
import Section from "@/components/section";
import ContactSection from "@/modules/contact/contact";
import Headline from "@/components/headline";

export const metadata: Metadata = {
    title: siteConfig.contact.title,
    description: siteConfig.contact.description,
};

export default function Contact() {
    return (
        <Section>
            <Headline title="Contact Us" subtitle="Get in touch with our church" />
            <ContactSection />
        </Section>
    );
}
