"use client"

import { motion } from 'framer-motion'

const timeline = [
    {
        period: "Maand 1",
        title: "Rust & Kalmering",
        description: "Je huid voelt minder \"trekkerig\" en oogt rustiger. De barrière wordt sterker."
    },
    {
        period: "Maand 2–3",
        title: "Gladdere Textuur",
        description: "Bultjes en oneffenheden nemen af. De huid ziet er egaler en \"gepolijst\" uit."
    },
    {
        period: "Maand 4–6",
        title: "Nieuwe Huidkwaliteit",
        description: "Je hebt een nieuwe basis bereikt. De huid oogt gezond, vol en heeft minder make-up nodig."
    }
]

export default function ResultsTimeline() {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-2xl mx-auto px-6 sm:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2
                        style={{ fontFamily: 'var(--font-fraunces)' }}
                        className="text-[24px] sm:text-[28px] font-normal text-[#2E2A25] mb-10"
                    >
                        Wat je merkt in 6 maanden
                    </h2>

                    <div className="space-y-8">
                        {timeline.map((item, i) => (
                            <div key={i} className="flex gap-6">
                                <div className="flex-shrink-0 w-20">
                                    <span className="text-[#B87333] font-medium text-[13px]">{item.period}</span>
                                </div>
                                <div className="border-l border-[#E8E4E0] pl-6">
                                    <p
                                        style={{ fontFamily: 'var(--font-fraunces)' }}
                                        className="font-normal text-[#2E2A25] text-[16px] mb-2"
                                    >
                                        {item.title}
                                    </p>
                                    <p className="text-[13px] text-[#6B6560] leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
