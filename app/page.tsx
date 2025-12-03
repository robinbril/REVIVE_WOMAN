import Navigation from '@/components/sections/navigation'
import Hero from '@/components/sections/hero'
import ProblemAgitation from '@/components/sections/problem-agitation'
import Solution from '@/components/sections/solution'
import ClinicalProof from '@/components/sections/clinical-proof'
import HowItWorks from '@/components/sections/how-it-works'
import Testimonials from '@/components/sections/testimonials'
import FAQ from '@/components/sections/faq'
import Pricing from '@/components/sections/pricing'
import FinalCTA from '@/components/sections/final-cta'
import Footer from '@/components/sections/footer'
import ExitIntentPopup from '@/components/conversion/exit-intent-popup'
import SocialProofToast from '@/components/conversion/social-proof-toast'
import StickyMobileCTA from '@/components/conversion/sticky-mobile-cta'
import GDPRBanner from '@/components/gdpr-banner'
import TopBar from '@/components/top-bar'
import FloatingCTA from '@/components/conversion/floating-cta'
import TrustBar from '@/components/conversion/trust-bar'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <TopBar />
      <Navigation />
      <Hero />
      <ProblemAgitation />
      <Solution />
      <ClinicalProof />
      <HowItWorks />
      <Testimonials />
      <FAQ />
      <Pricing />
      <FinalCTA />
      <TrustBar />
      <Footer />
      <ExitIntentPopup />
      <SocialProofToast />
      <StickyMobileCTA />
      <FloatingCTA />
      <GDPRBanner />
    </main>
  )
}
