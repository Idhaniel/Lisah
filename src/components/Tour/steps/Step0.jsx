// src/components/Tour/steps/Step0.jsx
const Step0 = ({ onNext, onSkip }) => {
  return (
    <div className="fixed inset-0 bg-background-light font-display overflow-hidden">
      <div className="flex flex-col min-h-full w-full">
        <div className="flex flex-col grow w-full items-center justify-between p-6">
          <div className="flex flex-col items-center w-full">
            <div className="flex w-full grow bg-background-light @container py-3">
              <div className="w-full flex justify-center items-center">
                <div className="relative w-48 h-48 bg-primary/20 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-primary text-8xl">lock</span>
                </div>
              </div>
            </div>
            <div className="text-center mt-12">
              <h1 className="text-black tracking-tight text-3xl font-bold leading-tight px-4 pb-3 pt-6 font-display">
                Welcome to Lisah!
              </h1>
              <p className="text-gray-600 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center font-display">
                Briefly introduce Lisah as a commitment investing app, helping users reach their financial goals.
              </p>
            </div>
          </div>
          <div className="flex flex-col w-full items-center">
            <div className="flex w-full flex-row items-center justify-center gap-3 py-5">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
              <div className="h-2 w-2 rounded-full bg-gray-300"></div>
            </div>
            <div className="flex justify-stretch w-full">
              <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
                <button 
                  onClick={onSkip}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-transparent text-gray-500 text-base font-bold leading-normal tracking-[0.015em] font-display"
                >
                  <span className="truncate">Skip</span>
                </button>
                <button 
                  onClick={onNext}
                  className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] font-display"
                >
                  <span className="truncate">Next</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step0;