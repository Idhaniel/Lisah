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
    <div className="h-screen bg-background-dark font-display text-white flex flex-col items-center justify-center p-6">
      {/* Everything in one centered container */}
      <div className="flex flex-col items-center justify-center w-full max-w-sm space-y-8">
        {/* Success Icon */}
        <div className="w-28 h-28 bg-primary rounded-full flex items-center justify-center">
          <span className="material-symbols-outlined text-background-dark text-6xl">
            check
          </span>
        </div>

        {/* Text Content */}
        <div className="text-center space-y-4">
          <h1 className="text-white text-3xl font-bold">
            You're All Set!
          </h1>
          
          <p className="text-gray-300 text-base leading-relaxed">
            Your identity verification has been successful and your Lisah account is now fully active.
          </p>
        </div>

        {/* Buttons */}
        <div className="w-full space-y-3">
          <button 
            onClick={handleStartInvesting}
            className="w-full bg-primary text-background-dark font-bold rounded-lg h-12 cursor-pointer hover:bg-primary/90 transition-colors"
          >
            Start Investing
          </button>
          
          <button 
            onClick={handleGoToDashboard}
            className="w-full bg-transparent border border-gray-600 text-white font-bold rounded-lg h-12 cursor-pointer hover:bg-gray-800 transition-colors"
          >
            Go to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default KYCApproved;