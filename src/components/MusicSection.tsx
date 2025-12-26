import { motion } from 'motion/react'
import { Music, Volume2, Headphones } from 'lucide-react'

export function MusicSection() {
  return (
    <section id="music-section" className="relative py-20 bg-gradient-to-b from-black to-gray-900 overflow-hidden">
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
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {/* Player Wrapper with Premium Aesthetic */}
          <div className="relative group">
            {/* Rotating Record Shadow/Glow */}
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-yellow-500/20 via-purple-500/20 to-pink-500/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-80 transition-opacity"
              animate={{
                rotate: 360,
                scale: [1, 1.05, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
            />

            {/* Main Container */}
            <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/10 shadow-2xl overflow-hidden">
              <div className="flex flex-col md:flex-row gap-6 sm:gap-8 items-center">
                {/* Vinyl Record Animation */}
                <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 flex-shrink-0">
                  <motion.div
                    className="w-full h-full bg-black rounded-full border-4 border-gray-800 flex items-center justify-center relative shadow-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  >
                    {/* Vinyl Grooves */}
                    <div className="absolute inset-2 border border-gray-900 rounded-full opacity-50" />
                    <div className="absolute inset-4 border border-gray-900 rounded-full opacity-50" />
                    <div className="absolute inset-6 border border-gray-900 rounded-full opacity-50" />

                    {/* Record Label */}
                    <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-gradient-to-tr from-yellow-500 to-red-500 rounded-full flex items-center justify-center">
                      <div className="w-1.5 h-1.5 bg-black rounded-full" />
                    </div>
                  </motion.div>
                  {/* Needle Pin */}
                  <div className="absolute top-0 right-0 w-10 sm:w-12 h-1 bg-gray-400 rotate-45 origin-left rounded-full" />
                </div>

                {/* SoundCloud iframe */}
                <div className="flex-grow w-full rounded-xl overflow-hidden shadow-inner bg-black/40">
                  <iframe
                    width="100%"
                    height="166"
                    scrolling="no"
                    frameBorder="no"
                    allow="autoplay"
                    src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/559870995&color=%23fbbf24&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"
                    className="opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>

              {/* Enhanced Track Info */}
              <div className="mt-6 sm:mt-8 pt-6 border-t border-white/5 flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-xs sm:text-sm text-center md:text-left">
                <span className="text-gray-500 font-medium">CURATED BY</span>
                <a
                  href="https://soundcloud.com/dj1rabbit"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-yellow-400 hover:text-yellow-300 transition-colors font-bold tracking-wider"
                >
                  DJ RAA BEAT
                </a>
                <span className="text-gray-700 hidden sm:inline">•</span>
                <span className="text-gray-300 font-medium">Official Mixtape for Break-Dance</span>
              </div>
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