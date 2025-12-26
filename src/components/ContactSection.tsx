import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { Instagram, Music, Headphones, Mail } from 'lucide-react'
import { useState } from 'react'

const socialLinks = [
  { icon: Music, label: 'Spotify', href: '#', color: 'hover:text-green-400' },
  { icon: Headphones, label: 'SoundCloud', href: '#', color: 'hover:text-orange-400' },
  { icon: Instagram, label: 'Instagram', href: '#', color: 'hover:text-pink-400' },
  { icon: Mail, label: 'Email', href: 'mailto:djnexus@example.com', color: 'hover:text-blue-400' }
]

export function ContactSection() {
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Contact submitted:', contactData)
    alert('Message sent! Thanks for reaching out.')
    setContactData({ name: '', email: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="contact-section" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-12 md:mb-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter uppercase text-white">GET IN TOUCH</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
              Have questions? Want to collaborate? Let's connect and make something epic happen.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            {/* Contact Form Container */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-xl p-6 md:p-10 rounded-3xl border border-white/10 shadow-2xl"
            >
              <h3 className="text-2xl md:text-3xl font-black mb-6 md:mb-8 tracking-tight uppercase">SEND A MESSAGE</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-3">
                  <Label htmlFor="contact-name" className="text-xs font-bold tracking-widest text-gray-500 uppercase">Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={contactData.name}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-14 rounded-xl focus:border-purple-500/50"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="contact-email" className="text-xs font-bold tracking-widest text-gray-500 uppercase">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={contactData.email}
                    onChange={handleChange}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-14 rounded-xl focus:border-purple-500/50"
                    placeholder="your@email.com"
                  />
                </div>

                <div className="space-y-3">
                  <Label htmlFor="contact-message" className="text-xs font-bold tracking-widest text-gray-500 uppercase">Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={contactData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 rounded-xl focus:border-purple-500/50 resize-none"
                    placeholder="What's on your mind?"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 h-16 text-lg font-black rounded-xl shadow-xl transition-all"
                >
                  SEND MESSAGE
                </Button>
              </form>
            </motion.div>

            {/* Social Links & Info Container */}
            <motion.div
              className="flex flex-col justify-between py-4"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-3xl font-black mb-8 tracking-tight">FOLLOW THE JOURNEY</h3>
                <p className="text-lg text-gray-400 mb-10 leading-relaxed">
                  Stay connected and never miss a beat. Follow me on social media for the latest
                  tracks, behind-the-scenes content, and upcoming tour dates.
                </p>

                <div className="grid grid-cols-1 xs:grid-cols-2 gap-4">
                  {socialLinks.map((link, index) => (
                    <motion.a
                      key={index}
                      href={link.href}
                      className={`flex items-center gap-4 sm:gap-5 p-5 sm:p-6 bg-white/5 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 group`}
                      whileHover={{ y: -5, scale: 1.02 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`p-2.5 sm:p-3 rounded-xl bg-black/40 group-hover:scale-110 transition-transform ${link.color.replace('hover:', '')}`}>
                        <link.icon className="w-5 h-5 sm:w-6 sm:h-6" />
                      </div>
                      <span className="font-bold tracking-wider text-xs sm:text-sm">{link.label}</span>
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="mt-12 p-8 bg-gradient-to-br from-white/5 to-transparent rounded-3xl border border-white/10">
                <h4 className="text-sm font-bold tracking-widest text-gray-500 uppercase mb-4">Direct Contact</h4>
                <div className="space-y-4">
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 font-bold uppercase mb-1">Inquiries</span>
                    <span className="text-xl font-medium">djnexus@example.com</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-xs text-gray-600 font-bold uppercase mb-1">Mangement</span>
                    <span className="text-xl font-medium">+1 (555) 123-4567</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}