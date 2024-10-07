import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Schedule",
};

export default function Component() {
    const scheduleItems = [
        { time: "8:30 AM", event: "Morning Prayer" },
        { time: "9:00 AM", event: "Worship Service Begins" },
        { time: "9:30 AM", event: "Scripture Reading" },
        { time: "10:00 AM", event: "Sermon" },
        { time: "10:45 AM", event: "Communion" },
        { time: "11:15 AM", event: "Closing Hymn" },
        { time: "11:30 AM", event: "Service Ends" },
    ];

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Sunday Service Schedule
                </h1>
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle className="text-2xl text-center">
                            8:30 AM - 11:30 AM
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="divide-y divide-gray-200">
                            {scheduleItems.map((item, index) => (
                                <li
                                    key={index}
                                    className="py-4 flex justify-between items-center"
                                >
                                    <span className="text-sm font-medium ">
                                        {item.time}
                                    </span>
                                    <span className="text-sm ">
                                        {item.event}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </CardContent>
                </Card>
                <p className="mt-8 text-center text-sm ">
                    Join us for our Sunday service. All are welcome!
                </p>
            </div>
        </div>
    );
}
