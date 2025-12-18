"use client"

import { ArrowRight, Star, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 bg-gradient-to-b from-white to-[#FAF9F6] overflow-hidden">

            {/* Ambient Glow */}
            <div className="absolute top-[-200px] left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-[radial-gradient(circle,rgba(201,145,86,0.15)_0%,rgba(201,145,86,0.08)_30%,transparent_60%)] blur-[80px] pointer-events-none animate-pulse" />

            {/* Trustpilot Badge */}
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="relative z-10 flex items-center gap-3 bg-white px-5 py-2.5 rounded-full shadow-[0_0_0_1px_rgba(0,0,0,0.04),0_8px_24px_rgba(0,0,0,0.06)] mb-14"
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

            {/* PRODUCT SECTION - Organic Squircle */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.4, type: "spring", stiffness: 100 }}
                className="relative z-5 w-full max-w-[500px] aspect-square mb-16"
            >
                {/* Organic Squircle Container */}
                <div 
                    className="relative w-full h-full bg-[radial-gradient(circle_at_35%_30%,#ffffff_0%,#fdfcfb_40%,#f9f6f3_100%)] shadow-[0_0_0_1px_rgba(201,145,86,0.1),0_30px_60px_rgba(0,0,0,0.08),0_60px_120px_rgba(0,0,0,0.06),0_90px_180px_rgba(201,145,86,0.12)]"
                    style={{
                        borderRadius: '45% 55% 52% 48% / 48% 50% 50% 52%',
                        animation: 'squircle-morph 30s ease-in-out infinite'
                    }}
                >
                    {/* Inner glow */}
                    <div 
                        className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.6)_0%,transparent_50%)] pointer-events-none"
                        style={{ borderRadius: 'inherit' }}
                    />

                    {/* Glare sweep */}
                    <div className="glare-effect" />

                    {/* BOTTLE - CENTERED, 45% WIDTH, 70% HEIGHT */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[70%] z-10">
                        <Image
                            src="/images/revive-bottle-clean.png"
                            alt="REVIVE Glow Serum"
                            fill
                            className="object-contain drop-shadow-[0_40px_80px_rgba(201,145,86,0.3)] product-float"
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
                className="relative z-10 text-center"
            >
                {/* Headline */}
                <h1 
                    style={{ fontFamily: 'var(--font-heading)' }}
                    className="text-[clamp(48px,8vw,72px)] font-normal leading-[1] tracking-[-3px] text-[#1a1a1a] mb-5"
                >
                    Kracht uit wetenschap.<br />
                    <span className="bg-gradient-to-r from-[#C99156] to-[#B8834D] bg-clip-text text-transparent">Glow die blijft.</span>
                </h1>

                {/* Guarantee Badge */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 }}
                    className="inline-flex items-center gap-2.5 px-6 py-3 bg-white rounded-full border-2 border-[#C99156]/20 shadow-[0_6px_20px_rgba(201,145,86,0.15)] mb-10"
                >
                    <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#C99156] to-[#B8834D] flex items-center justify-center text-white text-xs">
                        <Check className="w-3 h-3" />
                    </span>
                    <span className="text-[15px] font-semibold text-[#1a1a1a]">60 dagen niet-goed-geld-terug garantie</span>
                </motion.div>

                {/* CTA Button */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 }}
                    className="mb-8"
                >
                    <Button
                        size="lg"
                        className="h-[64px] px-14 text-[17px] font-extrabold uppercase tracking-[1.5px] bg-gradient-to-r from-[#C99156] to-[#B8834D] hover:from-[#B8834D] hover:to-[#A77040] text-white rounded-full shadow-[0_0_0_1px_rgba(255,255,255,0.25)_inset,0_10px_20px_rgba(201,145,86,0.35),0_20px_40px_rgba(201,145,86,0.25),0_30px_60px_rgba(201,145,86,0.15)] hover:shadow-[0_15px_30px_rgba(201,145,86,0.45),0_30px_60px_rgba(201,145,86,0.35)] hover:-translate-y-1 transition-all duration-300 group"
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
                    className="text-[15px] font-medium text-[#6B7280]"
                >
                    5% GHK-Cu · Lab Verified · Made in NL
                </motion.p>
            </motion.div>
        </section>
    )
}
