"use client"

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react'

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
        caption: 'Mijn huid na 2 maanden',
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
        <section id="reviews" className="py-12 sm:py-20 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-4 sm:px-8">

                {/* Header */}
                <div className="flex items-end justify-between mb-6">
                    <div>
                        <div className="flex items-center gap-1.5 mb-1">
                            <svg className="w-3.5 h-3.5 text-[#2E2A25]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                            </svg>
                            <span className="text-[10px] font-medium text-[#6B6560]">#SkinTok</span>
                        </div>
                        <h2
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[20px] sm:text-[28px] font-normal text-[#2E2A25]"
                        >
                            Echte resultaten
                        </h2>
                    </div>

                    {/* Navigation - desktop only */}
                    <div className="hidden sm:flex items-center gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-2 rounded-full bg-[#FAF9F6] hover:bg-[#B87333]/10 transition-colors"
                        >
                            <ChevronLeft className="w-4 h-4 text-[#6B6560]" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-2 rounded-full bg-[#FAF9F6] hover:bg-[#B87333]/10 transition-colors"
                        >
                            <ChevronRight className="w-4 h-4 text-[#6B6560]" />
                        </button>
                    </div>
                </div>

                {/* Video Carousel - smaller on mobile */}
                <div
                    ref={scrollRef}
                    className="flex gap-3 overflow-x-auto pb-2 -mx-4 px-4 snap-x snap-mandatory scrollbar-hide"
                >
                    {ugcVideos.map((video, index) => (
                        <TikTokCard key={video.id} video={video} index={index} />
                    ))}

                    {/* See More Card */}
                    <a
                        href="https://www.tiktok.com/search?q=ghkcu%20serum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-[140px] sm:w-[180px] aspect-[9/16] rounded-xl bg-[#FAF9F6] flex flex-col items-center justify-center gap-2 snap-start hover:bg-[#B87333]/10 transition-colors group"
                    >
                        <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                            <svg className="w-5 h-5 text-[#2E2A25]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                            </svg>
                        </div>
                        <span className="text-[10px] font-medium text-[#6B6560] text-center px-2">
                            Meer op TikTok
                        </span>
                    </a>
                </div>

            </div>
        </section>
    )
}

function TikTokCard({ video, index }: { video: typeof ugcVideos[0]; index: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            className="flex-shrink-0 w-[140px] sm:w-[180px] snap-start"
        >
            <div className="relative aspect-[9/16] rounded-xl overflow-hidden bg-[#1E3A5F] group">
                {/* Placeholder gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#B87333]/30 to-[#1E3A5F]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                    </div>
                </div>

                {/* Duration */}
                <div className="absolute top-2 right-2 bg-black/50 text-white text-[8px] px-1.5 py-0.5 rounded">
                    {video.duration}
                </div>

                {/* TikTok icon */}
                <div className="absolute top-2 left-1/2 -translate-x-1/2">
                    <svg className="w-4 h-4 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-2.5">
                    <div className="flex items-center gap-1.5 mb-1">
                        <div className="w-5 h-5 rounded-full bg-gradient-to-br from-[#B87333] to-[#D4A574]" />
                        <span className="text-white text-[9px] font-medium truncate">
                            {video.creator}
                        </span>
                    </div>
                    <p className="text-white/90 text-[9px] line-clamp-2 mb-1">
                        {video.caption}
                    </p>
                    <div className="flex items-center gap-1 text-white/70 text-[8px]">
                        <svg className="w-2.5 h-2.5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        {video.likes}
                    </div>
                </div>
            </div>
        </motion.div>
    )
}
