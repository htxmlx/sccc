import { ImageResponse } from "next/og";
import { join } from "node:path";
import { readFile } from "node:fs/promises";

export default async function Image() {
    const logoData = await readFile(join(process.cwd(), "icon.png"));
    const logoSrc = Uint8Array.from(logoData).buffer;

    return new ImageResponse(
        (
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <img
                    src={URL.createObjectURL(new Blob([logoSrc]))}
                    height="100"
                />
            </div>
        )
    );
}
