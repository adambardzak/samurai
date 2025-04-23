"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const logos = [
  { src: "/journal-logos/1.jpeg", alt: "Forbes", width: 140, height: 50 },
  //   { src: "/journal-logos/2.png", alt: "Denik.cz", width: 160, height: 50, className: "brightness-75" },
  //   { src: "/journal-logos/3.png", alt: "E15", width: 100, height: 50 },
  { src: "/journal-logos/4.png", alt: "Euro.cz", width: 160, height: 50 },
  //   { src: "/journal-logos/5.png", alt: "Metro", width: 140, height: 50 },
  { src: "/journal-logos/6.png", alt: "Český rozhlas", width: 180, height: 50 },
  { src: "/journal-logos/7.jpeg", alt: "Flowee", width: 140, height: 50 },
  //   { src: "/journal-logos/8.png", alt: "Aktuálně.cz", width: 160, height: 50 },
  {
    src: "/journal-logos/9.png",
    alt: "Hospodářské noviny",
    width: 180,
    height: 50,
  },
  //   { src: "/journal-logos/10.png", alt: "Seznam Zprávy", width: 180, height: 50 },
];

export default function JournalLogos() {
  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#8B4513] mb-4">
            Napsali o nás
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#8B4513] to-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 md:gap-12">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center justify-center p-2 sm:p-4"
            >
              <div
                className="relative w-full"
                style={{
                  width: '100%',
                  height: logo.height * 0.8,
                  maxWidth: logo.width,
                }}
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  fill
                  className="object-contain opacity-80 hover:opacity-100 transition-opacity duration-300"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
