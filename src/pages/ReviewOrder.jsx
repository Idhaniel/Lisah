import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ReviewOrder = () => {
  const [acknowledged, setAcknowledged] = useState(false);
    const navigate = useNavigate();
  const orderDetails = {
    assetName: 'TSLA',
    quantity: '10',
    orderType: 'Market',
    limitPrice: '$180.00',
    totalEstimatedCost: '$1,800.00'
  };

  const lockupDetails = {
    lockDuration: '3 Years',
    projectedRelease: 'July 26, 2027, 4:00 PM EST',
    autoLiquidation: 'ON'
  };

  const handleBack = () => {
    console.log('Back button clicked');
    navigate('/order-and-lock')
  };

  const handleSubmit = () => {
    console.log('Order confirmed');
    navigate('/order-lock-success')
  };

  const handleCheckboxChange = () => {
    setAcknowledged(!acknowledged);
  };

  return (
    <div className="min-h-screen bg-background-light font-display text-text-light">
      {/* Header */}
      <header className="flex items-center p-4 pb-2 justify-between bg-background-light">
        <button 
          onClick={handleBack}
          className="flex size-12 shrink-0 items-center justify-center cursor-pointer hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined text-text-light">arrow_back</span>
        </button>
        <h2 className="text-text-light text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Review Order
        </h2>
        <div className="w-12"></div>
      </header>

      {/* Main Content */}
      <main className="flex-1 min-h-0">
        <div className="h-full overflow-y-auto">
          <div className="max-w-md mx-auto px-4 py-4">
            <div className="space-y-6">
              {/* Order Details */}
              <div>
                <h3 className="text-text-light/70 text-sm font-medium mb-2 px-4">
                  ORDER DETAILS
                </h3>
                <div className="bg-field-light rounded-xl border border-border-light">
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between gap-x-6 py-2">
                      <p className="text-text-light/70 text-sm font-normal leading-normal">Asset Name</p>
                      <p className="text-text-light text-sm font-normal leading-normal text-right">{orderDetails.assetName}</p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-2">
                      <p className="text-text-light/70 text-sm font-normal leading-normal">Quantity</p>
                      <p className="text-text-light text-sm font-normal leading-normal text-right">{orderDetails.quantity}</p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-2">
                      <p className="text-text-light/70 text-sm font-normal leading-normal">Order Type</p>
                      <p className="text-text-light text-sm font-normal leading-normal text-right">{orderDetails.orderType}</p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-2">
                      <p className="text-text-light/70 text-sm font-normal leading-normal">Limit Price</p>
                      <p className="text-text-light text-sm font-normal leading-normal text-right">{orderDetails.limitPrice}</p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-2">
                      <p className="text-text-light/70 text-sm font-normal leading-normal">Total Estimated Cost</p>
                      <p className="text-text-light text-sm font-bold leading-normal text-right">{orderDetails.totalEstimatedCost}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lock-Up Details */}
              <div>
                <h3 className="text-text-light/70 text-sm font-medium mb-2 px-4">
                  LOCK-UP DETAILS
                </h3>
                <div className="bg-field-light rounded-xl border border-border-light">
                  <div className="p-4 space-y-2">
                    <div className="flex justify-between gap-x-6 py-2">
                      <p className="text-text-light/70 text-sm font-normal leading-normal">Selected Lock Duration</p>
                      <p className="text-text-light text-sm font-normal leading-normal text-right">{lockupDetails.lockDuration}</p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-2">
                      <p className="text-text-light/70 text-sm font-normal leading-normal">Projected Release Date</p>
                      <p className="text-text-light text-sm font-normal leading-normal text-right">{lockupDetails.projectedRelease}</p>
                    </div>
                    <div className="flex justify-between gap-x-6 py-2">
                      <p className="text-text-light/70 text-sm font-normal leading-normal">Auto-Liquidation</p>
                      <p className="text-text-light text-sm font-normal leading-normal text-right">{lockupDetails.autoLiquidation}</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Important Notes */}
              <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                <div className="flex items-start gap-2">
                  <span className="material-symbols-outlined text-blue-500 text-lg mt-0.5">info</span>
                  <div>
                    <p className="text-blue-800 text-sm font-medium">Important Notes:</p>
                    <ul className="text-blue-700 text-xs mt-1 space-y-1 list-disc list-inside">
                      <li>This order is time-locked and cannot be reversed</li>
                      <li>Early withdrawal penalties apply</li>
                      <li>Market fluctuations may affect final value</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer with Checkbox and Button */}
      {/* Footer with Checkbox and Button */}
      <div className="sticky bottom-0 bg-background-light border-t border-border-light">
        <div className="max-w-md mx-auto px-4 py-4">
        {/* Acknowledgment Checkbox */}
            <div className="mb-4">
            <label className="flex items-start cursor-pointer">
                <div className="relative mr-3 mt-0.5 shrink-0">
                    <input
                    type="checkbox"
                    checked={acknowledged}
                    onChange={handleCheckboxChange}
                    className="sr-only peer"
                    id="acknowledgement-checkbox"
                    />
                    <div className={`w-5 h-5 border-2 rounded-[4px] flex items-center justify-center transition-colors ${
                    acknowledged 
                    ? 'bg-primary border-primary' 
                    : 'border-text-light/50 bg-white'
                    }`}>
                        {acknowledged && (
                        <span className="text-white text-sm font-bold">✓</span>
                        )}
                    </div>
                </div>
                <span className="text-sm text-text-light/70">
                    By confirming, you acknowledge the risks associated with market investments and the binding nature of the time-locked investment. This action is irreversible.{' '}
                    <a className="text-primary font-medium hover:underline" href="#">
                        Terms & Conditions
                    </a>
                </span>
            </label>
        </div>

        {/* Confirm Button */}
        <button
        onClick={handleSubmit}
        disabled={!acknowledged}
        className={`w-full h-12 rounded-lg text-base font-bold flex items-center justify-center transition-all ${
            acknowledged
            ? 'bg-primary text-white hover:opacity-90 active:scale-[0.98] cursor-pointer'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
        >
        Confirm & Lock
        </button>
    </div>
</div>
    </div>
  );
};

export default ReviewOrder;