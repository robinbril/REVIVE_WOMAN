export default function ProblemAgitation() {
    return (
        <section className="py-20 sm:py-32 bg-gradient-to-b from-green-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Label */}
                <div className="text-center mb-6">
                    <p className="text-sm font-mono text-emerald-700 bg-emerald-100 px-4 py-2 rounded-full border border-emerald-300 inline-block uppercase tracking-widest">
                        HET PROBLEEM
                    </p>
                </div>

                {/* Headline - BLACK ON LIGHT */}
                <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-center mb-4 leading-tight text-neutral-900">
                    Minoxidil werkt…
                    <br />
                    <span className="text-red-600">tot je libido, hart of portemonnee het opgeeft.</span>
                </h2>

                <p className="text-xl text-center text-neutral-600 max-w-3xl mx-auto mb-16">
                    Duizenden mannen gebruiken het dagelijks. Maar tegen welke prijs?
                </p>

                {/* Pain Point Cards - WHITE WITH RED ACCENTS */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {/* Libido Problems */}
                    <div className="bg-white border border-neutral-200 rounded-2xl p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2">
                        <div className="text-6xl mb-4">❤️‍🩹</div>
                        <h3 className="text-2xl font-bold mb-3 text-red-600">Libidoproblemen</h3>
                        <p className="text-lg text-neutral-700">
                            <strong className="text-red-600 text-2xl">2-4%</strong> van de gebruikers krijgt erectiestoornissen — <strong>soms permanent</strong>.
                        </p>
                    </div>

                    {/* Dependency */}
                    <div className="bg-white border border-neutral-200 rounded-2xl p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2">
                        <div className="text-6xl mb-4">🔄</div>
                        <h3 className="text-2xl font-bold mb-3 text-red-600">Levenslang afhankelijk</h3>
                        <p className="text-lg text-neutral-700">
                            Stop je? Dan verlies je <strong className="text-red-600">binnen 3 maanden</strong> alles weer.
                        </p>
                    </div>

                    {/* Side Effects */}
                    <div className="bg-white border border-neutral-200 rounded-2xl p-8 text-center hover:shadow-2xl transition-all hover:-translate-y-2">
                        <div className="text-6xl mb-4">⚡</div>
                        <h3 className="text-2xl font-bold mb-3 text-red-600">Hoofdpijn & hartkloppingen</h3>
                        <p className="text-lg text-neutral-700">
                            Duizenden mannen ervaren <strong className="text-red-600">elke dag</strong> ongewenste bijwerkingen.
                        </p>
                    </div>
                </div>

                {/* Transition - EMERALD GREEN + UNDERLINE */}
                <div className="text-center">
                    <p className="text-3xl sm:text-4xl font-black text-emerald-600">
                        Wij dachten: dat <span className="underline decoration-emerald-600 decoration-4">móét</span> anders.
                    </p>
                </div>
            </div>
        </section>
    )
}
