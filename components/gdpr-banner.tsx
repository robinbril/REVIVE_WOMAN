"use client"

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'

export default function GDPRBanner() {
    const [show, setShow] = useState(false)

    useEffect(() => {
        const consent = localStorage.getItem('gdpr-consent')
        if (!consent) {
            setShow(true)
        }
    }, [])

    const accept = () => {
        localStorage.setItem('gdpr-consent', 'accepted')
        setShow(false)
        // Initialize GA4 here
        if (typeof window !== 'undefined' && (window as any).gtag) {
            (window as any).gtag('consent', 'update', {
                'analytics_storage': 'granted'
            })
        }
    }

    const deny = () => {
        localStorage.setItem('gdpr-consent', 'denied')
        setShow(false)
    }

    if (!show) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-neutral-900 text-white p-6 shadow-2xl z-50 animate-slide-up">
            <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="flex-1">
                    <p className="text-sm">
                        <strong>Cookie melding:</strong> We gebruiken cookies om je ervaring te verbeteren en voor analytics.
                        Zie ons <a href="/privacybeleid" className="underline hover:text-primary-400">privacybeleid</a>.
                    </p>
                </div>
                <div className="flex gap-3">
                    <button
                        onClick={deny}
                        className="px-4 py-2 text-sm border border-neutral-600 rounded hover:bg-neutral-800 transition-colors"
                    >
                        Weigeren
                    </button>
                    <button
                        onClick={accept}
                        className="px-4 py-2 text-sm bg-primary-600 rounded hover:bg-primary-700 transition-colors"
                    >
                        Accepteren
                    </button>
                </div>
            </div>
        </div>
    )
}
