import { useNavigate } from 'react-router-dom';

const SelfieVerification = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  const handleTakeSelfie = () => {
    // Handle selfie capture logic here
    console.log('Taking selfie...');
    navigate('/kyc-pending');
  };

  return (
    <div className="min-h-screen bg-background-dark font-display text-white flex flex-col">
      {/* Top App Bar */}
      <div className="flex items-center p-4 pb-2 justify-between bg-background-dark flex-shrink-0">
        <button 
          onClick={handleBack}
          className="flex items-center cursor-pointer hover:bg-gray-800 rounded-lg p-2 transition-colors"
        >
          <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>
            arrow_back
          </span>
        </button>
        <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Selfie Verification
        </h2>
        <div className="w-6"></div>
      </div>

      {/* Main Content - This will grow to fill available space */}
      <div className="flex flex-col items-center justify-between flex-1 px-4 pb-8 pt-6 text-center min-h-0">
        {/* Top Section */}
        <div className="w-full flex-shrink-0">
          <h1 className="text-white tracking-tight text-[32px] font-bold leading-tight">
            Take a Selfie
          </h1>
          <p className="text-white/80 text-base font-normal leading-normal pt-2 max-w-md mx-auto">
            Please take a clear selfie to confirm your identity. Make sure your face is centered and well-lit.
          </p>
        </div>

        {/* Camera Viewport - This will grow/shrink as needed */}
        <div className="flex-1 flex items-center justify-center w-full max-w-sm mx-auto my-4 min-h-0">
          <div className="relative w-full max-w-[300px] aspect-[3/4] rounded-xl overflow-hidden">
            <div 
              className="w-full h-full bg-center bg-no-repeat bg-cover bg-gray-700"
              style={{ 
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDr_y5SYopKQdzeiy1KCtD1e4uekuCdjigzJxidJeaHFvvnMnBDHOiHu-qlqOswJHMnTvKjqv2rQ7mwQ7TcyUZJP4_Yuk8F2cGWpatHbYyApcWqh-gLNmebb3Zn-R2ifXNXt52bS988cmF202lFGHyx80W55I4sbCuyYnvOjI2IJhyxdzItpKjjJno4fmUHs_S6u8uG0M1_P4Gtb4xKtpCpZNcizxcI-utuSOgpsB6sG4-QIlCUavA8-45MjomaYUQ6ETb_Jwox-c8')` 
              }}
            ></div>
            {/* Face outline overlay */}
            <div className="face-outline"></div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="w-full flex-shrink-0">
          <p className="text-white/80 text-sm font-normal leading-normal pb-6 flex items-center justify-center">
            <span 
              className="material-symbols-outlined align-middle text-primary mr-1" 
              style={{ fontSize: '16px' }}
            >
              lock
            </span>
            This helps us protect your account and prevent fraud.
          </p>
          
          {/* Action Button */}
          <button 
            onClick={handleTakeSelfie}
            className="w-full max-w-xs mx-auto bg-primary text-background-dark font-bold py-4 px-8 rounded-full flex items-center justify-center gap-2 text-lg hover:bg-primary/90 transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined">photo_camera</span>
            Take Selfie
          </button>
        </div>
      </div>

      {/* Add the face outline styles */}
      <style jsx>{`
        .face-outline {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 70%;
          height: 60%;
          border: 3px solid #bcf906;
          border-radius: 50%;
          box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.5);
        }
      `}</style>
    </div>
  );
};

export default SelfieVerification;