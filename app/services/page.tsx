import Section from "@/components/section";
import TeamSection from "@/modules/about/pastors";
import SundayServiceSchedule from "@/modules/services/sunday-service-schedule";

export default function Services() {
    return (
        <Section>
            <SundayServiceSchedule />
        </Section>
    );
}
