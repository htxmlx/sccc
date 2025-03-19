import Image from "next/image";
import Link from "next/link";
import { MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <section className="max-w-7xl mx-auto px-6 py-12">
            <div className="grid md:grid-cols-3 gap-6 mb-8">
                {/* Contact a Pastor Card */}
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col h-full items-center">
                    <h3 className="text-xl font-medium mb-4">
                        Contact a Pastor
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow text-center">
                        Have a question or concern you'd like to discuss with a
                        pastor? Contact us and we'll connect you with one of our
                        pastors.
                    </p>
                    <Image
                        src="/pastor-contact.png"
                        alt="Contact a Pastor"
                        width={250}
                        height={250}
                        className="rounded-lg object-cover mb-4"
                    />
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 w-fit"
                    >
                        Contact a Pastor
                    </Link>
                </div>

                {/* General Inquiries Card */}
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col h-full items-center">
                    <h3 className="text-xl font-medium mb-4">
                        General Inquiries
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow text-center">
                        For general inquiries, please reach out to us using the
                        form below.
                    </p>
                    <Image
                        src="/general-inquiries.png"
                        alt="General Inquiries"
                        width={250}
                        height={250}
                        className="rounded-lg object-cover mb-4"
                    />
                    <Link
                        href="#"
                        className="inline-flex items-center justify-center rounded-md bg-white border border-gray-300 px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 w-fit"
                    >
                        Contact us
                    </Link>
                </div>

                {/* Donate via GCash Card */}
                <div className="border border-gray-200 rounded-lg p-6 flex flex-col h-full items-center">
                    <h3 className="text-xl font-medium mb-4">
                        Donate via GCash
                    </h3>
                    <p className="text-gray-600 text-sm mb-6 flex-grow text-center">
                        You can donate to our church via GCash. Simply scan the
                        QR code below or send us a message at 0960-597-6282.
                    </p>
                    <Image
                        src="/smyrna-gcash.png"
                        alt="GCash QR Code"
                        width={200}
                        height={200}
                        className="rounded-lg object-cover"
                    />
                </div>
            </div>

            {/* Map Section */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
                <div className="relative w-full h-[500px]">
                    <Image
                        src="/main-location.png"
                        alt="Map of Paris, France"
                        fill
                        className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 bg-white p-4 m-4 rounded-lg shadow-md">
                        <div className="flex items-start gap-2">
                            <MapPin className="h-5 w-5 text-gray-500 mt-0.5" />
                            <div>
                                <h3 className="font-medium text-base">
                                    Carles, Philippines
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    Ariola Street, Carles, Philippines
                                </p>
                                <Link
                                    href="https://www.google.com/maps/place/Smyrna+Christian+Church+Carles/@11.5745329,123.135984,17z/data=!4m6!3m5!1s0x33a609f3d97bed33:0xc7935d09941f4e42!8m2!3d11.5745005!4d123.1358298!16s%2Fg%2F11t_lg_mn8?hl=en-US&entry=ttu&g_ep=EgoyMDI1MDMxMi4wIKXMDSoASAFQAw%3D%3D"
                                    target="_blank"
                                    className="text-sm text-gray-700 hover:underline mt-1 inline-block"
                                >
                                    See on Google Maps
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
