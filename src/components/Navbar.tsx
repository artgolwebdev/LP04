import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, Music } from 'lucide-react'

const navLinks = [
    { name: 'HOME', href: '#' },
    { name: 'MUSIC', href: '#music-section' },
    { name: 'ABOUT', href: '#about-section' },
    { name: 'BOOKING', href: '#booking-section' },
    { name: 'CONTACT', href: '#contact-section' },
]

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement> | React.TouchEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault()

        // On mobile, close menu first then scroll with a tiny delay to ensure smooth transition
        const isMobile = window.innerWidth < 768
        if (isMobile) {
            setIsOpen(false)
        }

        const id = href.replace('#', '')
        const scroll = () => {
            if (id === '') {
                window.scrollTo({ top: 0, behavior: 'smooth' })
            } else {
                const element = document.getElementById(id)
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }
            }
        }

        if (isMobile) {
            setTimeout(scroll, 300) // Small delay to let menu close animation start
        } else {
            scroll()
        }
    }

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-md py-4' : 'bg-transparent py-6'
                }`}
        >
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                {/* Logo */}
                <motion.a
                    href="#"
                    onClick={(e) => scrollToSection(e, '#')}
                    className="flex items-center gap-2 group"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                >
                    <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-purple-500 transition-colors duration-300">
                        <Music className="w-6 h-6 text-black group-hover:text-white transition-colors duration-300" />
                    </div>
                    <span className="text-xl font-black tracking-tighter text-white">NEXUS</span>
                </motion.a>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link, i) => (
                        <motion.a
                            key={link.name}
                            href={link.href}
                            onClick={(e) => scrollToSection(e, link.href)}
                            className="text-sm font-bold tracking-widest text-white/70 hover:text-white transition-colors"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            {link.name}
                        </motion.a>
                    ))}
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-white p-2"
                    >
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-6">
                            {navLinks.map((link, i) => (
                                <motion.a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => scrollToSection(e, link.href)}
                                    className="text-2xl font-black tracking-tighter text-white hover:text-purple-400 transition-colors"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                >
                                    {link.name}
                                </motion.a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    )
}
