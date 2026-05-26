import React from 'react'
// import Navbar from './Navbar'
import HeroSection from '@/sections/HeroSection'
import TrustSection from '@/sections/TrustSection'
import PricingSection from '@/sections/PricingSection'
import EducationSection from '@/sections/EducationSection'
import CTASection from '@/sections/CTASection'
import Footer from './Footer'

const HomeContainer = () => {
  return (
    <>
      {/* <Navbar /> */}
      <HeroSection />
      <TrustSection />
      <PricingSection />
      <EducationSection />
      <CTASection />
      <Footer />
    </>
  )
}

export default HomeContainer;