import React from 'react';
import { useNavigate } from 'react-router-dom';

const LockedAssetDetails = () => {
    const navigate = useNavigate();
  const assetDetails = {
    name: 'Apple Inc. (AAPL)',
    currentValue: '$80,000',
    totalReturn: '+700%',
    remainingDays: '913 Days',
    totalCommitted: '$10,000.00',
    sharesPurchased: '57.14',
    commitmentStart: 'Jan 1, 2021',
    unlockDate: 'Jan 1, 2025',
  };

  const handleBack = () => {
    console.log('Back button clicked');
    navigate('/portfolio')
  };

  const handleMenu = () => {
    console.log('Menu button clicked');
  };

  const handleAddFunds = () => {
    console.log('Add Funds clicked');
    navigate('/top-up')
  };

  const handleShare = () => {
    console.log('Share clicked');
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] font-display text-[#1A1A1A] flex flex-col">
      {/* Header - Sticky */}
      <div className="flex items-center bg-[#F7F7F7] p-4 pb-2 justify-between sticky top-0 z-10">
        <div className="text-[#1A1A1A] flex size-12 shrink-0 items-center cursor-pointer" onClick={handleBack}>
          <span className="material-symbols-outlined text-3xl">arrow_back</span>
        </div>
        
        <h2 className="text-[#1A1A1A] text-xl font-bold leading-tight tracking-tight flex-1 text-center">
          {assetDetails.name}
        </h2>
        
        <div className="flex w-12 items-center justify-end">
          <button 
            className="flex max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 bg-transparent text-[#1A1A1A] gap-2 text-base font-bold leading-normal tracking-[0.015em] min-w-0 p-0"
            onClick={handleMenu}
          >
            <span className="material-symbols-outlined text-3xl">more_vert</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 px-6 pt-4">
        <div className="max-w-6xl mx-auto">
          {/* Responsive Layout Container */}
          <div className="flex flex-col lg:flex-row lg:gap-12">
            {/* Left Column - Performance & Graph */}
            <div className="lg:w-1/2">
              {/* Performance Metrics */}
              <div className="flex justify-between items-baseline mb-6">
                <div>
                  <p className="text-[#6B7280] text-base font-normal">Current Market Value</p>
                  <h1 className="text-[#1A1A1A] tracking-tighter text-5xl font-bold leading-tight text-left pb-1">
                    {assetDetails.currentValue}
                  </h1>
                </div>
                <div className="text-right">
                  <p className="text-[#F0C419] text-xl font-bold">+700%</p>
                  <p className="text-[#6B7280] text-base font-normal">Total Return</p>
                </div>
              </div>

              {/* Graph Section */}
              <div className="pt-2 pb-2">
                <div className="relative">
                  <svg className="w-full" viewBox="0 0 350 200" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="growthGradient" x1="0%" x2="0%" y1="0%" y2="100%">
                        <stop offset="0%" style={{stopColor: '#66BB6A', stopOpacity: 0.5}} />
                        <stop offset="100%" style={{stopColor: '#F7F7F7', stopOpacity: 0.1}} />
                      </linearGradient>
                    </defs>
                    <path 
                      d="M 0 180 C 87.5 160, 175 80, 262.5 50 S 350 20, 350 20 V 200 H 0 Z" 
                      fill="url(#growthGradient)"
                    />
                    <path 
                      d="M 0 180 C 87.5 160, 175 80, 262.5 50 S 350 20, 350 20" 
                      fill="none" 
                      stroke="#4CAF50" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="3"
                    />
                  </svg>
                  <div className="absolute bottom-[-20px] left-0 right-0 flex justify-between px-2 text-[#6B7280] text-sm">
                    <span>Year 1</span>
                    <span>Year 2</span>
                    <span>Year 3</span>
                    <span>Today</span>
                  </div>
                </div>
              </div>

              {/* Remaining Time Card */}
              <div className="pt-8">
                <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                  <p className="text-[#6B7280] text-sm font-medium leading-normal text-center pb-2">
                    Remaining Time Until Unlock
                  </p>
                  <p className="text-[#4CAF50] text-3xl font-bold leading-tight text-center">
                    {assetDetails.remainingDays}
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Investment Details Card */}
            <div className="lg:w-1/2 lg:mt-0 mt-6">
              <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 h-full">
                <h3 className="text-[#1A1A1A] text-lg font-bold mb-6 pb-3 border-b border-gray-100">
                  Investment Details
                </h3>
                
                <div className="space-y-5">
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#4CAF50] text-lg">
                          monetization_on
                        </span>
                      </div>
                      <div>
                        <p className="text-[#6B7280] text-sm">Total Committed Value</p>
                        <p className="text-[#1A1A1A] text-base font-medium">
                          {assetDetails.totalCommitted}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#F0C419]/10 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#F0C419] text-lg">
                          pie_chart
                        </span>
                      </div>
                      <div>
                        <p className="text-[#6B7280] text-sm">Number of Shares Purchased</p>
                        <p className="text-[#1A1A1A] text-base font-medium">
                          {assetDetails.sharesPurchased}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3 border-b border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#4CAF50] text-lg">
                          calendar_month
                        </span>
                      </div>
                      <div>
                        <p className="text-[#6B7280] text-sm">Commitment Start</p>
                        <p className="text-[#1A1A1A] text-base font-medium">
                          {assetDetails.commitmentStart}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-[#F0C419]/10 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-[#F0C419] text-lg">
                          lock_open
                        </span>
                      </div>
                      <div>
                        <p className="text-[#6B7280] text-sm">Unlock Date</p>
                        <p className="text-[#1A1A1A] text-base font-medium">
                          {assetDetails.unlockDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Small stats at bottom of card */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex justify-between items-center">
                    <div className="text-center">
                      <p className="text-[#6B7280] text-xs">Annual Return</p>
                      <p className="text-[#4CAF50] text-lg font-bold">28.5%</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#6B7280] text-xs">Current Price</p>
                      <p className="text-[#1A1A1A] text-lg font-bold">$1,400</p>
                    </div>
                    <div className="text-center">
                      <p className="text-[#6B7280] text-xs">Gain/Loss</p>
                      <p className="text-[#4CAF50] text-lg font-bold">+$70,000</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-[#F7F7F7] border-t border-gray-200 mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center gap-4">
            <button 
              className="flex-grow flex items-center justify-center h-14 bg-[#4CAF50] rounded-lg text-white cursor-pointer hover:bg-[#3d8b40] transition-colors"
              onClick={handleAddFunds}
            >
              <span className="font-bold text-lg">ADD FUNDS</span>
            </button>
            <button 
              className="flex-shrink-0 flex items-center justify-center size-14 bg-[#F0C419] rounded-lg text-[#1A1A1A] cursor-pointer hover:bg-[#d4ab17] transition-colors"
              onClick={handleShare}
            >
              <span className="material-symbols-outlined">share</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LockedAssetDetails;