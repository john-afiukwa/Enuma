"use client";

import Image, { type StaticImageData } from "next/image";
import { useState, type CSSProperties } from "react";

type Photo = { src: StaticImageData; alt: string; focus: string };

const tilts = [-3, 5, -7, 6, -1];

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
        return (
          <div
            key={photoIndex}
            className={`fx-stack-card absolute inset-0 ${
              isTossed ? (tosses % 2 ? "fx-toss-a" : "fx-toss-b") : ""
            }`}
            style={
              {
                zIndex: photos.length - position,
                "--tilt": `${tilts[position]}deg`,
                "--lift": `${position * 7}px`,
                "--scale": 1 - position * 0.03,
              } as CSSProperties
            }
          >
            <div
              className="fx-float fx-print-paper h-full rounded-[6px] p-2.5 shadow-[0_24px_44px_-24px_var(--shadow)]"
              style={{ "--float-delay": `${-position * 1.4}s` } as CSSProperties}
            >
              <div className="relative h-full overflow-hidden rounded-[3px]">
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
              </div>
            </div>
          </div>
        );
      })}
    </button>
  );
}
