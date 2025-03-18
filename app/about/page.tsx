import Section from "@/components/section";
import MissionVision from "@/modules/about/mission-vision";
import PastorsSection from "@/modules/about/pastors";
import WorshipTeam from "@/modules/about/worship-team";
import FAQs from "@/modules/about/faqs";

export default function AboutUs() {
    return (
        <Section>
            <PastorsSection />
            <WorshipTeam />
            <MissionVision />
            <FAQs />
        </Section>
    );
}
