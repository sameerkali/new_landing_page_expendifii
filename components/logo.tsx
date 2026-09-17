import Image from "next/image";

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <Image
      src="/logos/OrangeCircleLogo.svg"
      alt=""
      width={size}
      height={size}
      className="ease-spring shrink-0 transition-transform duration-500 group-hover/logo:scale-[1.06] group-hover/logo:-rotate-[7deg]"
      priority
    />
  );
}
