import React, { useState } from 'react';

const AddToVault = () => {
  const [amount, setAmount] = useState('');
  const currentLockedAmount = 5000.00;
  const releaseDate = 'December 31, 2025';

  const handleBack = () => {
    console.log('Back button clicked');
  };

  const handleInfo = () => {
    console.log('Info button clicked');
  };

  const handleMaxClick = () => {
    // In a real app, this would be the max available amount
    setAmount('5000.00');
  };

  const handleConfirm = () => {
    console.log('Confirm & Add Funds clicked with amount:', amount);
  };

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and one decimal point
    if (/^\d*\.?\d{0,2}$/.test(value)) {
      setAmount(value);
    }
  };

  const newTotal = currentLockedAmount + (parseFloat(amount) || 0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#F3F4F6] to-[#E5E7EB] font-display text-[#1F2937] flex flex-col">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="flex items-center justify-between p-4 pb-3 max-w-4xl mx-auto">
          <button 
            onClick={handleBack}
            className="w-10 h-10 flex items-center justify-center text-[#1F2937] hover:bg-[#F3F4F6] rounded-full transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">arrow_back</span>
          </button>
          
          <h2 className="text-xl font-bold leading-tight tracking-tight text-center">
            Add to Vault
          </h2>
          
          <button 
            onClick={handleInfo}
            className="w-10 h-10 flex items-center justify-center text-[#1F2937] hover:bg-[#F3F4F6] rounded-full transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-2xl">info</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 max-w-4xl mx-auto w-full">
        {/* Current Position Card */}
        <div className="mb-8">
          <div className="bg-gradient-to-r from-[#4CAF50] to-[#66BB6A] rounded-2xl shadow-lg overflow-hidden">
            <div className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-6">
                {/* Background Image/Icon */}
                <div className="lg:w-1/3">
                  <div className="relative h-48 lg:h-40 rounded-xl overflow-hidden bg-gradient-to-br from-[#4CAF50]/90 to-[#2E7D32]/90">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-white text-center">
                        <span className="material-symbols-outlined text-6xl mb-2">
                          lock
                        </span>
                        <p className="text-lg font-bold">Vault Position</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Position Details */}
                <div className="lg:w-2/3">
                  <p className="text-white text-xl font-bold mb-4">
                    Current Locked Position
                  </p>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-white">
                          monetization_on
                        </span>
                        <p className="text-gray-200 text-base font-normal">Locked Amount:</p>
                      </div>
                      <p className="text-white text-lg font-bold">
                        ${currentLockedAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                      </p>
                    </div>
                    
                    <div className="flex justify-between items-center p-3 bg-white/10 backdrop-blur-sm rounded-lg">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-white">
                          calendar_month
                        </span>
                        <p className="text-gray-200 text-base font-normal">Release Date:</p>
                      </div>
                      <p className="text-white text-lg font-bold">
                        {releaseDate}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Add Funds Section */}
        <div className="space-y-8">
          {/* Amount Input */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div className="flex-1">
                <div className="flex justify-between items-center mb-3">
                  <label className="text-[#1F2937] text-lg font-semibold">
                    Amount to Add
                  </label>
                  <button 
                    onClick={handleMaxClick}
                    className="text-[#F0C419] font-bold text-sm hover:underline cursor-pointer"
                  >
                    Max Available
                  </button>
                </div>
                
                <div className="relative">
                  <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-2xl font-bold text-[#4CAF50]">
                    $
                  </span>
                  <input
                    type="text"
                    value={amount}
                    onChange={handleAmountChange}
                    placeholder="0.00"
                    className="w-full h-16 pl-12 pr-4 text-2xl font-bold text-[#1F2937] bg-[#F9FAFB] border-2 border-[#E5E7EB] rounded-xl focus:outline-none focus:border-[#4CAF50] focus:ring-2 focus:ring-[#4CAF50]/20 transition-all"
                  />
                </div>
                
                {/* Quick Amount Buttons */}
                <div className="flex gap-2 mt-4">
                  {[100, 500, 1000, 5000].map((quickAmount) => (
                    <button
                      key={quickAmount}
                      onClick={() => setAmount(quickAmount.toString())}
                      className="flex-1 py-2 bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#4CAF50] font-medium rounded-lg transition-colors cursor-pointer"
                    >
                      ${quickAmount.toLocaleString()}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Currency/Balance Info */}
              <div className="sm:w-48 bg-gradient-to-r from-[#F0C419]/10 to-[#F0C419]/5 p-4 rounded-xl border border-[#F0C419]/20">
                <p className="text-[#6B7280] text-sm font-medium mb-1">Available Balance</p>
                <p className="text-2xl font-bold text-[#1F2937]">$12,450.75</p>
                <div className="flex items-center gap-1 mt-2">
                  <span className="material-symbols-outlined text-[#F0C419] text-sm">
                    account_balance_wallet
                  </span>
                  <p className="text-[#6B7280] text-xs">USD Wallet</p>
                </div>
              </div>
            </div>
          </div>

          {/* Summary Card */}
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4 text-[#1F2937] flex items-center gap-2">
              <span className="material-symbols-outlined text-[#4CAF50]">
                summarize
              </span>
              Transaction Summary
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center py-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-[#4CAF50]/10 rounded-lg flex items-center justify-center">
                    <span className="material-symbols-outlined text-[#4CAF50] text-sm">
                      add
                    </span>
                  </div>
                  <div>
                    <p className="text-[#6B7280] text-sm">Current Locked</p>
                    <p className="text-[#1F2937] font-medium">
                      ${currentLockedAmount.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
                
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#F0C419]">
                    add
                  </span>
                  <div className="text-right">
                    <p className="text-[#6B7280] text-sm">Amount to Add</p>
                    <p className="text-[#1F2937] font-medium">
                      ${(parseFloat(amount) || 0).toLocaleString('en-US', { minimumFractionDigits: 2 })}
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="border-t border-[#E5E7EB] pt-4">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-[#6B7280] text-base font-medium">New Total Locked Amount:</p>
                  <p className="text-[#4CAF50] text-2xl font-bold">
                    ${newTotal.toLocaleString('en-US', { minimumFractionDigits: 2 })}
                  </p>
                </div>
                
                <div className="flex justify-between items-center py-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#6B7280] text-sm">
                      lock_clock
                    </span>
                    <p className="text-[#6B7280] text-sm">Release Date:</p>
                  </div>
                  <p className="text-[#1F2937] text-base font-semibold">
                    {releaseDate}
                  </p>
                </div>
              </div>
              
              {/* Note */}
              <div className="mt-4 p-3 bg-gradient-to-r from-[#F0C419]/5 to-[#4CAF50]/5 rounded-lg border border-[#F0C419]/30">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-[#F0C419] text-sm mt-0.5">
                    info
                  </span>
                  <p className="text-[#6B7280] text-xs">
                    <span className="font-medium text-[#4CAF50]">Note:</span> New funds will be locked until this date. Your vault's release schedule remains unchanged.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <div className="sticky bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-[#E5E7EB] shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-[#6B7280] text-sm">Transaction Fee</p>
              <p className="text-[#1F2937] font-bold">$0.00 <span className="text-[#4CAF50] text-sm font-normal">(waived)</span></p>
            </div>
            
            <button 
            onClick={handleConfirm}
            disabled={!amount || parseFloat(amount) <= 0}
            className="h-14 bg-gradient-to-r from-[#F0C419] p-5 to-[#F0C419]/90 text-[#1F2937] font-semibold rounded-xl flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-[#F0C419]/20 transition-all disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer shadow-md"
            >
                <span className="material-symbols-outlined text-lg">lock</span>
                <span className="text-base">Confirm & Add Funds</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddToVault;