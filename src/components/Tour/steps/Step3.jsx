// src/components/Tour/steps/Step3.jsx
const Step3 = ({ onNext, onSkip }) => {
  return (
    <div className="fixed inset-0 bg-background-dark font-display overflow-hidden">
      <div className="flex flex-col h-full w-full">
        <div className="flex items-center p-4 pb-2 justify-between">
          <div></div>
          <div className="flex items-center justify-end">
            <p 
              onClick={onSkip}
              className="text-white/70 text-base font-bold leading-normal tracking-[0.015em] shrink-0 cursor-pointer"
            >
              Skip
            </p>
          </div>
        </div>
        
        <div className="flex-grow flex flex-col justify-between p-4">
          <div className="flex-shrink-0">
            <div className="flex w-full flex-row items-center justify-center gap-3 py-5">
              <div className="h-2 w-2 rounded-full bg-white/30"></div>
              <div className="h-2 w-2 rounded-full bg-white/30"></div>
              <div className="h-2 w-2 rounded-full bg-white"></div>
            </div>
          </div>
          
          <div className="flex-grow flex flex-col items-center justify-center text-center">
            <div className="flex justify-center items-center my-8">
              <span className="material-symbols-outlined text-white text-9xl">
                shield_lock
              </span>
            </div>
            
            <h1 className="text-white tracking-tight text-4xl font-bold leading-tight px-4 pb-3">
              Secure & Simple Investing
            </h1>
            
            <p className="text-white/80 text-base font-normal leading-relaxed px-4 pb-3 max-w-sm">
              With our top-tier security protocols, including advanced encryption, your investments are always safe. The intuitive and user-friendly interface makes navigating the world of investing straightforward and hassle-free.
            </p>
          </div>
          
          <div className="flex-shrink-0 w-full px-4 pb-8">
            <button 
              onClick={onNext}
              className="w-full bg-primary text-background-dark font-bold text-lg py-4 rounded-xl"
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step3;