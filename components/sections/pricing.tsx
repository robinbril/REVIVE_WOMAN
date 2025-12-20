"use client"

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Check, ArrowRight, Truck, ShieldCheck, Clock, Sparkles, Star } from 'lucide-react'
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
        badge: "Testfase",
        benefits: [
            { title: "1× REVIVE (30ml)", subtitle: "1 maand voorraad" },
            { title: "30 dagen kuur", subtitle: "Startperiode" },
            { title: "180 dagen garantie", subtitle: "Volledige terugbetaling" }
        ],
        cta: "PROBEER 1 FLES"
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
        badge: "Snelle start",
        benefits: [
            { title: "3× REVIVE (90ml)", subtitle: "3 maanden voorraad" },
            { title: "90 dagen kuur", subtitle: "Eerste resultaten zichtbaar" },
            { title: "Gratis verzending", subtitle: "Binnen 2 werkdagen" }
        ],
        cta: "BESTEL STARTPAKKET"
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
        badge: "Meest gekozen",
        benefits: [
            { title: "6× REVIVE (180ml)", subtitle: "6 maanden volledige voorraad" },
            { title: "180 dagen kuur", subtitle: "Complete behandelperiode" },
            { title: "Gratis Micro-Roller", subtitle: "€39 waarde • Verhoogt absorptie" }
        ],
        cta: "BESTEL NU"
    }
]

export default function Pricing() {
    // Default to the middle option "Start" for mobile initial view, or "Resultaat" if we want to push the best deal
    // The prompt implies forced engagement, let's default to the featured plan (index 2) or middle?
    // User prompt example implies "switch tabs". Let's default to featured (Resultaat) as it's the best offer.
    const [selectedPlanIndex, setSelectedPlanIndex] = useState(2)

    return (
        <section id="prijzen" className="py-16 sm:py-32 bg-[#F9FAFB] relative overflow-hidden">
            {/* Background Atmosphere */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-[20%] left-[50%] -translate-x-[50%] w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(196,149,106,0.08)_0%,transparent_70%)] blur-[100px]" />
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
                    <div className="relative min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <PricingCard
                                key={plans[selectedPlanIndex].id}
                                plan={plans[selectedPlanIndex]}
                            />
                        </AnimatePresence>
                    </div>
                </div>

                {/* --- DESKTOP: Grid Layout --- */}
                <div className="hidden lg:grid grid-cols-3 gap-8 items-start max-w-5xl mx-auto">
                    {plans.map((plan) => (
                        <PricingCard key={plan.id} plan={plan} isDesktop />
                    ))}
                </div>

                {/* Trust Row - Below cards */}
                <div className="hidden lg:flex justify-center gap-8 mt-16 pt-8 border-t border-gray-100">
                    <TrustBadge icon={Truck} text="Gratis verzending" />
                    <TrustBadge icon={ShieldCheck} text="180 dagen garantie" />
                    <TrustBadge icon={Clock} text="Voor 23:59 besteld, morgen in huis" />
                </div>
            </div>
        </section>
    )
}

// --- Components ---

function PricingCard({ plan, isDesktop = false }: { plan: typeof plans[0], isDesktop?: boolean }) {
    const isFeatured = plan.featured

    const CardWrapper = isDesktop ? motion.div : motion.div

    return (
        <CardWrapper
            initial={isDesktop ? { opacity: 0, y: 20 } : { opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={isDesktop ? {} : { opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className={`bg-white rounded-[24px] p-5 sm:p-8 border relative overflow-hidden flex flex-col h-full ${isFeatured
                ? 'border-[#C4956A]/30 shadow-[0_20px_40px_rgba(196,149,106,0.15)] ring-1 ring-[#C4956A]/10'
                : 'border-gray-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)]'
                }`}
        >
            {/* Badge */}
            <div className="mb-4 flex justify-start">
                <span className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${isFeatured
                    ? 'bg-[#1a1a1a] text-white shadow-lg'
                    : 'bg-gray-100 text-gray-500'
                    }`}>
                    {isFeatured && <Star className="w-3 h-3 fill-[#C4956A] text-[#C4956A]" />}
                    {plan.badge}
                </span>
            </div>

            {/* Price Section */}
            <div className="mb-6">
                <div className="flex items-baseline gap-2 mb-2">
                    {plan.originalPrice > plan.totalPrice && (
                        <span className="text-[16px] text-gray-300 font-medium line-through">
                            €{plan.originalPrice}
                        </span>
                    )}
                    <div className="flex items-start">
                        <span className="text-[20px] font-bold text-[#1a1a1a] mt-1 mr-0.5">€</span>
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

                <div className="flex items-center gap-3">
                    {plan.savings > 0 && (
                        <span className="bg-[#C4956A] text-white text-[11px] font-bold px-2 py-1 rounded-md">
                            Bespaar €{plan.savings}
                        </span>
                    )}
                    <span className="text-[14px] text-gray-500">
                        <strong className="text-[#1a1a1a] font-bold">€{plan.perMonth}</strong>/maand
                    </span>
                </div>
            </div>

            {/* Features */}
            <div className="space-y-2 mb-6 flex-grow">
                {plan.benefits.map((benefit, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.1 + idx * 0.05 }}
                        className="flex items-start gap-3 bg-gray-50/80 p-3 rounded-xl"
                    >
                        <div className="w-5 h-5 rounded-full bg-[#C4956A] flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-white stroke-[3]" />
                        </div>
                        <div>
                            <div className="text-[13px] font-bold text-[#1a1a1a] leading-tight">
                                {benefit.title}
                            </div>
                            <div className="text-[11px] text-gray-500 leading-tight mt-0.5">
                                {benefit.subtitle}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* CTA */}
            <Link href="/checkout" className="block relative group">
                <div className={`relative overflow-hidden w-full py-4 sm:py-5 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 ${isFeatured
                    ? 'bg-[#1a1a1a] text-white shadow-[0_8px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_12px_25px_rgba(0,0,0,0.2)] hover:-translate-y-0.5'
                    : 'bg-gray-100 text-[#1a1a1a] hover:bg-gray-200'
                    }`}>
                    {/* Shimmer for featured */}
                    {isFeatured && (
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-shimmer" style={{ animationDuration: '3s' }} />
                    )}

                    <span className="text-[13px] sm:text-[14px] font-bold uppercase tracking-wider">
                        {plan.cta}
                    </span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
            </Link>

            {/* Mobile Trust Row (Inside Card) */}
            {!isDesktop && (
                <div className="mt-6 pt-5 border-t border-gray-100 flex flex-wrap justify-center gap-x-4 gap-y-2">
                    <MobileTrustItem icon={Truck} text="Gratis verzending" />
                    <MobileTrustItem icon={ShieldCheck} text="180 dagen garantie" />
                    <div className="flex items-center gap-1.5 opacity-80">
                        <span className="relative flex h-2 w-2">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                        </span>
                        <span className="text-[11px] font-medium text-gray-500">Op voorraad</span>
                    </div>
                </div>
            )}
        </CardWrapper>
    )
}

function TrustBadge({ icon: Icon, text }: { icon: any, text: string }) {
    return (
        <div className="flex items-center gap-2 text-[#6b7280]">
            <Icon className="w-4 h-4 text-[#C4956A]" />
            <span className="text-[12px] font-medium">{text}</span>
        </div>
    )
}

function MobileTrustItem({ icon: Icon, text, color = "text-[#C4956A]" }: { icon: any, text: string, color?: string }) {
    return (
        <div className="flex items-center gap-1.5 opacity-80">
            <Icon className={`w-3.5 h-3.5 ${color}`} />
            <span className="text-[11px] font-medium text-gray-500">{text}</span>
        </div>
    )
}

// Add shimmer animation to global CSS or ensure tailwind config supports it.
// Assuming 'animate-shimmer' is not in default tailwind, we might need to add it or use a style tag / arbitrary values if current config doesn't support it.
// But for now, user provided CSS in prompt implies they want this structure. I'll rely on global css or framer-motion for complex things. 
// For the shimmer, I used a standard class. If it doesn't work, I'll fix it.
