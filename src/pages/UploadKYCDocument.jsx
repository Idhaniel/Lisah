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
    // Handle document submission
    navigate('/selfie-verification');
  };

  const handleSkip = () => {
    // Handle skip logic
    navigate('/selfie-verification');
  };

  const isFormValid = () => {
    return frontFile && backFile;
  };

  return (
    <div className="min-h-screen bg-background-dark font-display text-white">
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Header */}
        <div className="flex items-center bg-background-dark p-4 pb-2 justify-between">
          <button 
            onClick={handleBack}
            className="text-gray-200 flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-800 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="flex w-auto items-center justify-end">
            <p className="text-gray-400 text-base font-bold leading-normal tracking-[0.015em] shrink-0">
              Step 2 of 3
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="flex-grow px-4">
          <h1 className="text-gray-100 tracking-tight text-[32px] font-bold leading-tight pt-6 pb-3">
            Upload Your Documents
          </h1>
          <p className="text-gray-300 text-base font-normal leading-normal pb-6">
            Accepted documents (e.g., Driver's License, Passport, National ID). Please ensure the photo is clear, not blurry, and all four corners are visible. The document must not be expired.
          </p>

          <div className="flex flex-col gap-4">
            {/* Front ID Upload */}
            <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-gray-700 px-6 py-14 bg-gray-800/20">
              <span className="material-symbols-outlined text-primary text-4xl">add_a_photo</span>
              <p className="text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                Upload Front of ID
              </p>
              <label className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-700 text-gray-100 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-600 transition-colors">
                <span className="truncate">Tap to upload</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={handleFrontUpload}
                />
              </label>
              {frontFile && (
                <p className="text-green-400 text-sm mt-2">
                  ✓ {frontFile.name}
                </p>
              )}
            </div>

            {/* Back ID Upload */}
            <div className="flex flex-col items-center gap-6 rounded-lg border-2 border-dashed border-gray-700 px-6 py-14 bg-gray-800/20">
              <span className="material-symbols-outlined text-primary text-4xl">add_a_photo</span>
              <p className="text-gray-100 text-lg font-bold leading-tight tracking-[-0.015em] max-w-[480px] text-center">
                Upload Back of ID
              </p>
              <label className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-gray-700 text-gray-100 text-sm font-bold leading-normal tracking-[0.015em] hover:bg-gray-600 transition-colors">
                <span className="truncate">Tap to upload</span>
                <input
                  type="file"
                  className="hidden"
                  accept="image/*,.pdf"
                  onChange={handleBackUpload}
                />
              </label>
              {backFile && (
                <p className="text-green-400 text-sm mt-2">
                  ✓ {backFile.name}
                </p>
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="p-4 mt-8">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
            <span className="material-symbols-outlined text-base">lock</span>
            <span>Your information is encrypted and secure</span>
          </div>
          
          <button
            onClick={handleSubmit}
            disabled={!isFormValid()}
            className={`
              w-full flex items-center justify-center overflow-hidden rounded-lg h-12 px-4 
              text-background-dark text-base font-bold leading-normal tracking-[0.015em] 
              transition-all duration-300
              ${isFormValid() 
                ? 'bg-primary cursor-pointer hover:bg-primary/90' 
                : 'bg-gray-600 cursor-not-allowed text-gray-400'
              }
            `}
          >
            <span className="truncate">Submit Documents</span>
          </button>
          
          <button
            onClick={handleSkip}
            className="w-full flex items-center justify-center overflow-hidden rounded-lg h-12 px-4 mt-2 text-gray-200 text-base font-bold leading-normal tracking-[0.015em] hover:bg-gray-800 transition-colors"
          >
            <span className="truncate">Skip for now</span>
          </button>
        </footer>
      </div>
    </div>
  );
};

export default UploadKYCDocument;