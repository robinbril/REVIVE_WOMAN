"use client"

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function StickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden">
            <div className="bg-white/80 backdrop-blur-xl border-t border-[#E8E4E0]/50 px-4 py-3 pb-safe">
                <Link
                    href="#prijzen"
                    className="flex items-center justify-center gap-2 w-full h-[50px] text-[14px] font-medium bg-[#B87333] hover:bg-[#9A5F2A] text-white rounded-full shadow-lg transition-all duration-300"
                >
                    Start Routine · €49
                    <ArrowRight className="w-4 h-4" />
                </Link>
            </div>
        </div>
    )
}
