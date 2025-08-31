import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Button } from './ui/button'
import { Play, ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'

export function HeroSection() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time and hide loader
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500) // 2.5 seconds loading time

    return () => clearTimeout(timer)
  }, [])

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
    <>
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            className="fixed inset-0 z-50 bg-black flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
          >
            {/* Loading Content */}
            <div className="text-center">
              {/* DJ Logo/Icon */}
              <motion.div
                className="mb-8"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
              >
                <div className="w-24 h-24 md:w-32 md:h-32 mx-auto bg-gradient-to-br from-purple-600 via-pink-600 to-yellow-500 rounded-full flex items-center justify-center shadow-2xl">
                  <span className="text-4xl md:text-6xl font-black text-white">DJ</span>
                </div>
              </motion.div>

              {/* Loading Text */}
              <motion.h2
                className="text-3xl md:text-5xl font-bold text-white mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                DJ NEXUS
              </motion.h2>

              {/* Loading Bar */}
              <div className="w-64 md:w-80 h-2 bg-white/20 rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-500 rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>

              {/* Loading Dots */}
              <motion.div
                className="flex justify-center gap-2 mt-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
              >
                {[...Array(3)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-3 h-3 bg-white rounded-full"
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.5, 1, 0.5]
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
              </motion.div>

              {/* Loading Message */}
              <motion.p
                className="text-white/70 mt-6 text-lg"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
              >
                Loading the beat...
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <section className="relative h-screen overflow-hidden">
      {/* Background Video with YouTube Reference */}
      <div className="absolute inset-0 z-0">
        {/* Main Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1625474144048-600a7d0c27cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBzdHVkaW8lMjBtaWNyb3Bob25lJTIwZGFya3xlbnwxfHx8fDE3NTY0ODc1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        />
        
        {/* Enhanced Video Overlay with DJ Theme */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        
        {/* Animated Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
        
        {/* Additional Visual Effects */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-yellow-500/10" />
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 max-w-6xl mx-auto text-center">
        {/* Main Title */}
        <motion.div
          className="mb-12 relative"
          initial={{ opacity: 0, y: 80, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -5, 0] // Subtle floating effect
          }}
          transition={{ 
            duration: 1.5, 
            delay: 0.2,
            ease: [0.25, 0.46, 0.45, 0.94], // Custom easing curve
            y: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }
          }}
        >
          {/* Single DJ NEXUS Title with Grey Glow */}
          <motion.h1 
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-wider leading-tight text-white mb-6 relative z-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            DJ NEXUS
          </motion.h1>
          
          {/* Grey Glow Effect */}
          <motion.div
            className="absolute inset-0 text-6xl sm:text-7xl md:text-8xl lg:text-9xl xl:text-[10rem] font-black tracking-wider leading-tight text-gray-400/30 blur-sm"
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ 
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.05, 1]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            DJ NEXUS
          </motion.div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-8 md:gap-12 mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
        >
          {/* BOOK ME NOW Button */}
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
              className="relative bg-white text-black hover:bg-white/90 px-16 md:px-20 lg:px-24 py-6 md:py-8 lg:py-10 text-2xl md:text-3xl lg:text-4xl rounded-full border-4 border-white/20 overflow-hidden group-hover:border-white/60 transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:shadow-3xl font-black tracking-wider"
            >
              {/* Vinyl record spinning animation */}
              <motion.div
                className="absolute left-8 md:left-10 lg:left-12 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 lg:w-14 lg:h-14 rounded-full border-4 border-black/20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-3 h-3 md:w-4 md:h-4 bg-black/40 rounded-full" />
              </motion.div>
              
              {/* Sound bars animation */}
              <div className="absolute right-8 md:right-10 lg:right-12 top-1/2 -translate-y-1/2 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1.5 md:w-2 bg-black/40 rounded-full"
                    animate={{
                      height: [12, 24, 12]
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
              <div className="flex items-center gap-3 relative z-10">
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, delay: 1.5 }}
                >
                  <Play className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 fill-current" />
                </motion.div>
                <span className="font-black tracking-wider">BOOK ME NOW</span>
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

          {/* DISCOVER MORE Button */}
          <motion.div
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
            <Button 
              variant="outline"
              size="lg" 
              onClick={handleDiscoverMoreClick}
              className="relative bg-gradient-to-r from-white/10 via-white/5 to-white/10 text-white hover:from-white/20 hover:via-white/10 hover:to-white/20 px-16 md:px-20 lg:px-24 py-6 md:py-8 lg:py-10 text-2xl md:text-3xl lg:text-4xl rounded-full border-2 border-white/40 overflow-hidden group-hover:border-white/60 transition-all duration-500 backdrop-blur-md shadow-2xl hover:shadow-white/30 hover:shadow-2xl font-bold tracking-widest"
            >
              {/* Enhanced animated arrow icon */}
              <motion.div
                className="absolute right-8 md:right-10 lg:right-12 top-1/2 -translate-y-1/2"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="relative">
                  <ArrowDown className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 text-white drop-shadow-lg" />
                  {/* Arrow glow effect */}
                  <div className="absolute inset-0 w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 bg-white/20 rounded-full blur-sm" />
                </div>
              </motion.div>
              
              {/* Enhanced main text with icon */}
              <div className="flex items-center gap-3 relative z-10">
                <motion.div
                  animate={{ rotate: [0, 5, 0, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                </motion.div>
                <span className="font-bold tracking-widest">DISCOVER MORE</span>
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
          </motion.div>
        </motion.div>

        {/* Floating music notes */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-white/30 text-2xl md:text-3xl"
              style={{
                left: `${10 + Math.random() * 80}%`,
                top: `${10 + Math.random() * 80}%`,
              }}
              animate={{
                y: [-20, -60, -20],
                rotate: [-15, 15, -15],
                opacity: [0, 0.8, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                delay: i * 0.5
              }}
            >
              ♪
            </motion.div>
          ))}
        </div>
      </div>

      {/* Animated Particles Background */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${1 + Math.random() * 4}px`,
              height: `${1 + Math.random() * 4}px`,
              background: i % 3 === 0 ? 'rgba(234, 179, 8, 0.6)' : i % 3 === 1 ? 'rgba(147, 51, 234, 0.4)' : 'rgba(255, 255, 255, 0.3)',
            }}
            animate={{
              y: [-30, -150],
              x: [0, Math.random() * 60 - 30],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 4,
              ease: "easeOut",
            }}
          />
        ))}
      </div>
    </section>
    </>
  )
}