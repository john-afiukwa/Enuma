import Image, { type StaticImageData } from "next/image";
import type { CSSProperties } from "react";

type PrintProps = {
  src: StaticImageData;
  alt: string;
  caption?: string;
  tilt: number;
  focus?: string;
  className?: string;
};

export default function Print({
  src,
  alt,
  caption,
  tilt,
  focus = "50% 50%",
  className = "",
}: PrintProps) {
  return (
    <figure
      className={`fx-tilt mx-auto w-[84%] max-w-[24rem] ${className}`}
      style={{ "--from": `${tilt}deg`, "--to": `${-tilt / 2}deg` } as CSSProperties}
    >
      <div className="fx-print-paper rounded-[6px] p-2.5 pb-3 shadow-[0_28px_50px_-26px_var(--shadow)]">
        <div className="relative aspect-[4/5] overflow-hidden rounded-[3px]">
          <div className="fx-drift absolute inset-0">
            <Image
              src={src}
              alt={alt}
              fill
              placeholder="blur"
              sizes="(min-width: 768px) 24rem, 84vw"
              className="photo object-cover"
              style={{ objectPosition: focus }}
            />
          </div>
        </div>
        {caption && (
          <figcaption className="px-1 pt-3 font-display text-[1.05rem] leading-snug italic">
            {caption}
          </figcaption>
        )}
      </div>
    </figure>
  );
}
