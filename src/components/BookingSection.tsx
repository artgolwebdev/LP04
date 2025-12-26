import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Textarea } from './ui/textarea'
import { useState } from 'react'

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    eventDate: '',
    venue: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Booking submitted:', formData)
    alert('Booking request submitted! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', eventDate: '', venue: '', message: '' })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <section id="booking-section" className="py-24 bg-black text-white relative overflow-hidden">
      {/* Background visual element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl max-h-4xl bg-yellow-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-4 md:mb-6 tracking-tighter">BOOK ME</h2>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto px-2">
              Ready to bring the energy to your event? Let's create an unforgettable experience.
            </p>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            className="space-y-8 md:space-y-10 bg-white/5 backdrop-blur-xl p-6 sm:p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Your Name</Label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-14 rounded-xl focus:border-yellow-500/50 transition-colors"
                  placeholder="Full name"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="email" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Email Address</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-14 rounded-xl focus:border-yellow-500/50 transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="eventDate" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Event Date</Label>
                <Input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  value={formData.eventDate}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white h-14 rounded-xl focus:border-yellow-500/50 transition-colors [color-scheme:dark]"
                />
              </div>

              <div className="space-y-3">
                <Label htmlFor="venue" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Venue Name</Label>
                <Input
                  id="venue"
                  name="venue"
                  type="text"
                  value={formData.venue}
                  onChange={handleChange}
                  required
                  className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 h-14 rounded-xl focus:border-yellow-500/50 transition-colors"
                  placeholder="Club, Festival, or Private"
                />
              </div>
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-sm font-bold tracking-widest text-gray-400 uppercase">Additional Details</Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className="bg-white/5 border-white/10 text-white placeholder:text-gray-600 rounded-xl focus:border-yellow-500/50 transition-colors resize-none"
                placeholder="Tell me more about your requirements..."
              />
            </div>

            <div className="text-center pt-4">
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 sm:px-16 py-6 sm:py-8 text-lg sm:text-xl font-black rounded-full shadow-[0_0_30px_rgba(234,179,8,0.3)] transition-all w-full sm:w-auto"
                >
                  SEND BOOKING REQUEST
                </Button>
              </motion.div>
            </div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  )
}