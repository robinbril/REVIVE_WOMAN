"use client"

import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative min-h-[92svh] lg:min-h-0 lg:py-32 bg-[#FAF9F6] overflow-hidden flex items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#B87333]/3 via-transparent to-transparent pointer-events-none" />

            <div className="px-5 sm:px-10 max-w-6xl mx-auto relative z-10 w-full pt-20 lg:pt-0">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                    {/* LEFT - Copy */}
                    <div className="max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* HEADLINE - VEEL GROTER */}
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[36px] sm:text-[52px] lg:text-[64px] font-normal text-[#2E2A25] tracking-tight leading-[1.05] mb-5 sm:mb-6"
                        >
                            Huid die gloeit.<br />
                            <span className="text-[#B87333]">Zonder filter.</span>
                        </motion.h1>

                        {/* SUBHEADLINE - groter en duidelijker */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.05 }}
                            className="text-[16px] sm:text-[20px] lg:text-[22px] text-[#4A4540] mb-6 sm:mb-8 leading-[1.5] max-w-[32ch]"
                        >
                            5% GHK-Cu copper peptide serum. De hoogste concentratie in Europa.
                        </motion.p>

                        {/* BADGES - kleiner, onder subheadline */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.08 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6 sm:mb-8"
                        >
                            <span className="text-[10px] sm:text-[11px] bg-white border border-[#E8E4E0] px-3 py-1 rounded-full text-[#6B6560]">
                                5% GHK-Cu
                            </span>
                            <span className="text-[10px] sm:text-[11px] bg-white border border-[#E8E4E0] px-3 py-1 rounded-full text-[#6B6560]">
                                Lab-verified
                            </span>
                            <span className="text-[10px] sm:text-[11px] bg-white border border-[#E8E4E0] px-3 py-1 rounded-full text-[#6B6560]">
                                Made in NL
                            </span>
                        </motion.div>

                        {/* MOBILE PRODUCT */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.1 }}
                            className="lg:hidden relative w-full max-w-[240px] mx-auto mb-6"
                        >
                            <Image
                                src="/images/sero-bottle.png"
                                alt="SERO. Serum"
                                width={400}
                                height={400}
                                className="w-full h-auto"
                                priority
                            />
                        </motion.div>

                        {/* CTA - met prijs */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.12 }}
                            className="w-full sm:w-auto mb-4"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-[52px] sm:h-[56px] px-8 sm:px-10 text-[14px] sm:text-[15px] font-medium bg-[#B87333] hover:bg-[#9A5F2A] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
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
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-5 text-[12px] sm:text-[13px] text-[#6B6560]"
                        >
                            <span className="flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-[#A8B5A0]" />
                                Gratis verzending
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Check className="w-3.5 h-3.5 text-[#A8B5A0]" />
                                60 dagen retour
                            </span>
                        </motion.div>
                    </div>

                    {/* RIGHT - Desktop product - ÉÉN FLES */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <Image
                            src="/images/sero-bottle.png"
                            alt="SERO. Serum"
                            width={600}
                            height={600}
                            className="w-full h-auto max-w-[480px]"
                            priority
                        />
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
