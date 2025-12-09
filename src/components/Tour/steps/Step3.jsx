import { useNavigate } from "react-router-dom";

const Step3 = ({ onNext, onSkip }) => {
  const navigate = useNavigate()
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-background-light to-gray-50 font-display flex flex-col">
      {/* Skip Button - Top Right (hidden on last step) */}
      <div className="flex justify-end p-4 md:p-6 shrink-0 invisible">
        <button 
          onClick={onSkip}
          className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-5 bg-gray-100 text-text-light/80 text-sm font-medium leading-normal tracking-[0.015em] hover:bg-gray-200 hover:text-text-light transition-all active:scale-95"
        >
          <span className="truncate">Skip Tour</span>
        </button>
      </div>

      {/* Main Content - Fills remaining space without overflow */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 md:px-6 py-4 overflow-hidden">
        <div className="w-full h-full max-w-4xl flex flex-col items-center justify-between">
          
          {/* Icon Section - Dynamic height */}
          <div className="flex-1 flex items-center justify-center w-full max-w-xl lg:max-w-2xl">
            <div className="relative w-full h-full max-h-[40vh] flex items-center justify-center">
              <div className="absolute inset-0 -z-10">
                <div className="w-full h-full max-w-md max-h-md rounded-full bg-primary/5 blur-xl mx-auto"></div>
              </div>
              
              <div className="w-full h-full max-w-sm max-h-sm flex items-center justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full blur-xl"></div>
                  <div className="relative">
                    <span className="material-symbols-outlined text-primary text-7xl md:text-8xl lg:text-9xl">
                      shield_lock
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text Content - Fixed height section */}
          <div className="w-full max-w-md md:max-w-lg lg:max-w-xl flex flex-col items-center px-2 py-4 md:py-6">
            <div className="inline-flex items-center gap-2 mb-3 md:mb-4 px-4 py-2 rounded-full bg-primary/10">
              <span className="material-symbols-outlined text-primary text-sm">
                security
              </span>
              <p className="text-primary text-sm font-medium">Final Step</p>
            </div>
            
            <h1 className="text-text-light text-2xl md:text-3xl lg:text-3xl font-bold leading-tight text-center mb-3 md:mb-4">
              Secure & Simple Investing
            </h1>
            
            <p className="text-text-light/70 text-base md:text-lg lg:text-base font-normal leading-normal text-center mb-4 md:mb-5 max-w-md">
              With our top-tier security protocols, including advanced encryption, your investments are always safe. The intuitive and user-friendly interface makes navigating the world of investing straightforward and hassle-free.
            </p>
            
            {/* Security features - Compact horizontal layout */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 mt-2 text-center">
              <div className="flex-1 min-w-[100px]">
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl md:text-2xl">
                    lock
                  </span>
                </div>
                <p className="text-text-light font-medium text-sm">Bank-Level Security</p>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-border-light"></div>
              
              <div className="flex-1 min-w-[100px]">
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl md:text-2xl">
                    verified_user
                  </span>
                </div>
                <p className="text-text-light font-medium text-sm">Regulated Platform</p>
              </div>
              
              <div className="hidden sm:block w-px h-12 bg-border-light"></div>
              
              <div className="flex-1 min-w-[100px]">
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-2 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-xl md:text-2xl">
                    speed
                  </span>
                </div>
                <p className="text-text-light font-medium text-sm">Simple & Fast</p>
              </div>
            </div>
          </div>

          {/* Navigation - Fixed at bottom */}
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg flex flex-col items-center gap-4 md:gap-5 pt-4 md:pt-6 border-t border-gray-200 shrink-0">
            {/* Progress dots */}
            <div className="flex items-center gap-3">
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              <div className="h-3 w-8 rounded-full bg-primary"></div>
            </div>
            
            {/* Get Started Button */}
            <button 
              onClick={() => {
                navigate("/broker-selection");
              }}
              className="group flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 md:h-14 px-6 bg-primary text-white text-base md:text-lg font-bold leading-normal tracking-wide hover:shadow-lg hover:shadow-primary/30 transition-all shadow-md active:scale-[0.98]"
            >
              <span className="truncate">Get Started</span>
              <span className="material-symbols-outlined ml-2 text-lg group-hover:translate-x-1 transition-transform">
                rocket_launch
              </span>
            </button>
            
            {/* Final message */}
            <div className="text-center">
              <p className="text-text-light/50 text-xs md:text-sm mb-1">
                You're all set! Ready to begin your investment journey.
              </p>
              <div className="flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-primary text-sm">
                  verified
                </span>
                <p className="text-primary text-xs font-medium">Your account is ready</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;