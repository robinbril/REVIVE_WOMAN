"use client"

import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative min-h-[94svh] lg:min-h-0 lg:py-36 bg-[#FAF9F6] overflow-hidden flex items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#B87333]/3 via-transparent to-transparent pointer-events-none" />

            <div className="px-5 sm:px-10 max-w-6xl mx-auto relative z-10 w-full pt-20 lg:pt-0">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                    {/* LEFT - Copy */}
                    <div className="max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* HEADLINE */}
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[32px] sm:text-[48px] lg:text-[58px] font-normal text-[#2E2A25] tracking-tight leading-[1.08] mb-5 sm:mb-6"
                        >
                            Kracht Uit Wetenschap.<br />
                            <span className="text-[#B87333]">Glow Die Blijft.</span>
                        </motion.h1>

                        {/* SUBHEADLINE */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.05 }}
                            className="text-[15px] sm:text-[18px] lg:text-[20px] text-[#4A4540] mb-8 sm:mb-10 leading-[1.6] max-w-[34ch]"
                        >
                            5% GHK-Cu copper peptide serum. De hoogste concentratie in Europa.
                        </motion.p>

                        {/* BADGES */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.07 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-8"
                        >
                            {['5% GHK-Cu', 'Lab-verified', 'Made in NL'].map((badge) => (
                                <span key={badge} className="px-3 py-1.5 bg-white border border-[#E8E4E0] rounded-full text-[11px] text-[#6B6560]">
                                    {badge}
                                </span>
                            ))}
                        </motion.div>

                        {/* MOBILE PRODUCT - Full image with squircle clip */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.08 }}
                            className="lg:hidden relative w-full flex justify-center mb-8"
                        >
                            <div className="relative w-[320px] h-[320px]">
                                {/* Ambient glow behind */}
                                <div className="absolute inset-0 bg-gradient-radial from-[#B87333]/15 via-[#B87333]/5 to-transparent blur-3xl scale-125" />
                                
                                {/* Image with squircle clip */}
                                <div 
                                    className="relative w-full h-full overflow-hidden product-float"
                                    style={{ borderRadius: '45% 55% 52% 48% / 48% 50% 50% 52%' }}
                                >
                                    <Image
                                        src="/images/hero-premium.png"
                                        alt="REVIVE Serum"
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>
                        </motion.div>

                        {/* CTA */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="w-full sm:w-auto mb-5"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-[54px] sm:h-[58px] px-10 sm:px-12 text-[14px] sm:text-[15px] font-medium bg-[#B87333] hover:bg-[#9A5F2A] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                                asChild
                            >
                                <Link href="#prijzen">
                                    Bestel Nu · €59
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* TRUST BULLETS */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-5 text-[12px] sm:text-[13px] text-[#6B6560]"
                        >
                            <span className="flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-[#1E3A5F]" />
                                Gratis verzending
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-[#1E3A5F]" />
                                60 dagen retour
                            </span>
                        </motion.div>
                    </div>

                    {/* RIGHT - Desktop product - Full image with squircle clip */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <div className="relative w-[480px] h-[480px]">
                            {/* Ambient glow behind */}
                            <div className="absolute inset-0 bg-gradient-radial from-[#B87333]/15 via-[#B87333]/5 to-transparent blur-3xl scale-125" />
                            
                            {/* Image with squircle clip */}
                            <div 
                                className="relative w-full h-full overflow-hidden product-float"
                                style={{ borderRadius: '45% 55% 52% 48% / 48% 50% 50% 52%' }}
                            >
                                <Image
                                    src="/images/hero-premium.png"
                                    alt="REVIVE Serum"
                                    fill
                                    className="object-cover"
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
