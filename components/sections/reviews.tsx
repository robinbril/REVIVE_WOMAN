"use client"

import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Play, ChevronLeft, ChevronRight, Heart, ExternalLink } from 'lucide-react'

const ugcVideos = [
    {
        id: '1',
        tiktokUrl: 'https://www.tiktok.com/search?q=ghkcu%20serum',
        creator: '@skincaremama',
        caption: 'Week 4 met copper peptide 🧪',
        likes: '12.4K',
        duration: '0:34',
    },
    {
        id: '2',
        tiktokUrl: 'https://www.tiktok.com/search?q=ghkcu%20serum',
        creator: '@glowwithme.nl',
        caption: 'De blauwe kleur is zo satisfying 💙',
        likes: '8.2K',
        duration: '0:28',
    },
    {
        id: '3',
        tiktokUrl: 'https://www.tiktok.com/search?q=ghkcu%20serum',
        creator: '@dutchskincare',
        caption: 'POV: je ontdekt GHK-Cu',
        likes: '24.1K',
        duration: '0:45',
    },
    {
        id: '4',
        tiktokUrl: 'https://www.tiktok.com/search?q=ghkcu%20serum',
        creator: '@emmaxskin',
        caption: 'Mijn huid na 2 maanden ✨',
        likes: '31.7K',
        duration: '0:52',
    },
]

export default function Reviews() {
    const scrollRef = useRef<HTMLDivElement>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 200
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id="reviews" className="py-16 sm:py-24 relative overflow-hidden">
            {/* Warm gradient background */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FAF9F7] via-[#F5F3F0] to-[#EBE8E3]" />
            
            {/* Subtle organic blob - top left */}
            <div className="absolute top-[-10%] left-[-5%] w-[500px] h-[500px] bg-[radial-gradient(circle,rgba(201,145,86,0.08)_0%,transparent_70%)] blur-[80px] opacity-60 pointer-events-none" />
            
            {/* Subtle organic blob - bottom right (navy tint for transition) */}
            <div className="absolute bottom-[-10%] right-[-5%] w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(26,35,50,0.04)_0%,transparent_70%)] blur-[100px] opacity-50 pointer-events-none" />

            <div className="max-w-5xl mx-auto px-5 sm:px-8 relative z-10">

                {/* Header */}
                <div className="flex items-end justify-between mb-8">
                    <div>
                        {/* Premium TikTok badge */}
                        <motion.div 
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="inline-flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full mb-4 shadow-[0_4px_16px_rgba(0,0,0,0.15)]"
                        >
                            <svg className="w-4 h-4 text-white" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                            </svg>
                            <span className="text-[12px] font-bold text-white tracking-wide">#SkinTok</span>
                        </motion.div>
                        
                        <h2
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[24px] sm:text-[32px] font-normal text-[#2E2A25]"
                        >
                            Echte resultaten
                        </h2>
                    </div>

                    {/* Navigation - desktop only */}
                    <div className="hidden sm:flex items-center gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-md transition-all flex items-center justify-center border border-gray-100"
                        >
                            <ChevronLeft className="w-5 h-5 text-[#4A4540]" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm hover:bg-white hover:shadow-md transition-all flex items-center justify-center border border-gray-100"
                        >
                            <ChevronRight className="w-5 h-5 text-[#4A4540]" />
                        </button>
                    </div>
                </div>

                {/* Video Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-4 -mx-5 px-5 snap-x snap-mandatory scrollbar-hide"
                >
                    {ugcVideos.map((video, index) => (
                        <TikTokCard key={video.id} video={video} index={index} />
                    ))}

                    {/* See More Card */}
                    <a
                        href="https://www.tiktok.com/search?q=ghkcu%20serum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-[160px] sm:w-[200px] aspect-[9/16] rounded-2xl bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center gap-3 snap-start hover:shadow-lg hover:-translate-y-1 transition-all group border border-[#E8E4E0]"
                    >
                        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-md">
                            <ExternalLink className="w-5 h-5 text-[#2E2A25]" />
                        </div>
                        <span className="text-[12px] font-medium text-[#4A4540] text-center px-4">
                            Bekijk meer op TikTok
                        </span>
                    </a>
                </div>

            </div>
        </section>
    )
}

function TikTokCard({ video, index }: { video: typeof ugcVideos[0]; index: number }) {
    return (
        <motion.a
            href={video.tiktokUrl}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex-shrink-0 w-[160px] sm:w-[200px] snap-start group"
        >
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gradient-to-br from-[#1E3A5F] to-[#2E5A8F] shadow-[0_4px_16px_rgba(0,0,0,0.08),0_8px_32px_rgba(0,0,0,0.04)] group-hover:shadow-[0_8px_24px_rgba(0,0,0,0.12),0_16px_48px_rgba(0,0,0,0.08),0_0_0_1px_rgba(201,145,86,0.1)] group-hover:-translate-y-1 transition-all duration-300">
                {/* Lighter, fresher gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/95 backdrop-blur-sm flex items-center justify-center shadow-[0_4px_16px_rgba(0,0,0,0.2),0_0_32px_rgba(255,255,255,0.3)] group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-[#2E2A25] fill-[#2E2A25] ml-1" />
                    </div>
                </div>

                {/* Duration */}
                <div className="absolute top-3 right-3 bg-black/50 backdrop-blur-sm text-white text-[10px] px-2 py-1 rounded-full font-medium">
                    {video.duration}
                </div>

                {/* TikTok icon */}
                <div className="absolute top-3 left-3">
                    <svg className="w-5 h-5 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-[#C99156] to-[#D4A574] flex items-center justify-center text-white text-[10px] font-bold shadow-md ring-2 ring-white/20">
                            {video.creator.charAt(1).toUpperCase()}
                        </div>
                        <span className="text-white text-[11px] font-medium truncate">
                            {video.creator}
                        </span>
                    </div>
                    <p className="text-white text-[12px] line-clamp-2 mb-2 leading-snug">
                        {video.caption}
                    </p>
                    <div className="flex items-center gap-1.5 text-white/80">
                        <Heart className="w-3.5 h-3.5 fill-current" />
                        <span className="text-[11px] font-medium">{video.likes}</span>
                    </div>
                </div>
            </div>
        </motion.a>
    )
}
