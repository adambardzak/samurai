"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Samurai Shot Ginger",
    description:
      "Objevte zdravou nálož zázvorového lomcováku. Tahle zázvorová bomba kombinuje sílu indické kurkumy.",
    price: 399,
    priceWithoutVAT: 329.8,
    image: "/products/gingershot.webp",
    tags: ["NA IMUNITU", "VÍCE ZA MÉNĚ"],
  },
  {
    id: 2,
    name: "Geisha Velvet",
    description:
      "Objevte šumivý nealko nápoj, který kombinuje lahodný zelený čaj, levanduli a aroma meruňky.",
    price: 209,
    priceWithoutVAT: 172.7,
    image: "/products/geisha.webp",
    tags: ["NEJPRODÁVANĚJŠÍ"],
  },
  {
    id: 3,
    name: "Samurai Shot Green",
    description: "Nakopnutí vietnamským zeleným čajem v jeho plné síle.",
    price: 399,
    priceWithoutVAT: 329.8,
    image: "/products/sweetflower.webp",
    tags: ["NEJPRODÁVANĚJŠÍ"],
  },
];

export default function BestSellers() {
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
            Naše bestsellery
          </h2>
          <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-[#8B4513] to-[#D4AF37] mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden bg-gray-900">
                <div className="absolute top-3 sm:top-4 left-3 sm:left-4 z-10 flex flex-wrap gap-2">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 sm:px-3 py-1 bg-[#8B4513] text-white text-xs sm:text-sm font-medium rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <div className="p-4 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold text-[#8B4513] mb-2 sm:mb-3">
                  {product.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-4 line-clamp-2">
                  {product.description}
                </p>
                <div className="flex items-end justify-between">
                  <div>
                    <p className="text-xl sm:text-2xl font-bold text-[#8B4513]">
                      {product.price} Kč
                    </p>
                    <p className="text-xs sm:text-sm text-gray-500">
                      {product.priceWithoutVAT} Kč bez DPH
                    </p>
                  </div>
                  <button className="px-4 sm:px-6 py-2 bg-[#8B4513] text-white text-sm sm:text-base rounded-full font-medium hover:bg-[#6d3610] transition-colors duration-300">
                    Do košíku
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
