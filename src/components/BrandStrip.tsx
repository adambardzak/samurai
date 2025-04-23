"use client";

import clsx from "clsx";
import Image from "next/image";
import Marquee from "react-fast-marquee";

type Props = {
  className?: string;
};

export default function BrandStrip({ className = "" }: Props) {
  return (
    <div
      className={clsx(
        "absolute bottom-0 left-0 right-0 h-16 sm:h-20 bg-samurai-primary/90 backdrop-blur-sm flex items-center",
        className
      )}
    >
      <div className="w-full overflow-hidden">
        <Marquee
          gradient={false}
          speed={40}
          direction="left"
          className="flex items-center"
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="flex items-center justify-center h-12 sm:h-16 px-6 sm:px-8 md:px-12"
            >
              <Image
                src="/logo.svg"
                alt="Samurai logo"
                width={120}
                height={12}
                className="w-24 sm:w-32 md:w-40 h-auto brightness-0 invert"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
}
