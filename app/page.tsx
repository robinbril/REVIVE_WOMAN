import dynamic from 'next/dynamic'
import Hero from '@/components/sections/hero'
import Header from '@/components/header'
import StickyCTA from '@/components/sticky-cta'

const WhyCopperPeptides = dynamic(() => import('@/components/sections/why-copper-peptides'), {
  loading: () => <div className="h-[400px]" />,
})

const Ingredients = dynamic(() => import('@/components/sections/ingredients'), {
  loading: () => <div className="h-[600px]" />,
})

const Reviews = dynamic(() => import('@/components/sections/reviews'), {
  loading: () => <div className="h-[400px]" />,
})

const Pricing = dynamic(() => import('@/components/sections/pricing'), {
  loading: () => <div className="h-[500px]" />,
})

const Footer = dynamic(() => import('@/components/sections/footer'), {
  loading: () => <div className="h-[200px]" />,
})

export default function Home() {
  return (
    <main className="min-h-screen bg-white pb-24 lg:pb-0">
      <Header />
      <Hero />
      <WhyCopperPeptides />
      <Ingredients />
      <Reviews />
      <Pricing />
      <Footer />
      <StickyCTA />
    </main>
  )
}

