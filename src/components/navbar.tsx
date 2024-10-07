"use client";
import React, { useState } from "react";
import {
    HoveredLink,
    Menu,
    MenuItem,
    ProductItem,
} from "@/components/ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { ModeToggle } from "@/components/mode-toggle";
import { Bird } from "lucide-react";
import Image from "next/image";

export function Navbar({ className }: { className?: string }) {
    const [active, setActive] = useState<string | null>(null);
    return (
        <div
            className={cn(
                "fixed top-2 inset-x-0 container mx-auto z-50 uppercase",
                className
            )}
        >
            <Menu setActive={setActive}>
                <Link href="/" className="flex-1">
                    <Image
                        src="/logo.jpg"
                        alt="sccc logo"
                        width={60}
                        height={60}
                        className="object-cover invert dark:invert-0"
                    />
                </Link>
                <Link
                    className="hidden md:block"
                    href={`https://www.google.com/maps/dir/?api=1&destination=11.57454434496264,123.13588780151879`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Find Us
                </Link>
                <Link className="hidden md:block" href="/missions">
                    Who we are
                </Link>
                <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Resources"
                >
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/hobby">Hobby</HoveredLink>
                        <HoveredLink href="/individual">Individual</HoveredLink>
                        <HoveredLink href="/team">Team</HoveredLink>
                        <HoveredLink href="/enterprise">Enterprise</HoveredLink>
                    </div>
                </MenuItem>
                <Link className="hidden md:block" href="/prayer-request">
                    Prayer Requests
                </Link>
                <div className="flex-1 flex justify-end">
                    <ModeToggle />
                </div>
            </Menu>
        </div>
    );
}
