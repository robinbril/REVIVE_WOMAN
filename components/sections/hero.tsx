"use client"

import { ArrowRight, Star, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
    return (
        <section className="relative min-h-[100svh] lg:min-h-screen flex items-center py-4 lg:py-0 overflow-hidden">

            {/* Premium layered background with depth */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFFAF8] via-[#FFFCFA] to-[#FAF9F7]" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_20%,rgba(201,145,86,0.08)_0%,transparent_60%)] pointer-events-none" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,transparent_50%,rgba(0,0,0,0.02)_100%)] pointer-events-none" />
            
            {/* Organic ambient shapes */}
            <div className="absolute top-[-5%] left-[-10%] w-[60%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(201,145,86,0.12)_0%,transparent_60%)] blur-[80px] pointer-events-none" />
            <div className="absolute bottom-[10%] right-[-15%] w-[55%] h-[50%] bg-[radial-gradient(ellipse_at_center,rgba(184,115,51,0.1)_0%,transparent_60%)] blur-[70px] pointer-events-none" />

            {/* Floating Gold Particles - VISIBLE ON MOBILE TOO */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-[#C99156]/40 rounded-full shadow-[0_0_8px_rgba(201,145,86,0.4)]"
                        animate={{
                            y: [0, -150],
                            opacity: [0, 0.8, 0],
                            scale: [0.5, 1, 0.3],
                        }}
                        transition={{
                            duration: 7 + i * 1.5,
                            repeat: Infinity,
                            delay: i * 1.2,
                            ease: "easeOut",
                        }}
                        style={{
                            left: `${15 + i * 12}%`,
                            bottom: `${10 + (i % 3) * 15}%`,
                        }}
                    />
                ))}
            </div>

            <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 relative z-10">
                
                <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

                    {/* CONTENT SECTION */}
                    <div className="order-2 lg:order-1 text-center lg:text-left w-full">

                        {/* Trustpilot - Premium pill style (FIRST) */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 }}
                            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-black/5 mb-6 lg:mb-10"
                        >
                            <Star className="w-4 h-4 fill-[#00b67a] text-[#00b67a]" />
                            <span className="text-[13px] font-semibold text-gray-700">Trustpilot</span>
                            <div className="flex gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-3.5 h-3.5 fill-[#00b67a] text-[#00b67a]" />
                                ))}
                            </div>
                            <span className="text-[14px] font-bold text-[#1a1a1a]">4.8</span>
                        </motion.div>

                        {/* Headline - tighter, bolder */}
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[32px] sm:text-[48px] lg:text-[66px] xl:text-[74px] font-normal leading-[1.02] tracking-[-0.02em] text-[#1a1a1a] mb-1 lg:mb-2"
                        >
                            Het krachtigste<br />
                            <span className="italic font-medium text-[#B87333]">huidserum</span>
                        </motion.h1>

                        {/* Subheadline */}
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.25 }}
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[28px] sm:text-[46px] lg:text-[64px] xl:text-[72px] font-normal leading-[1.05] tracking-tight text-[#1a1a1a] mb-4 lg:mb-8"
                        >
                            van Europa.
                        </motion.h2>

                        {/* Subheadline - Responsive Switch */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="mb-6 lg:mb-10 max-w-md mx-auto lg:mx-0"
                        >
                            {/* Mobile Subtext: Short & Clean */}
                            <p className="lg:hidden text-[16px] text-[#5A5550] leading-relaxed font-medium">
                                Natuurlijke gloed <span className="text-[#B87333] px-2">•</span> Zichtbaar jonger
                            </p>

                            {/* Desktop Subtext: Paragraph */}
                            <p className="hidden lg:block text-[19px] text-[#5A5550] leading-relaxed font-medium">
                                REVIVE bevat <strong className="text-[#1a1a1a]">5% GHK-Cu copper peptides</strong> — de hoogste concentratie in heel Europa. Klinisch bewezen voor zichtbare huidverjonging.
                            </p>
                        </motion.div>

                        {/* CTA Button */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.45 }}
                            className="mb-8 lg:mb-0"
                        >
                            <Button
                                size="lg"
                                className="h-[60px] lg:h-[64px] px-12 text-[15px] font-bold bg-gradient-to-r from-[#C99156] to-[#B8834D] hover:from-[#B8834D] hover:to-[#C99156] text-white rounded-full 
                                           shadow-[0_0_0_1px_rgba(255,255,255,0.2)_inset,0_8px_16px_rgba(201,145,86,0.3),0_16px_32px_rgba(201,145,86,0.2)] 
                                           hover:shadow-[0_0_0_1px_rgba(255,255,255,0.3)_inset,0_12px_24px_rgba(201,145,86,0.4),0_24px_48px_rgba(201,145,86,0.3)] 
                                           hover:-translate-y-1 transition-all duration-300 group overflow-hidden relative"
                                asChild
                            >
                                <Link href="#prijzen">
                                    <span className="flex items-center gap-3 relative z-10">
                                        <Zap className="w-4 h-4 fill-current" />
                                        ONTDEK REVIVE
                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
                                    </span>
                                    {/* Shimmer effect */}
                                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                                </Link>
                            </Button>
                        </motion.div>

                    </div>

                    {/* PRODUCT SECTION - ROSE GOLD ELEGANCE */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 30 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                        className="order-1 lg:order-2 flex justify-center items-center relative w-full py-8 lg:py-0"
                    >
                        {/* AMBIENT GLOW ACHTER PRODUCT */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <div className="w-[120%] h-[120%] bg-[radial-gradient(circle_at_50%_50%,rgba(201,145,86,0.12)_0%,rgba(201,145,86,0.06)_40%,transparent_70%)] blur-[60px]" />
                        </div>

                        {/* Elegant oval container - soft feathered edges */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            {/* Outer soft glow ring */}
                            <div className="absolute w-[360px] h-[460px] sm:w-[460px] sm:h-[540px] lg:w-[520px] lg:h-[600px] bg-gradient-to-b from-[#FFF8F5]/35 via-[#FFF0EB]/25 to-[#FFE8E0]/15 rounded-[50%] blur-[25px]" />
                            {/* Main oval */}
                            <div className="w-[340px] h-[440px] sm:w-[440px] sm:h-[520px] lg:w-[490px] lg:h-[570px] bg-gradient-to-b from-[#FFFCFA] via-[#FFF8F5] to-[#FFF0EB] rounded-[50%] shadow-[0_0_80px_rgba(255,220,200,0.2),inset_0_0_80px_rgba(255,255,255,0.7)]" />
                        </div>

                        {/* WHITE STARBURST LIGHT RAYS - Award-winning divine glow */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div
                                className="relative w-[300px] h-[300px] lg:w-[400px] lg:h-[400px]"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 120, repeat: Infinity, ease: "linear" }}
                            >
                                {/* 16 Stronger light rays radiating outward */}
                                {[...Array(16)].map((_, i) => (
                                    <motion.div
                                        key={i}
                                        className="absolute top-1/2 left-1/2 w-[4px] lg:w-[5px] h-[160px] lg:h-[200px] origin-bottom"
                                        style={{
                                            transform: `translateX(-50%) translateY(-100%) rotate(${i * 22.5}deg)`,
                                            background: 'linear-gradient(to top, rgba(255,255,255,0.7) 0%, rgba(255,255,255,0.5) 25%, rgba(255,255,255,0.2) 50%, transparent 100%)',
                                        }}
                                        animate={{ opacity: [0.5, 0.9, 0.5] }}
                                        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }}
                                    />
                                ))}
                            </motion.div>
                        </div>

                        {/* Dynamic center glow - pulsating light source */}
                        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                            <motion.div 
                                className="w-[260px] h-[260px] lg:w-[360px] lg:h-[360px] bg-[radial-gradient(circle,rgba(255,255,255,0.95)_0%,rgba(255,255,255,0.6)_30%,rgba(255,252,250,0.25)_55%,transparent_75%)] rounded-full blur-[30px]"
                                animate={{ 
                                    opacity: [0.75, 1, 0.75], 
                                    scale: [0.95, 1.12, 0.95],
                                }}
                                transition={{ duration: 2.5, repeat: Infinity, ease: [0.4, 0, 0.2, 1] }}
                            />
                            {/* Secondary pulse layer */}
                            <motion.div 
                                className="absolute w-[200px] h-[200px] lg:w-[280px] lg:h-[280px] bg-[radial-gradient(circle,rgba(255,255,255,0.8)_0%,transparent_60%)] rounded-full blur-[20px]"
                                animate={{ 
                                    opacity: [0.5, 0.9, 0.5], 
                                    scale: [1.05, 0.92, 1.05],
                                }}
                                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            />
                        </div>

                        {/* Subtle white accent orbs */}
                        <motion.div 
                            className="absolute top-[8%] right-[28%] w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] bg-[radial-gradient(circle,rgba(255,255,255,0.7)_0%,transparent_60%)] rounded-full blur-[12px]"
                            animate={{ opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
                        />
                        <motion.div 
                            className="absolute bottom-[12%] left-[25%] w-[40px] h-[40px] lg:w-[55px] lg:h-[55px] bg-[radial-gradient(circle,rgba(255,255,255,0.6)_0%,transparent_60%)] rounded-full blur-[10px]"
                            animate={{ opacity: [0.25, 0.5, 0.25] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
                        />

                        {/* Floating product - smooth subtle motion */}
                        <motion.div
                            animate={{
                                y: [0, -10, 0],
                            }}
                            transition={{
                                duration: 3.5,
                                repeat: Infinity,
                                ease: [0.45, 0, 0.55, 1]
                            }}
                            className="relative z-10 w-full flex justify-center"
                        >
                            <div 
                                className="relative w-[340px] h-[340px] sm:w-[410px] sm:h-[410px] lg:w-[480px] lg:h-[480px]"
                                style={{
                                    filter: 'drop-shadow(0 25px 35px rgba(255,255,255,0.5)) drop-shadow(0 10px 15px rgba(255,250,245,0.4))',
                                }}
                            >
                                <Image
                                    src="/images/revive-bottle-hero.png"
                                    alt="REVIVE Signal Serum - Europa's krachtigste huidserum"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                                
                                {/* Badge - ABSOLUTE POSITIONED (Overlapping product) */}
                                <div className="absolute bottom-[-20px] left-1/2 -translate-x-1/2 z-30 whitespace-nowrap">
                                    <div className="bg-white/95 backdrop-blur-md px-5 py-3 rounded-full shadow-[0_8px_20px_rgba(184,115,51,0.15),inset_0_1px_0_rgba(255,255,255,0.9)] border border-white/50 flex items-center gap-2">
                                        <Sparkles className="w-4 h-4 text-[#B87333]" />
                                        <span className="text-[12px] uppercase tracking-[0.12em] font-bold text-[#B87333]">KLINISCH BEWEZEN · 24 STUDIES</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Smooth lens flare streaks - premium glow */}
                        <motion.div 
                            className="absolute top-[15%] right-[20%] w-[60px] h-[2px] bg-gradient-to-r from-transparent via-white/80 to-transparent rounded-full blur-[1px]"
                            animate={{ opacity: [0.3, 0.7, 0.3], scaleX: [0.8, 1.2, 0.8] }}
                            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                            style={{ transform: 'rotate(-30deg)' }}
                        />
                        <motion.div 
                            className="absolute top-[22%] right-[28%] w-[40px] h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent rounded-full blur-[1px]"
                            animate={{ opacity: [0.25, 0.6, 0.25], scaleX: [0.9, 1.1, 0.9] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                            style={{ transform: 'rotate(20deg)' }}
                        />
                        <motion.div 
                            className="absolute top-[12%] right-[35%] w-[50px] h-[2px] bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full blur-[1px]"
                            animate={{ opacity: [0.2, 0.55, 0.2], scaleX: [1, 1.15, 1] }}
                            transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                            style={{ transform: 'rotate(-15deg)' }}
                        />
                    </motion.div>

                </div>
            </div>
        </section>
    )
}
