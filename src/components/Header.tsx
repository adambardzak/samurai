'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCartIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'VŠECHNY PRODUKTY', href: '#' },
  { name: 'SAMURAI SHOTS', href: '#' },
  { name: 'NEALKO BUBLINKY', href: '#' },
  { name: 'NÁŠ PŘÍBĚH', href: '#' },
]

export default function Header() {
  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm"
    >
      <nav className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Samurai"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </Link>

          {/* Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-samurai-primary font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Cart */}
          <div className="flex items-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative p-2"
            >
              <ShoppingCartIcon className="h-6 w-6 text-gray-700" />
              <span className="absolute -top-1 -right-1 bg-samurai-primary text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                0
              </span>
            </motion.button>
          </div>
        </div>
      </nav>
    </motion.header>
  )
} 