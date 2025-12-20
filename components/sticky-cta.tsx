"use client"

import { useState, useEffect } from 'react'
import { ArrowRight, Sparkles } from 'lucide-react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false)
    const [isPricingVisible, setIsPricingVisible] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
            setIsVisible(scrollPercent > 0.15)
        }

        // Watch for pricing section visibility
        const pricingSection = document.getElementById('prijzen')
        let observer: IntersectionObserver | null = null
        
        if (pricingSection) {
            observer = new IntersectionObserver(
                (entries) => {
                    entries.forEach((entry) => {
                        setIsPricingVisible(entry.isIntersecting)
                    })
                },
                { threshold: 0.3 }
            )
            observer.observe(pricingSection)
        }

        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            if (observer && pricingSection) observer.unobserve(pricingSection)
        }
    }, [])

    return (
        <AnimatePresence>
            {isVisible && !isPricingVisible && (
                <motion.div
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 100, opacity: 0 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    className="fixed bottom-0 left-0 right-0 z-50 lg:hidden"
                >
                    <div className="bg-white/70 backdrop-blur-xl border-t border-white/50 px-6 py-4 pb-safe flex justify-center shadow-[0_-10px_40px_rgba(0,0,0,0.03)]">
                        <Link
                            href="#prijzen"
                            className="group relative flex items-center justify-center gap-3 w-full max-w-sm h-[52px] bg-gradient-to-r from-[#B87333] to-[#A05D25] text-white rounded-full shadow-[0_8px_20px_rgba(184,115,51,0.3),inset_0_1px_0_rgba(255,255,255,0.2)] overflow-hidden transition-all duration-300 hover:shadow-[0_12px_28px_rgba(184,115,51,0.4)] hover:-translate-y-0.5"
                        >
                            {/* Shiny effect overlay */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:animate-shimmer" />
                            
                            <span className="text-[15px] font-semibold tracking-wide flex items-center gap-2">
                                <Sparkles className="w-4 h-4 text-white/90" />
                                Start Routine
                            </span>
                            <span className="w-px h-4 bg-white/20" />
                            <span className="text-[15px] font-bold">€49</span>
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
