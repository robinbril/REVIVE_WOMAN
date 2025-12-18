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

                    {/* RIGHT - Product in Organic OVAL (EXACT MATCH) */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
                        animate={{ opacity: 1, scale: 1, rotate: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 60 }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        {/* Organic Oval Container - Shrinking as requested */}
                        <div 
                            className="relative w-[280px] sm:w-[320px] lg:w-[380px] aspect-[1/1.25] shadow-[0_20px_50px_rgba(0,0,0,0.04),0_40px_100px_rgba(201,145,86,0.15)] overflow-hidden"
                            style={{
                                background: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #fdfcfb 40%, #f9f6f3 100%)',
                                borderRadius: '48% 52% 50% 50% / 65% 65% 35% 35%',
                                animation: 'squircle-morph 25s ease-in-out infinite'
                            }}
                        >
                            {/* Inner glow for depth */}
                            <div 
                                className="absolute inset-0 bg-[radial-gradient(circle_at_30%_25%,rgba(255,255,255,0.7)_0%,transparent_50%)] pointer-events-none"
                                style={{ borderRadius: 'inherit' }}
                            />

                            {/* Glare sweep across the product shape */}
                            <div className="absolute inset-[-100%] bg-gradient-to-tr from-transparent via-white/40 to-transparent animate-[glare-sweep_8s_ease-in-out_infinite] pointer-events-none z-20" />

                            {/* BOTTLE - Tilted and dominating (105% to feel bigger) */}
                            <div className="absolute inset-0 flex items-center justify-center p-2 z-10">
                                <Image
                                    src="/images/revive-bottle-clean.png"
                                    alt="REVIVE Glow Serum"
                                    width={450}
                                    height={600}
                                    className="w-[105%] h-auto object-contain product-float"
                                    style={{ 
                                        mixBlendMode: 'multiply',
                                        filter: 'brightness(1.02) contrast(1.05)',
                                        transformOrigin: 'center center',
                                        rotate: '4deg'
                                    }}
                                    priority
                                />
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
