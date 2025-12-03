"use client"

import { motion } from 'framer-motion'
import { HeartCrack, RotateCcw, Zap } from 'lucide-react'

const cardVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
}

export default function ProblemAgitation() {
    return (
        <section className="py-24 bg-gradient-to-b from-white to-emerald-50">
            <div className="max-w-7xl mx-auto px-6">
                {/* Section label */}
                <div className="text-center mb-8">
                    <span className="bg-emerald-100 text-emerald-700 px-6 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                        HET PROBLEEM
                    </span>
                </div>

                {/* Headline */}
                <h2 className="text-center text-5xl sm:text-6xl md:text-8xl font-black text-black leading-none tracking-tighter mb-6">
                    Minoxidil werkt...
                    <br />
                    <span className="text-red-600">tot je libido, hart of portemonnee het opgeeft.</span>
                </h2>

                <p className="text-center text-xl text-gray-600 mb-16 max-w-4xl mx-auto">
                    Duizenden mannen gebruiken het dagelijks. Maar tegen welke prijs?
                </p>

                {/* 3 Pain cards */}
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="bg-white rounded-3xl p-10 shadow-xl border border-red-100 text-center hover:shadow-2xl transition-shadow"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                            <HeartCrack className="w-12 h-12 text-red-600" />
                        </div>
                        <h3 className="text-2xl font-black text-red-600 mb-3">Libidoproblemen</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            <strong className="text-red-600 text-2xl">2-4%</strong> van de gebruikers krijgt erectiestoornissen — <strong>soms permanent</strong>.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white rounded-3xl p-10 shadow-xl border border-red-100 text-center hover:shadow-2xl transition-shadow"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                            <RotateCcw className="w-12 h-12 text-red-600" />
                        </div>
                        <h3 className="text-2xl font-black text-red-600 mb-3">Levenslang afhankelijk</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Stop je? Dan verlies je <strong className="text-red-600">binnen 3 maanden</strong> alles weer.
                        </p>
                    </motion.div>

                    <motion.div
                        variants={cardVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="bg-white rounded-3xl p-10 shadow-xl border border-red-100 text-center hover:shadow-2xl transition-shadow"
                    >
                        <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
                            <Zap className="w-12 h-12 text-red-600" />
                        </div>
                        <h3 className="text-2xl font-black text-red-600 mb-3">Hoofdpijn & hartkloppingen</h3>
                        <p className="text-lg text-gray-700 leading-relaxed">
                            Duizenden mannen ervaren <strong className="text-red-600">elke dag</strong> ongewenste bijwerkingen.
                        </p>
                    </motion.div>
                </div>

                {/* Transition line */}
                <div className="text-center">
                    <p className="text-4xl sm:text-5xl md:text-6xl font-black text-emerald-600 underline decoration-8 decoration-emerald-400">
                        Wij dachten: dat móét anders.
                    </p>
                </div>
            </div>
        </section>
    )
}
