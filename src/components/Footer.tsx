import { motion } from 'motion/react'
import { Instagram, Music, Headphones, Mail } from 'lucide-react'

const socialLinks = [
  { icon: Music, label: 'Spotify', href: '#' },
  { icon: Headphones, label: 'SoundCloud', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:djnexus@example.com' }
]

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-black tracking-wider">DJ NEXUS</h3>
            <p className="text-sm text-gray-400 mt-1">Electronic Music Producer</p>
          </motion.div>
          
          {/* Social Links */}
          <motion.div
            className="flex gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-white transition-colors duration-300"
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={link.label}
              >
                <link.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
          
          {/* Copyright */}
          <motion.div
            className="text-center md:text-right"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-gray-400">
              © 2024 DJ Nexus. All rights reserved.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Made with passion for electronic music
            </p>
          </motion.div>
        </div>
        
        {/* Bottom Border */}
        <motion.div
          className="mt-8 pt-8 border-t border-gray-800 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-xs text-gray-500">
            Professional DJ services • Event bookings • Music production
          </p>
        </motion.div>
      </div>
    </footer>
  )
}