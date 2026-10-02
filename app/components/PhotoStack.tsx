"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, type CSSProperties } from "react";

export type Photo = {
  src: StaticImageData;
  alt: string;
  focus: string;
  caption?: string;
};

const tilts = [-3, 5, -7, 6];
const visibleDepth = tilts.length;

export default function PhotoStack({ photos }: { photos: Photo[] }) {
  const [order, setOrder] = useState(() => photos.map((_, i) => i));
  const [tosses, setTosses] = useState(0);

  const front = photos[order[0]];
  const tossed = tosses > 0 ? order[order.length - 1] : null;

  function next() {
    setOrder((current) => [...current.slice(1), current[0]]);
    setTosses((count) => count + 1);
  }

  return (
    <button
      type="button"
      onClick={next}
      aria-label={`${front.alt}. Show the next photo`}
      className="relative mx-auto block aspect-[4/5] w-[84%] max-w-[26rem] cursor-pointer select-none [-webkit-tap-highlight-color:transparent]"
    >
      {order.map((photoIndex, position) => {
        const photo = photos[photoIndex];
        const isTossed = photoIndex === tossed;
        const depth = Math.min(position, visibleDepth - 1);
        const showImage = position < visibleDepth || isTossed;
        return (
          <div
            key={photoIndex}
            className={`fx-stack-card absolute inset-0 ${
              isTossed ? (tosses % 2 ? "fx-toss-a" : "fx-toss-b") : ""
            }`}
            style={
              {
                zIndex: photos.length - position,
                "--tilt": `${tilts[depth]}deg`,
                "--lift": `${depth * 7}px`,
                "--scale": 1 - depth * 0.03,
              } as CSSProperties
            }
          >
            <div
              className="fx-float fx-print-paper flex h-full flex-col rounded-[6px] px-2.5 pt-2.5 shadow-[0_24px_44px_-24px_var(--shadow)]"
              style={{ "--float-delay": `${-depth * 1.4}s` } as CSSProperties}
            >
              <div className="relative flex-1 overflow-hidden rounded-[3px] bg-[#e9dfd2]">
                {showImage && (
                  <Image
                    src={photo.src}
                    alt=""
                    fill
                    placeholder="blur"
                    loading={position < 2 ? "eager" : "lazy"}
                    fetchPriority={position === 0 ? "high" : "auto"}
                    sizes="(min-width: 768px) 26rem, 84vw"
                    className="photo object-cover"
                    style={{ objectPosition: photo.focus }}
                  />
                )}
              </div>
              <p className="flex h-11 shrink-0 items-center px-1 text-left font-display text-[1.15rem] italic">
                {photo.caption}
              </p>
            </div>
          </div>
        );
      })}
    </button>
  );
}
