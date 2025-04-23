'use client'

import { motion } from 'framer-motion'
import { 
  BeakerIcon, 
  UserGroupIcon, 
  HeartIcon, 
  TruckIcon, 
  FlagIcon 
} from '@heroicons/react/24/outline'

const features = [
  {
    icon: BeakerIcon,
    title: 'Přírodní kofein',
    description: 'Nakopne a povzbudí'
  },
  {
    icon: UserGroupIcon,
    title: '10 000+ zákazníků',
    description: 'Kteří si produkty zamilovali'
  },
  {
    icon: HeartIcon,
    title: 'Šetrné pro tělo',
    description: 'Díky přírodnímu složení'
  },
  {
    icon: TruckIcon,
    title: 'Rychlé doručení',
    description: 'Od 2 000 Kč ZDARMA'
  },
  {
    icon: FlagIcon,
    title: 'Vyrobeno v ČR',
    description: 'S láskou k zákazníkům'
  }
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Features() {
  return (
    <section className="py-16 bg-samurai-secondary">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
      >
        {features.map((feature, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="flex flex-col items-center text-center"
          >
            <feature.icon className="w-12 h-12 text-samurai-primary mb-4" />
            <h3 className="text-xl font-heading font-semibold mb-2 text-gray-900">{feature.title}</h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
} 