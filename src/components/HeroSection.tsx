import React from 'react'
import { motion } from 'motion/react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Play, Music, Headphones, Disc3, Volume2, Pause } from 'lucide-react'
import { useState, useRef } from 'react'

export function HeroSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentSong, setCurrentSong] = useState(0)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  
  // Sample songs - you can replace with actual audio files
  const songs = [
    { title: "Hip-Hop Beat", url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
    { title: "Electronic Mix", url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" },
    { title: "Club Anthem", url: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav" }
  ]

  const handleVinylClick = () => {
    if (isPlaying) {
      // Stop current song
      if (audioRef.current) {
        audioRef.current.pause()
        audioRef.current.currentTime = 0
      }
      setIsPlaying(false)
    } else {
      // Play song
      if (audioRef.current) {
        audioRef.current.play()
        setIsPlaying(true)
      }
    }
  }

  const handleNextSong = () => {
    setCurrentSong((prev) => (prev + 1) % songs.length)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }

  const handlePreviousSong = () => {
    setCurrentSong((prev) => (prev - 1 + songs.length) % songs.length)
    if (audioRef.current) {
      audioRef.current.currentTime = 0
      if (isPlaying) {
        audioRef.current.play()
      }
    }
  }

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
    <section className="relative h-screen overflow-hidden">
      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={songs[currentSong].url}
        onEnded={() => setIsPlaying(false)}
        onError={() => setIsPlaying(false)}
      />

      {/* Background Layers */}
      <div className="absolute inset-0 z-0">
        {/* Parallax Background */}
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1625474144048-600a7d0c27cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXAlMjBob3AlMjBzdHVkaW8lMjBtaWNyb3Bob25lJTIwZGFya3xlbnwxfHx8fDE3NTY0ODc1MjV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 20, repeat: Infinity, repeatType: 'reverse' }}
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black/90" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(234, 179, 8, 0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>

      {/* Interactive Vinyl - Positioned below buttons */}
      <div className="absolute left-1/2 bottom-8 -translate-x-1/2 z-10">
        <motion.div
          className="relative cursor-pointer group"
          onClick={handleVinylClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Vinyl SVG */}
          <motion.svg
            className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 xl:w-72 xl:h-72"
            animate={{ rotate: isPlaying ? 360 : 0 }}
            transition={{ 
              duration: isPlaying ? 30 : 0, 
              repeat: isPlaying ? Infinity : 0, 
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
            
            {/* Vinyl Grooves */}
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
            
            {/* Gradients */}
            <defs>
              <radialGradient id="vinylGradient">
                <stop offset="0%" stopColor="#1a1a1a" />
                <stop offset="30%" stopColor="#0a0a0a" />
                <stop offset="70%" stopColor="#000000" />
                <stop offset="100%" stopColor="#000000" />
              </radialGradient>
              
              <radialGradient id="labelGradient">
                <stop offset="0%" stopColor="#2a2a2a" />
                <stop offset="100%" stopColor="#1a1a1a" />
              </radialGradient>
            </defs>
          </motion.svg>

          {/* Play/Stop Controls Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="bg-black/80 backdrop-blur-md rounded-full p-4 md:p-6 border-2 border-white/20">
              {isPlaying ? (
                <Pause className="w-8 h-8 md:w-12 md:h-12 text-white" />
              ) : (
                <Play className="w-8 h-8 md:w-12 md:h-12 text-white" />
              )}
            </div>
          </div>

          {/* Song Info Overlay */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 bg-black/80 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="flex items-center gap-3 text-white text-sm">
              <button
                onClick={(e) => { e.stopPropagation(); handlePreviousSong(); }}
                className="hover:text-yellow-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <span className="font-medium">{songs[currentSong].title}</span>
              <button
                onClick={(e) => { e.stopPropagation(); handleNextSong(); }}
                className="hover:text-yellow-400 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Sound Waves when Playing */}
          {isPlaying && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border border-yellow-400/30 rounded-full"
                  animate={{
                    scale: [1, 2.5],
                    opacity: [0.8, 0]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.2
                  }}
                />
              ))}
            </div>
          )}
        </motion.div>
      </div>

      {/* Main Content - Centered */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 max-w-6xl mx-auto">
        {/* Main Title */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-wider leading-tight">
            <span className="text-white">DJ</span>
            <span className="text-yellow-400 ml-2 md:ml-4">NEXUS</span>
          </h1>
          
          {/* Glow Effect */}
          <motion.div
            className="absolute inset-0 text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black tracking-wider leading-tight text-yellow-400/20 blur-sm"
            animate={{ opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            DJ NEXUS
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 md:gap-3 mb-4">
            <Disc3 className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
            <span className="text-yellow-400 text-base md:text-lg font-semibold tracking-widest px-2">HIP-HOP SPECIALIST</span>
            <Disc3 className="w-5 h-5 md:w-6 md:h-6 text-yellow-400" />
          </div>
          
          <div className="flex items-center justify-center gap-2 md:gap-4">
            <span className="text-white/80 text-sm md:text-base">PRODUCER</span>
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-yellow-400 rounded-full" />
            <span className="text-white/80 text-sm md:text-base">TURNTABLE</span>
            <div className="w-1 h-1 md:w-1.5 md:h-1.5 bg-yellow-400 rounded-full" />
            <span className="text-white/80 text-sm md:text-base">MASTER</span>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4 md:gap-6 mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.9 }}
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
              className="relative bg-white text-black hover:bg-white/90 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-full border-4 border-white/20 overflow-hidden group-hover:border-white/60 transition-all duration-300 shadow-2xl hover:shadow-white/30 hover:shadow-3xl"
            >
              {/* Vinyl record spinning animation */}
              <motion.div
                className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 rounded-full border-4 border-black/20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-black/40 rounded-full" />
              </motion.div>
              
              {/* Sound bars animation */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-0.5 md:gap-1">
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
                  <Play className="w-5 h-5 md:w-6 md:h-6 fill-current" />
                </motion.div>
                <span className="font-black tracking-wider text-base md:text-lg">BOOK ME NOW</span>
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
              className="relative bg-gradient-to-r from-white/10 via-white/5 to-white/10 text-white hover:from-white/20 hover:via-white/10 hover:to-white/20 px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl rounded-full border-2 border-white/40 overflow-hidden group-hover:border-white/60 transition-all duration-500 backdrop-blur-md shadow-2xl hover:shadow-white/30 hover:shadow-2xl"
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
          </motion.div>
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
      </div>

      {/* Animated Particles Background */}
      <div className="absolute inset-0 z-5 pointer-events-none">
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
    </section>
  )
}