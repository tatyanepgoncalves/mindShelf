import Footer from '@/components/Footer'
import Header from '@/components/home/Header'
import HeroHome from '@/components/home/HeroHome'
import { LivrosDestaques } from '@/components/LivrosDestaques'

export default function HomePage() {
  return (
    <main>
      <Header />

      <main className="mt-15 mb-10 flex-1 px-6">
        <HeroHome />
        <LivrosDestaques />
      </main>
      <Footer />
    </main>
  )
}
