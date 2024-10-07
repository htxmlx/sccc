import { PrayerRequest } from "@/components/prayer-request";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Prayer Request",
};

export default function PrayerRequestPage() {
    return <PrayerRequest />;
}
