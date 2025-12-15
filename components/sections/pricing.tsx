"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Truck, ShieldCheck, Check } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

export default function Pricing() {
    const [isSubscription, setIsSubscription] = useState(true)

    return (
        <section id="prijzen" className="py-16 sm:py-24 bg-white">
            <div className="max-w-xl mx-auto px-6 sm:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-[28px] sm:text-[34px] font-normal text-[#2E2A25] mb-2"
                    >
                        SERO. Signal Serum
                    </h2>
                    <p className="text-[14px] text-[#9A958D] mb-8">
                        5% GHK-Cu · 30ml
                    </p>

                    {/* Product Image */}
                    <div className="mb-8">
                        <Image
                            src="/images/sero-bottle.png"
                            alt="SERO. Serum"
                            width={200}
                            height={200}
                            className="h-36 sm:h-44 w-auto mx-auto"
                        />
                    </div>

                    {/* Price Toggle */}
                    <div className="flex gap-3 justify-center mb-8">
                        <button
                            onClick={() => setIsSubscription(false)}
                            className={`flex-1 max-w-[180px] p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 ${!isSubscription
                                ? 'border-[#B87333] bg-[#B87333]/5 shadow-lg'
                                : 'border-[#E8E4E0] hover:border-[#B87333]/40 bg-white'
                                }`}
                        >
                            <div className="text-[12px] text-[#6B6560] mb-1">Eenmalig</div>
                            <div className="text-[24px] sm:text-[28px] font-medium text-[#2E2A25]">€59</div>
                        </button>

                        <button
                            onClick={() => setIsSubscription(true)}
                            className={`flex-1 max-w-[180px] p-4 sm:p-5 rounded-2xl border-2 transition-all duration-300 relative ${isSubscription
                                ? 'border-[#B87333] bg-[#B87333]/5 shadow-lg'
                                : 'border-[#E8E4E0] hover:border-[#B87333]/40 bg-white'
                                }`}
                        >
                            {isSubscription && (
                                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#B87333] text-white px-3 py-0.5 rounded-full text-[9px] font-medium">
                                    -17%
                                </div>
                            )}
                            <div className="text-[12px] text-[#6B6560] mb-1">Elke 6 weken</div>
                            <div className="text-[24px] sm:text-[28px] font-medium text-[#2E2A25]">€49</div>
                        </button>
                    </div>

                    {/* What's included */}
                    <div className="bg-[#FAF9F6] rounded-2xl p-5 sm:p-6 mb-6 text-left">
                        <div className="space-y-2.5">
                            <div className="flex items-center gap-2.5 text-[13px] text-[#4A4540]">
                                <Check className="w-4 h-4 text-[#A8B5A0]" />
                                1× SERO. Signal Serum (30ml)
                            </div>
                            {isSubscription && (
                                <>
                                    <div className="flex items-center gap-2.5 text-[13px] text-[#4A4540]">
                                        <Check className="w-4 h-4 text-[#A8B5A0]" />
                                        SERO. Micro-Roller (0.25mm) voor optimale absorptie
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[13px] text-[#4A4540]">
                                        <Check className="w-4 h-4 text-[#A8B5A0]" />
                                        Routine handleiding
                                    </div>
                                    <div className="flex items-center gap-2.5 text-[13px] text-[#4A4540]">
                                        <Check className="w-4 h-4 text-[#A8B5A0]" />
                                        Pauzeer of annuleer wanneer je wilt
                                    </div>
                                </>
                            )}
                        </div>
                    </div>

                    {/* CTA */}
                    <Button
                        className="w-full h-14 text-[14px] font-medium bg-[#B87333] hover:bg-[#9A5F2A] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                        asChild
                    >
                        <Link href="/checkout">
                            {isSubscription ? 'Start Routine · €49' : 'Bestel Nu · €59'}
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                    </Button>

                    {/* Trust */}
                    <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 mt-6 text-[12px] text-[#6B6560]">
                        <span className="flex items-center gap-1.5">
                            <Truck className="w-3.5 h-3.5 text-[#B87333]" />
                            Gratis verzending
                        </span>
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-3.5 h-3.5 text-[#B87333]" />
                            60 dagen retour
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
