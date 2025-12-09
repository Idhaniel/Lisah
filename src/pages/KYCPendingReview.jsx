import { useNavigate } from 'react-router-dom';

const KYCPendingReview = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleGotIt = () => {
    navigate('/kyc-approved');
  };

  const handleContactSupport = () => {
    navigate('/kyc-rejected');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F7F7] to-gray-50 font-display text-[#1A1A1A] flex flex-col">
      {/* Header */}
      <div className="flex items-center bg-white p-4 pb-2 justify-between border-b border-gray-200">
        <button 
          onClick={handleBack}
          className="text-[#1A1A1A] flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-[#1A1A1A] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Verification
        </h2>
        <div className="flex size-12 shrink-0 items-center"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <div className="flex w-full grow justify-center items-center py-3">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/10 rounded-full blur-xl"></div>
            <div 
              className="relative w-48 h-48 bg-center bg-no-repeat bg-contain"
              style={{
                backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAP4eHi1lXTGG04gr-BxlhssVI6hq5NmZ8K5uD8FQ2MyDpN_7xlHPJZESU8Y2ZmuyFrdOrkfSqYmiLei_djo9YM9PMFoaxvJB98G4X-YkRMD_Lmyk4EWhX4rhhcaud3azgMFLVU-w0ydJYWWfGswlwoOlsTGmgEgpCTsSHgH-F99jYCnBemKFb4lxs0iXBZFYG55clh_JOJWBSOTOyCnnF00oOCCYNandOdrTPCUQz0QdqKzNO0k69378Y6KH47irvnsgQ-cdcYiBg")`
              }}
            ></div>
          </div>
        </div>
        
        <h1 className="text-[#1A1A1A] tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
          Verification in Progress
        </h1>
        
        <p className="text-[#6B7280] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center max-w-sm">
          Thanks for submitting your documents! We're currently reviewing your information. This typically takes 1-2 business days. We'll notify you upon completion.
        </p>

        {/* Progress Indicator */}
        <div className="mt-8 w-full max-w-sm">
          <div className="flex justify-between text-sm text-[#6B7280] mb-2">
            <span>Submitted</span>
            <span>Reviewing</span>
            <span>Complete</span>
          </div>
          <div className="rounded-full bg-gray-200 h-2">
            <div className="h-2 rounded-full bg-primary" style={{ width: '50%' }}></div>
          </div>
          <div className="flex justify-between mt-1 text-xs text-[#6B7280]">
            <span className="text-primary font-medium">✓</span>
            <span className="text-primary font-medium">●</span>
            <span>○</span>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="p-4 space-y-4 bg-white/95 backdrop-blur-sm border-t border-gray-200">
        <div className="flex justify-center">
          <button 
            onClick={handleGotIt}
            className="w-full max-w-md bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] rounded-xl h-14 px-5 cursor-pointer hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            Got It
          </button>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={handleContactSupport}
            className="w-full max-w-md bg-white border-2 border-gray-300 text-[#1A1A1A] text-base font-medium leading-normal tracking-[0.015em] rounded-xl h-12 px-5 cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-all duration-300"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYCPendingReview;