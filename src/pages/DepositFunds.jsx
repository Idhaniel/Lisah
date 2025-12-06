import React, { useState } from 'react';

const DepositFunds = () => {
  const [depositAmount, setDepositAmount] = useState('');
  const [selectedMethod, setSelectedMethod] = useState('bank-transfer');
  const [showHistory, setShowHistory] = useState(false);

  const depositMethods = [
    { id: 'bank-transfer', label: 'Bank Transfer' },
    { id: 'debit-card', label: 'Debit Card' },
    { id: 'linked-account', label: 'Linked Account Quick Transfer' }
  ];

  const handleBack = () => {
    // Handle back navigation
    console.log('Back button clicked');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!depositAmount || parseFloat(depositAmount) <= 0) {
      alert('Please enter a valid deposit amount');
      return;
    }
    console.log('Depositing:', { amount: depositAmount, method: selectedMethod });
    // Handle deposit logic
  };

  const handleAmountChange = (e) => {
    const value = e.target.value.replace(/[^0-9.]/g, '');
    setDepositAmount(value);
  };

  const formatAmount = (value) => {
    if (!value) return '';
    const num = parseFloat(value);
    if (isNaN(num)) return '';
    return num.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });
  };

  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark font-display flex flex-col">
      {/* Header */}
      <header className="flex items-center p-4 pb-2 justify-between bg-background-light dark:bg-background-dark sticky top-0 z-10">
        <button 
          onClick={handleBack}
          className="flex size-12 shrink-0 items-center cursor-pointer hover:opacity-70 transition-opacity"
        >
          <span className="material-symbols-outlined text-text-light dark:text-text-dark">arrow_back</span>
        </button>
        <h2 className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em] flex-1 text-center">
          Deposit Funds
        </h2>
        <div className="w-12"></div>
      </header>

      <main className="flex-grow flex flex-col items-center px-4">
        {/* Available Funds Card - Centered and limited width for better desktop appearance */}
        <div className="w-full max-w-md mx-auto my-4">
          <div className="flex flex-col items-stretch justify-start rounded-lg shadow-[0_0_4px_rgba(0,0,0,0.1)] bg-background-light dark:bg-background-dark p-6">
            <p className="text-text-light dark:text-text-dark text-lg font-bold leading-tight tracking-[-0.015em]">
              Available Funds
            </p>
            <div className="flex items-end gap-3 justify-between mt-2">
              <p className="text-text-light dark:text-text-dark text-2xl md:text-3xl font-bold">
                $1,250.00
              </p>
            </div>
          </div>
        </div>

        {/* Deposit Amount Input */}
        <div className="w-full max-w-md mx-auto my-4">
          <label className="flex flex-col">
            <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
              Deposit Amount
            </p>
            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 flex items-center text-text-light dark:text-text-dark text-lg font-medium">
                $
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-text-light dark:text-text-dark focus:outline-0 focus:ring-2 focus:ring-primary focus:border-primary h-14 border-gray-300 dark:border-gray-600 bg-background-light dark:bg-background-dark placeholder:text-gray-400 dark:placeholder:text-gray-400 pl-10 pr-4 text-base font-normal leading-normal"
                placeholder="0.00"
                value={depositAmount}
                onChange={handleAmountChange}
                type="text"
                inputMode="decimal"
              />
            </div>
            {depositAmount && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                You are depositing: <span className="font-semibold dark:text-text-dark">${formatAmount(depositAmount)}</span>
              </p>
            )}
          </label>
        </div>

        {/* Quick Amount Buttons */}
        <div className="w-full max-w-md mx-auto my-2">
          <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal pb-2">
            Quick Add:
          </p>
          <div className="flex flex-wrap gap-2">
            {[100, 250, 500, 1000].map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setDepositAmount(amount.toString())}
                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 text-text-light dark:text-text-dark hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer"
              >
                ${amount}
              </button>
            ))}
          </div>
        </div>

        {/* Deposit Methods */}
        <div className="w-full max-w-md mx-auto my-4">
          <p className="text-text-light dark:text-text-dark text-base font-medium leading-normal pb-2">
            Choose a Deposit Method
          </p>
          <div className="flex flex-col gap-3">
            {depositMethods.map((method) => (
              <label
                key={method.id}
                className={`flex items-center gap-4 rounded-lg border border-solid p-4 cursor-pointer transition-all ${
                  selectedMethod === method.id
                    ? 'border-primary bg-primary/10 dark:bg-primary/20'
                    : 'border-gray-300 dark:border-gray-600 hover:border-primary/50 hover:bg-gray-50'
                }`}
              >
                <input
                  className="h-5 w-5 border-2 border-gray-300 dark:border-gray-600 bg-transparent text-transparent checked:border-primary checked:bg-primary focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-0 cursor-pointer"
                  name="deposit-method"
                  type="radio"
                  checked={selectedMethod === method.id}
                  onChange={() => setSelectedMethod(method.id)}
                />
                <div className="flex grow flex-col cursor-pointer">
                  <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                    {method.label}
                  </p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Deposit History */}
        <div className="w-full max-w-md mx-auto my-4">
          <div className="border-t border-t-gray-300 dark:border-t-gray-600 py-2">
            <button
              onClick={() => setShowHistory(!showHistory)}
              className="flex w-full cursor-pointer items-center justify-between gap-6 py-2 hover:opacity-80 transition-opacity"
            >
              <p className="text-text-light dark:text-text-dark text-sm font-medium leading-normal">
                View Deposit History
              </p>
              <div className="text-text-light dark:text-text-dark">
                <span className={`material-symbols-outlined transition-transform ${showHistory ? 'rotate-180' : ''}`}>
                  expand_more
                </span>
              </div>
            </button>
            {showHistory && (
              <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                <p className="text-gray-500 dark:text-gray-400 text-sm font-normal leading-normal">
                  A list of past deposits with dates and amounts will be displayed here.
                </p>
                <div className="mt-3 space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-text-light dark:text-text-dark">Jan 15, 2024</span>
                    <span className="text-green-600 dark:text-primary font-medium">+$500.00</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-text-light dark:text-text-dark">Dec 28, 2023</span>
                    <span className="text-green-600 dark:text-primary font-medium">+$750.00</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Footer with Action Button */}
      <footer className="mt-auto p-4 bg-background-light dark:bg-background-dark">
        <div className="max-w-md mx-auto">
          <button
            onClick={handleSubmit}
            className="w-full bg-primary text-background-dark font-bold py-4 px-4 rounded-lg text-center hover:bg-primary/90 active:scale-[0.98] transition-all cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={!depositAmount || parseFloat(depositAmount) <= 0}
          >
            Proceed to Deposit
          </button>
          <p className="text-center text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center justify-center gap-1">
            <span className="material-symbols-outlined text-sm">lock</span>
            Secure Transaction • Encrypted with SSL
          </p>
        </div>
      </footer>
    </div>
  );
};

export default DepositFunds;