"use client"

import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function StickyCTA() {
    return (
        <div className="fixed bottom-0 left-0 right-0 z-50 lg:hidden bg-white/95 backdrop-blur-sm border-t border-[#E8E4E0] px-4 py-3 pb-safe">
            <Button
                className="w-full h-12 text-[13px] font-medium bg-[#B87333] hover:bg-[#9A5F2A] text-white rounded-full shadow-lg"
                asChild
            >
                <Link href="#prijzen">
                    Bestel Nu · €59
                    <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
            </Button>
        </div>
    )
}
