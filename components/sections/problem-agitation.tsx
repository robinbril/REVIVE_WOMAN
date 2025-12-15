"use client"

import { motion } from 'framer-motion'

const comparison = [
    { feature: "Doel", revive: "Huidherstel & Textuur", retinol: "Anti-aging", vitC: "Glow" },
    { feature: "Werking", revive: "Celvernieuwing", retinol: "Exfoliatie", vitC: "Antioxidant" },
    { feature: "Gevoel", revive: "Voedend / Kalm", retinol: "Droog / Irritatie", vitC: "Kan prikken" },
    { feature: "Gebruik", revive: "Kuurverband", retinol: "Continu", vitC: "Continu" },
]

export default function ProblemAgitation() {
    return (
        <section id="vergelijk" className="py-16 sm:py-24 bg-white">
            <div className="max-w-3xl mx-auto px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2
                        style={{ fontFamily: 'var(--font-fraunces)' }}
                        className="text-[24px] sm:text-[28px] font-normal text-[#2E2A25] mb-10 text-center"
                    >
                        Hoe REVIVE zich verhoudt
                    </h2>

                    <div className="overflow-x-auto">
                        <table className="w-full text-[13px]">
                            <thead>
                                <tr className="border-b border-[#E8E4E0]">
                                    <th className="text-left py-4 px-3 font-normal text-[#9A958D]"></th>
                                    <th className="text-left py-4 px-3 font-medium text-[#B87333]">REVIVE (5%)</th>
                                    <th className="text-left py-4 px-3 font-normal text-[#6B6560]">Retinol</th>
                                    <th className="text-left py-4 px-3 font-normal text-[#6B6560]">Vitamine C</th>
                                </tr>
                            </thead>
                            <tbody>
                                {comparison.map((row, i) => (
                                    <tr key={i} className="border-b border-[#E8E4E0]/50">
                                        <td className="py-4 px-3 text-[#9A958D]">{row.feature}</td>
                                        <td className="py-4 px-3 text-[#2E2A25] font-medium">{row.revive}</td>
                                        <td className="py-4 px-3 text-[#6B6560]">{row.retinol}</td>
                                        <td className="py-4 px-3 text-[#6B6560]">{row.vitC}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
