"use client"

import { ArrowRight, Star, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] lg:min-h-screen flex items-center py-16 lg:py-0 bg-[#FAF9F6] overflow-hidden">

            {/* Ambient Glows - WOW Factor */}
            <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(201,145,86,0.1)_0%,transparent_70%)] blur-[100px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[radial-gradient(circle,rgba(201,145,86,0.08)_0%,transparent_70%)] blur-[100px] pointer-events-none" />

            {/* Floating Particles */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-1 h-1 bg-[#B87333]/30 rounded-full"
                        animate={{
                            y: [0, -100],
                            opacity: [0, 0.5, 0],
                            scale: [0, 1, 0.5],
                        }}
                        transition={{
                            duration: 5 + Math.random() * 5,
                            repeat: Infinity,
                            delay: Math.random() * 10,
                            ease: "easeInOut",
                        }}
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                        }}
                    />
                ))}
            </div>

            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16 relative z-10">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                    {/* LEFT - Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">

                        {/* Trustpilot Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-[0_4px_20px_rgba(0,0,0,0.03),0_0_0_1px_rgba(0,0,0,0.02)] mb-10"
                        >
                            <Star className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
                            <span className="text-[13px] font-medium text-gray-600">Trustpilot</span>
                            <div className="flex gap-0.5 ml-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3 h-3 fill-[#00b67a] text-[#00b67a]" />
                                ))}
                            </div>
                            <span className="text-[13px] font-bold ml-1">4.8</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[42px] sm:text-[52px] lg:text-[72px] font-normal leading-[1.02] tracking-tight text-[#1a1a1a] mb-2"
                        >
                            Kracht uit<br />
                            wetenschap.
                        </motion.h1>

                        {/* Subheadline - Italic */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[42px] sm:text-[52px] lg:text-[72px] font-normal leading-[1.02] tracking-tight italic text-[#B87333] mb-10"
                        >
                            Glow die blijft.
                        </motion.h2>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.35 }}
                            className="mb-8"
                        >
                            <Button
                                size="lg"
                                className="h-[58px] px-10 text-[15px] font-bold uppercase tracking-wider bg-gradient-to-r from-[#B87333] to-[#C9A87C] hover:from-[#9A5F2A] hover:to-[#B87333] text-white rounded-full shadow-[0_10px_30px_rgba(184,115,51,0.3)] hover:shadow-[0_15px_40px_rgba(184,115,51,0.45)] hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
                                asChild
                            >
                                <Link href="#prijzen">
                                    <span className="relative z-10 flex items-center gap-3">
                                        <span className="animate-[lightning-pulse_2s_ease-in-out_infinite]">⚡</span>
                                        Bestel Nu · €59
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                                    </span>
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                            className="text-[15px] text-[#7A756F] max-w-sm mx-auto lg:mx-0 leading-relaxed font-medium"
                        >
                            REVIVE bevat 5% GHK-Cu copper peptides. De hoogste concentratie in Europa.
                        </motion.p>
                    </div>

                    {/* RIGHT - LUXURY PRODUCT STAGE (BOTTLE BLEND FIX) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end relative group"
                    >
                        {/* 4. Ambient glow behind circle - Atmospheric Context */}
                        <div className="absolute inset-[-25%] bg-[radial-gradient(circle,rgba(184,115,51,0.18)_0%,rgba(184,115,51,0.08)_40%,transparent_70%)] blur-[80px] animate-[glow-pulse_10s_ease-in-out_infinite] pointer-events-none" />

                        {/* 1. SHAPE: Circular Organic Stage - ENFORCED CLIPPING */}
                        <div 
                            className="relative w-[340px] sm:w-[400px] lg:w-[460px] aspect-square overflow-hidden isolate"
                            style={{
                                /* 5. BACKGROUND GRADIENT: Unified high-key lighting */
                                background: 'radial-gradient(circle at 40% 35%, #ffffff 0%, #fefdfc 60%, #f9f6f3 100%)',
                                borderRadius: '48% 52% 50% 50% / 50% 50% 50% 50%',
                                animation: 'squircle-morph 25s ease-in-out infinite',
                                /* 3. MULTI-LAYER SHADOWS */
                                boxShadow: `
                                    0 0 0 1px rgba(201,145,86,0.05),
                                    0 10px 20px rgba(0,0,0,0.03),
                                    0 30px 60px rgba(0,0,0,0.05),
                                    0 60px 120px rgba(201,145,86,0.1),
                                    inset 0 2px 5px rgba(255,255,255,1)
                                `
                            }}
                        >
                            {/* Inner glow for realism */}
                            <div 
                                className="absolute inset-0 bg-[radial-gradient(circle at 30% 25%, rgba(255,255,255,1) 0%, transparent 60%)] pointer-events-none z-20 mix-blend-soft-light"
                                style={{ borderRadius: 'inherit' }}
                            />

                            {/* Glare sweep loop */}
                            <div className="absolute inset-[-100%] bg-gradient-to-tr from-transparent via-white/30 to-transparent animate-[glare-sweep_12s_ease-in-out_infinite] pointer-events-none z-30" />

                            {/* BOTTLE - NO WRAPPER BACKGROUNDS, DIRECT CLIPPING */}
                            <motion.div
                                animate={{
                                    y: [0, -12, 0],
                                    rotate: [3, 4.5, 3],
                                }}
                                transition={{
                                    duration: 7,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute inset-0 flex items-center justify-center z-10 p-0 transform -translate-y-[2%]"
                                style={{ borderRadius: 'inherit', background: 'transparent' }}
                            >
                                <div className="w-[65%] h-[88%] relative overflow-hidden" style={{ borderRadius: 'inherit', background: 'transparent' }}>
                                    <Image
                                        src="/images/revive-bottle-clean.png"
                                        alt="REVIVE Glow Serum"
                                        fill
                                        className="object-contain"
                                        style={{ 
                                            mixBlendMode: 'multiply',
                                            filter: 'brightness(1.02) contrast(1.1) drop-shadow(0 25px 50px rgba(0,0,0,0.1))',
                                            background: 'transparent'
                                        }}
                                        priority
                                    />
                                </div>
                            </motion.div>

                            {/* EDGE SOFTNESS */}
                            <div className="absolute inset-0 border border-white/40 rounded-inherit z-40 pointer-events-none blur-[0.4px]" />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
