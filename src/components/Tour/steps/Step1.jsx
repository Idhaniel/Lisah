// src/components/Tour/steps/Step1.jsx
const Step1 = ({ onNext, onSkip }) => {
  return (
    <div className="fixed inset-0 bg-background-dark font-display overflow-hidden">
      <div className="flex flex-col h-full w-full">
        <div className="flex flex-col h-full flex-grow">
          <div className="flex px-4 py-3 justify-end">
            <button 
              onClick={onSkip}
              className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent text-white text-sm font-bold leading-normal tracking-[0.015em]"
            >
              <span className="truncate">Skip</span>
            </button>
          </div>
          <div className="flex-grow flex flex-col justify-center items-center px-4">
            <div className="flex w-full max-w-sm grow bg-background-dark @container justify-center items-center">
              <div 
                className="w-48 h-48 bg-center bg-no-repeat bg-contain"
                style={{ 
                  backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuDsISPZ0zRoOsn67zsJD7SNcU4pGg_Ir8wZZB_B41Mhk8AvJxUuM61ZeF3eY8Rd-b4eFyJeVxEHnI2lcXXBNSPJ_tnzROzrHobSwATEL3KKKmzY3mS_u0mhYac1EzxI7tkrUZFq4S66N4xQbPsCk7Je2g6TAhUxax-9fhDmjDTNtKN6s9HnyS1usD_3s1_XTWuKTVCCVNhAqucXQCCR1JUzIFbEYVwZj336q_krF_X1merN22S-i-_OyYhxYF-YR3cMwVirNAhS65s")` 
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1 className="text-white text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
              Lock In Your Future
            </h1>
            <p className="text-white/80 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center max-w-md">
              A brief explanation on how time-locked investments promote long-term financial discipline and prevent impulsive decisions based on market fluctuations.
            </p>
          </div>
          <div className="flex-grow"></div>
          <div className="flex flex-col items-center gap-4 py-5 px-4">
            <div className="flex w-full flex-row items-center justify-center gap-3">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-white/20"></div>
              <div className="h-2 w-2 rounded-full bg-white/20"></div>
            </div>
            <button 
              onClick={onNext}
              className="flex w-full max-w-sm cursor-pointer items-center justify-center overflow-hidden rounded-xl h-12 px-6 bg-primary text-background-dark text-base font-bold leading-normal tracking-wide"
            >
              <span className="truncate">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Step1;