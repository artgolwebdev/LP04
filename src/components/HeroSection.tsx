import { motion } from 'motion/react'
import { Button } from './ui/button'
import { ImageWithFallback } from './figma/ImageWithFallback'
import { Play, Music, Headphones, Disc3, Volume2 } from 'lucide-react'
import { useState } from 'react'

export function HeroSection() {
  const [isVinylPlaying, setIsVinylPlaying] = useState(false)
  const [vinylClicks, setVinylClicks] = useState(0)

  const handleVinylClick = () => {
    setIsVinylPlaying(!isVinylPlaying)
    setVinylClicks(prev => prev + 1)
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
      
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-10" />
      
      {/* Animated Particles */}
      <div className="absolute inset-0 z-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [-20, -100],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Interactive Vinyl Records */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 z-25 hidden lg:block">
        <motion.div
          className="relative cursor-pointer group"
          onClick={handleVinylClick}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Vinyl Record */}
          <motion.div
            className="w-32 h-32 rounded-full bg-gradient-to-br from-gray-900 via-gray-800 to-black border-4 border-gray-700 relative overflow-hidden shadow-2xl"
            animate={isVinylPlaying ? { rotate: 360 } : { rotate: 0 }}
            transition={isVinylPlaying ? { duration: 2, repeat: Infinity, ease: "linear" } : { duration: 0.5 }}
          >
            {/* Vinyl grooves */}
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0 border border-gray-600/30 rounded-full"
                style={{
                  margin: `${i * 6}px`,
                }}
              />
            ))}
            
            {/* Center label */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-red-600 rounded-full flex items-center justify-center border-2 border-yellow-400">
              <div className="w-2 h-2 bg-black rounded-full" />
            </div>
            
            {/* Hip-hop label text */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16">
              <motion.div
                className="absolute inset-0 flex items-center justify-center text-xs font-black text-white/80"
                animate={isVinylPlaying ? { rotate: -360 } : { rotate: 0 }}
                transition={isVinylPlaying ? { duration: 2, repeat: Infinity, ease: "linear" } : { duration: 0.5 }}
              >
                <span className="transform -rotate-45 text-center leading-tight">HIP<br/>HOP</span>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Sound waves when playing */}
          {isVinylPlaying && (
            <div className="absolute inset-0 -m-8">
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute inset-0 border-2 border-yellow-400/30 rounded-full"
                  animate={{
                    scale: [1, 2],
                    opacity: [0.6, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.3
                  }}
                />
              ))}
            </div>
          )}
          
          {/* Play/Stop indicator */}
          <motion.div
            className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/80 text-sm"
            animate={{ opacity: [0.6, 1, 0.6] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="flex items-center gap-2">
              {isVinylPlaying ? (
                <>
                  <Volume2 className="w-4 h-4" />
                  <span>Playing</span>
                </>
              ) : (
                <>
                  <Play className="w-4 h-4" />
                  <span>Click to play</span>
                </>
              )}
            </div>
            {vinylClicks > 0 && (
              <motion.div
                className="text-xs text-yellow-400"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring" }}
              >
                Spins: {vinylClicks}
              </motion.div>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Second Vinyl on the right */}
      <div className="absolute right-8 top-1/3 z-25 hidden xl:block">
        <motion.div
          className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-900 via-purple-800 to-black border-4 border-purple-700 relative overflow-hidden shadow-2xl"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        >
          {/* Vinyl grooves */}
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="absolute inset-0 border border-purple-500/20 rounded-full"
              style={{
                margin: `${i * 4}px`,
              }}
            />
          ))}
          
          {/* Center */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-yellow-500 rounded-full flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-black rounded-full" />
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-30 text-center text-white px-4">
        <motion.h1
          className="text-6xl md:text-8xl font-black mb-4 tracking-wider"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          DJ NEXUS
        </motion.h1>
        
        {/* Hip-hop subtitle */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Disc3 className="w-6 h-6 text-yellow-400" />
          <span className="text-yellow-400 text-lg font-semibold tracking-widest">HIP-HOP SPECIALIST</span>
          <Disc3 className="w-6 h-6 text-yellow-400" />
        </motion.div>
        
        <motion.p
          className="text-xl md:text-2xl mb-8 opacity-90"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          Hip-Hop Producer & Turntable Master
        </motion.p>
        
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
            <div className="absolute inset-0 -m-4">
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
            
            <Button 
              size="lg" 
              className="relative bg-white text-black hover:bg-white/90 px-12 py-6 text-lg rounded-full border-4 border-white/20 overflow-hidden group-hover:border-white/40 transition-all duration-300"
            >
              {/* Vinyl record spinning animation */}
              <motion.div
                className="absolute left-4 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full border-4 border-black/20 flex items-center justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              >
                <div className="w-2 h-2 bg-black/40 rounded-full" />
              </motion.div>
              
              {/* Sound bars animation */}
              <div className="absolute right-4 top-1/2 -translate-y-1/2 flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="w-1 bg-black/40 rounded-full"
                    animate={{
                      height: [8, 20, 8]
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
                  <Play className="w-5 h-5 fill-current" />
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
            
            {/* Floating music notes */}
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-white/40 text-xl"
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
      </div>
    </section>
  )
}