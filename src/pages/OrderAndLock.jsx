import React, { useState } from 'react';

const OrderAndLock = () => {
  const [orderType, setOrderType] = useState('market');
  const [quantity, setQuantity] = useState('10');
  const [limitPrice, setLimitPrice] = useState('');
  const [lockDuration, setLockDuration] = useState('1y');
  const [manualReleaseDate, setManualReleaseDate] = useState('');
  const [autoLiquidation, setAutoLiquidation] = useState(true);
  
  // Calculate estimated cost based on quantity (hardcoded price for AAPL)
  const sharePrice = 173.42;
  const estimatedCost = (parseFloat(quantity) || 0) * sharePrice;
  
  // Calculate projected release date
  const getProjectedReleaseDate = () => {
    if (manualReleaseDate) {
      const date = new Date(manualReleaseDate);
      return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
      });
    }
    
    const today = new Date();
    switch(lockDuration) {
      case '6m':
        today.setMonth(today.getMonth() + 6);
        break;
      case '1y':
        today.setFullYear(today.getFullYear() + 1);
        break;
      case '4y':
        today.setFullYear(today.getFullYear() + 4);
        break;
      default:
        today.setFullYear(today.getFullYear() + 1);
    }
    
    return today.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const handleBack = () => {
    // Handle back navigation
    console.log('Back button clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log({
      orderType,
      quantity,
      limitPrice: orderType === 'limit' ? limitPrice : null,
      lockDuration: manualReleaseDate ? 'custom' : lockDuration,
      manualReleaseDate,
      autoLiquidation,
      estimatedCost
    });
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
          Order & Lock AAPL
        </h2>
        <div className="w-12"></div>
      </header>

      {/* Main Content - Use flex-grow but with proper constraints */}
      <main className="flex-1 min-h-0">
        <div className="h-full overflow-y-auto">
          <div className="max-w-md mx-auto px-4 py-4">
            <form onSubmit={handleSubmit} className="pb-6">
              {/* Order Type & Quantity */}
              <div className="py-3">
                <h3 className="text-text-light text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
                  Order Type & Quantity
                </h3>
                <div className="flex w-full items-center justify-center rounded-lg bg-field-light border border-border-light">
                  {['market', 'limit'].map((type) => (
                    <label 
                      key={type}
                      className={`flex cursor-pointer h-10 flex-1 items-center justify-center overflow-hidden transition-all ${
                        orderType === type 
                          ? 'bg-primary text-white' 
                          : 'text-text-light/70 hover:bg-gray-50'
                      } ${type === 'market' ? 'rounded-l-lg' : 'rounded-r-lg'}`}
                    >
                      <input
                        className="sr-only"
                        name="order_type"
                        type="radio"
                        value={type}
                        checked={orderType === type}
                        onChange={() => setOrderType(type)}
                      />
                      <span className="truncate text-sm font-medium leading-normal">
                        {type === 'market' ? 'Market Order' : 'Limit Order'}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Quantity Input */}
              <div className="flex flex-col gap-4 py-3">
                <label className="flex flex-col">
                  <div className="flex justify-between items-center pb-2">
                    <p className="text-text-light text-base font-medium leading-normal">
                      Quantity (Shares)
                    </p>
                    <p className="text-text-light/70 text-sm font-normal">
                      Available: $10,000.00
                    </p>
                  </div>
                  <input
                    className="form-input w-full resize-none overflow-hidden rounded-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-primary focus:border-primary border border-border-light bg-field-light h-14 placeholder:text-text-light/50 p-[15px] text-base font-normal leading-normal"
                    placeholder="0.00"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value.replace(/[^0-9.]/g, ''))}
                    type="text"
                    inputMode="decimal"
                  />
                </label>

                {/* Limit Price Input - Conditionally shown */}
                {orderType === 'limit' && (
                  <label className="flex flex-col">
                    <p className="text-text-light text-base font-medium leading-normal pb-2">
                      Limit Price
                    </p>
                    <div className="relative">
                      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-text-light">$</span>
                      <input
                        className="form-input w-full pl-7 resize-none overflow-hidden rounded-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-primary focus:border-primary border border-border-light bg-field-light h-14 placeholder:text-text-light/50 p-[15px] text-base font-normal leading-normal"
                        placeholder="0.00"
                        value={limitPrice}
                        onChange={(e) => setLimitPrice(e.target.value.replace(/[^0-9.]/g, ''))}
                        type="text"
                        inputMode="decimal"
                      />
                    </div>
                  </label>
                )}

                <div className="flex justify-between items-center pt-2">
                  <p className="text-text-light/70 text-base font-medium">
                    Estimated Cost:
                  </p>
                  <p className="text-text-light text-base font-bold">
                    ${estimatedCost.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Lock-Up Configuration */}
              <div className="py-3 mt-4">
                <h3 className="text-text-light text-lg font-bold leading-tight tracking-[-0.015em] pb-2">
                  Lock-Up Configuration
                </h3>
                
                <p className="text-text-light text-base font-medium leading-normal pb-2">
                  Commitment Period
                </p>
                
                <div className="flex items-center justify-between gap-2 mb-4">
                  {[
                    { value: '6m', label: '6 MONTHS' },
                    { value: '1y', label: '1 YEAR' },
                    { value: '4y', label: '4 YEARS' }
                  ].map((option) => (
                    <label key={option.value} className="flex-1 cursor-pointer">
                      <input
                        className="sr-only peer"
                        name="duration"
                        type="radio"
                        value={option.value}
                        checked={!manualReleaseDate && lockDuration === option.value}
                        onChange={() => {
                          setLockDuration(option.value);
                          setManualReleaseDate('');
                        }}
                      />
                      <div className={`text-center rounded-lg p-3 border transition-all ${
                        !manualReleaseDate && lockDuration === option.value
                          ? 'bg-primary text-white border-primary'
                          : 'border-border-light text-text-light/70 hover:border-primary/50 hover:bg-gray-50'
                      }`}>
                        {option.label}
                      </div>
                    </label>
                  ))}
                </div>

                <div className="flex items-center my-4">
                  <div className="flex-grow border-t border-border-light"></div>
                  <span className="flex-shrink mx-2 text-xs text-text-light/70">OR</span>
                  <div className="flex-grow border-t border-border-light"></div>
                </div>

                {/* Manual Release Date */}
                <label className="flex flex-col">
                  <p className="text-text-light text-base font-medium leading-normal pb-2">
                    Manual Release Date & Time
                  </p>
                  <div className="relative">
                    <input
                      className="form-input w-full resize-none overflow-hidden rounded-lg text-text-light focus:outline-0 focus:ring-2 focus:ring-primary focus:border-primary border border-border-light bg-field-light h-14 placeholder:text-text-light/50 p-[15px] text-base font-normal leading-normal"
                      type="datetime-local"
                      value={manualReleaseDate}
                      onChange={(e) => setManualReleaseDate(e.target.value)}
                      min={new Date().toISOString().slice(0, 16)}
                    />
                    <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-text-light/50 pointer-events-none">
                      calendar_today
                    </span>
                  </div>
                </label>

                <div className="flex justify-between items-center pt-4">
                  <p className="text-text-light/70 text-base font-medium">
                    Projected Release:
                  </p>
                  <p className="text-green-600 text-base font-bold">
                    {getProjectedReleaseDate()}
                  </p>
                </div>

                {/* Auto-Liquidation Toggle */}
                <div className="flex justify-between items-center pt-4">
                  <div className="flex items-center gap-2">
                    <p className="text-text-light text-base font-medium">
                      Auto-Liquidation
                    </p>
                    <div className="relative group">
                      <span className="material-symbols-outlined text-text-light/50 cursor-pointer text-sm">
                        info
                      </span>
                      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-64 bg-gray-900 text-white text-xs rounded-lg p-3 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg z-20">
                        Your assets will be automatically sold at market price at the end of the commitment period.
                      </div>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      className="sr-only peer"
                      type="checkbox"
                      checked={autoLiquidation}
                      onChange={() => setAutoLiquidation(!autoLiquidation)}
                    />
                    <div className={`w-11 h-6 rounded-full peer transition-colors ${
                      autoLiquidation 
                        ? 'bg-primary' 
                        : 'bg-gray-400'
                    }`}>
                      <div className={`absolute top-[2px] left-[2px] bg-white border rounded-full h-5 w-5 transition-transform shadow-sm ${
                        autoLiquidation 
                          ? 'transform translate-x-5 border-gray-200' 
                          : 'border-gray-300'
                      }`}></div>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button - Fixed at bottom */}
              <div className="py-6 mt-4">
                <button
                  type="submit"
                  className="w-full h-12 rounded-lg bg-primary text-white text-base font-bold flex items-center justify-center hover:opacity-90 transition-opacity active:scale-[0.98] cursor-pointer disabled:bg-primary/50 disabled:cursor-not-allowed"
                >
                  CONFIRM ORDER & LOCK
                </button>
                <p className="text-xs text-text-light/50 text-center mt-3">
                  By confirming, you acknowledge the risks associated with market investments and the binding nature of the time-locked commitment. This action is irreversible.
                </p>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderAndLock;