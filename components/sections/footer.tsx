"use client"

import Link from 'next/link'

export default function Footer() {
    return (
        <footer className="py-12 bg-[#2E2A25] text-white">
            <div className="max-w-4xl mx-auto px-6 sm:px-8">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-8">
                    <span
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-[22px] font-normal tracking-wide"
                    >
                        REVIVE.
                    </span>
                    <nav className="flex flex-wrap items-center justify-center gap-6 text-[13px] text-[#9A958D]">
                        <Link href="#formule" className="hover:text-white transition-colors">Wetenschap</Link>
                        <Link href="#routine" className="hover:text-white transition-colors">Routine</Link>
                        <Link href="#" className="hover:text-white transition-colors">FAQ</Link>
                        <Link href="#" className="hover:text-white transition-colors">Contact</Link>
                    </nav>
                </div>
                <p className="text-center text-[11px] text-[#6B6560]">
                    © 2025 REVIVE Skin. Resultaten kunnen variëren.
                </p>
            </div>
        </footer>
    )
}
