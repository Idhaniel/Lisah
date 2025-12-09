import { useNavigate } from 'react-router-dom';

const SelfieVerification = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleTakeSelfie = () => {
    navigate('/kyc-pending');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F7F7F7] to-gray-100 font-display text-[#1A1A1A] flex flex-col">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between bg-white/95 backdrop-blur-sm border-b border-gray-200 flex-shrink-0">
        <button 
          onClick={handleBack}
          className="flex items-center cursor-pointer hover:bg-gray-200 rounded-lg p-2 transition-colors"
        >
          <span className="material-symbols-outlined text-[#1A1A1A]" style={{ fontSize: '24px' }}>
            arrow_back
          </span>
        </button>
        <h2 className="text-[#1A1A1A] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Selfie Verification
        </h2>
        <div className="w-6"></div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col items-center justify-between flex-1 px-4 pb-8 pt-6 text-center">
        {/* Top Section */}
        <div className="w-full">
          <h1 className="text-[#1A1A1A] tracking-tight text-[32px] font-bold leading-tight">
            Take a Selfie
          </h1>
          <p className="text-[#6B7280] text-base font-normal leading-normal pt-2 max-w-md mx-auto">
            Please take a clear selfie to confirm your identity. Make sure your face is centered and well-lit.
          </p>
        </div>

        {/* Camera Viewport */}
        <div className="relative w-72 h-96 md:w-80 md:h-[32rem] my-8">
          <div className="absolute inset-0 rounded-2xl overflow-hidden border-4 border-white shadow-2xl">
            <div 
              className="w-full h-full bg-center bg-no-repeat bg-cover bg-gray-100"
              style={{ 
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDr_y5SYopKQdzeiy1KCtD1e4uekuCdjigzJxidJeaHFvvnMnBDHOiHu-qlqOswJHMnTvKjqv2rQ7mwQ7TcyUZJP4_Yuk8F2cGWpatHbYyApcWqh-gLNmebb3Zn-R2ifXNXt52bS988cmF202lFGHyx80W55I4sbCuyYnvOjI2IJhyxdzItpKjjJno4fmUHs_S6u8uG0M1_P4Gtb4xKtpCpZNcizxcI-utuSOgpsB6sG4-QIlCUavA8-45MjomaYUQ6ETb_Jwox-c8')` 
              }}
            ></div>
          </div>
          
          {/* Face outline overlay */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-56 border-2 border-dashed border-primary/50 rounded-full pointer-events-none"></div>
          
          {/* Camera shutter effect */}
          <div className="absolute inset-0 rounded-2xl border-2 border-white/30 pointer-events-none"></div>
        </div>

        {/* Bottom Section */}
        <div className="w-full">
          <p className="text-[#6B7280] text-sm font-normal leading-normal pb-6 flex items-center justify-center">
            <span 
              className="material-symbols-outlined align-middle text-primary mr-1" 
              style={{ fontSize: '16px' }}
            >
              verified_user
            </span>
            This helps us protect your account and prevent fraud.
          </p>
          
          {/* Action Button */}
          <button 
            onClick={handleTakeSelfie}
            className="w-full max-w-xs mx-auto bg-primary text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-2 text-lg hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 cursor-pointer shadow-md"
          >
            <span className="material-symbols-outlined">photo_camera</span>
            Take Selfie
          </button>
        </div>
      </div>
    </div>
  );
};

export default SelfieVerification;