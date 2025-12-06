import { useNavigate } from 'react-router-dom';

const KYCRejected = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate(-1);
  };

  const handleContactSupport = () => {
    console.log('Contact support clicked');
  };

  const handleResubmit = () => {
    navigate('/upload-documents');
  };

  return (
    <div className="min-h-screen bg-background-dark font-display text-white">
      {/* Header - Full width, not constrained */}
      <div className="flex items-center justify-between p-4 pb-2">
        <button 
          onClick={handleClose}
          className="text-white flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-800 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <button 
          onClick={handleContactSupport}
          className="text-primary/70 text-base font-bold leading-normal tracking-[0.015em] cursor-pointer hover:text-primary transition-colors"
        >
          Contact Support
        </button>
      </div>

      {/* Main Content - Centered but text can expand naturally */}
      <div className="flex flex-col items-center justify-center px-4 py-8">
        {/* Error Icon */}
        <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary/20 mb-8">
          <span className="material-symbols-outlined text-primary text-5xl">error</span>
        </div>

        {/* Text Content - No max-width constraints for better text flow */}
        <h1 className="text-white text-[32px] font-bold leading-tight text-center mb-4">
          Verification Unsuccessful
        </h1>
        
        <p className="text-white/80 text-base font-normal leading-normal text-center max-w-2xl mb-8">
          There was an issue with your verification. Please check the reasons below and re-submit with clearer documents.
        </p>

        {/* Rejection Reasons - With the correct lighter green background */}
        <div className="w-full max-w-2xl rounded-lg bg-primary/10 p-6 space-y-4">
          <h2 className="font-bold text-white text-lg">Reason for Rejection:</h2>
          <ul className="list-disc list-inside text-left text-white/80 space-y-2 text-base">
            <li>Documents were unclear or blurry.</li>
            <li>Information on the documents did not match the provided details.</li>
          </ul>
        </div>
      </div>

      {/* Bottom Section - Centered but with proper width */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-background-dark border-t border-gray-800">
        <div className="max-w-2xl mx-auto space-y-4">
          <button 
            onClick={handleResubmit}
            className="w-full bg-primary text-background-dark text-base font-bold leading-normal tracking-[0.015em] rounded-lg h-12 cursor-pointer hover:bg-primary/90 transition-colors"
          >
            Re-submit Documents
          </button>
          
          <div className="text-center">
            <button 
              onClick={handleContactSupport}
              className="text-primary/70 text-sm font-medium cursor-pointer hover:text-primary transition-colors"
            >
              Need help? Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCRejected;