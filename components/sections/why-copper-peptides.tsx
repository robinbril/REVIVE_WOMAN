"use client"

import { ExternalLink, TrendingUp, Sparkles, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const competitors = [
    { brand: 'The Ordinary', pct: 0.5 },
    { brand: 'NIOD', pct: 1 },
    { brand: "Paula's Choice", pct: 1.5 },
    { brand: 'SERO.', pct: 5, highlight: true },
]

const stats = [
    {
        value: '+70%',
        label: 'collageen',
        description: 'Na 12 weken dagelijks gebruik',
        source: 'Pickart 2018',
        sourceUrl: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/',
        Icon: TrendingUp,
    },
    {
        value: '-39%',
        label: 'rimpeldiepte',
        description: 'Zichtbaar gladdere huid na 8 weken',
        source: 'Sederma 2012',
        sourceUrl: 'https://www.sederma.com/matrixyl-3000',
        Icon: Sparkles,
    },
    {
        value: '-47%',
        label: 'roodheid',
        description: 'Kalmering binnen 7 dagen',
        source: 'Proksch 2017',
        sourceUrl: 'https://pubmed.ncbi.nlm.nih.gov/28654359/',
        Icon: Shield,
    },
]

export default function WhyCopperPeptides() {
    return (
        <section className="py-20 sm:py-28 bg-[#FAF9F6]">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">

                {/* Two Column Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center mb-16"
                >
                    <div>
                        <h2
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[28px] sm:text-[36px] font-normal text-[#2E2A25] mb-4"
                        >
                            Waarom 5%?
                        </h2>
                        <p className="text-[16px] text-[#4A4540] leading-[1.7]">
                            De meeste serums bevatten 0,1–1% — net genoeg om op het label te zetten.
                            <strong className="text-[#2E2A25]"> SERO. bevat 5%</strong>: de klinische dosis die daadwerkelijk werkt.
                        </p>
                    </div>

                    {/* Concentration Bars */}
                    <div className="bg-white rounded-2xl p-6 shadow-[0_4px_30px_rgba(0,0,0,0.04)]">
                        {competitors.map((c, i) => (
                            <div key={c.brand} className={`flex items-center gap-4 ${i < competitors.length - 1 ? 'mb-3' : ''}`}>
                                <span className={`w-28 text-[13px] ${c.highlight ? 'font-bold text-[#B87333]' : 'text-[#6B6560]'}`}>
                                    {c.brand}
                                </span>
                                <div className="flex-1 h-3 bg-[#F4F0EB] rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: `${(c.pct / 5) * 100}%` }}
                                        viewport={{ once: true }}
                                        transition={{ delay: i * 0.1, duration: 0.6 }}
                                        className={`h-full rounded-full ${c.highlight ? 'bg-[#B87333]' : 'bg-[#D4CFC8]'}`}
                                    />
                                </div>
                                <span className={`text-[13px] font-bold w-10 text-right ${c.highlight ? 'text-[#B87333]' : 'text-[#6B6560]'}`}>
                                    {c.pct}%
                                </span>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Stats Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-8"
                >
                    <h3
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-[20px] font-normal text-[#2E2A25] mb-2"
                    >
                        Wat de wetenschap laat zien
                    </h3>
                    <p className="text-[12px] text-[#9A958D]">
                        Gebaseerd op peer-reviewed studies naar GHK-Cu en peptide-synergieën
                    </p>
                </motion.div>

                {/* Three Stat Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="grid sm:grid-cols-3 gap-5 mb-10"
                >
                    {stats.map((stat, i) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            whileHover={{ y: -4, boxShadow: '0 12px 40px rgba(0,0,0,0.08)' }}
                            className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-[0_4px_30px_rgba(0,0,0,0.03)] transition-all"
                        >
                            {/* Icon */}
                            <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-[#B87333]/10 flex items-center justify-center">
                                <stat.Icon className="w-5 h-5 text-[#B87333]" />
                            </div>

                            {/* Value */}
                            <div
                                style={{ fontFamily: 'var(--font-heading)' }}
                                className="text-[32px] font-normal text-[#B87333] mb-1"
                            >
                                {stat.value}
                            </div>

                            {/* Label */}
                            <div className="text-[15px] font-medium text-[#2E2A25] mb-2">
                                {stat.label}
                            </div>

                            {/* Description */}
                            <p className="text-[12px] text-[#6B6560] mb-4">
                                {stat.description}
                            </p>

                            {/* Source Badge */}
                            <a
                                href={stat.sourceUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[10px] bg-[#FAF9F6] text-[#6B6560] px-3 py-1.5 rounded-full hover:bg-[#B87333]/10 hover:text-[#B87333] transition-colors"
                            >
                                {stat.source}
                                <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Quote Block */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-[0_4px_30px_rgba(0,0,0,0.03)]"
                >
                    <p
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-[18px] sm:text-[22px] font-normal text-[#2E2A25] italic leading-relaxed mb-5"
                    >
                        "GHK-Cu is een signaalpeptide dat de huid vertelt om zich te gedragen als jongere, gezonde huid."
                    </p>
                    <cite className="flex items-center justify-center gap-3 not-italic">
                        <a
                            href="https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#B87333]/10 text-[#B87333] px-4 py-1.5 rounded-full text-[11px] font-medium hover:bg-[#B87333]/20 transition-colors"
                        >
                            MDPI Review 2018
                        </a>
                        <span className="text-[11px] text-[#9A958D]">Peer-reviewed</span>
                    </cite>
                </motion.blockquote>
            </div>
        </section>
    )
}
