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
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-6">GET IN TOUCH</h2>
            <p className="text-xl text-gray-600">
              Have questions? Want to collaborate? Let's connect!
            </p>
          </motion.div>
          
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="contact-name">Name</Label>
                  <Input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={contactData.name}
                    onChange={handleChange}
                    required
                    placeholder="Your name"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-email">Email</Label>
                  <Input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={contactData.email}
                    onChange={handleChange}
                    required
                    placeholder="your@email.com"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="contact-message">Message</Label>
                  <Textarea
                    id="contact-message"
                    name="message"
                    value={contactData.message}
                    onChange={handleChange}
                    rows={5}
                    required
                    placeholder="What's on your mind?"
                  />
                </div>
                
                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </motion.div>
            
            {/* Social Links */}
            <motion.div
              className="lg:pl-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Follow the Journey</h3>
              <p className="text-gray-600 mb-8">
                Stay connected and never miss a beat. Follow me on social media for the latest 
                tracks, behind-the-scenes content, and upcoming events.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className={`flex items-center gap-4 p-4 bg-white rounded-lg border hover:shadow-lg transition-all duration-300 ${link.color}`}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <link.icon className="w-6 h-6" />
                    <span className="font-medium">{link.label}</span>
                  </motion.a>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-white rounded-lg border">
                <h4 className="font-semibold mb-2">Direct Contact</h4>
                <p className="text-gray-600 text-sm">
                  For urgent booking inquiries or press:
                </p>
                <p className="font-medium mt-2">djnexus@example.com</p>
                <p className="font-medium">+1 (555) 123-4567</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}