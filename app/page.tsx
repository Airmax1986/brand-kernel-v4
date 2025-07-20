import Navigation from "./components/sections/Navigation"
import Hero from "./components/sections/Hero"
import Problem from "./components/sections/Problem"
import Solution from "./components/sections/Solution"
import Pricing from "./components/sections/Pricing"
import Waitlist from "./components/sections/Waitlist"
import Founder from "./components/sections/Founder"
import Footer from "./components/sections/Footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Pricing />
      <Waitlist />
      <Founder />
      <Footer />
    </main>
  )
}