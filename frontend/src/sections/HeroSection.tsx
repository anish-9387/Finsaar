import SignUp from '@/components/SignUp'

const HeroSection = () => {
  return (
    <div className="container mx-auto px-2 py-8 flex flex-col lg:flex-row items-center">
      <div className="row flex-1 flex flex-col justify-center items-center mb-8 lg:mb-0 mt-12 lg:mt-0 text-center lg:text-left w-full">
        <img src="/assets/images/homeHero.png" alt="" className="w-[90%] lg:w-[70%] h-auto" />
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl font-medium text-gray-800 mt-6 sm:mt-8 md:mt-10">Invest in everything</h1>
        <p className="text-lg lg:text-2xl mt-2 sm:mt-3 md:mt-4 text-gray-600 leading-loose px-3">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <SignUp />
      </div>
    </div>
  )
}

export default HeroSection;