"use client"

import { Star, Shield, TrendingUp, Award } from 'lucide-react'

export default function TrustBar() {
    return (
        <div className="bg-gradient-to-r from-neutral-50 to-white border-y border-neutral-200 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                    <div className="flex flex-col items-center gap-2">
                        <Star className="w-8 h-8 text-amber-500 fill-amber-500" />
                        <div className="text-2xl font-black text-neutral-900">4.8/5</div>
                        <div className="text-sm text-neutral-600">2.847 reviews</div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Shield className="w-8 h-8 text-primary-600" />
                        <div className="text-2xl font-black text-neutral-900">EU</div>
                        <div className="text-sm text-neutral-600">Gecertificeerd</div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <TrendingUp className="w-8 h-8 text-primary-600" />
                        <div className="text-2xl font-black text-neutral-900">88.9%</div>
                        <div className="text-sm text-neutral-600">Effectiviteit</div>
                    </div>

                    <div className="flex flex-col items-center gap-2">
                        <Award className="w-8 h-8 text-primary-600" />
                        <div className="text-2xl font-black text-neutral-900">Klinisch</div>
                        <div className="text-sm text-neutral-600">Getest</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
