"use client"

import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center py-20 lg:py-0 bg-[#FAF9F6] overflow-hidden">

            {/* Subtle ambient glow */}
            <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(184,115,51,0.08)_0%,transparent_60%)] blur-3xl pointer-events-none" />

            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-8 items-center">

                    {/* LEFT - Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">

                        {/* Trustpilot Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-8"
                        >
                            <Star className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
                            <span className="text-sm font-medium text-gray-700">Trustpilot</span>
                            <div className="flex gap-0.5 ml-1">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-[#00b67a] text-[#00b67a]" />
                                ))}
                            </div>
                            <span className="text-sm font-bold ml-1">4.8</span>
                        </motion.div>

                        {/* Headline */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[clamp(42px,7vw,68px)] font-normal leading-[1] tracking-tight text-[#1a1a1a] mb-5"
                        >
                            Kracht uit<br />
                            wetenschap.<br />
                            <span 
                                className="italic bg-gradient-to-r from-[#B87333] to-[#D4A574] bg-clip-text text-transparent"
                                style={{ fontFamily: 'var(--font-heading)' }}
                            >
                                Glow die blijft.
                            </span>
                        </motion.h1>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                            className="mb-8"
                        >
                            <Button
                                size="lg"
                                className="h-[58px] px-12 text-[15px] font-semibold bg-[#B87333] hover:bg-[#9A5F2A] text-white rounded-full shadow-[0_8px_30px_rgba(184,115,51,0.35)] hover:shadow-[0_12px_40px_rgba(184,115,51,0.45)] hover:-translate-y-1 transition-all duration-300 group"
                                asChild
                            >
                                <Link href="#prijzen">
                                    Start Je Routine
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.5 }}
                            className="text-[16px] text-[#6B6560] max-w-md mx-auto lg:mx-0 leading-relaxed"
                        >
                            REVIVE bevat 5% GHK-Cu copper peptides. De hoogste concentratie in Europa.
                        </motion.p>
                    </div>

                    {/* RIGHT - Product Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
                        className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
                    >
                        {/* Organic Round Container */}
                        <div 
                            className="relative w-[320px] h-[320px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] flex items-center justify-center bg-white shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] overflow-hidden"
                            style={{ borderRadius: '45% 55% 52% 48% / 48% 50% 50% 52%' }}
                        >
                            <div className="relative w-[65%] h-[85%]">
                                <Image
                                    src="/images/revive-bottle-clean.png"
                                    alt="REVIVE Glow Serum"
                                    fill
                                    className="object-contain drop-shadow-2xl product-float"
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
