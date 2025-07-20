import { Header } from "./components/layout/Header"
import { Footer } from "./components/layout/Footer"
import {
  HeroSection,
  FeaturesSection,
  PlansSection,
  InstagramSection,
  ChoosePlanSection,
} from "./components/sections"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <PlansSection />
        <InstagramSection />
        <ChoosePlanSection />
      </main>
      <Footer />
    </>
  )
}