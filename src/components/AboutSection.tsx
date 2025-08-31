import { motion } from 'motion/react'
import { Music, Headphones, Mic, Users, Clock, Award } from 'lucide-react'

const stats = [
  { icon: Music, label: 'Genres', value: 'Techno, House, Trance' },
  { icon: Clock, label: 'Experience', value: '8+ Years' },
  { icon: Users, label: 'Events', value: '500+' },
  { icon: Headphones, label: 'Equipment', value: 'Pioneer CDJ-3000' },
  { icon: Mic, label: 'Residency', value: 'Club Nexus' },
  { icon: Award, label: 'Awards', value: 'Best DJ 2023' }
]

export function AboutSection() {
  return (
    <section id="about-section" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black mb-8">ABOUT</h2>
            <div className="space-y-6 text-lg leading-relaxed">
              <p>
                With over 8 years of experience in the electronic music scene, DJ Nexus has 
                established himself as one of the most sought-after performers in the industry.
              </p>
              <p>
                Specializing in techno, house, and trance, he creates immersive experiences 
                that transport audiences to another dimension. His unique blend of classic 
                electronic sounds with modern production techniques has earned him residencies 
                at top clubs and festival bookings worldwide.
              </p>
              <p>
                When not performing, he's in the studio crafting the next generation of 
                electronic anthems that define the underground scene.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-black" />
                <h3 className="font-semibold text-sm uppercase tracking-wide text-gray-600 mb-2">
                  {stat.label}
                </h3>
                <p className="font-medium">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}