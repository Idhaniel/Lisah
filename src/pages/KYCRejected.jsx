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
    <div className="min-h-screen bg-gradient-to-b from-[#F7F7F7] to-gray-50 font-display text-[#1A1A1A]">
      {/* Header */}
      <div className="flex items-center justify-between p-4 pb-2 bg-white border-b border-gray-200">
        <button 
          onClick={handleClose}
          className="text-[#1A1A1A] flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
        >
          <span className="material-symbols-outlined">close</span>
        </button>
        
        <button 
          onClick={handleContactSupport}
          className="text-primary text-base font-medium leading-normal tracking-[0.015em] cursor-pointer hover:text-primary/80 transition-colors"
        >
          Contact Support
        </button>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center px-4 py-8">
        {/* Error Icon */}
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-red-100 rounded-full blur-xl"></div>
          <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-red-100 to-red-50">
            <span className="material-symbols-outlined text-red-500 text-5xl">error</span>
          </div>
        </div>

        {/* Text Content */}
        <h1 className="text-[#1A1A1A] text-[32px] font-bold leading-tight text-center mb-4">
          Verification Unsuccessful
        </h1>
        
        <p className="text-[#6B7280] text-base font-normal leading-normal text-center max-w-md mb-8">
          There was an issue with your verification. Please check the reasons below and re-submit with clearer documents.
        </p>

        {/* Rejection Reasons */}
        <div className="w-full max-w-md rounded-xl bg-red-50/80 border border-red-200 p-6 space-y-4 mb-8">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-red-500">warning</span>
            <h2 className="font-bold text-[#1A1A1A] text-lg">Reason for Rejection:</h2>
          </div>
          <ul className="space-y-3 text-left">
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">cancel</span>
              <span className="text-[#6B7280]">Documents were unclear or blurry.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">cancel</span>
              <span className="text-[#6B7280]">Information on the documents did not match the provided details.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="material-symbols-outlined text-red-500 text-sm mt-0.5">cancel</span>
              <span className="text-[#6B7280]">Document was expired or incomplete.</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200">
        <div className="max-w-md mx-auto space-y-4">
          <button 
            onClick={handleResubmit}
            className="w-full bg-primary text-white text-base font-bold leading-normal tracking-[0.015em] rounded-xl h-14 cursor-pointer hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300"
          >
            Re-submit Documents
          </button>
          
          <div className="text-center">
            <button 
              onClick={handleContactSupport}
              className="text-primary text-sm font-medium cursor-pointer hover:text-primary/80 transition-colors flex items-center justify-center gap-1"
            >
              <span className="material-symbols-outlined text-sm">help</span>
              Need help? Contact Support
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KYCRejected;