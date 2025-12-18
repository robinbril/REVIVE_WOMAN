"use client"

import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative min-h-[85vh] lg:min-h-screen flex items-center py-16 lg:py-0 bg-[#FAF9F6] overflow-hidden">

            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-16">
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

                    {/* LEFT - Content */}
                    <div className="order-2 lg:order-1 text-center lg:text-left">

                        {/* Trustpilot Badge */}
                        <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full shadow-sm border border-gray-100 mb-10"
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
                            className="text-[42px] sm:text-[52px] lg:text-[64px] font-normal leading-[1.05] tracking-tight text-[#1a1a1a] mb-2"
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
                            className="text-[42px] sm:text-[52px] lg:text-[64px] font-normal leading-[1.05] tracking-tight italic text-[#B87333] mb-10"
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
                                className="h-[52px] px-8 text-[14px] font-semibold bg-[#B87333] hover:bg-[#9A5F2A] text-white rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group"
                                asChild
                            >
                                <Link href="#prijzen">
                                    Start Je Routine
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.45 }}
                            className="text-[15px] text-[#7A756F] max-w-sm mx-auto lg:mx-0 leading-relaxed"
                        >
                            REVIVE bevat 5% GHK-Cu copper peptides. De hoogste concentratie in Europa.
                        </motion.p>
                    </div>

                    {/* RIGHT - Product (NO OVAL, just shadow around image) */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 60 }}
                        className="order-1 lg:order-2 flex justify-center lg:justify-end"
                    >
                        {/* Product image with shadow - NO background oval */}
                        <div className="relative w-[340px] h-[420px] sm:w-[400px] sm:h-[500px] lg:w-[440px] lg:h-[540px]">
                            <Image
                                src="/images/revive-bottle-clean.png"
                                alt="REVIVE Glow Serum"
                                fill
                                className="object-contain drop-shadow-[0_20px_60px_rgba(0,0,0,0.12)]"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
