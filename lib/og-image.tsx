import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { site } from "@/lib/content";

const logoData = await readFile(
  join(process.cwd(), "public/og-logo.png")
);
const logoSrc = `data:image/png;base64,${logoData.toString("base64")}`;

// Satori's built-in fallback font mismeasures spacing for some word
// pairs (visible extra gaps). Embedding the site's real font fixes it.
// Google's CSS2 API serves a static .ttf (not the variable font, which
// satori's parser can't read) when fetched without a browser UA. Falls
// back to the default font if the network fetch fails, so a build
// never breaks over this.
async function loadManropeWeight(weight: number): Promise<ArrayBuffer | null> {
  try {
    const css = await fetch(
      `https://fonts.googleapis.com/css2?family=Manrope:wght@${weight}`
    ).then((res) => res.text());
    const match = css.match(/src: url\(([^)]+)\) format\('truetype'\)/);
    if (!match) return null;
    const res = await fetch(match[1]);
    return res.ok ? res.arrayBuffer() : null;
  } catch {
    return null;
  }
}

const [manrope600, manrope700] = await Promise.all([
  loadManropeWeight(600),
  loadManropeWeight(700),
]);

export const ogImageSize = { width: 1200, height: 630 };

export function renderOgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          background: "#0a0a0a",
          padding: "0 90px",
        }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={logoSrc}
          alt=""
          width={340}
          height={260}
          style={{ objectFit: "contain" }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: 64,
          }}
        >
          <div
            style={{
              fontSize: 78,
              fontFamily: "Manrope",
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: -2,
            }}
          >
            Expendifii
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Manrope",
              fontSize: 32,
              fontWeight: 600,
              color: "#ff6b00",
              marginTop: 20,
            }}
          >
            {site.tagline}
          </div>
          <div
            style={{
              display: "flex",
              fontFamily: "Manrope",
              fontWeight: 600,
              fontSize: 20,
              color: "#8a8a8a",
              marginTop: 30,
              letterSpacing: 2,
              textTransform: "uppercase",
            }}
          >
            3 products live · 89 paying businesses
          </div>
        </div>
      </div>
    ),
    {
      ...ogImageSize,
      fonts: [
        ...(manrope600
          ? [
              {
                name: "Manrope",
                data: manrope600,
                weight: 600 as const,
                style: "normal" as const,
              },
            ]
          : []),
        ...(manrope700
          ? [
              {
                name: "Manrope",
                data: manrope700,
                weight: 700 as const,
                style: "normal" as const,
              },
            ]
          : []),
      ],
    }
  );
}
