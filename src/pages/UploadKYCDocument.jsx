import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const UploadKYCDocument = () => {
  const navigate = useNavigate();
  const [frontFile, setFrontFile] = useState(null);
  const [backFile, setBackFile] = useState(null);

  const handleBack = () => {
    navigate(-1);
  };

  const handleFrontUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFrontFile(file);
    }
  };

  const handleBackUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setBackFile(file);
    }
  };

  const handleSubmit = () => {
    navigate('/selfie-verification');
  };

  const handleSkip = () => {
    navigate('/selfie-verification');
  };

  const isFormValid = () => {
    return frontFile && backFile;
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] font-display text-[#1A1A1A]">
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Header */}
        <div className="flex items-center bg-[#F7F7F7] p-4 pb-2 justify-between border-b border-gray-200">
          <button 
            onClick={handleBack}
            className="text-[#1A1A1A] flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex w-auto items-center justify-end">
            <p className="text-[#6B7280] text-base font-bold leading-normal tracking-[0.015em] shrink-0">
              Step 2 of 3
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow px-4">
          <h1 className="text-[#1A1A1A] tracking-tight text-[32px] font-bold leading-tight pt-6 pb-3">
            Upload Your Documents
          </h1>
          <p className="text-[#6B7280] text-base font-normal leading-normal pb-6">
            Accepted documents (e.g., Driver's License, Passport, National ID). Please ensure the photo is clear, not blurry, and all four corners are visible. The document must not be expired.
          </p>

          <div className="flex flex-col gap-4">
            {/* Front ID Upload Card */}
            <div className={`flex flex-col items-center gap-6 rounded-xl border-2 ${frontFile ? 'border-primary border-solid' : 'border-dashed border-gray-300'} px-6 py-10 bg-white shadow-sm transition-all duration-300`}>
              <span className="material-symbols-outlined text-primary text-4xl">
                {frontFile ? 'check_circle' : 'add_a_photo'}
              </span>
              <p className="text-[#1A1A1A] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                {frontFile ? 'Front Uploaded' : 'Upload Front of ID'}
              </p>
              <label className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 text-[#1A1A1A] text-sm font-medium leading-normal tracking-[0.015em] hover:bg-gray-200 transition-colors">
                <span className="truncate">
                  {frontFile ? 'Change File' : 'Tap to upload'}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={handleFrontUpload}
                />
              </label>
              {frontFile && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-[#4CAF50] text-base">
                    check_circle
                  </span>
                  <p className="text-[#4CAF50] font-medium">
                    {frontFile.name}
                  </p>
                </div>
              )}
            </div>

            {/* Back ID Upload Card */}
            <div className={`flex flex-col items-center gap-6 rounded-xl border-2 ${backFile ? 'border-primary border-solid' : 'border-dashed border-gray-300'} px-6 py-10 bg-white shadow-sm transition-all duration-300`}>
              <span className="material-symbols-outlined text-primary text-4xl">
                {backFile ? 'check_circle' : 'add_a_photo'}
              </span>
              <p className="text-[#1A1A1A] text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                {backFile ? 'Back Uploaded' : 'Upload Back of ID'}
              </p>
              <label className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-100 text-[#1A1A1A] text-sm font-medium leading-normal tracking-[0.015em] hover:bg-gray-200 transition-colors">
                <span className="truncate">
                  {backFile ? 'Change File' : 'Tap to upload'}
                </span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={handleBackUpload}
                />
              </label>
              {backFile && (
                <div className="flex items-center gap-2 text-sm">
                  <span className="material-symbols-outlined text-[#4CAF50] text-base">
                    check_circle
                  </span>
                  <p className="text-[#4CAF50] font-medium">
                    {backFile.name}
                  </p>
                </div>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 mt-8">
          <div className="flex items-center justify-center gap-2 text-sm text-[#6B7280] mb-6">
            <span className="material-symbols-outlined text-base text-primary">lock</span>
            <span>Your information is encrypted and secure</span>
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`
              w-full flex items-center justify-center overflow-hidden rounded-xl h-14 px-4 
              text-white text-base font-bold leading-normal tracking-[0.015em] 
              transition-all duration-300
              ${isFormValid() 
                ? 'bg-primary cursor-pointer hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20' 
                : 'bg-gray-200 cursor-not-allowed text-gray-400'
              }
            `}
          >
            <span className="truncate">Submit Documents</span>
          </button>
          
          <button
            onClick={handleSkip}
            className="w-full flex items-center justify-center overflow-hidden rounded-xl h-12 px-4 mt-4 text-[#6B7280] text-base font-medium leading-normal tracking-[0.015em] hover:bg-gray-100 transition-colors"
          >
            <span className="truncate">Skip for now</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default UploadKYCDocument;