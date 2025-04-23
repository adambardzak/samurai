'use client'

import Link from 'next/link'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const footerLinks = {
  info: [
    { name: 'DOPRAVA A PLATBA', href: '/doprava-a-platba' },
    { name: 'KONTAKT', href: '/kontakt' },
    { name: 'PODMÍNKY OCHRANY OSOBNÍCH ÚDAJŮ', href: '/gdpr' },
    { name: 'REKLAMAČNÍ ŘÁD', href: '/reklamacni-rad' },
    { name: 'OBCHODNÍ PODMÍNKY', href: '/obchodni-podminky' },
  ],
  account: [
    { name: 'Přihlášení', href: '/prihlaseni' },
    { name: 'Registrace', href: '/registrace' },
    { name: 'Historie objednávek', href: '/historie-objednavek' },
  ],
  products: [
    { name: 'VŠECHNY PRODUKTY', href: '/produkty' },
    { name: 'NEALKO BUBLINKY', href: '/nealko-bublinky' },
    { name: 'SAMURAI SHOTS', href: '/samurai-shots' },
  ],
  contact: {
    email: 'expedice@samuraishot.cz',
    phone: '+420 775 105 066',
    social: [
      { name: 'Facebook', href: 'https://facebook.com', icon: FaFacebook },
      { name: 'Instagram', href: 'https://instagram.com', icon: FaInstagram },
    ],
  },
}

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 md:gap-12">
          {/* Information Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4 pt-10">
              Informace
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.info.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-600 hover:text-[#8B4513] transition-colors duration-200 break-words"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Account Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Účet
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.account.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-600 hover:text-[#8B4513] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products Links */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Produkty
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm sm:text-base text-gray-600 hover:text-[#8B4513] transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="text-center sm:text-left">
            <h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wider mb-4">
              Kontaktujte nás
            </h3>
            <ul className="space-y-2.5 sm:space-y-3">
              <li>
                <a
                  href={`mailto:${footerLinks.contact.email}`}
                  className="text-sm sm:text-base text-gray-600 hover:text-[#8B4513] transition-colors duration-200"
                >
                  {footerLinks.contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${footerLinks.contact.phone}`}
                  className="text-sm sm:text-base text-gray-600 hover:text-[#8B4513] transition-colors duration-200"
                >
                  {footerLinks.contact.phone}
                </a>
              </li>
              <li className="pt-2">
                <div className="flex justify-center sm:justify-start space-x-4">
                  {footerLinks.contact.social.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-[#8B4513] transition-colors duration-200"
                    >
                      <item.icon className="h-5 w-5 sm:h-6 sm:w-6" />
                      <span className="sr-only">{item.name}</span>
                    </a>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200 pb-6">
          <p className="text-center text-xs sm:text-sm text-gray-500">
            Copyright © {new Date().getFullYear()} SAMURAI SHOT s.r.o. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  )
} 