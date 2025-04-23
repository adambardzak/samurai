import { BeakerIcon, HeartIcon, TruckIcon, UserGroupIcon, FlagIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const features = [
  {
    icon: BeakerIcon,
    title: "Přírodní kofein",
    description: "Nakopne a povzbudí",
  },
  {
    icon: UserGroupIcon,
    title: "10 000+ zákazníků",
    description: "Kteří si produkty zamilovali",
  },
  {
    icon: HeartIcon,
    title: "Šetrné pro tělo",
    description: "Díky přírodnímu složení",
  },
  {
    icon: TruckIcon,
    title: "Rychlé doručení",
    description: "Od 2 000 Kč ZDARMA",
  },
  {
    icon: FlagIcon,
    title: "Vyrobeno v ČR",
    description: "S láskou k zákazníkům",
  },
];

export default function FeaturesStrip() {
  return (
    <section className="py-16 bg-gradient-to-r from-white via-white to-white relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#8B4513] to-[#D4AF37] rounded-full opacity-20 blur-lg group-hover:opacity-30 transition-opacity" />
                <feature.icon className="w-12 h-12 text-[#8B4513] relative z-10 group-hover:scale-110 transition-transform duration-300" />
              </div>
              <h3 className="text-lg font-bold text-[#8B4513] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 