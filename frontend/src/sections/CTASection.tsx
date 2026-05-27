import SignUp from '@/components/SignUp'
import React from 'react'

const CTASection = () => {
  return (
    <div className="container mx-auto px-2 py-8 flex flex-col lg:flex-row items-center">
      <div className="row flex-1 flex flex-col justify-center items-center mb-8 lg:mb-0 mt-12 lg:mt-0 text-center lg:text-left w-full">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-900 mt-6 sm:mt-8 md:mt-10">Open a Zerodha account</h1>
        <p className="text-base md:text-md mt-2 sm:mt-3 md:mt-4 text-gray-600 leading-loose px-3">Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <SignUp />
      </div>
    </div>
  )
}

export default CTASection;