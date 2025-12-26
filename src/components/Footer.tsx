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
    <footer className="bg-black text-white py-16 border-t border-white/5 relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-32 bg-purple-600/5 blur-[80px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-12">
          {/* Logo/Name */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-3xl font-black tracking-tighter mb-2">DJ NEXUS</h3>
            <p className="text-xs font-bold tracking-[0.2em] text-gray-500 uppercase">Electronic Music Producer</p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.2, y: -2 }}
                whileTap={{ scale: 0.9 }}
                title={link.label}
              >
                <link.icon className="w-7 h-7" />
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
            <p className="text-sm font-medium text-gray-400">
              © 2024 <span className="text-white">DJ Nexus</span>. All rights reserved.
            </p>
            <p className="text-xs font-bold tracking-widest text-gray-600 mt-2 uppercase">
              Beat the Ordinary
            </p>
          </motion.div>
        </div>

        {/* Bottom Info */}
        <motion.div
          className="mt-12 pt-8 border-t border-white/5 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="text-[10px] font-black tracking-[0.3em] text-gray-700 uppercase">
            Professional DJ Services • Event Bookings • Global Tours
          </p>
        </motion.div>
      </div>
    </footer>
  )
}