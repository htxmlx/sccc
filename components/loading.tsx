import { Loader2 } from "lucide-react";

export default function Loader() {
    return (
        <div className="fixed inset-0 bg-background z-50 flex items-center justify-center">
            <div className="flex flex-col items-center gap-4">
                <Loader2 className="h-24 w-24 animate-spin" />
            </div>
        </div>
    );
}
