"use client"

import { ExternalLink, TrendingUp, Sparkles, Shield } from 'lucide-react'
import { motion } from 'framer-motion'

const competitors = [
    { brand: 'The Ordinary', pct: 0.5 },
    { brand: 'NIOD', pct: 1 },
    { brand: "Paula's Choice", pct: 1.5 },
    { brand: 'REVIVE', pct: 5, highlight: true },
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
        <section className="py-10 sm:py-20 relative overflow-hidden">
            {/* Subtle organic blob - left */}
            <div className="absolute top-[10%] left-[-10%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,145,86,0.06)_0%,transparent_60%)] blur-[80px] pointer-events-none" />
            
            {/* Subtle organic blob - right */}
            <div className="absolute bottom-[5%] right-[-10%] w-[450px] h-[450px] bg-[radial-gradient(circle,rgba(201,145,86,0.05)_0%,transparent_60%)] blur-[70px] pointer-events-none" />

            <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">

                {/* 1. Quote Block - EERST */}
                <motion.blockquote
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white rounded-2xl p-8 sm:p-10 text-center max-w-3xl mx-auto shadow-[0_4px_30px_rgba(0,0,0,0.03)] mb-16"
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

                {/* 2. Stats Header - TWEEDE */}
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

                {/* 3. Stats Cards - Premium Carousel on Mobile */}
                <div className="mb-16">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6"
                    >
                        {stats.map((stat, i) => (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="bg-white rounded-2xl p-6 sm:p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.03)] border border-[#F4F0EB] relative overflow-hidden group hover:shadow-[0_12px_40px_rgba(184,115,51,0.08)] hover:border-[#B87333]/20 transition-all duration-500"
                            >
                                {/* Background Glow */}
                                <div className="absolute inset-0 bg-gradient-to-b from-[#FFF8F5] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                
                                <div className="relative z-10 flex flex-row sm:flex-col items-center sm:justify-center gap-5 sm:gap-0 text-left sm:text-center">
                                    <div className="w-12 h-12 shrink-0 sm:mx-auto sm:mb-5 rounded-2xl bg-gradient-to-br from-[#FFF8F5] to-[#F4F0EB] flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-500">
                                        <stat.Icon className="w-5 h-5 text-[#B87333]" />
                                    </div>
                                    
                                    <div className="flex-1 sm:flex-none">
                                        <div
                                            style={{ fontFamily: 'var(--font-heading)' }}
                                            className="text-[32px] sm:text-[42px] leading-none font-medium text-transparent bg-clip-text bg-gradient-to-br from-[#B87333] via-[#A05D25] to-[#80400B] mb-1 sm:mb-2"
                                        >
                                            {stat.value}
                                        </div>
                                        
                                        <div className="text-[15px] font-semibold text-[#2E2A25] mb-1 sm:mb-3 tracking-wide">
                                            {stat.label}
                                        </div>

                                        <p className="text-[13px] text-[#6B6560] leading-relaxed sm:mb-6 sm:max-w-[200px] sm:mx-auto hidden sm:block">
                                            {stat.description}
                                        </p>
                                    </div>
                                    
                                    {/* Mobile Only Description & Source - simplified/compact */}
                                    <div className="sm:hidden text-right">
                                         <a
                                            href={stat.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1 text-[10px] uppercase tracking-wider font-medium text-[#9A958D]"
                                        >
                                            <span className="sr-only">Source</span>
                                            <ExternalLink className="w-3 h-3 opacity-50" />
                                        </a>
                                    </div>
                                    
                                    <div className="hidden sm:block">
                                        <a
                                            href={stat.sourceUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-medium text-[#9A958D] hover:text-[#B87333] transition-colors bg-[#F5F5F5] px-3 py-1.5 rounded-full"
                                        >
                                            {stat.source}
                                            <ExternalLink className="w-2.5 h-2.5 opacity-50" />
                                        </a>
                                    </div>
                                </div>
                                {/* Mobile description underneath */}
                                <p className="text-[13px] text-[#6B6560] leading-relaxed mt-3 sm:hidden text-left pl-[68px]">
                                    {stat.description}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>



            </div>
        </section>
    )
}
