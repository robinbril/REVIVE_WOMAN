"use client"

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { Dna, Shield, Anchor, TrendingUp, Clock, CheckCircle2, FlaskConical, Heart } from 'lucide-react'

export default function Solution() {
    const ingredients = [
        {
            name: "REDENSYL",
            percentage: "3%",
            description: "Activeert slapende haarcellen",
            icon: Dna,
        },
        {
            name: "CAPIXYL",
            percentage: "5%",
            description: "Blokkeert DHT — de #1 oorzaak van haaruitval",
            icon: Shield,
        },
        {
            name: "PROCAPIL",
            percentage: "3%",
            description: "Verankert haar in de hoofdhuid",
            icon: Anchor,
        },
        {
            name: "ANAGAIN",
            percentage: "3%",
            description: "Stimuleert nieuwe groei",
            icon: TrendingUp,
        },
        {
            name: "BAICAPIL",
            percentage: "4%",
            description: "Verlengt de groeifase",
            icon: Clock,
        },
    ]

    return (
        <section id="ingredienten" className="relative py-24 bg-gradient-to-b from-[#0A1612] to-[#050A08] overflow-hidden">
            {/* Subtle Grain Texture */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' /%3E%3C/svg%3E")`,
            }} />

            {/* Center Radial Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4A574]/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Section Label */}
                <div className="text-center mb-8">
                    <span className="text-emerald-500 font-mono text-xs uppercase tracking-widest">
                        DE OPLOSSING
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-center mb-4 leading-tight">
                    <span className="text-[#F5F5F0]">5 gepatenteerde technologieën.</span>
                    <br />
                    <span className="text-[#D4A574]">1 krachtige formule.</span>
                </h2>

                <p className="text-center text-gray-400 text-lg mb-16 max-w-3xl mx-auto">
                    Een wetenschappelijk samengestelde formule met de hoogste concentratie actieve ingrediënten.
                </p>

                {/* Product Hero with Orbital Ingredients */}
                <div className="relative flex justify-center mb-20">
                    {/* Central Product Bottle */}
                    <div className="relative w-72 h-96 flex items-center justify-center">
                        {/* Glow behind bottle */}
                        <div className="absolute inset-0 bg-[#D4A574]/20 rounded-full blur-2xl" />

                        {/* Bottle Image */}
                        <div className="relative w-full h-full">
                            <Image
                                src="/images/revive-hero-bottle.jpg"
                                alt="Revive Hair Growth Serum"
                                fill
                                className="object-contain drop-shadow-2xl"
                            />
                        </div>
                    </div>
                </div>

                {/* Ingredient Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 max-w-6xl mx-auto mb-16">
                    {ingredients.map((ingredient, index) => {
                        const Icon = ingredient.icon
                        return (
                            <div
                                key={index}
                                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-[#D4A574]/30 hover:-translate-y-2 transition-all duration-300 cursor-pointer"
                            >
                                {/* Icon */}
                                <div className="w-12 h-12 mb-4 bg-white/5 rounded-xl flex items-center justify-center border border-white/10 group-hover:border-[#D4A574]/40 group-hover:bg-[#D4A574]/10 transition-all">
                                    <Icon className="w-6 h-6 text-white group-hover:text-[#D4A574] transition-colors" />
                                </div>

                                {/* Name & Percentage */}
                                <h3 className="text-base font-bold text-white mb-1">
                                    {ingredient.name}
                                </h3>
                                <p className="text-2xl font-bold text-[#D4A574] mb-3">
                                    {ingredient.percentage}
                                </p>

                                {/* Description */}
                                <p className="text-sm text-gray-400 leading-relaxed">
                                    {ingredient.description}
                                </p>
                            </div>
                        )
                    })}
                </div>

                {/* Trust Badges */}
                <div className="flex flex-wrap justify-center items-center gap-6 mb-12 text-sm text-gray-400">
                    <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-white" />
                        <span>Klinisch getest</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <FlaskConical className="w-4 h-4 text-white" />
                        <span>18% actieve ingrediënten</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Heart className="w-4 h-4 text-white" />
                        <span>Zonder bijwerkingen</span>
                    </div>
                </div>

                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                    <Button asChild size="lg" className="bg-[#D4A574] hover:bg-[#C89563] text-gray-900 font-semibold px-8 py-6 text-base shadow-lg shadow-[#D4A574]/20">
                        <Link href="#prijzen">
                            START JE BEHANDELING →
                        </Link>
                    </Button>
                    <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white/10 font-medium px-8 py-6 text-base">
                        <Link href="#wetenschap">
                            Bekijk de wetenschap
                        </Link>
                    </Button>
                </div>
            </div>
        </section>
    )
}
