import { ogImageSize, renderOgImage } from "@/lib/og-image";

export const alt =
  "Expendifii — Software for Shops, Cafés & Transporters in India";
export const size = ogImageSize;
export const contentType = "image/png";

export default function Image() {
  return renderOgImage();
}
