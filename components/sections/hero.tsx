"use client"

import { Button } from '@/components/ui/button'
import { Star, Shield, TrendingUp } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
    const scrollToPricing = (e: React.MouseEvent) => {
        e.preventDefault()
        document.getElementById('prijzen')?.scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <section className="py-16 md:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT – Copy */}
                <div className="space-y-8">
                    {/* Proof Badge */}
                    <div className="inline-flex items-center gap-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full">
                        <Star className="w-4 h-4 text-green-600 fill-green-600" />
                        <span className="text-sm font-semibold text-green-900">
                            2.847 MANNEN MET VOLLER HAAR
                        </span>
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl sm:text-6xl md:text-7xl font-black leading-tight hero-headline">
                        Stop Je
                        <br />
                        <span className="text-primary-600">Haaruitval</span>
                        <br />
                        Binnen 90 Dagen
                    </h1>

                    {/* Subheadline */}
                    <p className="text-xl md:text-2xl text-neutral-600 leading-relaxed">
                        Elke dag wachten = 100 follikels voor altijd weg.
                        <br />
                        Start nu of betaal later €10.000 voor transplants.
                    </p>

                    {/* Value bullets */}
                    <div className="space-y-4">
                        <p className="flex items-center gap-3 text-lg font-medium text-neutral-800">
                            <span className="text-green-600 font-bold text-2xl">✓</span>
                            88.9% meer haargroei dan Minoxidil (klinisch bewezen)
                        </p>
                        <p className="flex items-center gap-3 text-lg font-medium text-neutral-800">
                            <span className="text-green-600 font-bold text-2xl">✓</span>
                            0% bijwerkingen — géén libidoproblemen of hoofdpijn
                        </p>
                        <p className="flex items-center gap-3 text-lg font-medium text-neutral-800">
                            <span className="text-green-600 font-bold text-2xl">✓</span>
                            90 dagen niet goed = geld terug
                        </p>
                    </div>

                    {/* CTA */}
                    <div className="space-y-4">
                        <Button
                            onClick={scrollToPricing}
                            size="lg"
                            className="w-full sm:w-auto text-lg sm:text-xl px-10 py-6 h-auto bg-primary-600 hover:bg-primary-700 cursor-pointer rounded-2xl shadow-xl transform hover:scale-105 transition font-black"
                        >
                            START NU — €39/maand (90 dagen garantie) →
                        </Button>

                        {/* Micro-copy */}
                        <p className="text-sm text-neutral-500">
                            ✓ Gratis verzending • Niet goed = geld terug • Stop wanneer je wilt
                        </p>
                    </div>

                    {/* Payment Methods */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                        <div className="px-3 py-1.5 bg-white border border-neutral-200 rounded-md">
                            <span className="text-xs font-bold text-pink-600">iDEAL</span>
                        </div>
                        <div className="px-3 py-1.5 bg-black rounded-md">
                            <span className="text-xs font-semibold text-white"> Pay</span>
                        </div>
                        <div className="px-3 py-1.5 bg-white border border-neutral-200 rounded-md">
                            <span className="text-xs font-semibold">G Pay</span>
                        </div>
                        <div className="px-3 py-1.5 bg-pink-100 border border-pink-200 rounded-md">
                            <span className="text-xs font-bold text-pink-600">Klarna</span>
                        </div>
                        <div className="px-3 py-1.5 bg-blue-600 rounded-md">
                            <span className="text-xs font-bold text-white">PayPal</span>
                        </div>
                    </div>

                    {/* Trust Badges */}
                    <div className="flex flex-wrap gap-6 pt-4 border-t border-neutral-200">
                        <div className="flex items-center gap-2 text-neutral-600">
                            <TrendingUp className="w-5 h-5 text-primary-600" />
                            <span className="text-sm font-medium">Klinisch Getest</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600">
                            <Shield className="w-5 h-5 text-primary-600" />
                            <span className="text-sm font-medium">EU Gecertificeerd</span>
                        </div>
                        <div className="flex items-center gap-2 text-neutral-600">
                            <Star className="w-5 h-5 text-primary-600 fill-primary-600" />
                            <span className="text-sm font-medium">4.8/5 (2.847 reviews)</span>
                        </div>
                    </div>
                </div>

                {/* RIGHT – Visuals */}
                <div className="relative space-y-8">
                    {/* Product foto met badges */}
                    <div className="relative w-full max-w-md mx-auto">
                        {/* Product Stickers */}
                        <div className="absolute -top-4 -left-4 bg-amber-400 text-neutral-900 px-4 py-2 rounded-full font-black text-sm shadow-lg z-10 rotate-[-12deg]">
                            ⭐ 2.847× VERKOCHT
                        </div>
                        <div className="absolute top-20 -right-6 bg-primary-600 text-white px-6 py-3 rounded-full font-bold shadow-lg z-10 rotate-[8deg]">
                            88.9% ZAG RESULTAAT
                        </div>
                        <div className="absolute bottom-16 left-1/2 -translate-x-1/2 bg-neutral-900 text-white px-6 py-3 rounded-full font-bold text-sm shadow-lg z-10">
                            90 DAGEN GARANTIE
                        </div>

                        <Image
                            src="/images/product-hero.png"
                            alt="FOLLICLE Hair Growth Serum - 18% actieve ingrediënten voor bewezen haargroei"
                            width={500}
                            height={600}
                            className="w-full h-auto drop-shadow-2xl"
                            priority
                        />
                    </div>

                    {/* Mini before/after onder product */}
                    <div className="grid grid-cols-2 gap-4 max-w-sm mx-auto">
                        <div className="text-center">
                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-neutral-200">
                                <Image
                                    src="/images/hair-before.jpg"
                                    alt="Voor behandeling"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-2 font-bold text-neutral-600 text-sm">Voor</p>
                        </div>
                        <div className="text-center">
                            <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg border-2 border-green-500">
                                <Image
                                    src="/images/hair-after.jpg"
                                    alt="Na 12 weken FOLLICLE"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <p className="mt-2 font-bold text-green-600 text-sm">Na 12 weken</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
```
