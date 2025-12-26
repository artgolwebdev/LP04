import React from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { Play, ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'
import { LoadingScreen } from './LoadingScreen'

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1500) // Reduced to 1.5 seconds

    return () => clearTimeout(timer)
  }, [])

  const handleBookNowClick = () => {
    const bookingSection = document.getElementById('booking-section')
    if (bookingSection) {
      bookingSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const handleDiscoverMoreClick = () => {
    const aboutSection = document.getElementById('about-section')
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  return (
    <>
      <LoadingScreen isLoading={isLoading} />

      <section className="relative h-screen overflow-hidden bg-black">
        {/* Background Video/Image Container */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-[10s] hover:scale-110"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1625474144048-600a7d0c27cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBzdHVkaW8lMjBtaWNyb3Bob25lJTIwZGFya3xlbnwxfHx8fDE3NTY0ODc1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            }}
          />

          {/* Enhanced Overlays */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90" />
          <div className="absolute inset-0 bg-gradient-to-r from-purple-900/20 via-transparent to-yellow-900/20" />

          {/* Subtle Noise Texture */}
          <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: `url('https://grainy-gradients.vercel.app/noise.svg')` }} />

          {/* Animated Grid Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.4) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 max-w-7xl mx-auto text-center">
          <motion.div
            className="mb-16 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            {/* Main Title with Enhanced Glow */}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-black tracking-tighter leading-none text-white relative z-10 drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
              DJ NEXUS
            </h1>

            {/* Layered Glow Effects */}
            <motion.div
              className="absolute inset-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-black tracking-tighter leading-none text-purple-500/20 blur-xl"
              animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.02, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              DJ NEXUS
            </motion.div>
            <motion.div
              className="absolute inset-0 text-5xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[11rem] font-black tracking-tighter leading-none text-yellow-500/10 blur-[30px]"
              animate={{ opacity: [0.2, 0.4, 0.2], scale: [1.02, 1, 1.02] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              DJ NEXUS
            </motion.div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center gap-6 md:gap-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {/* BOOK ME NOW Button */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                size="lg"
                onClick={handleBookNowClick}
                className="relative bg-white text-black hover:bg-gray-100 px-10 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10 text-lg sm:text-xl md:text-2xl rounded-full overflow-hidden transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.2)] hover:shadow-[0_0_50px_rgba(255,255,255,0.4)] font-black tracking-tight group"
              >
                <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                  <Play className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 fill-current" />
                  <span>BOOK ME NOW</span>
                </div>

                {/* Shine Animation */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -translate-x-full"
                  animate={{ x: ['100%', '-100%'] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3, ease: "linear" }}
                />
              </Button>
            </motion.div>

            {/* DISCOVER MORE Button */}
            <motion.div
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button
                variant="outline"
                size="lg"
                onClick={handleDiscoverMoreClick}
                className="relative bg-black/20 backdrop-blur-xl text-white hover:bg-white/10 px-10 sm:px-12 md:px-16 py-6 sm:py-8 md:py-10 text-lg sm:text-xl md:text-2xl rounded-full border-2 border-white/30 overflow-hidden transition-all duration-300 font-bold tracking-tight shadow-xl group"
              >
                <div className="flex items-center gap-3 sm:gap-4 relative z-10">
                  <span>DISCOVER MORE</span>
                  <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 group-hover:translate-y-1 transition-transform" />
                </div>
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Floating music notes - Reduced and refined */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/20 text-xl md:text-2xl"
              style={{
                left: `${15 + Math.random() * 70}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
              animate={{
                y: [0, -40, 0],
                opacity: [0, 0.5, 0],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 5 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 1.2,
                ease: "easeInOut"
              }}
            >
              ♪
            </motion.div>
          ))}
        </div>

        {/* Particles refined */}
        <div className="absolute inset-0 z-5 pointer-events-none">
          {[...Array(25)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                width: `${1 + Math.random() * 2}px`,
                height: `${1 + Math.random() * 2}px`,
                background: i % 2 === 0 ? 'rgba(234, 179, 8, 0.4)' : 'rgba(255, 255, 255, 0.2)',
              }}
              animate={{
                y: [0, -100],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 4 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>
      </section>
    </>
  )
}