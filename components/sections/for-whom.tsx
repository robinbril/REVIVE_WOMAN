"use client"

import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

export default function ForWhom() {
    return (
        <section className="py-16 sm:py-24 bg-[#FAF9F6]">
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
                        Is REVIVE voor jou?
                    </h2>

                    <div className="grid sm:grid-cols-2 gap-8">
                        {/* Voor jou */}
                        <div>
                            <div className="flex items-center gap-2 mb-4 text-[#1E3A5F] font-medium text-[13px]">
                                <Check className="w-4 h-4" /> Wel voor jou
                            </div>
                            <ul className="space-y-3 text-[14px] text-[#4A4540]">
                                <li>Je wilt af van een onregelmatige, onrustige huidstructuur</li>
                                <li>Je zoekt "glass skin" zonder make-up</li>
                                <li>Je bent bereid een routine op te bouwen</li>
                            </ul>
                        </div>

                        {/* Niet voor jou */}
                        <div>
                            <div className="flex items-center gap-2 mb-4 text-[#B56A6A] font-medium text-[13px]">
                                <X className="w-4 h-4" /> Niet voor jou
                            </div>
                            <ul className="space-y-3 text-[14px] text-[#4A4540]">
                                <li>Je zoekt een snelle 24-uurs fix</li>
                                <li>Je gebruikt dagelijks agressieve peelings</li>
                                <li>Je hebt een extreem reactieve huid</li>
                            </ul>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
