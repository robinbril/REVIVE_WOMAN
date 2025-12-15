"use client"

import { ArrowRight, Check } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative min-h-[94svh] lg:min-h-0 lg:py-40 bg-[#FAF9F6] overflow-hidden flex items-center">
            <div className="absolute inset-0 bg-gradient-to-b from-[#B87333]/3 via-transparent to-transparent pointer-events-none" />

            <div className="px-6 sm:px-10 max-w-6xl mx-auto relative z-10 w-full pt-24 lg:pt-0">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* LEFT - Copy */}
                    <div className="max-w-xl mx-auto lg:mx-0 flex flex-col items-center lg:items-start text-center lg:text-left">

                        {/* HEADLINE - Elegant Serif met italic emphasis */}
                        <motion.h1
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[34px] sm:text-[50px] lg:text-[60px] font-light text-[#2E2A25] tracking-tight leading-[1.05] mb-6 sm:mb-8"
                        >
                            Huid die leeft.<br />
                            <em className="text-[#B87333] not-italic font-normal">Zonder filter.</em>
                        </motion.h1>

                        {/* SUBHEADLINE - meer ademruimte */}
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.05 }}
                            className="text-[14px] sm:text-[17px] lg:text-[18px] text-[#6B6560] mb-10 sm:mb-12 leading-[1.8] max-w-[32ch]"
                        >
                            5% GHK-Cu copper peptide serum. De hoogste concentratie in Europa.
                        </motion.p>

                        {/* MOBILE PRODUCT - Arch shape */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.08 }}
                            className="lg:hidden relative w-full max-w-[300px] mx-auto mb-10 overflow-hidden rounded-t-[150px] rounded-b-2xl shadow-2xl"
                        >
                            <Image
                                src="/images/revive-bottle.png"
                                alt="REVIVE Serum"
                                width={400}
                                height={500}
                                className="w-full h-auto"
                                priority
                            />
                        </motion.div>

                        {/* CTA - zachter koper */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="w-full sm:w-auto mb-6"
                        >
                            <Button
                                size="lg"
                                className="w-full sm:w-auto h-[56px] sm:h-[60px] px-12 sm:px-14 text-[14px] sm:text-[15px] font-medium bg-[#B87333] hover:bg-[#A66628] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                                asChild
                            >
                                <Link href="#prijzen">
                                    Start je Routine
                                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </Button>
                        </motion.div>

                        {/* TRUST BULLETS */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.15 }}
                            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-[12px] sm:text-[13px] text-[#9A958D]"
                        >
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#1E3A5F]" />
                                Gratis verzending
                            </span>
                            <span className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-[#1E3A5F]" />
                                60 dagen retour
                            </span>
                        </motion.div>
                    </div>

                    {/* RIGHT - Desktop product - Arch shape */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 }}
                        className="hidden lg:flex justify-center items-center"
                    >
                        <div className="relative overflow-hidden rounded-t-[200px] rounded-b-3xl shadow-2xl bg-gradient-to-b from-[#F5F0EB] to-white p-8 pt-12">
                            <Image
                                src="/images/revive-bottle.png"
                                alt="REVIVE Serum"
                                width={500}
                                height={600}
                                className="w-full h-auto max-w-[400px]"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
