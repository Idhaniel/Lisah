import React from 'react';

const OrderAndLockSuccessPage = () => {
  const orderDetails = {
    assetName: 'S&P 500 Index Fund',
    quantity: '0.5 Shares',
    lockDuration: '5 Years',
    projectedRelease: '26 Jul 2029, 04:30 PM'
  };

  const handleViewAsset = () => {
    console.log('View Locked Asset clicked');
  };

  const handleGoToDashboard = () => {
    console.log('Go to Dashboard clicked');
  };

  return (
    <div className="min-h-screen bg-background-light font-display flex flex-col">
      {/* Top Section with proper spacing */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 pt-6 pb-6">
        <div className="w-full max-w-md mx-auto">
          {/* Success Icon - FIXED: Removed the huge container */}
          <div className="flex flex-col items-center justify-center mb-6">
            <div className="relative flex items-center justify-center">
              {/* Direct icon with proper styling - no unnecessary wrapper */}
              <span className="material-symbols-outlined text-primary text-7xl md:text-8xl bg-primary/10 p-4 rounded-full">
                verified
              </span>
            </div>
          </div>

          {/* Success Message */}
          <div className="text-center mb-8">
            <h1 className="text-text-light text-2xl md:text-3xl font-bold leading-tight mb-3">
              Order Confirmed & Locked!
            </h1>
            <p className="text-text-light/70 text-base md:text-lg font-normal leading-normal">
              Your investment is secure and on its way to grow.
            </p>
          </div>

          {/* Order Details Card - Made more compact */}
          <div className="w-full p-5 bg-field-light rounded-xl border border-border-light shadow-sm mb-6">
            <div className="flex justify-between items-center py-2.5 border-b border-border-light">
              <p className="text-text-light/70 text-sm font-normal">Asset Name</p>
              <p className="text-text-light text-sm font-bold text-right">
                {orderDetails.assetName}
              </p>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-border-light">
              <p className="text-text-light/70 text-sm font-normal">Quantity</p>
              <p className="text-text-light text-sm font-bold text-right">
                {orderDetails.quantity}
              </p>
            </div>
            <div className="flex justify-between items-center py-2.5 border-b border-border-light">
              <p className="text-text-light/70 text-sm font-normal">Lock Duration</p>
              <p className="text-text-light text-sm font-bold text-right">
                {orderDetails.lockDuration}
              </p>
            </div>
            <div className="flex justify-between items-center py-2.5">
              <p className="text-text-light/70 text-sm font-normal">Projected Release</p>
              <p className="text-text-light text-sm font-bold text-right">
                {orderDetails.projectedRelease}
              </p>
            </div>
          </div>

          {/* Additional Information - Made more compact */}
          <div className="p-3 bg-blue-50 rounded-xl border border-blue-200 mb-4">
            <div className="flex items-start gap-2">
              <span className="material-symbols-outlined text-primary text-base mt-0.5">check_circle</span>
              <div>
                <p className="text-blue-800 text-xs font-medium">Next Steps:</p>
                <ul className="text-blue-700 text-xs mt-1 space-y-0.5 list-disc list-inside">
                  <li>Track investment in Portfolio</li>
                  <li>Receive performance updates</li>
                  <li>Lock period cannot be changed</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Actions with proper padding */}
      <div className="p-6 bg-background-light border-t border-border-light">
        <div className="max-w-md mx-auto space-y-4">
          <button
            onClick={handleViewAsset}
            className="w-full h-14 rounded-xl bg-primary text-white text-base font-bold flex items-center justify-center hover:opacity-90 transition-opacity active:scale-[0.98] cursor-pointer shadow-md"
          >
            View Locked Asset
          </button>
          
          <div className="flex justify-center">
            <button
              onClick={handleGoToDashboard}
              className="text-primary text-sm font-medium py-2 hover:underline cursor-pointer"
            >
              Go to Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderAndLockSuccessPage;