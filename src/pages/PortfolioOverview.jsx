import React, { useState } from 'react';
import '../portfolio.css';
import { useNavigate } from 'react-router-dom';

const PortfolioOverview = () => {
  const [timeFrame, setTimeFrame] = useState('24HR');
  const [activeNav, setActiveNav] = useState('portfolio');
  const navigate = useNavigate();

  const handleAddFunds = () => {
      navigate('/deposit-funds')
  }

  const handleSelectAsset = () => {
    navigate('/select-asset')
  }

  const topAssets = [
    {
      name: 'Apple (AAPL)',
      value: '$50,123.45',
      returnAmount: '+$5,123.45',
      returnPercentage: '+11.3%',
      chartPath: 'M0 29.0667C3.82353 29.0667 3.82353 5.6 7.64706 5.6C11.4706 5.6 11.4706 10.9333 15.2941 10.9333C19.1176 10.9333 19.1176 24.8 22.9412 24.8C26.7647 24.8 26.7647 8.8 30.5882 8.8C34.4118 8.8 34.4118 26.9333 38.2353 26.9333C42.0588 26.9333 42.0588 16.2667 45.8824 16.2667C49.7059 16.2667 49.7059 12 53.5294 12C57.3529 12 57.3529 32.2667 61.1765 32.2667C65 32.2667 65 39.7333 68.8235 39.7333C72.6471 39.7333 72.6471 0.266667 76.4706 0.266667C80.2941 0.266667 80.2941 21.6 84.1176 21.6C87.9412 21.6 87.9412 34.4 91.7647 34.4C95.5882 34.4 95.5882 6.66667 100 6.66667'
    },
    {
      name: 'S&P 500 ETF (VOO)',
      value: '$45,876.12',
      returnAmount: '+$4,876.12',
      returnPercentage: '+11.8%',
      chartPath: 'M0 13.3333C3.84615 13.3333 3.84615 35 7.69231 35C11.5385 35 11.5385 20 15.3846 20C19.2308 20 19.2308 5 23.0769 5C26.9231 5 26.9231 28.3333 30.7692 28.3333C34.6154 28.3333 34.6154 10 38.4615 10C42.3077 10 42.3077 40 46.1538 40C50 40 50 16.6667 53.8462 16.6667C57.6923 16.6667 57.6923 25 61.5385 25C65.3846 25 65.3846 1.66667 69.2308 1.66667C73.0769 1.66667 73.0769 31.6667 76.9231 31.6667C80.7692 31.6667 80.7692 11.6667 84.6154 11.6667C88.4615 11.6667 88.4615 21.6667 92.3077 21.6667C96.1538 21.6667 96.1538 8.33333 100 8.33333'
    },
    {
      name: 'Tesla (TSLA)',
      value: '$54,433.32',
      returnAmount: '+$6,433.32',
      returnPercentage: '+13.3%',
      chartPath: 'M0 31.6667C3.84615 31.6667 3.84615 5 7.69231 5C11.5385 5 11.5385 15 15.3846 15C19.2308 15 19.2308 38.3333 23.0769 38.3333C26.9231 38.3333 26.9231 8.33333 30.7692 8.33333C34.6154 8.33333 34.6154 23.3333 38.4615 23.3333C42.3077 23.3333 42.3077 1.66667 46.1538 1.66667C50 1.66667 50 35 53.8462 35C57.6923 35 57.6923 11.6667 61.5385 11.6667C65.3846 11.6667 65.3846 40 69.2308 40C73.0769 40 73.0769 20 76.9231 20C80.7692 20 80.7692 30 84.6154 30C88.4615 30 88.4615 10 92.3077 10C96.1538 10 96.1538 25 100 25'
    }
  ];

  const navItems = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'portfolio', label: 'Portfolio', icon: 'pie_chart' },
    { id: 'discover', label: 'Discover', icon: 'search' },
    { id: 'profile', label: 'Profile', icon: 'person' }
  ];

  return (
    <div className="portfolio-container min-h-screen bg-white-off-white text-primary flex flex-col">
      {/* Header */}
      <header className="sticky-header flex items-center p-4 pb-2 justify-between bg-white/80 backdrop-blur-sm sticky top-0">
        <button className="flex size-10 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-200 rounded-full transition-colors">
          <span className="material-symbols-outlined text-primary text-2xl">menu</span>
        </button>
        <h1 className="text-primary text-lg font-bold flex-1 text-center">Portfolio Overview</h1>
        <div className="flex size-10 shrink-0 items-center justify-center"></div>
      </header>

      {/* Main Content */}
      <main className="flex-grow p-4 space-y-6 pb-24">
        {/* Total Portfolio Value Card */}
        <div className="bg-card rounded-xl p-6 text-center space-y-4 shadow-sm">
          <div>
            <p className="text-secondary text-base font-normal">Total Portfolio Value</p>
            <p className="text-primary text-3xl md:text-4xl font-bold mt-1">$150,432.89</p>
            <div className="flex items-center justify-center gap-2 mt-2">
              <p className="text-link text-lg md:text-xl font-bold">+1.25%</p>
              <p className="text-secondary text-sm md:text-base font-normal">Last 24 hours</p>
            </div>
          </div>
          <div className="mt-2 flex justify-center">
            <div className="flex rounded-full bg-gray-200 p-1">
              <button
                className={`px-4 md:px-6 py-2 text-sm font-semibold rounded-full transition-all ${timeFrame === '24HR' ? 'bg-lemon-yellow text-dark-gray-near-black' : 'text-secondary hover:text-primary'}`}
                onClick={() => setTimeFrame('24HR')}
              >
                24HR
              </button>
              <button
                className={`px-4 md:px-6 py-2 text-sm font-semibold rounded-full transition-all ${timeFrame === 'YTD' ? 'bg-lemon-yellow text-dark-gray-near-black' : 'text-secondary hover:text-primary'}`}
                onClick={() => setTimeFrame('YTD')}
              >
                YTD
              </button>
            </div>
          </div>
        </div>

        {/* Locked Value & Cash Balance Card */}
        <div className="bg-card rounded-xl p-4 space-y-4 shadow-sm">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-0">
            <div>
              <p className="text-secondary text-sm">Total Locked Value</p>
              <p className="text-primary text-2xl md:text-2xl font-bold">$145,432.89</p>
            </div>
            <div>
              <p className="text-secondary text-sm text-left md:text-right">Cash Balance</p>
              <p className="text-primary text-2xl md:text-2xl font-bold text-left md:text-right">$5,000.00</p>
            </div>
          </div>
          <div className="flex gap-3 md:gap-4">
            <button className="flex-1 text-center py-3 bg-gray-100 hover:bg-gray-200 text-primary font-bold rounded-lg transition-colors cursor-pointer"
             onClick={handleSelectAsset}>
              Buy Assets
            </button>
            <button 
              className="flex-1 text-center py-3 bg-lemon-yellow hover:opacity-90 text-dark-gray-near-black font-bold rounded-lg transition-colors cursor-pointer"
              onClick={handleAddFunds}>
              Add Funds
            </button>
          </div>
        </div>

        {/* Top Assets Section */}
        <div className="space-y-4">
          <h2 className="text-primary text-xl font-bold px-2">Top Assets</h2>
          {topAssets.map((asset, index) => (
            <div key={index} className="bg-card rounded-xl p-4 shadow-sm">
              <div className="grid grid-cols-3 items-center gap-4">
                <div className="col-span-2">
                  <p className="text-primary text-lg font-bold truncate">{asset.name}</p>
                  <p className="text-primary text-2xl font-bold mt-1">{asset.value}</p>
                  <div className="flex items-center gap-2 mt-1 flex-wrap">
                    <p className="text-secondary text-sm font-normal">Total Return:</p>
                    <p className="text-link text-sm font-medium">
                      {asset.returnAmount} ({asset.returnPercentage})
                    </p>
                  </div>
                </div>
                <div className="col-span-1 h-16 chart-container">
                  <svg
                    className="w-full h-full"
                    fill="none"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 40"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d={asset.chartPath}
                      stroke="var(--green)"
                      strokeLinecap="round"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Bottom Navigation */}
      <nav className="sticky-footer flex justify-around border-t border-structural bg-white/80 backdrop-blur-sm px-4 pb-4 pt-2 mt-auto sticky bottom-0">
        {navItems.map((item) => (
          <button
            key={item.id}
            className={`flex flex-1 flex-col items-center justify-end gap-1 cursor-pointer ${
              activeNav === item.id ? 'text-lemon-yellow' : 'text-secondary hover:text-primary'
            }`}
            onClick={() => setActiveNav(item.id)}
          >
            <span
              className="material-symbols-outlined flex h-8 items-center justify-center text-2xl"
              style={{ fontVariationSettings: activeNav === item.id ? "'FILL' 1" : "'FILL' 0" }}
            >
              {item.icon}
            </span>
            <p className={`text-xs font-medium ${activeNav === item.id ? 'text-dark-gray-near-black' : ''}`}>
              {item.label}
            </p>
          </button>
        ))}
      </nav>
    </div>
  );
};

export default PortfolioOverview;