"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Instagram, Youtube } from 'lucide-react'

export default function Footer() {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Email capture logic would go here
        console.log('Email submitted:', email)
        setEmail('')
    }

    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {/* Logo and Tagline */}
                <div className="mb-12">
                    <div className="text-2xl font-bold text-gray-900 mb-3">
                        FOLLICLE<span className="text-emerald-600">.</span>
                    </div>
                    <p className="text-gray-500">
                        Wetenschap die werkt.
                        <br />
                        Zonder compromissen.
                    </p>
                </div>

                {/* Main Footer Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
                    {/* Producten */}
                    <div>
                        <h4 className="font-bold mb-4 text-gray-900 text-sm tracking-wide">PRODUCTEN</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <Link href="/product/haar-serum-18" className="hover:text-emerald-600 transition-colors">
                                    Hair Serum
                                </Link>
                            </li>
                            <li>
                                <Link href="/bundels" className="hover:text-emerald-600 transition-colors">
                                    Bundels
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Wetenschap */}
                    <div>
                        <h4 className="font-bold mb-4 text-gray-900 text-sm tracking-wide">WETENSCHAP</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <Link href="/wetenschap" className="hover:text-emerald-600 transition-colors">
                                    Ingrediënten
                                </Link>
                            </li>
                            <li>
                                <Link href="/studies" className="hover:text-emerald-600 transition-colors">
                                    Studies
                                </Link>
                            </li>
                            <li>
                                <Link href="/blog" className="hover:text-emerald-600 transition-colors">
                                    Blog
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h4 className="font-bold mb-4 text-gray-900 text-sm tracking-wide">SUPPORT</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <Link href="/contact" className="hover:text-emerald-600 transition-colors">
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link href="/faq" className="hover:text-emerald-600 transition-colors">
                                    FAQ
                                </Link>
                            </li>
                            <li>
                                <Link href="/verzending" className="hover:text-emerald-600 transition-colors">
                                    Verzending
                                </Link>
                            </li>
                            <li>
                                <Link href="/retourneren" className="hover:text-emerald-600 transition-colors">
                                    Retourneren
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Bedrijf */}
                    <div>
                        <h4 className="font-bold mb-4 text-gray-900 text-sm tracking-wide">BEDRIJF</h4>
                        <ul className="space-y-2 text-gray-600">
                            <li>
                                <Link href="/over-ons" className="hover:text-emerald-600 transition-colors">
                                    Over ons
                                </Link>
                            </li>
                            <li>
                                <Link href="/pers" className="hover:text-emerald-600 transition-colors">
                                    Pers
                                </Link>
                            </li>
                            <li>
                                <Link href="/partners" className="hover:text-emerald-600 transition-colors">
                                    Partners
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Newsletter */}
                <div className="border border-gray-200 bg-white rounded-xl p-8 mb-12 shadow-sm">
                    <h3 className="text-xl font-bold mb-2 text-gray-900">
                        📧 Schrijf je in voor updates en tips
                    </h3>
                    <p className="text-gray-500 text-sm mb-4">
                        We spammen niet. Maximaal 2x per maand.
                    </p>
                    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                        <input
                            type="email"
                            placeholder="jouw@email.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="flex-1 px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 focus:outline-none text-gray-900"
                            required
                        />
                        <button
                            type="submit"
                            className="bg-emerald-600 hover:bg-emerald-700 text-white px-6 py-3 font-semibold rounded-lg transition-colors"
                        >
                            AANMELDEN
                        </button>
                    </form>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-gray-200 pt-8">
                    {/* Social Links */}
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-gray-600"
                        >
                            <Instagram className="w-5 h-5" />
                        </a>
                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors text-gray-600"
                        >
                            <Youtube className="w-5 h-5" />
                        </a>
                    </div>

                    {/* Legal Links */}
                    <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-6">
                        <Link href="/algemene-voorwaarden" className="hover:text-emerald-600 transition-colors">
                            Algemene voorwaarden
                        </Link>
                        <Link href="/privacybeleid" className="hover:text-emerald-600 transition-colors">
                            Privacybeleid
                        </Link>
                        <Link href="/cookiebeleid" className="hover:text-emerald-600 transition-colors">
                            Cookiebeleid
                        </Link>
                    </div>

                    {/* Copyright */}
                    <p className="text-center text-sm text-gray-400 mb-4">
                        © 2025 Follicle B.V. | KvK: 12345678 | BTW: NL123456789B01
                    </p>

                    {/* Disclaimer */}
                    <p className="text-xs text-gray-400 text-center max-w-3xl mx-auto">
                        * Deze statements zijn niet geëvalueerd door autoriteiten. Dit
                        product is niet bedoeld om ziektes te diagnosticeren, behandelen,
                        genezen of voorkomen. Dit is een cosmetisch product en geen
                        geneesmiddel. Resultaten kunnen variëren.
                    </p>
                </div>
            </div>
        </footer>
    )
}
