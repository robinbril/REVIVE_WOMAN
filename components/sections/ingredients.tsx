"use client"

import { useState } from 'react'
import { X, ExternalLink, ChevronDown, FlaskConical, Check } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const ingredients = [
    {
        id: 'ghk-cu',
        percentage: 5,
        name: 'GHK-Cu Peptide',
        fullName: 'Copper Tripeptide-1',
        shortDesc: 'Activeert herstel en celvernieuwing',
        hero: true,
        benefits: [
            '+70% collageen productie na 12 weken',
            'Stimuleert elastine en glycosaminoglycanen',
            'Activeert 4.000+ huidherstel-genen',
        ],
        studies: [
            { label: 'Pickart 2018', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC6073405/' },
            { label: 'Lee 2016', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC4969472/' },
            { label: 'Pickart 2008', url: 'https://pubmed.ncbi.nlm.nih.gov/18047926/' },
            { label: 'Badenhorst 2016', url: 'https://pubmed.ncbi.nlm.nih.gov/27185364/' },
            { label: 'Hostynek 2011', url: 'https://pubmed.ncbi.nlm.nih.gov/21531335/' },
        ],
        blueNote: true,
    },
    {
        id: 'matrixyl',
        percentage: 2,
        name: 'Matrixyl 3000',
        fullName: 'Palmitoyl Tripeptide-1 + Tetrapeptide-7',
        shortDesc: 'Vermindert rimpeldiepte tot 39%',
        benefits: [
            'Synergie van twee peptide-systemen',
            'Stimuleert collageen type I, III en IV',
            'Remt inflammatoire cytokines',
        ],
        studies: [
            { label: 'Sederma 2012', url: 'https://www.sederma.com/matrixyl-3000' },
            { label: 'Robinson 2005', url: 'https://pubmed.ncbi.nlm.nih.gov/16029679/' },
            { label: 'Gorouhi 2009', url: 'https://pubmed.ncbi.nlm.nih.gov/19715448/' },
        ],
    },
    {
        id: 'hyaluronic',
        percentage: 2,
        name: 'Multi-Weight HA',
        fullName: '3 molecuulgroottes hyaluronzuur',
        shortDesc: 'Hydrateert alle huidlagen',
        benefits: [
            'Low MW (5kDa): penetreert diep',
            'Medium MW (50kDa): plumping effect',
            'High MW (1000kDa): oppervlakte hydratatie',
        ],
        studies: [
            { label: 'Pavicic 2011', url: 'https://pubmed.ncbi.nlm.nih.gov/22052267/' },
            { label: 'Jegasothy 2014', url: 'https://pubmed.ncbi.nlm.nih.gov/24494694/' },
            { label: 'Papakonstantinou 2012', url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC3583886/' },
        ],
    },
    {
        id: 'panthenol',
        percentage: 2,
        name: 'Panthenol',
        fullName: 'Pro-Vitamine B5',
        shortDesc: 'Kalmeert en herstelt de huidbarrière',
        benefits: [
            'Converteert naar pantothenische zuur in huid',
            'Verbetert stratum corneum hydratatie',
            'Versnelt epidermale wondheling',
        ],
        studies: [
            { label: 'Proksch 2017', url: 'https://pubmed.ncbi.nlm.nih.gov/28654359/' },
            { label: 'Ebner 2002', url: 'https://pubmed.ncbi.nlm.nih.gov/12113650/' },
            { label: 'Gehring 2004', url: 'https://pubmed.ncbi.nlm.nih.gov/15056978/' },
        ],
    },
    {
        id: 'ectoine',
        percentage: 1,
        name: 'Ectoine',
        fullName: 'Extremophile Shield',
        shortDesc: 'Stabiliseert peptides, beschermt cellen',
        benefits: [
            'Vormt beschermende hydratatieschil',
            'Beschermt tegen UV-geïnduceerde schade',
            'Stabiliseert GHK-Cu moleculen',
        ],
        studies: [
            { label: 'Graf 2008', url: 'https://pubmed.ncbi.nlm.nih.gov/18561452/' },
            { label: 'Buenger 2004', url: 'https://pubmed.ncbi.nlm.nih.gov/15230007/' },
            { label: 'Heinrich 2007', url: 'https://pubmed.ncbi.nlm.nih.gov/17440282/' },
        ],
    },
    {
        id: 'allantoin',
        percentage: 0.5,
        name: 'Allantoin',
        fullName: 'Comfrey-derived Soothing Agent',
        shortDesc: 'Instant kalmering, voorkomt irritatie',
        benefits: [
            'Stimuleert celproliferatie',
            'Keratolytisch effect (zachte exfoliatie)',
            'GRAS-status (Generally Recognized as Safe)',
        ],
        studies: [
            { label: 'Araújo 2010', url: 'https://pubmed.ncbi.nlm.nih.gov/20637084/' },
            { label: 'Becker 2010', url: 'https://pubmed.ncbi.nlm.nih.gov/20634516/' },
        ],
    },
]

export default function Ingredients() {
    const [expandedId, setExpandedId] = useState<string | null>(null)
    const totalActive = ingredients.reduce((sum, i) => sum + i.percentage, 0)

    return (
        <section id="formule" className="py-24 sm:py-32 bg-[#FAF9F6]">
            <div className="max-w-5xl mx-auto px-6 sm:px-8">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-[#E8E4E0] text-[#B87333] text-[11px] font-bold tracking-wider uppercase px-4 py-2 rounded-full mb-6 shadow-sm">
                        <FlaskConical className="w-3.5 h-3.5" />
                        Geverifieerde Formule
                    </div>
                    <h2
                        style={{ fontFamily: 'var(--font-heading)' }}
                        className="text-[32px] sm:text-[40px] font-normal text-[#2E2A25] mb-4 leading-tight"
                    >
                        6 Actieve Systemen
                    </h2>
                    {/* Premium Concentration Visual */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-20 max-w-2xl mx-auto"
                    >
                        <div className="bg-white rounded-3xl p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-[#F4F0EB] relative overflow-hidden">
                            {/* Title */}
                            <div className="text-center mb-8">
                                <h3 className="text-[20px] font-normal text-[#2E2A25] mb-2" style={{ fontFamily: 'var(--font-heading)' }}>
                                    Actieve Concentratie
                                </h3>
                                <p className="text-[13px] text-[#9A958D]">
                                    Vergelijking werkzame stoffen
                                </p>
                            </div>

                            {/* Dual Bar Comparison */}
                            <div className="space-y-4 mb-8">
                                {/* Industry Standard Bar */}
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] uppercase font-bold text-[#9A958D] tracking-wider w-[80px] text-right shrink-0">
                                        Industrie Std.
                                    </span>
                                    <div className="flex-1 h-[28px] bg-[#F3F4F6] rounded-full overflow-hidden relative">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "10%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
                                            className="h-full bg-[#D1D5DB] rounded-full"
                                        />
                                    </div>
                                    <span className="text-[12px] font-semibold text-[#6B7280] w-[50px] shrink-0">
                                        0.1–2%
                                    </span>
                                </div>

                                {/* REVIVE Bar */}
                                <div className="flex items-center gap-3">
                                    <span className="text-[10px] uppercase font-bold text-[#2E2A25] tracking-wider w-[80px] text-right shrink-0">
                                        REVIVE
                                    </span>
                                    <div className="flex-1 h-[32px] bg-[#F3F4F6] rounded-full overflow-hidden relative">
                                        <motion.div
                                            initial={{ width: "0%" }}
                                            whileInView={{ width: "62.5%" }}
                                            viewport={{ once: true }}
                                            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.6 }}
                                            className="h-full bg-gradient-to-r from-[#C99156] to-[#B8834D] rounded-full relative overflow-hidden shadow-[0_2px_8px_rgba(184,115,51,0.25)]"
                                        >
                                            {/* Shimmer Effect */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent translate-x-[-100%] animate-shimmer" />
                                        </motion.div>
                                    </div>
                                    <span className="text-[14px] font-bold text-[#2E2A25] w-[50px] shrink-0">
                                        12.5%
                                    </span>
                                </div>
                            </div>

                            {/* Explanation */}
                            <div className="bg-[#FAF9F7] rounded-xl p-4 border-l-3 border-l-[#C99156]" style={{ borderLeftWidth: '3px' }}>
                                <p className="text-[13px] text-[#6B6560] leading-relaxed">
                                    De meeste serums bevatten slechts <strong className="text-[#2E2A25]">0.1–2%</strong> werkzame stoffen. REVIVE bevat <strong className="text-[#B87333]">12.5%</strong> bewezen actieven — dat is <strong className="text-[#2E2A25]">5x meer</strong> dan de industriestandaard.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Grid */}
                    <p className="text-[16px] text-[#5A5550] max-w-xl mx-auto leading-relaxed">
                        Elke druppel bevat <strong className="text-[#B87333]">{totalActive}% werkzame stoffen</strong>.
                        Dat is 5x meer dan de industriestandaard.
                    </p>
                </motion.div>



                {/* Ingredient Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {ingredients.map((ingredient) => (
                        <IngredientCard
                            key={ingredient.id}
                            ingredient={ingredient}
                            isExpanded={expandedId === ingredient.id}
                            onToggle={() => setExpandedId(
                                expandedId === ingredient.id ? null : ingredient.id
                            )}
                        />
                    ))}
                </div>

                {/* Bottom Info */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-10 text-center"
                >
                    <div className="inline-flex flex-wrap justify-center gap-2 text-[11px]">
                        {['Zonder parfum', 'Zonder alcohol', 'pH 5.5–6.0', 'Made in NL'].map(item => (
                            <span
                                key={item}
                                className="bg-white px-3 py-1.5 rounded-full text-[#6B6560]"
                            >
                                {item}
                            </span>
                        ))}
                    </div>

                    <p className="text-[10px] text-[#9A958D] mt-5 max-w-md mx-auto">
                        Alle claims zijn gebaseerd op gepubliceerde, peer-reviewed studies.
                        Individuele resultaten kunnen variëren.
                    </p>
                </motion.div>
            </div>
        </section>
    )
}

function IngredientCard({
    ingredient,
    isExpanded,
    onToggle
}: {
    ingredient: typeof ingredients[0]
    isExpanded: boolean
    onToggle: () => void
}) {
    return (
        <motion.div
            layout
            layoutId={ingredient.id}
            transition={{
                layout: { type: "spring", stiffness: 300, damping: 30 },
                duration: 0.4
            }}
            className={`relative rounded-xl overflow-hidden cursor-pointer ${ingredient.hero
                ? 'bg-[#1E3A5F] text-white shadow-lg'
                : 'bg-white border-l-[3px] border-l-[#B87333]/60 border border-[#E8E4E0] hover:border-[#B87333]/40 hover:shadow-md'
                } ${isExpanded ? 'sm:col-span-2 lg:col-span-2 shadow-xl' : ''}`}
            onClick={onToggle}
            whileHover={{ scale: isExpanded ? 1 : 1.01 }}
            whileTap={{ scale: 0.98 }}
        >
            {/* Header - compact on mobile */}
            <div className="p-4 sm:p-5">
                <div className="flex items-start justify-between">
                    <div className="flex items-baseline gap-2">
                        <motion.span
                            layout="position"
                            className={`text-[20px] font-bold ${ingredient.hero ? 'text-white' : 'text-[#B87333]'}`}
                        >
                            {ingredient.percentage}%
                        </motion.span>
                        <motion.span
                            layout="position"
                            className={`text-[15px] font-medium ${ingredient.hero ? 'text-white' : 'text-[#2E2A25]'}`}
                        >
                            {ingredient.name}
                        </motion.span>
                    </div>

                    <motion.div
                        animate={{ rotate: isExpanded ? 180 : 0 }}
                        transition={{ type: "spring", stiffness: 200, damping: 15 }}
                        className={`p-1.5 rounded-full ${ingredient.hero ? 'bg-white/20' : 'bg-[#F4F0EB]'}`}
                    >
                        <ChevronDown className={`w-4 h-4 ${ingredient.hero ? 'text-white' : 'text-[#6B6560]'}`} />
                    </motion.div>
                </div>

                <motion.p
                    layout="position"
                    className={`text-[12px] mt-2 ${ingredient.hero ? 'text-white/70' : 'text-[#9A958D]'}`}
                >
                    {ingredient.shortDesc}
                </motion.p>

                {ingredient.hero && !isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -5 }}
                        className="mt-3 inline-flex items-center gap-1 bg-white/20 text-white text-[10px] font-medium px-2.5 py-1 rounded-full"
                    >
                        ★ HERO INGREDIENT
                    </motion.div>
                )}
            </div>

            {/* Expanded Content */}
            <AnimatePresence mode="wait">
                {isExpanded && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{
                            opacity: 1,
                            height: 'auto',
                            transition: {
                                height: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { delay: 0.1, duration: 0.2 }
                            }
                        }}
                        exit={{
                            opacity: 0,
                            height: 0,
                            transition: {
                                opacity: { duration: 0.15 },
                                height: { delay: 0.1, duration: 0.2 }
                            }
                        }}
                        className={`px-5 pb-5 ${ingredient.hero ? 'text-white' : 'text-[#2E2A25]'}`}
                    >
                        {/* Full Name */}
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.15 }}
                            className={`text-[10px] uppercase tracking-wider mb-3 ${ingredient.hero ? 'text-white/50' : 'text-[#9A958D]'}`}
                        >
                            {ingredient.fullName}
                        </motion.div>

                        {/* Benefits - staggered */}
                        <div className="space-y-2 mb-5">
                            {ingredient.benefits.map((benefit, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -15 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: 0.2 + (i * 0.08) }}
                                    className="flex items-start gap-2"
                                >
                                    <Check className={`w-3.5 h-3.5 mt-0.5 flex-shrink-0 ${ingredient.hero ? 'text-white/70' : 'text-[#A8B5A0]'}`} />
                                    <span className={`text-[12px] ${ingredient.hero ? 'text-white/90' : 'text-[#4A4540]'}`}>
                                        {benefit}
                                    </span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Studies Section */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className={`border-t pt-4 ${ingredient.hero ? 'border-white/20' : 'border-[#E8E4E0]'}`}
                        >
                            <div className={`text-[10px] uppercase tracking-wider mb-2 ${ingredient.hero ? 'text-white/50' : 'text-[#9A958D]'}`}>
                                KLINISCHE STUDIES
                            </div>

                            <div className="flex flex-wrap gap-1.5">
                                {ingredient.studies.map((study, i) => (
                                    <motion.a
                                        key={study.label}
                                        href={study.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => e.stopPropagation()}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ delay: 0.45 + (i * 0.05) }}
                                        whileHover={{ scale: 1.05, y: -2 }}
                                        whileTap={{ scale: 0.95 }}
                                        className={`inline-flex items-center gap-1 text-[11px] px-2.5 py-1.5 rounded-lg transition-colors ${ingredient.hero
                                            ? 'bg-white/10 hover:bg-white/25 text-white'
                                            : 'bg-[#FAF9F6] hover:bg-[#B87333]/15 text-[#6B6560] hover:text-[#B87333]'
                                            }`}
                                    >
                                        {study.label}
                                        <ExternalLink className="w-2.5 h-2.5 opacity-60" />
                                    </motion.a>
                                ))}
                            </div>
                        </motion.div>

                        {/* Blue note for GHK-Cu */}
                        {ingredient.blueNote && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.6 }}
                                className={`mt-4 flex items-center gap-2 text-[10px] ${ingredient.hero ? 'text-white/60' : 'text-[#9A958D]'}`}
                            >
                                <div className="w-3 h-3 rounded-full bg-[#1E3A5F] border border-white/30" />
                                De blauwe kleur is geen kleurstof — het is puur koper-peptide.
                            </motion.div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    )
}
