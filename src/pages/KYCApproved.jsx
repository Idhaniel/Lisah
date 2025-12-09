import { useNavigate } from 'react-router-dom';

const KYCApproved = () => {
  const navigate = useNavigate();

  const handleStartInvesting = () => {
    navigate('/portfolio');
  };

  const handleGoToDashboard = () => {
    navigate('/portfolio');
  };

  return (
    <div className="h-screen bg-gradient-to-b from-[#F7F7F7] to-gray-50 font-display text-[#1A1A1A] flex flex-col items-center justify-center p-6">
      <div className="flex flex-col items-center justify-center w-full max-w-sm space-y-8">
        {/* Success Icon */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl"></div>
          <div className="relative w-28 h-28 bg-gradient-to-br from-primary to-[#0A842D] rounded-full flex items-center justify-center shadow-lg">
            <span className="material-symbols-outlined text-white text-6xl">
              check
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h1 className="text-[#1A1A1A] text-3xl font-bold">
            You're All Set!
          </h1>
          
          <p className="text-[#6B7280] text-base leading-relaxed max-w-md">
            Your identity verification has been successful and your Lisah account is now fully active.
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3">
          <button 
            onClick={handleStartInvesting}
            className="w-full bg-primary text-white font-bold rounded-xl h-14 cursor-pointer hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">trending_up</span>
            Start Investing
          </button>
          
          <button 
            onClick={handleGoToDashboard}
            className="w-full bg-white border-2 border-gray-300 text-[#1A1A1A] font-bold rounded-xl h-14 cursor-pointer hover:bg-gray-50 hover:border-gray-400 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span className="material-symbols-outlined">dashboard</span>
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYCApproved;