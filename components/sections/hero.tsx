"use client"

import { Button } from '@/components/ui/button'
import { Check, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
    const scrollToPricing = (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById('prijzen')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="py-16 md:py-24 bg-white mt-32">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT – Clean copy */}
                <div className="space-y-10">
                    <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-tight text-gray-900">
                        Stop Je
                        <br />
                        <span className="text-emerald-600">Haaruitval</span>
                        <br />
                        Binnen 90 Dagen
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
                        Elke dag wachten = 100 follikels voor altijd weg.
                        <br />
                        Start nu of betaal later €10.000 voor transplants.
                    </p>

                    {/* 3 USPs - kort */}
                    <div className="space-y-6">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex items-center gap-4 text-lg font-medium text-gray-800"
                        >
                            <Check className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                            88.9% meer haargroei dan Minoxidil
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            className="flex items-center gap-4 text-lg font-medium text-gray-800"
                        >
                            <Check className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                            0% bijwerkingen — géén libidoproblemen
                        </motion.p>
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="flex items-center gap-4 text-lg font-medium text-gray-800"
                        >
                            <Check className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                            90 dagen geld-terug-garantie
                        </motion.p>
                    </div>

                    {/* CTA */}
                    <button
                        onClick={scrollToPricing}
                        className="group bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xl md:text-2xl px-12 md:px-16 py-6 md:py-7 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all cursor-pointer inline-flex items-center gap-3"
                    >
                        START NU — €39/maand
                        <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
                    </button>

                    <p className="text-sm text-gray-500">
                        ✓ Gratis verzending • Niet goed = geld terug • Stop wanneer je wilt
                    </p>

                    {/* Payment logos */}
                    <div className="flex flex-wrap items-center gap-4 pt-4">
                        <div className="px-4 py-2 bg-white border border-neutral-200 rounded-lg shadow-sm">
                            <span className="text-sm font-bold text-pink-600">iDEAL</span>
                        </div>
                        <div className="px-4 py-2 bg-black rounded-lg shadow-sm">
                            <span className="text-sm font-semibold text-white"> Pay</span>
                        </div>
                        <div className="px-4 py-2 bg-white border border-neutral-200 rounded-lg shadow-sm">
                            <span className="text-sm font-semibold">G Pay</span>
                        </div>
                        <div className="px-4 py-2 bg-pink-50 border border-pink-200 rounded-lg shadow-sm">
                            <span className="text-sm font-bold text-pink-600">Klarna</span>
                        </div>
                        <div className="px-4 py-2 bg-blue-600 rounded-lg shadow-sm">
                            <span className="text-sm font-bold text-white">PayPal</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT – Clean visuals */}
                <div className="relative">
                    {/* Product */}
                    <div className="relative w-full max-w-lg mx-auto">
                        <Image
                            src="/images/product-hero.png"
                            alt="FOLLICLE Hair Growth Serum"
                            width={500}
                            height={600}
                            className="w-full h-auto drop-shadow-2xl"
                            priority
                        />

                        {/* Only 2 badges */}
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-orange-500 text-white px-10 py-4 rounded-full font-black text-xl shadow-2xl animate-pulse">
                            2.847× VERKOCHT VANDAAG
                        </div>

                        <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-12 py-5 rounded-full font-black text-2xl shadow-2xl">
                            90 DAGEN GELD TERUG
                        </div>
                    </div>

                    {/* Larger before/after */}
                    <div className="mt-20 grid grid-cols-2 gap-8 max-w-md mx-auto">
                        <div className="text-center">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                                <Image
                                    src="/images/hair-before.jpg"
                                    alt="Voor behandeling"
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/70 text-white px-4 py-2 rounded-full text-sm font-bold">
                                    Voor
                                </span>
                            </div>
                        </div>
                        <div className="text-center">
                            <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl ring-4 ring-emerald-500">
                                <Image
                                    src="/images/hair-after.jpg"
                                    alt="Na 12 weken FOLLICLE"
                                    fill
                                    className="object-cover"
                                />
                                <span className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                                    Na 12 weken
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
