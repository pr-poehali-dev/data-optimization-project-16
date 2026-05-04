import { Navbar } from "@/components/Navbar"
import { HeroSection } from "@/components/HeroSection"
import { ServicesSection } from "@/components/ServicesSection"
import { AboutSection } from "@/components/AboutSection"
import { PortfolioSection } from "@/components/PortfolioSection"
import { FaqSection } from "@/components/FaqSection"
import { Footer } from "@/components/Footer"

export default function Index() {
  return (
    <main className="min-h-screen" style={{ background: "var(--nf-bg)" }}>
      <Navbar />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PortfolioSection />
      <FaqSection />
      <Footer />
    </main>
  )
}