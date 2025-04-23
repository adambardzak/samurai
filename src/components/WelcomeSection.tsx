"use client";

import { motion } from "framer-motion";
import {
  BeakerIcon,
  HeartIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const benefits = [
  {
    icon: SparklesIcon,
    part: "Hlava",
    effect: "soustředění",
    description: "Zlepšuje koncentraci a mentální výkon",
  },
  {
    icon: HeartIcon,
    part: "Srdce",
    effect: "reguluje tlak a srdeční činnost",
    description: "Podporuje zdravou činnost kardiovaskulárního systému",
  },
  {
    icon: BeakerIcon,
    part: "Žaludek",
    effect: "urychluje metabolismus a uvolní zažívací trakt",
    description: "Napomáhá správnému trávení a metabolismu",
  },
];

const pulseVariants = {
  initial: { scale: 1, opacity: 0.3 },
  animate: {
    scale: [1, 1.2, 1],
    opacity: [0.3, 0.6, 0.3],
    transition: {
      duration: 3,
      ease: "easeInOut",
      repeat: Infinity,
    }
  }
}

export default function WelcomeSection() {
  return (
    <section className="py-16 sm:py-20 md:py-24 bg-gradient-to-b from-white via-white to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-1/4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-samurai-primary/60 rounded-full blur-2xl"
        />
        <motion.div
          variants={pulseVariants}
          initial="initial"
          animate="animate"
          transition={{ delay: 1.5 }}
          className="absolute bottom-0 right-1/4 w-48 sm:w-56 md:w-64 h-48 sm:h-56 md:h-64 bg-samurai-accent/60 rounded-full blur-2xl"
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        <div className="max-w-6xl mx-auto">
          {/* Main Introduction */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 sm:mb-16 md:mb-20"
          >
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: "3rem" }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-1 bg-gradient-to-r from-samurai-primary to-samurai-accent mx-auto mb-6 sm:mb-8"
            />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 sm:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#8B4513] to-[#D4AF37]">
              Vítejte na webu Samurai
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-6">
              Energetické nápoje řady Samurai Shot jsou vyrobeny z čistě
              přírodních produktů. Mají pozitivní vliv nejen na duševní, ale
              také fyzickou stránku vašeho těla.
            </p>
          </motion.div>

          {/* Benefits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-12"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                  <div className="bg-gradient-to-br from-[#8B4513] to-[#D4AF37] p-3 sm:p-4 rounded-lg sm:rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                  </div>
                </div>
                <div className="text-center pt-6 sm:pt-8">
                  <h3 className="text-xl sm:text-2xl font-heading font-bold mb-2 sm:mb-3 text-[#8B4513]">
                    {benefit.part}
                  </h3>
                  <p className="text-base sm:text-lg text-gray-700 font-medium mb-3 sm:mb-4">
                    {benefit.effect}
                  </p>
                  <p className="text-sm sm:text-base text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
