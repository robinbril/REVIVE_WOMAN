"use client"

import { Check, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
    const scrollToPricing = (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById('prijzen')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="py-20 md:py-32 bg-gradient-to-b from-[#f8fff9] to-white mt-28">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

                {/* LEFT - Rust & Kracht */}
                <div className="space-y-12">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-[#0f172a]">
                        Stop Je
                        <br />
                        <span className="text-[#059669]">Haaruitval</span>
                        <br />
                        Binnen 90 Dagen
                    </h1>

                    <p className="text-xl md:text-2xl text-[#475569] leading-relaxed">
                        Elke dag wachten = 100 follikels voor altijd weg.
                        <br />
                        Start nu of betaal later €10.000 voor transplants.
                    </p>

                    {/* Alleen 3 USPs */}
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 text-lg font-medium text-[#0f172a]"
                        >
                            <Check className="w-8 h-8 text-[#059669] flex-shrink-0" />
                            88.9% meer haargroei dan Minoxidil
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-4 text-lg font-medium text-[#0f172a]"
                        >
                            <Check className="w-8 h-8 text-[#059669] flex-shrink-0" />
                            0% bijwerkingen — géén libidoproblemen
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 text-lg font-medium text-[#0f172a]"
                        >
                            <Check className="w-8 h-8 text-[#059669] flex-shrink-0" />
                            90 dagen geld-terug-garantie
                        </motion.p>
                    </div>

                    {/* Grote emerald CTA */}
                    <button
                        onClick={scrollToPricing}
                        className="group bg-[#059669] hover:bg-[#047857] text-white font-black text-xl md:text-2xl px-16 py-7 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-3"
                    >
                        START NU — €39/maand
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
                    </button>

                    <p className="text-sm text-[#475569]">
                        ✓ Gratis verzending • Niet goed = geld terug • Stop wanneer je wilt
                    </p>

                    {/* Payment logos - grijstinten */}
                    <div className="flex flex-wrap items-center gap-4 pt-4 opacity-60">
                        <div className="px-4 py-2 bg-gray-100 rounded-lg">
                            <span className="text-xs font-bold text-gray-600">iDEAL</span>
                        </div>
                        <div className="px-4 py-2 bg-gray-100 rounded-lg">
                            <span className="text-xs font-semibold text-gray-600"> Pay</span>
                        </div>
                        <div className="px-4 py-2 bg-gray-100 rounded-lg">
                            <span className="text-xs font-semibold text-gray-600">G Pay</span>
                        </div>
                        <div className="px-4 py-2 bg-gray-100 rounded-lg">
                            <span className="text-xs font-bold text-gray-600">Klarna</span>
                        </div>
                        <div className="px-4 py-2 bg-gray-100 rounded-lg">
                            <span className="text-xs font-bold text-gray-600">PayPal</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT - Product + 2 badges + before/after */}
                <div className="relative">
                    {/* Product foto */}
                    <div className="relative w-full max-w-lg mx-auto">
                        <Image
                            src="/images/product-hero.png"
                            alt="FOLLICLE Hair Growth Serum"
                            width={500}
                            height={600}
                            className="w-full h-auto"
                            style={{ filter: 'drop-shadow(0 25px 50px rgba(0,0,0,0.15))' }}
                            priority
                        />

                        {/* Alleen 2 badges */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-[#f97316] text-white px-10 py-4 rounded-full font-black text-xl shadow-2xl animate-pulse rotate-[-3deg]">
                            2.847× VERKOCHT VANDAAG
                        </div>

                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#f59e0b] to-[#f97316] text-black px-12 py-5 rounded-full font-black text-2xl shadow-2xl">
                            90 DAGEN GELD TERUG
                        </div>
                    </div>

                    {/* Grote before/after onder product */}
                    <div className="mt-24 grid grid-cols-2 gap-8 max-w-md mx-auto">
                        <div className="text-center">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                                <Image
                                    src="/images/hair-before.jpg"
                                    alt="Voor behandeling"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-4 font-bold text-[#475569]">Voor</p>
                        </div>
                        <div className="text-center">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl ring-4 ring-[#059669]">
                                <Image
                                    src="/images/hair-after.jpg"
                                    alt="Na 12 weken FOLLICLE"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-4 font-bold text-[#059669]">Na 12 weken</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
