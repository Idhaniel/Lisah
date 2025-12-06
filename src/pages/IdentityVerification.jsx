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
    country: 'United States'
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
    // Handle form submission and navigation to next step
    navigate('/upload-kyc-document');
  };

  // Check if all required fields are filled
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
    <div className="min-h-screen bg-background-dark font-display text-white">
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Header */}
        <div className="flex items-center bg-background-dark p-4 pb-2 justify-between sticky top-0 z-10">
          <button 
            onClick={handleBack}
            className="text-white flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-800 rounded-lg transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <h1 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
            Verify Your Identity
          </h1>
          <div className="size-12"></div>
        </div>

        {/* Main Content */}
        <main className="flex-grow px-4">
          <p className="text-gray-300 text-base font-normal leading-normal pb-3 pt-1 text-center">
            To comply with regulations, we need to verify your identity. This information is kept secure.
          </p>

          {/* Progress Bar */}
          <div className="flex flex-col gap-3 py-4">
            <div className="flex gap-6 justify-between items-center">
              <p className="text-gray-400 text-sm font-normal leading-normal">
                Step 1 of 3
              </p>
            </div>
            <div className="rounded-full bg-[#3f3d2e] h-2">
              <div 
                className="h-2 rounded-full bg-primary transition-all duration-300" 
                style={{ width: '33%' }}
              ></div>
            </div>
          </div>

          {/* Personal Information */}
          <div className="mt-6">
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
              Personal Information
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-gray-300 text-base font-medium leading-normal pb-2" htmlFor="fullName">
                  Full Legal Name
                </label>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-gray-600 bg-background-dark focus:border-primary h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                  id="fullName"
                  placeholder="Enter your full legal name"
                  value={formData.fullName}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-300 text-base font-medium leading-normal pb-2" htmlFor="dob">
                  Date of Birth
                </label>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-gray-600 bg-background-dark focus:border-primary h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                  id="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-300 text-base font-medium leading-normal pb-2" htmlFor="email">
                  Email Address
                </label>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-gray-600 bg-background-dark focus:border-primary h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                  id="email"
                  placeholder="Enter your email address"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex flex-col">
                <label className="text-gray-300 text-base font-medium leading-normal pb-2" htmlFor="phone">
                  Phone Number
                </label>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-gray-600 bg-background-dark focus:border-primary h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                  id="phone"
                  placeholder="Enter your phone number"
                  type="tel"
                  value={formData.phone}
                  onChange={handleInputChange}
                />
              </div>
            </div>
          </div>

          {/* Address Information */}
          <div className="mt-8">
            <h2 className="text-white text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
              Address Information
            </h2>
            <div className="space-y-4">
              <div className="flex flex-col">
                <label className="text-gray-300 text-base font-medium leading-normal pb-2" htmlFor="streetAddress">
                  Street Address
                </label>
                <input
                  className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-gray-600 bg-background-dark focus:border-primary h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                  id="streetAddress"
                  placeholder="Enter your street address"
                  value={formData.streetAddress}
                  onChange={handleInputChange}
                />
              </div>
              
              <div className="flex space-x-4">
                <div className="flex flex-col flex-1">
                  <label className="text-gray-300 text-base font-medium leading-normal pb-2" htmlFor="city">
                    City
                  </label>
                  <input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-gray-600 bg-background-dark focus:border-primary h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                    id="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="flex flex-col flex-1">
                  <label className="text-gray-300 text-base font-medium leading-normal pb-2" htmlFor="state">
                    State
                  </label>
                  <input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-gray-600 bg-background-dark focus:border-primary h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                    id="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              
              <div className="flex space-x-4">
                <div className="flex flex-col flex-1">
                  <label className="text-gray-300 text-base font-medium leading-normal pb-2" htmlFor="postalCode">
                    Postal Code
                  </label>
                  <input
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-gray-600 bg-background-dark focus:border-primary h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                    id="postalCode"
                    placeholder="Postal Code"
                    value={formData.postalCode}
                    onChange={handleInputChange}
                  />
                </div>
                
                <div className="flex flex-col flex-1">
                  <label className="text-gray-300 text-base font-medium leading-normal pb-2" htmlFor="country">
                    Country
                  </label>
                  <select
                    className="flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-0 border border-gray-600 bg-background-dark focus:border-primary h-14 placeholder:text-gray-500 p-[15px] text-base font-normal leading-normal"
                    id="country"
                    value={formData.country}
                    onChange={handleInputChange}
                  >
                    <option>United States</option>
                    <option>Canada</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* Privacy Policy */}
          <p className="text-xs text-gray-500 text-center py-8">
            By continuing, you agree to our
            <a className="underline text-primary ml-1" href="#">
              Privacy Policy
            </a> and
            <a className="underline text-primary ml-1" href="#">
              Terms of Service
            </a>.
          </p>
        </main>

        {/* Continue Button */}
        <div className="sticky bottom-0 bg-background-dark p-4 pb-6">
          <button
            onClick={handleContinue}
            disabled={!isFormValid()}
            className={`
              w-full h-14 bg-primary text-background-dark font-bold rounded-lg transition-all duration-300
              ${isFormValid() 
                ? 'cursor-pointer hover:bg-primary/90' 
                : 'opacity-50 cursor-not-allowed'
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