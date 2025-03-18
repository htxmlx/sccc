import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";

const pastors = [
    {
        name: "Pastor Nico",
        image: "https://alt.tailus.io/images/team/member-one.webp",
        facebook: "https://www.facebook.com/pastor.nico",
        mobile: "+63 915 000 0000",
    },
    {
        name: "Pastor Mark",
        image: "https://alt.tailus.io/images/team/member-two.webp",
        facebook: "https://www.facebook.com/pastor.mark",
        mobile: "+63 915 000 0000",
    },
];

export default function ContactSection() {
    return (
        <section className="py-32">
            <div className="mx-auto max-w-4xl px-4 lg:px-0">
                <h1 className="mb-12 text-center text-4xl font-semibold lg:text-5xl">
                    Get in touch with us
                </h1>

                <div className="grid divide-y border md:grid-cols-2 md:gap-4 md:divide-x md:divide-y-0">
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h2 className="mb-3 text-lg font-semibold">
                                Pastors
                            </h2>
                            <ul className="space-y-4">
                                {pastors.map((pastor, index) => (
                                    <li
                                        key={index}
                                        className="flex items-center space-x-4"
                                    >
                                        <Image
                                            src={pastor.image}
                                            alt={pastor.name}
                                            width={48}
                                            height={48}
                                            className="rounded-full"
                                        />
                                        <div>
                                            <h3 className="text-lg font-semibold">
                                                {pastor.name}
                                            </h3>
                                            <p className="text-sm">
                                                <Link
                                                    href={pastor.facebook}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline dark:text-blue-400"
                                                >
                                                    Facebook
                                                </Link>
                                                <span className="text-sm">
                                                    {pastor.mobile}
                                                </span>
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between space-y-8 p-6 sm:p-12">
                        <div>
                            <h3 className="mb-3 text-lg font-semibold">
                                Online Giving
                            </h3>
                            <p className="text-lg">
                                Gcash:{" "}
                                <span className="text-sm">0915 000 0000</span>
                            </p>
                            <p className="mt-3 text-sm">
                                <Link
                                    href="https://www.facebook.com/smccph"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-blue-600 hover:underline dark:text-blue-400"
                                >
                                    Facebook
                                </Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
