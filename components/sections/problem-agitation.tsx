"use client"

import { motion } from 'framer-motion'
import { HeartCrack, RotateCcw, Zap } from 'lucide-react'

const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut" }
    }
}

export default function ProblemAgitation() {
    return (
        <section className="py-24 bg-emerald-950 text-white relative overflow-hidden">
            {/* Background Gradient Blob */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-emerald-900/30 rounded-full blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6">
                {/* Section label */}
                <div className="text-center mb-8">
                    <span className="bg-white/10 text-emerald-100 px-4 py-1.5 rounded-full font-medium text-xs uppercase tracking-widest border border-white/10 backdrop-blur-sm">
                        HET HUIDIGE LANDSCHAP
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                    De "gouden standaard" <br />
                    <span className="text-emerald-400">heeft een donkere kant.</span>
                </h2>

                <p className="text-center text-lg text-emerald-100/80 mb-16 max-w-3xl mx-auto leading-relaxed">
                    Minoxidil en Finasteride zijn effectief, maar komen vaak met een prijs die veel mannen liever niet betalen.
                </p>

                {/* 3 Pain cards */}
                <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <div className="w-12 h-12 mb-6 bg-rose-500/10 rounded-xl flex items-center justify-center border border-rose-500/20">
                            <HeartCrack className="w-6 h-6 text-rose-300" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Seksuele Bijwerkingen</h3>
                        <p className="text-emerald-100/70 leading-relaxed text-sm">
                            Een klein maar significant percentage gebruikers ervaart <span className="text-rose-300 font-medium">libidoverlies</span> en andere ongewenste effecten.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <div className="w-12 h-12 mb-6 bg-rose-500/10 rounded-xl flex items-center justify-center border border-rose-500/20">
                            <RotateCcw className="w-6 h-6 text-rose-300" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Levenslange Afhankelijkheid</h3>
                        <p className="text-emerald-100/70 leading-relaxed text-sm">
                            Stop je met de behandeling? Dan verlies je vaak <span className="text-rose-300 font-medium">binnen enkele maanden</span> al je geboekte resultaat.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                        <div className="w-12 h-12 mb-6 bg-rose-500/10 rounded-xl flex items-center justify-center border border-rose-500/20">
                            <Zap className="w-6 h-6 text-rose-300" />
                        </div>
                        <h3 className="text-xl font-bold text-white mb-3">Fysiek Ongemak</h3>
                        <p className="text-emerald-100/70 leading-relaxed text-sm">
                            Van hoofdpijn tot huidirritatie. Veel mannen stoppen voortijdig vanwege <span className="text-rose-300 font-medium">dagelijkse ongemakken</span>.
                        </p>
                    </motion.div>
                </div>

                {/* Transition line */}
                <div className="text-center">
                    <p className="text-2xl sm:text-3xl font-medium text-white">
                        Wij geloven dat je niet hoeft te kiezen tussen <br />
                        <span className="text-emerald-400">je haar</span> en <span className="text-emerald-400">je gezondheid</span>.
                    </p>
                </div>
            </div>
        </section>
    )
}
