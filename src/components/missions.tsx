"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { ChevronLeft, ChevronRight, Globe, Users, Heart } from "lucide-react";
import Image from "next/image";
import { Metadata } from "next";

interface MissionItem {
    id: number;
    title: string;
    description: string;
    date: string;
    location: string;
    participants: number;
    impact: string;
    images: string[];
}

const missionItems: MissionItem[] = [
    {
        id: 1,
        title: "Haiti Medical Mission",
        description:
            "Provided medical care and supplies to underserved communities in Haiti.",
        date: "2023-03-15",
        location: "Port-au-Prince, Haiti",
        participants: 12,
        impact: "Treated over 500 patients and distributed essential medicines.",
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
        id: 2,
        title: "Local Food Bank Drive",
        description:
            "Organized a city-wide food collection and distribution event.",
        date: "2023-05-22",
        location: "Carles City, USA",
        participants: 50,
        impact: "Collected 2000 lbs of food for local families in need.",
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
        id: 3,
        title: "Youth Mission to Mexico",
        description:
            "Built homes for families in partnership with local organizations.",
        date: "2023-07-10",
        location: "Tijuana, Mexico",
        participants: 25,
        impact: "Constructed 3 new homes and repaired 5 existing structures.",
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
        id: 4,
        title: "Clean Water Project",
        description:
            "Installed water filtration systems in rural African villages.",
        date: "2023-09-05",
        location: "Malawi, Africa",
        participants: 8,
        impact: "Provided clean water access to over 1000 individuals.",
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
    {
        id: 5,
        title: "Hurricane Relief Effort",
        description:
            "Assisted with cleanup and rebuilding after a devastating hurricane.",
        date: "2023-11-20",
        location: "Florida, USA",
        participants: 30,
        impact: "Helped 15 families repair and return to their homes.",
        images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    },
];

export function ImageCarousel({ images }: { images: string[] }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentImageIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    return (
        <div className="relative">
            <div className="relative aspect-video mb-4">
                <Image
                    src={images[currentImageIndex]}
                    alt={`Mission image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover rounded-md"
                />
            </div>
            <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={prevImage}
                    className="rounded-full"
                >
                    <ChevronLeft className="h-4 w-4" />
                </Button>
            </div>
            <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <Button
                    variant="outline"
                    size="icon"
                    onClick={nextImage}
                    className="rounded-full"
                >
                    <ChevronRight className="h-4 w-4" />
                </Button>
            </div>
            <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-2 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {images.length}
            </div>
        </div>
    );
}

export default function MissionsDocumentationPage() {
    const [currentMissionIndex, setCurrentMissionIndex] = useState(0);

    const nextMission = () => {
        setCurrentMissionIndex(
            (prevIndex) => (prevIndex + 1) % missionItems.length
        );
    };

    const prevMission = () => {
        setCurrentMissionIndex(
            (prevIndex) =>
                (prevIndex - 1 + missionItems.length) % missionItems.length
        );
    };

    return (
        <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-center mb-8">
                    Smyrna Christian Church Missions
                </h1>

                <Card className="w-full">
                    <CardHeader>
                        <CardTitle>
                            {missionItems[currentMissionIndex].title}
                        </CardTitle>
                        <CardDescription>
                            {missionItems[currentMissionIndex].date}
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ImageCarousel
                            images={missionItems[currentMissionIndex].images}
                        />
                        <p className="text-gray-700 mb-4">
                            {missionItems[currentMissionIndex].description}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="flex items-center">
                                <Globe className="h-5 w-5 mr-2 text-primary" />
                                <span className="text-sm">
                                    {missionItems[currentMissionIndex].location}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Users className="h-5 w-5 mr-2 text-primary" />
                                <span className="text-sm">
                                    {
                                        missionItems[currentMissionIndex]
                                            .participants
                                    }{" "}
                                    participants
                                </span>
                            </div>
                            <div className="flex items-center">
                                <Heart className="h-5 w-5 mr-2 text-primary" />
                                <span className="text-sm">
                                    {missionItems[currentMissionIndex].impact}
                                </span>
                            </div>
                        </div>
                    </CardContent>
                    <CardFooter className="flex justify-between">
                        <Button variant="outline" onClick={prevMission}>
                            <ChevronLeft className="h-4 w-4 mr-2" />
                            Previous Mission
                        </Button>
                        <div className="text-sm text-gray-500">
                            {currentMissionIndex + 1} of {missionItems.length}
                        </div>
                        <Button variant="outline" onClick={nextMission}>
                            Next Mission
                            <ChevronRight className="h-4 w-4 ml-2" />
                        </Button>
                    </CardFooter>
                </Card>

                <div className="mt-12">
                    <h2 className="text-2xl font-semibold mb-6">
                        Recent Missions
                    </h2>
                    <div className="space-y-6">
                        {missionItems.map((item, index) => (
                            <Card
                                key={item.id}
                                className={
                                    index === currentMissionIndex
                                        ? "border-primary"
                                        : ""
                                }
                            >
                                <CardHeader>
                                    <CardTitle className="text-lg">
                                        {item.title}
                                    </CardTitle>
                                    <CardDescription>
                                        {item.date} - {item.location}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <ImageCarousel images={item.images} />
                                    <p className="text-sm text-gray-700 mb-2 mt-4">
                                        {item.description}
                                    </p>
                                    <p className="text-sm text-primary font-semibold">
                                        {item.impact}
                                    </p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
