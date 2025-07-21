import { Navigation } from "./components/sections/Navigation"
import { HeroSection } from "./components/sections/HeroSection"
import { ProblemSection } from "./components/sections/ProblemSection"
import { SolutionSection } from "./components/sections/SolutionSection"
import { ChoosePlanSection } from "./components/sections/ChoosePlanSection"
import { FounderSection } from "./components/sections/FounderSection"
import Footer from "./components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <div className="pt-16"> {/* Account for fixed navigation */}
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ChoosePlanSection />
        <FounderSection />
        <Footer />
      </div>
    </main>
  )
}
