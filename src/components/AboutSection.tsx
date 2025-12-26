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
    <section id="about-section" className="py-24 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-yellow-600/5 blur-[100px] rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black mb-6 md:mb-10 tracking-tighter">THE STORY</h2>
            <div className="space-y-6 md:space-y-8 text-lg md:text-xl leading-relaxed text-gray-300">
              <p>
                With over <span className="text-white font-bold">8 years</span> of experience in the electronic music scene,
                DJ Nexus has established herself as one of the most sought-after performers in the industry.
              </p>
              <p>
                Specializing in <span className="text-purple-400">techno</span>, <span className="text-pink-400">house</span>,
                and <span className="text-yellow-400">trance</span>, he creates immersive experiences
                that transport audiences to another dimension.
              </p>
              <p>
                His unique blend of classic electronic sounds with modern production techniques
                has earned him residencies at top clubs and festival bookings worldwide.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 gap-4 sm:gap-6"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group relative p-6 sm:p-8 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl hover:bg-white/10 transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                {/* Accent glow on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                <stat.icon className="w-8 h-8 sm:w-10 sm:h-10 mb-4 sm:mb-6 text-yellow-400 group-hover:scale-110 transition-transform" />
                <h3 className="font-bold text-[10px] sm:text-xs uppercase tracking-widest text-gray-500 mb-1 sm:mb-2">
                  {stat.label}
                </h3>
                <p className="font-black text-base sm:text-lg tracking-tight">{stat.value}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}