import MissionsDocumentationPage from "@/components/missions";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Missions",
};
export default function page() {
    return <MissionsDocumentationPage />;
}
