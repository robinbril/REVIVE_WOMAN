"use client"

import { Check, X, Lightbulb, Download } from 'lucide-react'
import { motion } from 'framer-motion'

const phases = [
    {
        period: 'Week 1-2',
        label: 'Gewenning',
        frequency: '2-3x per week',
        days: [false, true, false, true, false, true, false],
        tip: 'Start rustig. Irritatie? Pauzeer een dag.',
        intensity: 1,
    },
    {
        period: 'Week 3-4',
        label: 'Opbouw',
        frequency: '4-5x per week',
        days: [true, true, false, true, true, false, true],
        tip: 'Je huid went aan de concentratie.',
        intensity: 2,
    },
    {
        period: 'Week 5+',
        label: 'Volledig',
        frequency: 'Dagelijks',
        days: [true, true, true, true, true, true, true],
        tip: 'Optioneel: ook \'s ochtends.',
        intensity: 3,
    },
]

const dayLabels = ['M', 'D', 'W', 'D', 'V', 'Z', 'Z']

const milestones = [
    { week: 'Week 2', label: 'Kalmering', desc: 'Minder roodheid' },
    { week: 'Maand 1', label: 'Textuur', desc: 'Gladder gevoel' },
    { week: 'Maand 3', label: 'Stevigheid', desc: 'Voller aanzien' },
    { week: 'Maand 6', label: 'Nieuwe basis', desc: 'Structureel verbeterd' },
]

const dontCombine = [
    { name: 'Vitamine C', reason: 'Koper oxideert L-ascorbinezuur' },
    { name: 'AHA/BHA zuren', reason: 'Lage pH breekt peptides af' },
    { name: 'Retinol', reason: 'Gebruik op wisselende avonden' },
]

const doCombine = ['SPF (altijd overdag!)', 'Moisturizer', 'Niacinamide', 'Ceramides', 'Hyaluronzuur']

export default function HowItWorks() {
    return (
        <section id="routine" className="py-20 sm:py-28 bg-[#FAF9F6]">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-14"
                >
                    <h2
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-[28px] sm:text-[34px] font-normal text-[#2E2A25] mb-3"
                    >
                        Je 5% Kuur
                    </h2>
                    <p className="text-[15px] text-[#4A4540] max-w-xl mx-auto">
                        Een opbouwschema in 3 fasen. Je huid moet wennen aan deze actieve concentratie.
                    </p>
                </motion.div>

                {/* Phase Cards with Mini Calendars */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-3 gap-5 mb-16"
                >
                    {phases.map((phase, i) => (
                        <div
                            key={phase.period}
                            className={`rounded-2xl border-2 p-5 sm:p-6 ${phase.intensity === 3
                                    ? 'bg-[#B87333]/10 border-[#B87333]'
                                    : phase.intensity === 2
                                        ? 'bg-amber-50 border-amber-200'
                                        : 'bg-white border-[#E8E4E0]'
                                }`}
                        >
                            <div className="text-[12px] font-medium text-[#B87333] mb-1">
                                {phase.period}
                            </div>
                            <div
                                style={{ fontFamily: 'var(--font-heading)' }}
                                className="text-[18px] font-normal text-[#2E2A25] mb-4"
                            >
                                {phase.label}
                            </div>

                            {/* Mini Calendar */}
                            <div className="flex justify-between mb-4">
                                {dayLabels.map((day, di) => (
                                    <div key={di} className="text-center">
                                        <div className="text-[10px] text-[#9A958D] mb-1">{day}</div>
                                        <div className={`w-5 h-5 rounded-full ${phase.days[di]
                                                ? 'bg-[#B87333]'
                                                : 'bg-white border border-[#D4CFC8]'
                                            }`} />
                                    </div>
                                ))}
                            </div>

                            <div className="text-[13px] font-medium text-[#2E2A25] mb-2">
                                {phase.frequency}
                            </div>
                            <div className="flex items-start gap-1.5 text-[12px] text-[#6B6560]">
                                <Lightbulb className="w-3.5 h-3.5 flex-shrink-0 mt-0.5 text-[#B87333]" />
                                {phase.tip}
                            </div>
                        </div>
                    ))}
                </motion.div>

                {/* Timeline Progression */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h3 className="text-[16px] font-medium text-[#2E2A25] mb-6 text-center">
                        Wat je merkt
                    </h3>
                    <div className="relative">
                        {/* Line */}
                        <div className="absolute top-4 left-0 right-0 h-0.5 bg-[#E8E4E0]" />
                        <div className="absolute top-4 left-0 h-0.5 bg-[#B87333]" style={{ width: '100%' }} />

                        {/* Milestones */}
                        <div className="grid grid-cols-4 relative">
                            {milestones.map((m, i) => (
                                <div key={m.week} className="text-center">
                                    <div className="w-3 h-3 bg-[#B87333] rounded-full mx-auto mb-3" />
                                    <div className="text-[11px] text-[#9A958D] mb-1">{m.week}</div>
                                    <div className="text-[13px] font-medium text-[#2E2A25]">{m.label}</div>
                                    <div className="text-[11px] text-[#6B6560]">{m.desc}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Combination Rules */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-2 gap-5 mb-10"
                >
                    {/* Don't combine */}
                    <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <span className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center">
                                <X className="w-4 h-4 text-red-600" />
                            </span>
                            <h4 className="text-[15px] font-semibold text-red-800">
                                Niet combineren
                            </h4>
                        </div>
                        <div className="space-y-3">
                            {dontCombine.map(item => (
                                <div key={item.name} className="flex items-start gap-2">
                                    <span className="text-red-400 mt-0.5">•</span>
                                    <div>
                                        <div className="text-[13px] font-medium text-red-800">{item.name}</div>
                                        <div className="text-[11px] text-red-600">{item.reason}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Do combine */}
                    <div className="bg-green-50 border border-green-200 rounded-2xl p-6">
                        <div className="flex items-center gap-2 mb-5">
                            <span className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                                <Check className="w-4 h-4 text-green-600" />
                            </span>
                            <h4 className="text-[15px] font-semibold text-green-800">
                                Wel combineren
                            </h4>
                        </div>
                        <div className="space-y-2">
                            {doCombine.map(item => (
                                <div key={item} className="flex items-center gap-2 text-[13px] text-green-700">
                                    <span className="text-green-400">•</span>
                                    {item}
                                </div>
                            ))}
                        </div>
                    </div>
                </motion.div>

                {/* Download CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="text-center"
                >
                    <a
                        href="#"
                        className="inline-flex items-center gap-2 text-[#B87333] font-medium text-[13px] hover:underline"
                    >
                        <Download className="w-4 h-4" />
                        Download routinekaart (PDF)
                    </a>
                </motion.div>
            </div>
        </section>
    )
}
