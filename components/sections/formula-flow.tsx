"use client";

import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";
import { motion } from "framer-motion";

export default function FormulaFlow() {
    return (
        <section className="py-24 sm:py-32 bg-[#FAF9F6] overflow-hidden">
            <div className="max-w-5xl mx-auto px-6">

                {/* Header Text */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12 sm:mb-16"
                >
                    <h2
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-[28px] sm:text-[36px] lg:text-[42px] font-normal text-[#2E2A25] mb-4"
                    >
                        De Architectuur
                    </h2>
                    <p className="text-[15px] sm:text-[17px] text-[#4A4540] max-w-md mx-auto">
                        Hoe 4 systemen samenkomen in één krachtige druppel.
                    </p>
                </motion.div>

                {/* The Animation */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex justify-center"
                >
                    <div className="w-full max-w-[550px] scale-100 sm:scale-110 lg:scale-125 origin-top">
                        <DatabaseWithRestApi
                            title="Synergetische Formule"
                            circleText="12.5%"
                            badgeTexts={{
                                first: "GHK-Cu",
                                second: "Matrixyl",
                                third: "HA",
                                fourth: "Ectoine",
                            }}
                            buttonTexts={{
                                first: "Lab Verified",
                                second: "Made in NL",
                            }}
                            lightColor="#B87333"
                        />
                    </div>
                </motion.div>

                {/* Uitleg onder de animatie */}
                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-center mt-8 sm:mt-12 text-[11px] text-[#9A958D] uppercase tracking-widest"
                >
                    Visuele weergave van ingrediënt-synergie
                </motion.p>

            </div>
        </section>
    );
}
