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
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/95 backdrop-blur-lg shadow-md' : ''}`}>
            {/* Urgency bar – altijd boven */}
            <div className="bg-emerald-600 text-white py-3 text-center text-sm font-medium">
                <Timer className="inline w-4 h-4 mr-2 animate-pulse" />
                Speciale introductieprijs eindigt over: <span className="font-bold">{timeLeft}</span> → 2.847 mannen gingen je voor vandaag
            </div>

            {/* Main nav */}
            <div className="px-6 py-5">
                <div className="max-w-7xl mx-auto flex items-center justify-between">
                    {/* Logo – altijd zichtbaar, kleur switch bij scroll */}
                    <h1 className={`text-2xl sm:text-3xl font-black tracking-tighter transition-colors ${scrolled ? 'text-emerald-600' : 'text-white'}`}>
                        FOLLICLE
                    </h1>

                    {/* Desktop menu */}
                    <nav className="hidden lg:flex items-center gap-10">
                        {['Ingrediënten', 'Wetenschap', 'Reviews', 'FAQ'].map((item) => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className={`font-medium transition ${scrolled ? 'text-gray-700 hover:text-emerald-600' : 'text-white/90 hover:text-white'}`}
                            >
                                {item}
                            </button>
                        ))}
                    </nav>

                    {/* Bestel Nu button – WITTE button met emerald tekst (nooit groen-op-groen) */}
                    <button
                        onClick={() => scrollToSection('prijzen')}
                        className={`font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-full transition-all transform hover:scale-105 shadow-lg hover:shadow-xl cursor-pointer ${scrolled
                                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                                : 'bg-white text-emerald-600 hover:bg-gray-50'
                            }`}
                    >
                        Bestel Nu →
                    </button>

                    {/* Mobile menu button */}
                    <button
                        onClick={() => setMobileMenu(!mobileMenu)}
                        className={`lg:hidden ${scrolled ? 'text-gray-700' : 'text-white'}`}
                    >
                        {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile dropdown */}
            {mobileMenu && (
                <div className="lg:hidden bg-white border-t shadow-lg">
                    <div className="px-6 py-6 space-y-4">
                        {['Ingrediënten', 'Wetenschap', 'Reviews', 'FAQ'].map(item => (
                            <button
                                key={item}
                                onClick={() => scrollToSection(item.toLowerCase())}
                                className="block w-full text-left text-lg font-medium text-gray-800 hover:text-emerald-600 transition"
                            >
                                {item}
                            </button>
                        ))}
                        <button
                            onClick={() => scrollToSection('prijzen')}
                            className="block bg-emerald-600 text-white text-center py-4 rounded-xl font-bold text-lg w-full"
                        >
                            Bestel Nu
                        </button>
                    </div>
                </div>
            )}
        </header>
    )
}
