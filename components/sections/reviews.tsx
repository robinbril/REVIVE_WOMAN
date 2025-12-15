"use client"

import { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play, Volume2, VolumeX, ChevronLeft, ChevronRight } from 'lucide-react'

// Placeholder - vervang met echte UGC video's
const ugcVideos = [
    {
        id: '1',
        tiktokUrl: 'https://www.tiktok.com/search?q=ghkcu%20serum',
        thumbnail: '/images/ugc/thumb-1.jpg',
        videoSrc: '/videos/ugc-1.mp4',
        creator: '@skincaremama',
        caption: 'Week 4 met copper peptide serum 🧪',
        likes: '12.4K',
        duration: '0:34',
    },
    {
        id: '2',
        tiktokUrl: 'https://www.tiktok.com/search?q=ghkcu%20serum',
        thumbnail: '/images/ugc/thumb-2.jpg',
        videoSrc: '/videos/ugc-2.mp4',
        creator: '@glowwithme.nl',
        caption: 'De blauwe kleur is zo satisfying 💙',
        likes: '8.2K',
        duration: '0:28',
    },
    {
        id: '3',
        tiktokUrl: 'https://www.tiktok.com/search?q=ghkcu%20serum',
        thumbnail: '/images/ugc/thumb-3.jpg',
        videoSrc: '/videos/ugc-3.mp4',
        creator: '@dutchskincare',
        caption: 'POV: je ontdekt GHK-Cu',
        likes: '24.1K',
        duration: '0:45',
    },
    {
        id: '4',
        tiktokUrl: 'https://www.tiktok.com/search?q=ghkcu%20serum',
        thumbnail: '/images/ugc/thumb-4.jpg',
        videoSrc: '/videos/ugc-4.mp4',
        creator: '@emmaxskin',
        caption: 'Mijn huid na 2 maanden copper peptide',
        likes: '31.7K',
        duration: '0:52',
    },
]

export default function Reviews() {
    const scrollRef = useRef<HTMLDivElement>(null)
    const [activeVideo, setActiveVideo] = useState<string | null>(null)

    const scroll = (direction: 'left' | 'right') => {
        if (scrollRef.current) {
            const scrollAmount = 280
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            })
        }
    }

    return (
        <section id="reviews" className="py-16 sm:py-24 bg-white overflow-hidden">
            <div className="max-w-6xl mx-auto px-6 sm:px-8">

                {/* Header */}
                <div className="flex items-end justify-between mb-8">
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <svg className="w-4 h-4 text-[#2E2A25]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                            </svg>
                            <span className="text-[12px] font-medium text-[#6B6560]">
                                #SkinTok
                            </span>
                        </div>
                        <h2
                            style={{ fontFamily: 'var(--font-heading)' }}
                            className="text-[24px] sm:text-[30px] font-normal text-[#2E2A25]"
                        >
                            Echte resultaten
                        </h2>
                    </div>

                    {/* Navigation */}
                    <div className="hidden sm:flex items-center gap-2">
                        <button
                            onClick={() => scroll('left')}
                            className="p-2 rounded-full bg-[#FAF9F6] hover:bg-[#B87333]/10 transition-colors"
                        >
                            <ChevronLeft className="w-5 h-5 text-[#6B6560]" />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-2 rounded-full bg-[#FAF9F6] hover:bg-[#B87333]/10 transition-colors"
                        >
                            <ChevronRight className="w-5 h-5 text-[#6B6560]" />
                        </button>
                    </div>
                </div>

                {/* Video Carousel */}
                <div
                    ref={scrollRef}
                    className="flex gap-4 overflow-x-auto pb-4 -mx-6 px-6 snap-x snap-mandatory"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {ugcVideos.map((video, index) => (
                        <TikTokCard
                            key={video.id}
                            video={video}
                            index={index}
                            isActive={activeVideo === video.id}
                            onPlay={() => setActiveVideo(video.id)}
                            onPause={() => setActiveVideo(null)}
                        />
                    ))}

                    {/* See More Card */}
                    <a
                        href="https://www.tiktok.com/search?q=ghkcu%20serum"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-shrink-0 w-[220px] aspect-[9/16] rounded-2xl bg-[#FAF9F6] flex flex-col items-center justify-center gap-3 snap-start hover:bg-[#B87333]/10 transition-colors group"
                    >
                        <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                            <svg className="w-7 h-7 text-[#2E2A25]" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                            </svg>
                        </div>
                        <span className="text-[12px] font-medium text-[#6B6560]">
                            Bekijk meer op TikTok
                        </span>
                    </a>
                </div>

            </div>
        </section>
    )
}

function TikTokCard({
    video,
    index,
    isActive,
    onPlay,
    onPause
}: {
    video: typeof ugcVideos[0]
    index: number
    isActive: boolean
    onPlay: () => void
    onPause: () => void
}) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const [isMuted, setIsMuted] = useState(true)
    const [isPlaying, setIsPlaying] = useState(false)

    const handlePlayPause = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause()
                setIsPlaying(false)
                onPause()
            } else {
                videoRef.current.play()
                setIsPlaying(true)
                onPlay()
            }
        }
    }

    const toggleMute = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (videoRef.current) {
            videoRef.current.muted = !isMuted
            setIsMuted(!isMuted)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: [0.25, 0.1, 0.25, 1.0]
            }}
            className="flex-shrink-0 w-[220px] snap-start"
        >
            <div
                className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#1E3A5F] cursor-pointer group"
                onClick={handlePlayPause}
            >
                {/* Placeholder gradient (replace with real videos) */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1E3A5F] via-[#B87333]/30 to-[#1E3A5F]" />

                {/* Video element (uncomment when you have real videos)
                <video
                    ref={videoRef}
                    src={video.videoSrc}
                    poster={video.thumbnail}
                    className="absolute inset-0 w-full h-full object-cover"
                    loop
                    muted={isMuted}
                    playsInline
                />
                */}

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

                {/* Play button */}
                {!isPlaying && (
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="absolute inset-0 flex items-center justify-center"
                    >
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                            <Play className="w-6 h-6 text-white fill-white ml-0.5" />
                        </div>
                    </motion.div>
                )}

                {/* Duration badge */}
                <div className="absolute top-3 right-3 bg-black/50 text-white text-[10px] px-2 py-0.5 rounded">
                    {video.duration}
                </div>

                {/* Mute button */}
                {isPlaying && (
                    <button
                        onClick={toggleMute}
                        className="absolute top-3 left-3 w-7 h-7 rounded-full bg-black/50 flex items-center justify-center"
                    >
                        {isMuted ? (
                            <VolumeX className="w-3.5 h-3.5 text-white" />
                        ) : (
                            <Volume2 className="w-3.5 h-3.5 text-white" />
                        )}
                    </button>
                )}

                {/* TikTok icon */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2">
                    <svg className="w-5 h-5 text-white drop-shadow-lg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                    </svg>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-2 mb-1.5">
                        <div className="w-6 h-6 rounded-full bg-gradient-to-br from-[#B87333] to-[#D4A574]" />
                        <span className="text-white text-[11px] font-medium">
                            {video.creator}
                        </span>
                    </div>
                    <p className="text-white/90 text-[11px] line-clamp-2 mb-1.5">
                        {video.caption}
                    </p>
                    <div className="flex items-center gap-1 text-white/70 text-[10px]">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
                        </svg>
                        {video.likes}
                    </div>
                </div>

                {/* TikTok link overlay */}
                <a
                    href={video.tiktokUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                    className="absolute bottom-3 right-3 bg-white/20 backdrop-blur-sm text-white text-[9px] px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                >
                    TikTok →
                </a>
            </div>
        </motion.div>
    )
}
