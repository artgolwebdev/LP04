import { motion, useScroll, useTransform } from 'motion/react'
import { useRef } from 'react'

const images = [
  {
    url: 'https://images.unsplash.com/photo-1702087277678-5eab7d115668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbHViJTIwY29uY2VydCUyMGNyb3dkfGVufDF8fHx8MTc1NjQ4NzExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Neon Nights Festival',
    date: '2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1610900538035-b04c4d957d9f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXNpYyUyMGZlc3RpdmFsJTIwc3RhZ2V8ZW58MXx8fHwxNzU2NDY4MDU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Summer Stage',
    date: '2024'
  },
  {
    url: 'https://images.unsplash.com/photo-1591648695298-bfc0f75d1082?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaiUyMHR1cm50YWJsZXMlMjB2aW55bHxlbnwxfHx8fDE3NTY0ODcxMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Underground Sessions',
    date: '2023'
  },
  {
    url: 'https://images.unsplash.com/photo-1551288449-085e5252e44e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVjdHJvbmljJTIwbXVzaWMlMjBzdHVkaW98ZW58MXx8fHwxNzU2MzgyMDgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    title: 'Studio Sessions',
    date: '2023'
  }
]

export function ImageSlider() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  })

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%'])

  return (
    <section id="slider-section" ref={containerRef} className="py-20 bg-black text-white overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-6xl font-black text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          PAST GIGS
        </motion.h2>

        <motion.div
          className="flex gap-8 w-[200%]"
          style={{ x }}
        >
          {[...images, ...images].map((image, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-80 h-96 relative rounded-lg overflow-hidden group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${image.url})` }}
              />
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-xl font-semibold mb-2">{image.title}</h3>
                <p className="text-sm opacity-75">{image.date}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}