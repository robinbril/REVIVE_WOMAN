"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Truck, ShieldCheck, Star, Gift } from 'lucide-react'
import Link from 'next/link'

// --- Data & Config ---
const plans = [
    {
        id: "trial",
        label: "Proberen",
        months: 1,
        totalPrice: 49,
        perMonth: 49,
        originalPrice: 59,
        savings: 10,
        featured: false,
        badge: "Probeer Risico Vrij",
        ctaStyle: "secondary",
        benefits: [
            { title: "1× REVIVE · 30 dagen", premium: false },
            { title: "180 dagen geld-terug", premium: false }
        ],
        cta: "PROBEER NU"
    },
    {
        id: "popular",
        label: "Start",
        months: 3,
        totalPrice: 87,
        perMonth: 29,
        originalPrice: 147,
        savings: 60,
        featured: false,
        badge: "Eerste Resultaten",
        ctaStyle: "primary",
        benefits: [
            { title: "3× REVIVE · 3 maanden", premium: false },
            { title: "Gratis verzending", premium: false }
        ],
        cta: "START NU"
    },
    {
        id: "best",
        label: "Resultaat",
        months: 6,
        totalPrice: 114,
        perMonth: 19,
        originalPrice: 294,
        savings: 180,
        featured: true,
        badge: "Meest Gekozen",
        ctaStyle: "featured",
        benefits: [
            { title: "6× REVIVE · 6 maanden", premium: false },
            { title: "180 dagen geld-terug", premium: false }
        ],
        bonus: { title: "Gratis Micro-Roller", value: 39 },
        cta: "BESTEL NU"
    }
]

export default function Pricing() {
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(2)

    return (
        <section id="prijzen" className="py-16 sm:py-32 bg-gradient-to-b from-[#faf9f7] via-white to-[#fffaf7] relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[50%] -translate-x-[50%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(196,149,106,0.08)_0%,transparent_70%)] blur-[100px]" />
                <div className="absolute bottom-[10%] right-[-10%] w-[400px] h-[400px] bg-[radial-gradient(circle,rgba(196,149,106,0.06)_0%,transparent_70%)] blur-[80px]" />
            </div>

            <div className="max-w-[640px] lg:max-w-6xl mx-auto px-4 relative z-10">
                {/* Header */}
                <div className="text-center mb-10 sm:mb-16">
                    <h2
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-[32px] sm:text-[42px] font-normal text-[#1a1a1a] mb-4"
                    >
                        Prijzen & Pakketten
                    </h2>
                    <p className="text-[15px] text-[#6b7280]">
                        Kies voor resultaat. Probeer risicovrij met 180 dagen garantie.
                    </p>
                </div>

                {/* --- MOBILE: Segmented Control + Single Card --- */}
                <div className="lg:hidden">
                    {/* Segmented Control */}
                    <div className="bg-white/80 backdrop-blur-xl border border-gray-200/60 p-1 rounded-xl shadow-sm mb-8 flex relative">
                        {plans.map((plan, i) => (
                            <button
                                key={plan.id}
                                onClick={() => setSelectedPlanIndex(i)}
                                className={`flex-1 relative py-3 text-[11px] font-bold uppercase tracking-[0.1em] transition-colors duration-300 z-10 ${selectedPlanIndex === i ? 'text-[#1a1a1a]' : 'text-gray-400 hover:text-gray-600'
                                    }`}
                            >
                                {plan.label}
                                {selectedPlanIndex === i && (
                                    <motion.div
                                        layoutId="activeTab"
                                        className="absolute inset-0 bg-white rounded-lg border border-gray-100 shadow-md -z-10"
                                        transition={{ type: "spring", bounce: 0.15, duration: 0.5 }}
                                    />
                                )}
                            </button>
                        ))}
                    </div>

                    {/* Dynamic Mobile Card */}
                    <div className="relative min-h-[450px]">
                        <AnimatePresence mode="wait">
                            <PricingCard
                                key={plans[selectedPlanIndex].id}
                                plan={plans[selectedPlanIndex]}
                            />
                        </AnimatePresence>
                    </div>
                </div>

                {/* --- DESKTOP: Grid Layout --- */}
                <div className="hidden lg:grid grid-cols-3 gap-6 items-stretch max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} isDesktop />
                    ))}
                </div>

                {/* Trust Row - Compact Single Line */}
                <div className="flex justify-center items-center gap-4 mt-12 text-[13px] text-[#6b7280]">
                    <div className="flex items-center gap-1.5">
                        <Truck className="w-4 h-4 text-[#C4956A]" />
                        <span>Gratis verzending</span>
                    </div>
                    <span className="text-gray-300">·</span>
                    <div className="flex items-center gap-1.5">
                        <ShieldCheck className="w-4 h-4 text-[#C4956A]" />
                        <span>180d garantie</span>
                    </div>
                    <span className="text-gray-300">·</span>
                    <div className="flex items-center gap-1.5">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span>Op voorraad</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

// --- Components ---

function PricingCard({ plan, isDesktop = false }: { plan: typeof plans[0], isDesktop?: boolean }) {
    const isFeatured = plan.featured

    return (
        <motion.div
            initial={isDesktop ? { opacity: 0, y: 20 } : { opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={isDesktop ? {} : { opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className={`bg-white rounded-[24px] p-6 sm:p-8 border relative overflow-hidden flex flex-col h-full ${isFeatured
                ? 'border-[#C4956A]/30 shadow-[0_20px_40px_rgba(196,149,106,0.15)] ring-1 ring-[#C4956A]/10 lg:scale-[1.02]'
                : 'border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]'
                }`}
        >
            {/* Featured Glow */}
            {isFeatured && (
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[radial-gradient(circle,rgba(196,149,106,0.15)_0%,transparent_70%)] pointer-events-none" />
            )}

            {/* Zone 1: Badge - Single, Clear */}
            <div className="mb-6">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${isFeatured
                    ? 'bg-[#1a1a1a] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-500'
                    }`}>
                    {isFeatured && <Star className="w-3 h-3 fill-[#C4956A] text-[#C4956A]" />}
                    {plan.badge}
                </span>
            </div>

            {/* Zone 2: Price - Integrated */}
            <div className="mb-6">
                {/* Old + New Price */}
                <div className="flex items-baseline gap-2 mb-2">
                    {plan.originalPrice > plan.totalPrice && (
                        <span className="text-[20px] text-gray-300 font-medium line-through decoration-2">
                            €{plan.originalPrice}
                        </span>
                    )}
                    <div className="flex items-start">
                        <span className="text-[22px] font-bold text-[#1a1a1a] mt-2 mr-1">€</span>
                        <motion.span
                            key={plan.totalPrice}
                            initial={{ y: 5, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            className="text-[56px] font-black text-[#1a1a1a] leading-[0.9] tracking-tighter"
                        >
                            {plan.totalPrice}
                        </motion.span>
                    </div>
                </div>

                {/* Single Consolidated Line: Savings + Per Month */}
                <div className="flex items-center gap-2 text-[14px]">
                    {plan.savings > 0 && (
                        <>
                            <span className="font-bold text-emerald-600">Bespaar €{plan.savings}</span>
                            <span className="text-gray-300">·</span>
                        </>
                    )}
                    <span className="text-gray-500">
                        €{plan.perMonth}/maand
                    </span>
                </div>
            </div>

            {/* Zone 3: Features - Compact */}
            <div className="space-y-3 mb-6 flex-grow">
                {plan.benefits.map((benefit, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-3"
                    >
                        <div className="w-5 h-5 rounded-full bg-[#C4956A] flex items-center justify-center flex-shrink-0">
                            <Check className="w-3 h-3 text-white stroke-[3]" />
                        </div>
                        <span className="text-[14px] text-[#4b5563]">
                            {benefit.title}
                        </span>
                    </div>
                ))}

                {/* Bonus - Subtle Highlight */}
                {plan.bonus && (
                    <div className="flex items-start gap-3 mt-4 pt-3 border-t border-gray-100">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#C4956A] to-[#B87333] flex items-center justify-center flex-shrink-0 shadow-[0_0_12px_rgba(196,149,106,0.4)]">
                            <Gift className="w-3 h-3 text-white stroke-[2.5]" />
                        </div>
                        <div>
                            <span className="text-[14px] font-bold text-[#C4956A] block">
                                {plan.bonus.title}
                            </span>
                            <span className="text-[12px] text-gray-500">
                                €{plan.bonus.value} waarde
                            </span>
                        </div>
                    </div>
                )}
            </div>

            {/* Zone 4: CTA - Clear Action */}
            <Link href="/checkout" className="block relative group">
                <div className={`relative overflow-hidden w-full py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${
                    plan.ctaStyle === 'featured'
                        ? 'bg-[#1a1a1a] text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] hover:-translate-y-0.5'
                        : plan.ctaStyle === 'primary'
                        ? 'bg-white text-[#1a1a1a] border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}>
                    {/* Shimmer for featured */}
                    {plan.ctaStyle === 'featured' && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" style={{ animationDuration: '3s' }} />
                    )}

                    <span className="text-[13px] font-bold uppercase tracking-wider">
                        {plan.cta}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
            </Link>
        </motion.div>
    )
}
