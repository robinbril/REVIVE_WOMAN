"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <>
            {/* --- MOBILE HEADER --- */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50">
                {/* Compact Top Bar - rating + shipping in one row */}
                <div className="bg-[#1C1C1C] text-white h-7 flex items-center justify-center gap-3 text-[10px] font-medium">
                    <div className="flex items-center gap-1">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-2.5 h-2.5 fill-[#B87333] text-[#B87333]" />
                            ))}
                        </div>
                        <span className="opacity-90">4,9</span>
                    </div>
                    <span className="opacity-50">·</span>
                    <span className="opacity-80">Gratis verzending NL</span>
                </div>

                {/* Main Header - 56px */}
                <div className="bg-white h-14 flex items-center justify-between px-4 shadow-sm">
                    {/* Left: Menu */}
                    <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5 text-gray-900" />
                        ) : (
                            <Menu className="w-5 h-5 text-gray-900" />
                        )}
                    </button>

                    {/* Center: Logo */}
                    <Link href="/" className="font-semibold text-xl tracking-wide text-gray-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                        REVIVE<span className="text-[#B87333]">.</span>
                    </Link>

                    {/* Right: Cart */}
                    <button className="relative">
                        <ShoppingBag className="w-5 h-5 text-gray-900" />
                        <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-[#B87333] rounded-full text-[7px] font-bold text-white flex items-center justify-center">1</span>
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="bg-white border-t border-gray-100 shadow-2xl p-6 flex flex-col gap-4">
                        {['Product', 'Routine', 'Wetenschap', 'Reviews', 'FAQ'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-base font-medium text-gray-900 py-2 border-b border-gray-50"
                            >
                                {item}
                            </Link>
                        ))}
                        <Button asChild className="w-full bg-[#B87333] hover:bg-[#9A5F2A] text-white font-bold py-5 mt-2">
                            <Link href="#prijzen" onClick={() => setIsMobileMenuOpen(false)}>
                                Start routine
                            </Link>
                        </Button>
                    </div>
                )}
            </div>

            {/* --- DESKTOP HEADER --- */}
            <header className="hidden lg:block fixed top-0 left-0 right-0 z-50">
                {/* Top Bar */}
                <div className="bg-[#1C1C1C] text-white py-2 text-center text-sm font-medium">
                    <div className="flex items-center justify-center gap-2">
                        <div className="flex">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3.5 h-3.5 fill-[#B87333] text-[#B87333]" />
                            ))}
                        </div>
                        <span className="opacity-90">4,9 gebaseerd op 324 beoordelingen</span>
                        <span className="opacity-50 mx-2">·</span>
                        <span className="opacity-80">Gratis verzending NL · 60 dagen retour</span>
                    </div>
                </div>

                {/* Main Header */}
                <div className={`bg-white transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
                    <div className="max-w-7xl mx-auto px-6">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <Link href="/" className="relative z-50">
                                <span className="text-2xl font-semibold tracking-wide text-gray-900" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                                    REVIVE<span className="text-[#B87333]">.</span>
                                </span>
                            </Link>

                            {/* Desktop Nav */}
                            <nav className="flex items-center gap-8">
                                {['Product', 'Routine', 'Wetenschap', 'Reviews', 'FAQ'].map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-sm font-medium text-gray-600 hover:text-[#B87333] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>

                            {/* Right: CTA + Cart */}
                            <div className="flex items-center gap-4">
                                <Button asChild className="font-bold px-6 py-5 text-sm bg-[#B87333] hover:bg-[#9A5F2A] text-white">
                                    <Link href="#prijzen">
                                        Bestel
                                    </Link>
                                </Button>
                                <button className="relative">
                                    <ShoppingBag className="w-5 h-5 text-gray-900" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
