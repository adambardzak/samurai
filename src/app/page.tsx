"use client";

import { motion } from "framer-motion";
import Header from "@/components/Header";
import BestSellers from "@/components/BestSellers";
import JournalLogos from "@/components/JournalLogos";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import WelcomeSection from "@/components/WelcomeSection";
import BrandStrip from "@/components/BrandStrip";
import Image from "next/image";
import HeroCarousel from "@/components/HeroCarousel";
import FeaturesStrip from "@/components/FeaturesStrip";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[100svh] bg-gradient-to-br from-white via-gray-50 to-samurai-secondary overflow-hidden">
          {/* Background Logo Icon */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.07]">
            <div className="w-[800px] sm:w-[1000px] md:w-[1200px] lg:w-[1400px] h-[800px] sm:h-[1000px] md:h-[1200px] lg:h-[1400px] relative rotate-12 transform-gpu">
              <Image
                src="/logo-icon.svg"
                alt=""
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
          
          {/* Floating Elements */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="absolute inset-0"
          >
            <div className="absolute top-1/4 left-8 sm:left-12 md:left-16 lg:left-20 w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 bg-samurai-primary/10 rounded-full blur-3xl" />
            <div className="absolute bottom-1/4 right-8 sm:right-12 md:right-16 lg:right-20 w-24 sm:w-28 md:w-32 lg:w-40 h-24 sm:h-28 md:h-32 lg:h-40 bg-samurai-accent/10 rounded-full blur-3xl" />
          </motion.div>

          {/* Content */}
          <div className="relative container mx-auto px-4 sm:px-6 min-h-[100svh] flex items-center">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center py-20 sm:py-24 md:py-28">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 bg-clip-text text-transparent bg-gradient-to-r from-samurai-primary via-samurai-primary to-samurai-accent">
                  Energetické a slavnostní nápoje
                </h1>
                <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0">
                  Již 10 let vám přinášíme energetické panáky a slavnostní
                  bublinky bez alkoholu. Nápoje Samurai přinášejí chuť
                  výjimečnosti, energii a styl každé příležitosti.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-samurai-primary to-samurai-accent text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-shadow"
                >
                  Nabídka našich produktů
                </motion.button>
              </motion.div>

              {/* Image Carousel */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full hidden lg:block"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-samurai-primary/5 to-samurai-accent/5 rounded-2xl sm:rounded-3xl overflow-hidden backdrop-blur-sm border border-white/10">
                  <HeroCarousel />
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="absolute top-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-b from-white/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-white/20 to-transparent" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          <BrandStrip />
        </section>

        {/* Welcome Section */}
        <WelcomeSection />

        {/* Features Section */}
        <FeaturesStrip />

        {/* Best Sellers Section */}
        <BestSellers />

        {/* Journal Logos Section */}
        <JournalLogos />

        {/* Newsletter Section */}
        <Newsletter />
      </main>
      <Footer />
    </>
  );
}
