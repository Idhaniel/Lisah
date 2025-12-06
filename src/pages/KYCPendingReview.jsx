import { useNavigate } from 'react-router-dom';

const KYCPendingReview = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleGotIt = () => {
    // Navigate to dashboard or next screen
    navigate('/kyc-approved');
  };

  const handleContactSupport = () => {
    // Handle contact support logic
    console.log('Contact support clicked');
    // navigate('/support');
    // For now it should go to failed page
    navigate('/kyc-rejected');
  };

  return (
    <div className="min-h-screen bg-background-dark font-display text-white flex flex-col">
      {/* Header */}
      <div className="flex items-center bg-background-dark p-4 pb-2 justify-between">
        <button 
          onClick={handleBack}
          className="text-white flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-800 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">arrow_back</span>
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Verification
        </h2>
        <div className="flex size-12 shrink-0 items-center"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-grow p-4">
        <div className="flex w-full grow bg-background-dark justify-center items-center py-3">
          <div 
            className="w-48 h-48 bg-center bg-no-repeat bg-contain"
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuAP4eHi1lXTGG04gr-BxlhssVI6hq5NmZ8K5uD8FQ2MyDpN_7xlHPJZESU8Y2ZmuyFrdOrkfSqYmiLei_djo9YM9PMFoaxvJB98G4X-YkRMD_Lmyk4EWhX4rhhcaud3azgMFLVU-w0ydJYWWfGswlwoOlsTGmgEgpCTsSHgH-F99jYCnBemKFb4lxs0iXBZFYG55clh_JOJWBSOTOyCnnF00oOCCYNandOdrTPCUQz0QdqKzNO0k69378Y6KH47irvnsgQ-cdcYiBg")`
            }}
          ></div>
        </div>
        
        <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight px-4 text-center pb-3 pt-6">
          Verification in Progress
        </h1>
        
        <p className="text-gray-300 text-base font-normal leading-normal pb-3 pt-1 px-4 text-center max-w-sm">
          Thanks for submitting your documents! We're currently reviewing your information. This typically takes 1-2 business days. We'll notify you upon completion.
        </p>
      </div>

      {/* Buttons - Fixed centering */}
      <div className="p-4 space-y-4">
        <div className="flex justify-center">
          <button 
            onClick={handleGotIt}
            className="w-full max-w-md bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] rounded-lg h-12 px-5 cursor-pointer hover:bg-primary/90 transition-colors"
          >
            Got It
          </button>
        </div>
        
        <div className="flex justify-center">
          <button 
            onClick={handleContactSupport}
            className="w-full max-w-md bg-transparent border border-gray-600 text-white text-base font-bold leading-normal tracking-[0.015em] rounded-lg h-12 px-5 cursor-pointer hover:bg-gray-800 transition-colors"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYCPendingReview;