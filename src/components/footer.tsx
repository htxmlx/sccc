"use client";

import React from "react";
import Link from "next/link";
import {
    Facebook,
    Instagram,
    Twitter,
    Youtube,
    MapPin,
    Phone,
    Mail,
} from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";

export function Footer({ className }: { className?: string }) {
    return (
        <footer className={`bg-background text-foreground py-12 ${className}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">
                            Smyrna Christian Church Carles
                        </h3>
                        <p className="text-sm text-muted-foreground">
                            Bringing hope and love to our community through
                            Christ's teachings.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">
                            Quick Links
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li>
                                <Link
                                    href="/services"
                                    className="hover:underline"
                                >
                                    Services
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/missions"
                                    className="hover:underline"
                                >
                                    Missions
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/schedule"
                                    className="hover:underline"
                                >
                                    Schedule
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/prayer-request"
                                    className="hover:underline"
                                >
                                    Prayer Requests
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">
                            Contact Us
                        </h4>
                        <ul className="space-y-2 text-sm">
                            <li className="flex items-center gap-2">
                                <MapPin size={16} />
                                <span>123 Faith Street, Carles City</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Phone size={16} />
                                <span>(123) 456-7890</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <Mail size={16} />
                                <span>info@smyrnachurch.org</span>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-md font-semibold mb-4">
                            Follow Us
                        </h4>
                        <div className="flex space-x-4">
                            <Link
                                href="#"
                                className="text-foreground hover:text-primary"
                            >
                                <Facebook size={20} />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-foreground hover:text-primary"
                            >
                                <Instagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-foreground hover:text-primary"
                            >
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="#"
                                className="text-foreground hover:text-primary"
                            >
                                <Youtube size={20} />
                                <span className="sr-only">YouTube</span>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
                    <p className="text-sm text-muted-foreground">
                        &copy; {new Date().getFullYear()} Smyrna Christian
                        Church Carles. All rights reserved.
                    </p>
                    <div className="mt-4 sm:mt-0 flex items-center gap-4">
                        <Link
                            href="/privacy-policy"
                            className="text-sm text-muted-foreground hover:underline"
                        >
                            Privacy Policy
                        </Link>
                        <Link
                            href="/terms-of-service"
                            className="text-sm text-muted-foreground hover:underline"
                        >
                            Terms of Service
                        </Link>
                        <ModeToggle />
                    </div>
                </div>
            </div>
        </footer>
    );
}
