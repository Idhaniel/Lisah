const Step1 = ({ onNext, onSkip }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-background-light to-gray-50 font-display overflow-hidden">
      <div className="flex flex-col h-full w-full px-4 md:px-6">
        <div className="flex flex-col h-full flex-grow">
          {/* Skip Button - Top Right */}
          <div className="flex py-5 justify-end shrink-0">
            <button 
              onClick={onSkip}
              className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-gray-100 text-text-light/80 text-sm font-medium leading-normal tracking-[0.015em] hover:bg-gray-200 hover:text-text-light transition-all active:scale-95"
            >
              <span className="truncate">Skip Tour</span>
            </button>
          </div>

          {/* Main Content Area */}
          <div className="flex-grow flex flex-col justify-center items-center overflow-hidden">
            {/* Image Section - With proper top spacing */}
            <div className="w-full max-w-sm mb-8 md:mb-12">
              <div className="relative">
                {/* Decorative background */}
                <div className="absolute inset-0 -z-10">
                  <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-primary/5 blur-2xl mx-auto"></div>
                </div>
                
                <div className="flex justify-center items-center p-6 md:p-8">
                  <div 
                    className="w-56 h-56 md:w-64 md:h-64 bg-center bg-no-repeat bg-contain drop-shadow-lg"
                    style={{ 
                      backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsISPZ0zRoOsn67zsJD7SNcU4pGg_Ir8wZZB_B41Mhk8AvJxUuM61ZeF3eY8Rd-b4eFyJeVxEHnI2lcXXBNSPJ_tnzROzrHobSwATEL3KKKmzY3mS_u0mhYac1EzxI7tkrUZFq4S66N4xQbPsCk7Je2g6TAhUxax-9fhDmjDTNtKN6s9HnyS1usD_3s1_XTWuKTVCCVNhAqucXQCCR1JUzIFbEYVwZj336q_krF_X1merN22S-i-_OyYhxYF-YR3cMwVirNAhS65s")` 
                    }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Text Content - With proper bottom spacing */}
            <div className="flex flex-col items-center w-full max-w-lg mb-8 md:mb-12">
              <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 py-2 rounded-full bg-primary/10">
                <span className="material-symbols-outlined text-primary text-sm">
                  lock_clock
                </span>
                <p className="text-primary text-xs font-medium">Introduction</p>
              </div>
              
              <h1 className="text-text-light text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-center pb-4 md:pb-6 max-w-md lg:max-w-lg">
                Lock In Your Future
              </h1>
              
              <p className="text-text-light/70 text-base md:text-lg lg:text-xl font-normal leading-normal text-center pb-4 md:pb-6 max-w-md lg:max-w-lg">
                Time-locked investments promote long-term financial discipline and prevent impulsive decisions based on market fluctuations.
              </p>
              
              {/* Stats highlight - Only show on larger screens */}
              <div className="hidden md:flex items-center gap-8 mt-6 text-center">
                <div>
                  <p className="text-text-light text-2xl font-bold">+42%</p>
                  <p className="text-text-light/60 text-xs">Avg. Returns</p>
                </div>
                <div className="w-px h-8 bg-border-light"></div>
                <div>
                  <p className="text-text-light text-2xl font-bold">95%</p>
                  <p className="text-text-light/60 text-xs">Success Rate</p>
                </div>
                <div className="w-px h-8 bg-border-light"></div>
                <div>
                  <p className="text-text-light text-2xl font-bold">5Y+</p>
                  <p className="text-text-light/60 text-xs">Lock Periods</p>
                </div>
              </div>
            </div>

            {/* Spacer to push content away from bottom */}
            <div className="flex-grow min-h-6 md:min-h-8"></div>
          </div>

          {/* Navigation - Fixed at bottom with safe area padding */}
          <div className="flex flex-col items-center gap-6 py-8 md:py-10 px-4 shrink-0 safe-area-inset-bottom">
            {/* Progress dots */}
            <div className="flex items-center gap-3">
              <div className="h-3 w-8 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            </div>
            
            {/* Next Button */}
            <button 
              onClick={onNext}
              className="group flex w-full max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-xl h-14 md:h-16 px-6 bg-primary text-white text-base md:text-lg font-bold leading-normal tracking-wide hover:shadow-lg hover:shadow-primary/30 transition-all shadow-md active:scale-[0.98]"
            >
              <span className="truncate">Next: How It Works</span>
              <span className="material-symbols-outlined ml-2 text-lg md:text-xl group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>
            
            {/* Help text */}
            <p className="text-text-light/50 text-xs md:text-sm text-center max-w-xs">
              Step 1 of 3 • Take your time to explore
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;