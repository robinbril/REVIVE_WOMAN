"use client"

import { ArrowRight, Star } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] lg:min-h-screen flex items-center py-20 lg:py-0 bg-[#FAF9F6] overflow-hidden">

            <div className="w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

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
                            className="text-[clamp(40px,7vw,72px)] font-normal leading-[1] tracking-tight text-[#1a1a1a] mb-4"
                        >
                            Kracht uit<br />
                            wetenschap.<br />
                            <span 
                                className="italic text-[#B87333]"
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
                                className="h-[56px] px-10 text-[15px] font-semibold bg-[#B87333] hover:bg-[#9A5F2A] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
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
                            REVIVE bevat 5% GHK-Cu copper peptides in de hoogste concentratie die daadwerkelijk werkt.
                        </motion.p>
                    </div>

                    {/* RIGHT - Product Image */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, type: "spring", stiffness: 80 }}
                        className="order-1 lg:order-2 relative flex justify-center lg:justify-end"
                    >
                        {/* Blurred bokeh background */}
                        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_40%,rgba(255,223,186,0.4)_0%,rgba(255,255,255,0.2)_40%,transparent_70%)] blur-2xl scale-110" />
                        
                        {/* Product container with soft edge */}
                        <div className="relative w-full max-w-[500px] aspect-[4/5]">
                            {/* Soft cream background shape */}
                            <div 
                                className="absolute inset-0 bg-gradient-to-br from-[#FFF8F0] via-[#FDF5ED] to-[#F5EDE5] rounded-[40px] shadow-xl"
                            />
                            
                            {/* Product image */}
                            <Image
                                src="/images/revive-bottle-clean.png"
                                alt="REVIVE Glow Serum"
                                fill
                                className="object-contain p-8 drop-shadow-2xl product-float"
                                priority
                            />
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
