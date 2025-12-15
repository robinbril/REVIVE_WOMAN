"use client"

import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative pt-24 sm:pt-32 lg:pt-44 pb-6 lg:pb-20 bg-[#FAF9F6] overflow-hidden min-h-[100svh] lg:min-h-0 flex items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#B87333]/3 via-transparent to-transparent pointer-events-none" />

            <div className="px-5 sm:px-10 max-w-6xl mx-auto relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-6 lg:gap-16 items-center">

                    {/* LEFT - Copy */}
                    <div className="max-w-[46ch] mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* BADGES - compact on mobile */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 mb-4 sm:mb-6"
                        >
                            <span className="text-[#B87333] font-medium text-[10px] sm:text-[11px] tracking-wide border border-[#B87333]/30 px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full">
                                5% GHK-Cu
                            </span>
                            <span className="text-[#4A4540] text-[10px] sm:text-[11px] tracking-wide">
                                99,986% Zuiver
                            </span>
                        </motion.div>

                        {/* HEADLINE - tighter on mobile */}
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[28px] sm:text-[40px] lg:text-[52px] font-normal text-[#2E2A25] tracking-tight leading-[1.1] mb-4 sm:mb-6"
                        >
                            Kracht Uit Wetenschap.<br />
                            <span className="text-[#B87333]">Glow Uit Jou.</span>
                        </motion.h1>

                        {/* SUBHEADLINE - shorter on mobile */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.05 }}
                            className="text-[14px] sm:text-[16px] text-[#4A4540] mb-5 sm:mb-8 leading-[1.6] max-w-[36ch] sm:max-w-[40ch]"
                        >
                            <strong className="text-[#2E2A25]">10mg GHK-Cu</strong> peptide voor huidvernieuwing, hydratatie en stevigheid.
                        </motion.p>

                        {/* MOBILE PRODUCT - prominent */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.08 }}
                            className="lg:hidden relative w-full max-w-[180px] sm:max-w-[200px] mx-auto mb-5 sm:mb-8"
                        >
                            <Image
                                src="/images/revive-bottle.png"
                                alt="REVIVE Serum"
                                width={200}
                                height={250}
                                className="w-full h-auto drop-shadow-xl"
                                priority
                            />
                        </motion.div>

                        {/* CTA - full width on mobile */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="w-full sm:w-auto mb-3"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-[50px] sm:h-[54px] px-8 sm:px-10 text-[13px] sm:text-[14px] font-medium bg-[#B87333] hover:bg-[#9A5F2A] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                                asChild
                            >
                                <Link href="#prijzen">
                                    Bestel Revive Skin
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* TRUST BULLETS - compact */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.14 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-[11px] sm:text-[12px] text-[#4A4540]"
                        >
                            <span className="flex items-center gap-1">
                                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1E3A5F]" />
                                60 dagen garantie
                            </span>
                            <span className="flex items-center gap-1">
                                <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#1E3A5F]" />
                                Gratis verzending
                            </span>
                        </motion.div>
                    </div>

                    {/* RIGHT - Desktop product */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <Image
                            src="/images/revive-bottle.png"
                            alt="REVIVE Serum"
                            width={450}
                            height={560}
                            className="w-full h-auto max-w-[380px]"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
