import { motion } from 'motion/react'
import { Music, Volume2, Headphones } from 'lucide-react'

export function MusicSection() {
  return (
    <section className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #fbbf24 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, #ef4444 0%, transparent 50%)`
        }} />
      </div>
      
      {/* Floating Music Notes */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-white/10 text-2xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -60, -20],
              rotate: [-15, 15, -15],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.8
            }}
          >
            ♪
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            >
              <Music className="w-8 h-8 text-yellow-400" />
            </motion.div>
            <h2 className="text-4xl md:text-5xl font-black text-white tracking-wider">
              FEATURED TRACK
            </h2>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Volume2 className="w-8 h-8 text-yellow-400" />
            </motion.div>
          </div>
          
          <motion.p
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
          >
            Experience the authentic hip-hop sound that defines my style
          </motion.p>
        </motion.div>

        {/* SoundCloud Player Container */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
        >
          {/* Player Wrapper with Glow Effect */}
          <div className="relative">
            {/* Glowing Border */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-yellow-400/20 via-red-500/20 to-purple-500/20 rounded-2xl blur-xl"
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            />
            
            {/* Player Container */}
            <div className="relative bg-black/50 backdrop-blur-sm rounded-2xl p-6 border border-yellow-400/30">
              {/* SoundCloud iframe */}
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <iframe 
                  width="100%" 
                  height="166" 
                  scrolling="no" 
                  frameBorder="no" 
                  allow="autoplay" 
                  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/559870995&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                  className="rounded-xl"
                />
              </div>
              
              {/* Track Info */}
              <motion.div 
                className="mt-4 text-center"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="text-xs text-gray-400 leading-relaxed">
                  <a 
                    href="https://soundcloud.com/dj1rabbit" 
                    title="DJ RAA BEAT" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:text-yellow-300 transition-colors no-underline font-semibold"
                  >
                    DJ RAA BEAT
                  </a>
                  <span className="mx-2">·</span>
                  <a 
                    href="https://soundcloud.com/dj1rabbit/artificial-intelligence-dj-rabbit-origenal-official-mixtape-for-break-dance" 
                    title="Artificial Intelligence- Dj Raa-Beat Origenal official mixtape for Break-Dance" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors no-underline"
                  >
                    Artificial Intelligence - Original Mixtape for Break-Dance
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center items-center gap-8">
          {[Headphones, Music, Volume2].map((Icon, index) => (
            <motion.div
              key={index}
              className="text-yellow-400/40"
              animate={{
                y: [-5, 5, -5],
                rotate: [-10, 10, -10]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: index * 0.5
              }}
            >
              <Icon className="w-6 h-6" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}