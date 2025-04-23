"use client";

import { motion } from "framer-motion";

export default function Newsletter() {
  return (
    <section className="py-20 bg-samurai-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-heading font-bold text-white mb-4"
          >
            Získejte informace o speciálních akcích
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-white/80 mb-8"
          >
            Vložením e-mailu souhlasíte s{" "}
            <a href="#" className="underline hover:text-white">
              podmínkami ochrany osobních údajů
            </a>
            .
          </motion.p>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Zadejte váš e-mail"
              className="px-6 py-3 rounded-lg flex-1 max-w-md focus:outline-none focus:ring-2 focus:ring-samurai-accent"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-samurai-accent text-samurai-primary px-8 py-3 rounded-lg font-semibold hover:bg-samurai-accent/90 transition-colors"
            >
              Přihlásit se
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
