const EducationSection = () => {
  return (
    <div className="w-full py-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 px-4">
        {/* Left: Varsity image */}
        <div className="flex-1 flex items-center justify-center mb-8 lg:mb-0">
          <img src="/assets/images/education.svg" alt="Varsity" className="w-72 sm:w-96 lg:w-105 h-auto" />
        </div>
        {/* Right: Text and links */}
        <div className="flex-1 max-w-2xl">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-medium mb-6 md:mb-8 text-gray-900">Free and open market education</h2>
          <p className="text-gray-700 text-base md:text-md mb-6">Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
          <a href="#" className="text-blue-600 font-medium flex items-center gap-2 group mb-8 w-fit">
            Varsity <span className="group-hover:translate-x-1 transition-transform"><i className="fa-solid fa-arrow-right"></i></span>
          </a>
          <p className="text-gray-700 text-base md:text-md mb-6">TradingQ&amp;A, the most active trading and investment community in India for all your market related queries.</p>
          <a href="#" className="text-blue-600 font-medium flex items-center gap-2 group w-fit">
            TradingQ&amp;A <span className="group-hover:translate-x-1 transition-transform"><i className="fa-solid fa-arrow-right"></i></span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default EducationSection;