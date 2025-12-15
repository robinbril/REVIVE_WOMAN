"use client"

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, ShoppingBag } from 'lucide-react'
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
                {/* Main Header - slimmer 52px */}
                <div className={`bg-white/95 backdrop-blur-sm h-[52px] flex items-center justify-between px-4 ${isScrolled ? 'shadow-sm' : ''}`}>
                    {/* Left: Menu */}
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="w-10 h-10 flex items-center justify-center -ml-2"
                    >
                        {isMobileMenuOpen ? (
                            <X className="w-5 h-5 text-[#2E2A25]" />
                        ) : (
                            <Menu className="w-5 h-5 text-[#2E2A25]" />
                        )}
                    </button>

                    {/* Center: Logo */}
                    <Link
                        href="/"
                        className="font-semibold text-lg tracking-wide text-[#2E2A25] absolute left-1/2 -translate-x-1/2"
                        style={{ fontFamily: 'var(--font-heading)' }}
                    >
                        REVIVE<span className="text-[#B87333]">.</span>
                    </Link>

                    {/* Right: Cart */}
                    <button className="relative w-10 h-10 flex items-center justify-center -mr-2">
                        <ShoppingBag className="w-5 h-5 text-[#2E2A25]" />
                    </button>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="bg-white border-t border-[#E8E4E0] shadow-xl p-5 flex flex-col gap-1">
                        {['Formule', 'Reviews', 'Prijzen'].map((item) => (
                            <Link
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-[15px] font-medium text-[#2E2A25] py-3 border-b border-[#F4F0EB]"
                            >
                                {item}
                            </Link>
                        ))}
                        <Button asChild className="w-full bg-[#B87333] hover:bg-[#9A5F2A] text-white font-medium py-5 mt-3 rounded-full">
                            <Link href="#prijzen" onClick={() => setIsMobileMenuOpen(false)}>
                                Bestel Nu
                            </Link>
                        </Button>
                    </div>
                )}
            </div>

            {/* --- DESKTOP HEADER --- */}
            <header className="hidden lg:block fixed top-0 left-0 right-0 z-50">
                {/* Main Header */}
                <div className={`bg-white/95 backdrop-blur-sm transition-all duration-300 ${isScrolled ? 'shadow-md' : ''}`}>
                    <div className="max-w-6xl mx-auto px-8">
                        <div className="flex items-center justify-between h-16">
                            {/* Logo */}
                            <Link href="/" className="relative z-50">
                                <span
                                    className="text-xl font-semibold tracking-wide text-[#2E2A25]"
                                    style={{ fontFamily: 'var(--font-heading)' }}
                                >
                                    REVIVE<span className="text-[#B87333]">.</span>
                                </span>
                            </Link>

                            {/* Desktop Nav */}
                            <nav className="flex items-center gap-8">
                                {['Formule', 'Reviews', 'Prijzen'].map((item) => (
                                    <Link
                                        key={item}
                                        href={`#${item.toLowerCase()}`}
                                        className="text-[13px] font-medium text-[#4A4540] hover:text-[#B87333] transition-colors"
                                    >
                                        {item}
                                    </Link>
                                ))}
                            </nav>

                            {/* Right: CTA + Cart */}
                            <div className="flex items-center gap-4">
                                <Button asChild className="font-medium px-6 py-5 text-[13px] bg-[#B87333] hover:bg-[#9A5F2A] text-white rounded-full">
                                    <Link href="#prijzen">
                                        Bestel
                                    </Link>
                                </Button>
                                <button className="relative">
                                    <ShoppingBag className="w-5 h-5 text-[#2E2A25]" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
