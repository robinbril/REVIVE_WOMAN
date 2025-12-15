import Hero from '@/components/sections/hero'
import WhyCopperPeptides from '@/components/sections/why-copper-peptides'
import Ingredients from '@/components/sections/ingredients'
import Reviews from '@/components/sections/reviews'
import Pricing from '@/components/sections/pricing'
import Guarantee from '@/components/sections/guarantee'
import Footer from '@/components/sections/footer'
import Header from '@/components/header'
import StickyCTA from '@/components/sticky-cta'

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24 lg:pb-0">
      <Header />
      <Hero />
      <WhyCopperPeptides />
      <Ingredients />
      <Reviews />
      <Pricing />
      <Guarantee />
      <Footer />
      <StickyCTA />
    </main>
  )
}
