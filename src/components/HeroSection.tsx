import { motion } from 'motion/react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Play, Music, Headphones, Disc3 } from 'lucide-react'

export function HeroSection() {
  const handleBookNowClick = () => {
    // Scroll to the booking section
    const bookingSection = document.getElementById('booking-section')
    if (bookingSection) {
      bookingSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleDiscoverMoreClick = () => {
    // Scroll to the about section
    const aboutSection = document.getElementById('about-section')
    if (aboutSection) {
      aboutSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1625474144048-600a7d0c27cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBzdHVkaW8lMjBtaWNyb3Bob25lJTIwZGFya3xlbnwxfHx8fDE3NTY0ODc1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        initial={{ scale: 1 }}
        animate={{ scale: 1.1 }}
        transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
      />
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80 z-10" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 z-15 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Huge Spinning Vinyl Background Animation */}
      <div className="absolute inset-0 z-5 overflow-hidden">
        <motion.svg
          className="absolute w-[800px] h-[800px] md:w-[1000px] md:h-[1000px] lg:w-[1200px] lg:h-[1200px] xl:w-[1400px] xl:h-[1400px]"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)'
          }}
          animate={{ rotate: 360 }}
          transition={{ 
            duration: 30, 
            repeat: Infinity, 
            ease: "linear" 
          }}
          viewBox="0 0 200 200"
        >
          {/* Vinyl Base Circle */}
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="url(#vinylGradient)"
            stroke="rgba(255, 255, 255, 0.1)"
            strokeWidth="0.5"
          />
          
          {/* Vinyl Grooves - Multiple Concentric Circles */}
          {[...Array(40)].map((_, i) => (
            <circle
              key={i}
              cx="100"
              cy="100"
              r={95 - (i * 2)}
              fill="none"
              stroke={i % 2 === 0 ? "rgba(255, 255, 255, 0.08)" : "rgba(255, 255, 255, 0.04)"}
              strokeWidth="0.3"
              opacity={0.6}
            />
          ))}
          
          {/* Center Hole */}
          <circle
            cx="100"
            cy="100"
            r="8"
            fill="black"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="0.5"
          />
          
          {/* Center Label */}
          <circle
            cx="100"
            cy="100"
            r="25"
            fill="url(#labelGradient)"
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="0.5"
          />
          
          {/* Label Text */}
          <text
            x="100"
            y="95"
            textAnchor="middle"
            fill="white"
            fontSize="8"
            fontWeight="bold"
            opacity="0.8"
          >
            DJ
          </text>
          <text
            x="100"
            y="105"
            textAnchor="middle"
            fill="white"
            fontSize="8"
            fontWeight="bold"
            opacity="0.8"
          >
            NEXUS
          </text>
          
          {/* Vinyl Texture Pattern */}
          <defs>
            <pattern
              id="vinylTexture"
              patternUnits="userSpaceOnUse"
              width="4"
              height="4"
            >
              <circle cx="2" cy="2" r="0.5" fill="rgba(255, 255, 255, 0.02)" />
            </pattern>
            
            {/* Vinyl Gradient */}
            <radialGradient id="vinylGradient">
              <stop offset="0%" stopColor="#1a1a1a" />
              <stop offset="30%" stopColor="#0a0a0a" />
              <stop offset="70%" stopColor="#000000" />
              <stop offset="100%" stopColor="#000000" />
            </radialGradient>
            
            {/* Label Gradient */}
            <radialGradient id="labelGradient">
              <stop offset="0%" stopColor="#2a2a2a" />
              <stop offset="100%" stopColor="#1a1a1a" />
            </radialGradient>
          </defs>
          
          {/* Apply texture */}
          <circle
            cx="100"
            cy="100"
            r="95"
            fill="url(#vinylTexture)"
            opacity="0.3"
          />
        </motion.svg>
        
        {/* Additional Glow Effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-yellow-400/5 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-purple-400/5 to-transparent" />
      </div>
      
      {/* Enhanced Animated Particles */}
      <div className="absolute inset-0 z-20">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              background: i % 3 === 0 ? 'rgba(234, 179, 8, 0.6)' : i % 3 === 1 ? 'rgba(147, 51, 234, 0.4)' : 'rgba(255, 255, 255, 0.3)',
            }}
            animate={{
              y: [-20, -120],
              x: [0, Math.random() * 40 - 20],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
      




      {/* Content */}
      <div className="relative z-30 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-4 tracking-wider leading-tight relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          {/* Glowing text effect */}
          <span className="relative z-10">
            <span className="text-white">DJ</span>
            <span className="text-yellow-400 ml-2 md:ml-4">NEXUS</span>
          </span>
          
          {/* Text shadow/glow effect */}
          <motion.div
            className="absolute inset-0 text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-wider leading-tight text-yellow-400/20 blur-sm"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            DJ NEXUS
          </motion.div>
        </motion.h1>
        
        {/* Hip-hop subtitle */}
        <motion.div
          className="flex items-center justify-center gap-1 md:gap-2 mb-4 flex-wrap"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Disc3 className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" />
          <span className="text-yellow-400 text-sm md:text-lg font-semibold tracking-widest px-2">HIP-HOP SPECIALIST</span>
          <Disc3 className="w-4 h-4 md:w-6 md:h-6 text-yellow-400" />
        </motion.div>
        
        {/* Vinyl Graphics Subtitle */}
        <motion.div
          className="flex items-center justify-center gap-2 md:gap-4 mb-6 md:mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          {/* Left Vinyl */}
          <motion.div
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full relative overflow-hidden shadow-lg"
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            style={{
              background: 'radial-gradient(circle at 30% 30%, #2a2a2a 0%, #1a1a1a 40%, #0a0a0a 100%)',
              boxShadow: '0 0 20px rgba(234, 179, 8, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.6)'
            }}
          >
            {/* Vinyl base color */}
            <div className="absolute inset-0 bg-black" />
            
            {/* Realistic vinyl grooves */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full"
                style={{
                  margin: `${i * 1.5}px`,
                  border: `1px solid ${i % 2 === 0 ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.04)'}`,
                }}
              />
            ))}
            
            {/* Center hole */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-black rounded-full border border-gray-600" />
            
            {/* Vinyl shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-30" />
          </motion.div>

          {/* Center Text */}
          <motion.div
            className="flex items-center gap-1 md:gap-2 text-yellow-400 text-sm md:text-base lg:text-lg font-semibold tracking-wider"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span>PRODUCER</span>
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-yellow-400 rounded-full" />
            <span>TURNTABLE</span>
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-yellow-400 rounded-full" />
            <span>MASTER</span>
          </motion.div>

          {/* Right Vinyl */}
          <motion.div
            className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 rounded-full relative overflow-hidden shadow-lg"
            animate={{ rotate: -360 }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            style={{
              background: 'radial-gradient(circle at 70% 30%, #1a1a1a 0%, #0a0a0a 60%, #000000 100%)',
              boxShadow: '0 0 20px rgba(147, 51, 234, 0.2), inset 0 0 20px rgba(0, 0, 0, 0.6)'
            }}
          >
            {/* Vinyl base color */}
            <div className="absolute inset-0 bg-black" />
            
            {/* Realistic vinyl grooves */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 rounded-full"
                style={{
                  margin: `${i * 1.5}px`,
                  border: `1px solid ${i % 2 === 0 ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.04)'}`,
                }}
              />
            ))}
            
            {/* Center hole */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-2 h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-black rounded-full border border-gray-600" />
            
            {/* Vinyl shine effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent opacity-30" />
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="relative"
        >
          {/* Animated DJ Button */}
          <motion.div
            className="relative inline-block group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {/* Pulsing sound waves background */}
            <div className="absolute inset-0 -m-2 md:-m-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-white/20 rounded-full"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.5, 0, 0.5]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.4
                  }}
                />
              ))}
            </div>
            
            <motion.div
              whileHover={{ 
                scale: 1.05,
                y: -5,
                rotateY: 5
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ 
                type: "spring", 
                stiffness: 400, 
                damping: 25 
              }}
            >
              <Button 
                size="lg" 
                onClick={handleBookNowClick}
                className="relative bg-white text-black hover:bg-white/90 px-6 sm:px-8 md:px-12 py-4 md:py-6 text-base md:text-lg rounded-full border-4 border-white/20 overflow-hidden group-hover:border-white/60 transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:shadow-3xl"
              >
              {/* Vinyl record spinning animation */}
              <motion.div
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-black/20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black/40 rounded-full" />
              </motion.div>
              
              {/* Sound bars animation */}
              <div className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 flex gap-0.5 md:gap-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-0.5 md:w-1 bg-black/40 rounded-full"
                    animate={{
                      height: [6, 16, 6]
                    }}
                    transition={{
                      duration: 0.8,
                      repeat: Infinity,
                      delay: i * 0.1
                    }}
                  />
                ))}
              </div>
              
              {/* Main text with icon */}
              <div className="flex items-center gap-2 md:gap-3 relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 1.5 }}
                >
                  <Play className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                </motion.div>
                <span className="font-black tracking-wider text-sm md:text-base">BOOK ME NOW</span>
              </div>
              
              {/* Glowing overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{
                  x: ['0%', '200%']
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
            </Button>
            </motion.div>
            
            {/* Floating music notes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white/40 text-lg md:text-xl"
                  style={{
                    left: `${10 + Math.random() * 80}%`,
                    top: `${10 + Math.random() * 80}%`,
                  }}
                  animate={{
                    y: [-10, -30, -10],
                    rotate: [-10, 10, -10],
                    opacity: [0, 0.6, 0]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5
                  }}
                >
                  ♪
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Discover More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-8 md:mt-12"
        >
          <motion.div
            className="relative inline-block group"
            whileHover={{ 
              scale: 1.08,
              y: -8,
              rotateZ: 2
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ 
              type: "spring", 
              stiffness: 300, 
              damping: 20 
            }}
          >
            {/* Pulsing background rings */}
            <div className="absolute inset-0 -m-4">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-white/20 rounded-full"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.3, 0, 0.3]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.8
                  }}
                />
              ))}
            </div>

            <Button 
              variant="outline"
              size="lg" 
              onClick={handleDiscoverMoreClick}
              className="relative bg-gradient-to-r from-white/10 via-white/5 to-white/10 text-white hover:from-white/30 hover:via-white/15 hover:to-white/30 px-10 md:px-12 py-5 md:py-6 text-base md:text-lg rounded-full border-2 border-white/40 overflow-hidden group-hover:border-white/80 transition-all duration-500 backdrop-blur-md shadow-2xl hover:shadow-white/30 hover:shadow-2xl"
            >
              {/* Enhanced animated arrow icon */}
              <motion.div
                className="absolute right-4 top-1/2 -translate-y-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <svg className="w-6 h-6 md:w-7 md:h-7 text-white drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                  {/* Arrow glow effect */}
                  <div className="absolute inset-0 w-6 h-6 md:w-7 md:h-7 bg-white/20 rounded-full blur-sm" />
                </div>
              </motion.div>
              
              {/* Enhanced main text with icon */}
              <div className="flex items-center gap-3 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </motion.div>
                <span className="font-bold tracking-widest text-lg md:text-xl">DISCOVER MORE</span>
              </div>
              
              {/* Enhanced glowing overlay */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full"
                animate={{
                  x: ['0%', '200%']
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatDelay: 3
                }}
              />
              
              {/* Additional shine effect */}
              <motion.div
                className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-transparent opacity-60"
                animate={{
                  opacity: [0.6, 0.2, 0.6]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity
                }}
              />
            </Button>

            {/* Floating particles around button */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-yellow-400/60 rounded-full"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                  }}
                  animate={{
                    y: [-5, 5, -5],
                    x: [-5, 5, -5],
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0]
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 0.6
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}