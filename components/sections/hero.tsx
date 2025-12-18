"use client"

import { ArrowRight, Check, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-20 lg:py-24 bg-gradient-to-b from-white to-[#FAF9F6] overflow-hidden">

            {/* Ambient Glow */}
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(184,115,51,0.12)_0%,rgba(184,115,51,0.05)_40%,transparent_70%)] blur-[80px] pointer-events-none animate-pulse" />

            {/* Trustpilot Badge */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative z-10 flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] mb-12"
            >
                <div className="flex items-center gap-2 text-sm font-semibold text-[#1a1a1a]">
                    <Star className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
                    <span>Trustpilot</span>
                </div>
                <div className="w-px h-5 bg-gray-200" />
                <div className="flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
                    ))}
                </div>
                <span className="text-lg font-bold">4.8</span>
            </motion.div>

            {/* PRODUCT STAGE - CLEAN & DOMINANT */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                className="relative z-5 w-full max-w-[550px] aspect-square mx-auto mb-12 px-4"
            >
                {/* Organic Squircle Container - Gradient background */}
                <div 
                    className="relative w-full h-full overflow-hidden"
                    style={{
                        background: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #fdfcfb 40%, #f9f6f3 100%)',
                        borderRadius: '45% 55% 52% 48% / 48% 50% 50% 52%',
                        boxShadow: '0 0 0 1px rgba(184,115,51,0.08), 0 30px 60px rgba(0,0,0,0.06), 0 60px 120px rgba(184,115,51,0.1)',
                        animation: 'squircle-morph 30s ease-in-out infinite'
                    }}
                >
                    {/* Inner highlight */}
                    <div 
                        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.7)_0%,transparent_50%)] pointer-events-none"
                        style={{ borderRadius: 'inherit' }}
                    />

                    {/* BOTTLE - LARGE & CENTERED - No ribbons, no particles */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                            src="/images/revive-bottle-clean.png"
                            alt="REVIVE Serum"
                            width={600}
                            height={800}
                            className="w-[70%] h-[85%] object-contain drop-shadow-[0_30px_60px_rgba(184,115,51,0.25)] product-float"
                            priority
                        />
                    </div>
                </div>
            </motion.div>

            {/* CONTENT */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="relative z-10 text-center px-6"
            >
                {/* Headline */}
                <h1 
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[clamp(42px,8vw,64px)] font-normal leading-[1.05] tracking-tight text-[#2E2A25] mb-4"
                >
                    Kracht Uit Wetenschap.<br />
                    <span className="bg-gradient-to-r from-[#B87333] to-[#C99156] bg-clip-text text-transparent">Glow Die Blijft.</span>
                </h1>

                {/* Subheadline */}
                <p className="text-[17px] sm:text-[19px] text-[#6B6560] mb-8 max-w-md mx-auto leading-relaxed">
                    5% GHK-Cu copper peptide serum. De hoogste concentratie in Europa.
                </p>

                {/* Guarantee Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-white rounded-full border-2 border-[#B87333]/20 shadow-[0_6px_20px_rgba(184,115,51,0.15)] mb-8"
                >
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#B87333] to-[#C99156] flex items-center justify-center text-white text-xs font-bold">✓</span>
                    <span className="text-[15px] font-semibold text-[#1a1a1a]">60 dagen niet-goed-geld-terug garantie</span>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="mb-6"
                >
                    <Button
                        size="lg"
                        className="h-[60px] px-14 text-[15px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#B87333] to-[#C99156] hover:from-[#A66628] hover:to-[#B8834D] text-white rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset,0_10px_20px_rgba(184,115,51,0.35),0_20px_40px_rgba(184,115,51,0.25)] hover:shadow-[0_15px_30px_rgba(184,115,51,0.45),0_30px_60px_rgba(184,115,51,0.35)] hover:-translate-y-1 transition-all duration-300 group"
                        asChild
                    >
                        <Link href="#prijzen">
                            ⚡ Bestel Nu · €59
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
                        </Link>
                    </Button>
                </motion.div>

                {/* Info Line */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2 }}
                    className="text-[14px] text-[#9A958D]"
                >
                    5% GHK-Cu · Lab Verified · Made in NL
                </motion.p>
            </motion.div>
        </section>
    )
}
