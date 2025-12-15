"use client"

import { ShieldCheck } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Guarantee() {
    return (
        <section className="py-16 sm:py-20 bg-[#FAF9F6]">
            <div className="max-w-2xl mx-auto px-6 sm:px-8 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <ShieldCheck className="w-10 h-10 text-[#B87333] mx-auto mb-4" />
                    <h2
                        style={{ fontFamily: 'var(--font-fraunces)' }}
                        className="text-[22px] sm:text-[26px] font-normal text-[#2E2A25] mb-4"
                    >
                        60 Dagen Garantie
                    </h2>
                    <p className="text-[14px] text-[#6B6560] leading-relaxed max-w-md mx-auto">
                        Niet tevreden? Retourneer binnen 60 dagen voor volledige terugbetaling. Geen vragen.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
