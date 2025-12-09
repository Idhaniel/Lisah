import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const IdentityVerification = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    email: '',
    phone: '',
    streetAddress: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'Nigeria'
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id]: value
    }));
  };

  const handleBack = () => {
    navigate(-1);
  };

  const handleContinue = () => {
    navigate('/upload-kyc-document');
  };

  const isFormValid = () => {
    return (
      formData.fullName &&
      formData.dob &&
      formData.email &&
      formData.phone &&
      formData.streetAddress &&
      formData.city &&
      formData.state &&
      formData.postalCode &&
      formData.country
    );
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] font-display text-[#1A1A1A]">
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Header */}
        <div className="flex items-center bg-[#F7F7F7] p-4 pb-2 justify-between sticky top-0 z-10 border-b border-gray-200">
          <button 
            onClick={handleBack}
            className="text-[#1A1A1A] flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-[#1A1A1A] text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Verify Your Identity
          </h1>
          <div className="size-12"></div>
        </div>

        {/* Main Content */}
        <main className="flex-grow px-4 pb-28">
          <p className="text-[#6B7280] text-base font-normal leading-normal pb-3 pt-4 text-center">
            To comply with regulations, we need to verify your identity. This information is kept secure.
          </p>

          {/* Progress Bar */}
          <div className="flex flex-col gap-3 py-6">
            <div className="flex gap-6 justify-between items-center">
              <p className="text-[#6B7280] text-sm font-normal leading-normal">
                Step 1 of 3
              </p>
              <p className="text-primary text-sm font-medium">Personal Details</p>
            </div>
            <div className="rounded-full bg-gray-200 h-2">
              <div 
                className="h-2 rounded-full bg-primary transition-all duration-300" 
                style={{ width: '33%' }}
              ></div>
            </div>
          </div>

          {/* Personal Information Card */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm mb-6">
            <h2 className="text-[#1A1A1A] text-lg font-bold leading-tight tracking-[-0.015em] pb-4 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">
                person
              </span>
              Personal Information
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-[#6B7280] text-sm font-medium leading-normal pb-2" htmlFor="fullName">
                  Full Legal Name
                </label>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1A1A1A] focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-gray-300 bg-white focus:border-primary h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                  id="fullName"
                  placeholder="Enter your full legal name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-[#6B7280] text-sm font-medium leading-normal pb-2" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1A1A1A] focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-gray-300 bg-white focus:border-primary h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-[#6B7280] text-sm font-medium leading-normal pb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1A1A1A] focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-gray-300 bg-white focus:border-primary h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                  id="email"
                  placeholder="Enter your email address"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-[#6B7280] text-sm font-medium leading-normal pb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1A1A1A] focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-gray-300 bg-white focus:border-primary h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                  id="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Address Information Card */}
          <div className="bg-white rounded-xl p-4 md:p-6 shadow-sm">
            <h2 className="text-[#1A1A1A] text-lg font-bold leading-tight tracking-[-0.015em] pb-4 mb-4 border-b border-gray-100 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary text-xl">
                home
              </span>
              Address Information
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-[#6B7280] text-sm font-medium leading-normal pb-2" htmlFor="streetAddress">
                  Street Address
                </label>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1A1A1A] focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-gray-300 bg-white focus:border-primary h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                  id="streetAddress"
                  placeholder="Enter your street address"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex space-x-4">
                <div className="flex flex-col flex-1">
                  <label className="text-[#6B7280] text-sm font-medium leading-normal pb-2" htmlFor="city">
                    City
                  </label>
                  <input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1A1A1A] focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-gray-300 bg-white focus:border-primary h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                    id="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="flex flex-col flex-1">
                  <label className="text-[#6B7280] text-sm font-medium leading-normal pb-2" htmlFor="state">
                    State
                  </label>
                  <input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1A1A1A] focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-gray-300 bg-white focus:border-primary h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                    id="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex flex-col flex-1">
                  <label className="text-[#6B7280] text-sm font-medium leading-normal pb-2" htmlFor="postalCode">
                    Postal Code
                  </label>
                  <input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1A1A1A] focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-gray-300 bg-white focus:border-primary h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                    id="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="flex flex-col flex-1">
                  <label className="text-[#6B7280] text-sm font-medium leading-normal pb-2" htmlFor="country">
                    Country
                  </label>
                  <select
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-[#1A1A1A] focus:outline-0 focus:ring-2 focus:ring-primary/30 border border-gray-300 bg-white focus:border-primary h-12 placeholder:text-gray-400 p-3 text-base font-normal leading-normal"
                    id="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option>Nigeria</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <p className="text-xs text-[#6B7280] text-center py-8">
            By continuing, you agree to our
            <a className="underline text-primary ml-1 mr-1" href="#">
              Privacy Policy
            </a> and
            <a className="underline text-primary ml-1" href="#">
              Terms of Service
            </a>.
          </p>
        </main>

        {/* Continue Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
          <button
            onClick={handleContinue}
            disabled={!isFormValid()}
            className={`
              w-full h-14 bg-primary text-white font-bold rounded-xl transition-all duration-300
              ${isFormValid() 
                ? 'cursor-pointer hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20' 
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            Continue to Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default IdentityVerification;