"use client"

import { useState, useEffect } from 'react'
import { Timer, Menu, X } from 'lucide-react'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [mobileMenu, setMobileMenu] = useState(false)
    const [timeLeft, setTimeLeft] = useState("")

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Countdown timer
    useEffect(() => {
        const savedEnd = localStorage.getItem('countdown-end')
        let endTime: number

        if (savedEnd) {
            endTime = parseInt(savedEnd)
        } else {
            endTime = Date.now() + (12 * 60 * 60 * 1000)
            localStorage.setItem('countdown-end', endTime.toString())
        }

        const update = () => {
            const remaining = endTime - Date.now()

            if (remaining <= 0) {
                const newEndTime = Date.now() + (12 * 60 * 60 * 1000)
                localStorage.setItem('countdown-end', newEndTime.toString())
                return
            }

            const h = Math.floor(remaining / (60 * 60 * 1000)).toString().padStart(2, '0')
            const m = Math.floor((remaining % (60 * 60 * 1000)) / (60 * 1000)).toString().padStart(2, '0')
            const s = Math.floor((remaining % (60 * 1000)) / 1000).toString().padStart(2, '0')
            setTimeLeft(`${h}:${m}:${s}`)
        }

        update()
        const interval = setInterval(update, 1000)
        return () => clearInterval(interval)
    }, [])

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id)
        element?.scrollIntoView({ behavior: 'smooth' })
        setMobileMenu(false)
    }

    return (
        <>
            <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur shadow-lg' : 'bg-gradient-to-r from-emerald-600 to-emerald-500'
                }`}>
                {/* Top urgency bar – alleen zichtbaar als niet gescrold */}
                {!scrolled && (
                    <div className="bg-black/20 text-white py-2 text-center text-xs sm:text-sm font-medium">
                        <Timer className="inline w-4 h-4 animate-pulse mr-2" />
                        Speciale introductieprijs eindigt over: <span className="font-bold">{timeLeft}</span>
                        {' → '}
                        <span className="underline">2.847 mannen gingen je voor</span>
                    </div>
                )}

                {/* Main nav */}
                <div className="px-4 py-4">
                    <div className="max-w-7xl mx-auto flex items-center justify-between">
                        {/* Logo */}
                        <h1 className={`text-xl sm:text-2xl font-black ${scrolled ? 'text-emerald-600' : 'text-white'}`}>
                            FOLLICLE
                        </h1>

                        {/* Desktop menu */}
                        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
                            <button onClick={() => scrollToSection('ingredienten')} className={`${scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'} font-medium transition`}>
                                Ingrediënten
                            </button>
                            <button onClick={() => scrollToSection('wetenschap')} className={`${scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'} font-medium transition`}>
                                Wetenschap
                            </button>
                            <button onClick={() => scrollToSection('reviews')} className={`${scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'} font-medium transition`}>
                                Reviews
                            </button>
                            <button onClick={() => scrollToSection('faq')} className={`${scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'} font-medium transition`}>
                                FAQ
                            </button>
                            <button onClick={() => scrollToSection('prijzen')} className="bg-white text-emerald-600 px-6 py-3 rounded-full font-bold hover:bg-gray-100 transition shadow-lg cursor-pointer">
                                Bestel Nu
                            </button>
                        </nav>

                        {/* Mobile menu button */}
                        <button
                            onClick={() => setMobileMenu(!mobileMenu)}
                            className={`md:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
                        >
                            {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>

                {/* Mobile dropdown menu */}
                {mobileMenu && (
                    <div className="md:hidden bg-white border-t">
                        <div className="px-4 py-6 space-y-4">
                            <button onClick={() => scrollToSection('ingredienten')} className="block w-full text-left text-lg font-medium text-gray-800">
                                Ingrediënten
                            </button>
                            <button onClick={() => scrollToSection('wetenschap')} className="block w-full text-left text-lg font-medium text-gray-800">
                                Wetenschap
                            </button>
                            <button onClick={() => scrollToSection('reviews')} className="block w-full text-left text-lg font-medium text-gray-800">
                                Reviews
                            </button>
                            <button onClick={() => scrollToSection('faq')} className="block w-full text-left text-lg font-medium text-gray-800">
                                FAQ
                            </button>
                            <button onClick={() => scrollToSection('prijzen')} className="block bg-emerald-600 text-white text-center py-4 rounded-xl font-bold text-lg w-full">
                                Bestel Nu
                            </button>
                        </div>
                    </div>
                )}
            </header>

            {/* Spacer zodat content niet onder header verdwijnt */}
            <div className={scrolled ? "h-20" : "h-28"} />
        </>
    )
}
