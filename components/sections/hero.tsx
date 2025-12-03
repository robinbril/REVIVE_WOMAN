"use client"

import { Button } from '@/components/ui/button'
import { Star, Shield, TrendingUp, Check, ArrowRight } from 'lucide-react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function Hero() {
    const scrollToPricing = (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById('prijzen')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6">
                {/* Social proof bar */}
                <div className="text-center mb-8">
                    <span className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-6 py-3 rounded-full font-bold text-lg">
                        <Star className="w-5 h-5 fill-emerald-600" />
                        2.847 mannen met voller haar
                    </span>
                </div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* LEFT – Copy */}
                    <div className="space-y-8">
                        <h1 className="text-5xl md:text-7xl font-black leading-tight">
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

                        <div className="space-y-5">
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="flex items-center gap-4 text-lg font-medium text-gray-800"
                            >
                                <Check className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                                88.9% meer haargroei dan Minoxidil (klinisch bewezen)
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.1 }}
                                className="flex items-center gap-4 text-lg font-medium text-gray-800"
                            >
                                <Check className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                                0% bijwerkingen — géén libidoproblemen of hoofdpijn
                            </motion.p>
                            <motion.p
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2 }}
                                className="flex items-center gap-4 text-lg font-medium text-gray-800"
                            >
                                <Check className="w-8 h-8 text-emerald-600 flex-shrink-0" />
                                90 dagen niet goed = geld terug
                            </motion.p>
                        </div>

                        <button
                            onClick={scrollToPricing}
                            className="group relative inline-flex items-center gap-3 bg-emerald-600 hover:bg-emerald-700 text-white font-black text-xl md:text-2xl px-12 py-6 rounded-2xl shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all cursor-pointer"
                        >
                            START NU — €39/maand (90 dagen garantie) →
                            <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition" />
                        </button>

                        <p className="text-sm text-gray-500">
                            ✓ Gratis verzending • Niet goed = geld terug • Stop wanneer je wilt
                        </p>

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

                    {/* RIGHT – Visuals */}
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

                            {/* Badges - UPGRADED */}
                            <div className="absolute -top-4 -left-4 bg-gradient-to-r from-orange-400 to-orange-500 text-white px-6 py-3 rounded-full font-black text-lg rotate-[-8deg] shadow-xl animate-pulse">
                                ⭐ 2.847× VERKOCHT VANDAAG
                            </div>
                            <div className="absolute top-20 -right-8 bg-emerald-600 text-white px-8 py-4 rounded-full font-black text-xl shadow-2xl">
                                88.9% ZAG RESULTAAT
                            </div>
                            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-full font-black text-xl shadow-2xl animate-pulse">
                                90 DAGEN GARANTIE
                            </div>
                        </div>

                        {/* Before/after mini */}
                        <div className="mt-12 grid grid-cols-2 gap-6 max-w-md mx-auto">
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
            </div>
        </section>
    )
}
