"use client"

import { Button } from '@/components/ui/button'
import { ArrowRight, Truck, ShieldCheck, Check } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState(0)

    const bundles = [
        {
            label: "6 MAANDEN",
            subtitle: "Complete Reset",
            pricePerMonth: 29,
            totalPrice: 174,
            popular: true,
            discount: "-41%",
            items: ["6× serum (180ml)", "Micro-roller gratis"],
        },
        {
            label: "3 MAANDEN",
            subtitle: null,
            pricePerMonth: 39,
            totalPrice: 117,
            popular: false,
            discount: "-20%",
            items: ["3× serum (90ml)"],
        },
        {
            label: "1 MAAND",
            subtitle: "Proberen",
            pricePerMonth: null,
            totalPrice: 49,
            popular: false,
            discount: null,
            items: ["1× serum (30ml)"],
        },
    ]

    const selectedBundle = bundles[selectedPlan]

    return (
        <section id="prijzen" className="py-16 sm:py-24 bg-white">
            <div className="max-w-2xl mx-auto px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-[24px] sm:text-[28px] font-normal text-[#2E2A25] mb-2 text-center"
                    >
                        Start je REVIVE routine
                    </h2>
                    <p className="text-[13px] text-[#9A958D] mb-10 text-center">
                        Kies je formaat
                    </p>

                    {/* Bundle selector */}
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 mb-8">
                        {bundles.map((bundle, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedPlan(index)}
                                className={`relative p-4 sm:p-5 rounded-2xl border transition-all duration-300 ${selectedPlan === index
                                    ? 'border-[#B87333] bg-[#B87333]/5 shadow-lg'
                                    : 'border-[#E8E4E0] hover:border-[#B87333]/40 bg-white'
                                    }`}
                            >
                                {bundle.popular && selectedPlan === index && (
                                    <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 bg-[#B87333] text-white px-3 py-1 rounded-full text-[9px] font-medium tracking-wide whitespace-nowrap">
                                        MEEST GEKOZEN
                                    </div>
                                )}
                                <div className="font-medium text-[#2E2A25] text-[12px] sm:text-[13px] mb-1">
                                    {bundle.label}
                                </div>
                                {bundle.pricePerMonth ? (
                                    <div className="text-[18px] sm:text-[22px] font-medium text-[#2E2A25]">
                                        €{bundle.pricePerMonth}<span className="text-[11px] font-normal text-[#9A958D]">/mnd</span>
                                    </div>
                                ) : (
                                    <div className="text-[18px] sm:text-[22px] font-medium text-[#2E2A25]">
                                        €{bundle.totalPrice}
                                    </div>
                                )}
                                {bundle.discount && (
                                    <div className="text-[10px] text-[#B87333] font-medium mt-1">
                                        {bundle.discount}
                                    </div>
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Selected bundle */}
                    <div className="bg-[#FAF9F6] rounded-2xl p-6 sm:p-8 mb-6">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-[#6B6560] text-[14px]">Totaal</span>
                            <span
                                style={{ fontFamily: 'var(--font-heading)' }}
                                className="text-[28px] font-normal text-[#2E2A25]"
                            >
                                €{selectedBundle.totalPrice}
                            </span>
                        </div>
                        <div className="space-y-2 mb-6">
                            {selectedBundle.items.map((item, i) => (
                                <div key={i} className="flex items-center gap-2 text-[13px] text-[#4A4540]">
                                    <Check className="w-4 h-4 text-[#1E3A5F]" />
                                    {item}
                                </div>
                            ))}
                        </div>
                        <Button
                            className="w-full h-14 text-[14px] font-medium bg-[#B87333] hover:bg-[#9A5F2A] text-white rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300"
                            asChild
                        >
                            <Link href="/checkout">
                                Bestel Nu & Start Herstel
                                <ArrowRight className="w-4 h-4 ml-2" />
                            </Link>
                        </Button>
                    </div>

                    {/* Trust */}
                    <div className="flex flex-wrap items-center justify-center gap-5 text-[12px] text-[#6B6560]">
                        <span className="flex items-center gap-1.5">
                            <Truck className="w-4 h-4 text-[#B87333]" />
                            Morgen in huis
                        </span>
                        <span>Achteraf betalen</span>
                        <span className="flex items-center gap-1.5">
                            <ShieldCheck className="w-4 h-4 text-[#B87333]" />
                            60 Dagen Garantie
                        </span>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
