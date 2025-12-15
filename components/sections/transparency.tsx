"use client"

import { ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Transparency() {
    return (
        <section id="transparantie" className="py-10 sm:py-14 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6">

                {/* WAT ONDERZOEK LAAT ZIEN - open by default */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-[#FAF7F2] rounded-xl p-5 sm:p-6"
                >
                    <h3 className="font-semibold text-[#1C1C1C] text-base mb-3">
                        Wat onderzoek laat zien
                    </h3>

                    <p className="text-[13px] text-gray-600 leading-relaxed mb-4">
                        In meerdere klinische studies werd bij gebruik van GHK-Cu na 8–12 weken een verbetering waargenomen in huiddichtheid, elasticiteit en rimpelparameters.
                    </p>

                    {/* Data - always visible */}
                    <div className="bg-white rounded-lg p-4 space-y-2 mb-4">
                        <p className="text-[12px] text-gray-600">
                            • <strong>70%</strong> van de deelnemers toonde verhoogde collageenactiviteit
                        </p>
                        <p className="text-[12px] text-gray-600">
                            • <strong>20–30%</strong> meer elasticiteit en stevigheid
                        </p>
                        <p className="text-[12px] text-gray-600">
                            • <strong>55% minder rimpelvolume</strong>, 33% minder rimpeldiepte
                        </p>
                    </div>

                    <p className="text-[10px] text-gray-400 mb-4 italic">
                        Resultaten variëren. Studies verschillen in formule en meetmethode.
                    </p>

                    {/* Two clickable buttons */}
                    <div className="flex flex-wrap gap-3">
                        <a
                            href="https://www.mdpi.com/1422-0067/19/7/1987"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-medium text-gray-700 hover:border-[#B87333] hover:text-[#B87333] transition-colors"
                        >
                            Onze bron (MDPI)
                            <ExternalLink className="w-3 h-3" />
                        </a>
                        <a
                            href="#"
                            className="inline-flex items-center gap-1.5 bg-white border border-gray-200 rounded-lg px-3 py-2 text-[12px] font-medium text-gray-700 hover:border-[#B87333] hover:text-[#B87333] transition-colors"
                        >
                            Bekijk COA / labanalyse
                            <ExternalLink className="w-3 h-3" />
                        </a>
                    </div>

                    {/* Zuiverheid badge */}
                    <p className="text-[10px] text-gray-400 mt-4">
                        Zuiverheid: 99,98% (lab-gevalideerd per batch)
                    </p>
                </motion.div>
            </div>
        </section>
    )
}
