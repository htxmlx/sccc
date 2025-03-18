import { PropsWithChildren } from "react";

export default function Section({ children }: PropsWithChildren) {
    return (
        <section>
            <div className="relative pt-24 md:pt-36 min-h-[100dvh] mx-auto">
                {children}
            </div>
        </section>
    );
}
