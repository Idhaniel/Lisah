import React, { useState } from 'react';

const SelectAsset = () => {
  const [selectedAsset, setSelectedAsset] = useState('TSLA');
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const assets = [
    {
      id: 'AAPL',
      symbol: 'AAPL',
      name: 'Apple Inc.',
      price: '$170.12',
      change: '+1.25%',
      direction: 'up',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC0xIuGAgf8ETjYANVkikDR0r1TsDi_S6KrIVTQq84tTDuzmcHUOKhrS7g5HSJzOgrsGg0USASmrHSvY7PXAEYfAepLlAUx1ROoHZnNlAfuHIUTsLPPDvpf_OFWS5UmOzKP1y_S-rq-VcosttFYRvjD1f7mKmz8C6uKQSNPjSpB2clAT-ZiHa_bpjFgh-pXZDb8eOREULOabW0Hdq47gxTRgG4FqfpRdIpRQ2-lRgg2G3F7sfdooTMhpcR3x2V_nknf-1Od-YxBXSc'
    },
    {
      id: 'BTC',
      symbol: 'BTC',
      name: 'Bitcoin',
      price: '$68,543.21',
      change: '-0.58%',
      direction: 'down',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAFf-L8gLHW_b2OaFHT95y51LSbI7PUIPwuHs9b6JO81IPFYB6vnGw1HFwdQ1iCRfFB-BdSeDaqf8Qp0jLxFCAj1FlA3k7ZDy88hDVmc60DILeaER9QdoLgnNKgKyOTiU9Tfk5cwM1qS1yyHZZ5xCQLCklhYZlxDaE6hHxAa3zyBh49JdvBi3kqvL_rKUOK_65DsyKc9VO6n2-nN9ONcs2EC9ZxHtojTuKZkS2RSAqwoNPOtGGtpeFniVu00wOCwMFaYlwp9EsjxQA'
    },
    {
      id: 'TSLA',
      symbol: 'TSLA',
      name: 'Tesla, Inc.',
      price: '$177.48',
      change: '+0.78%',
      direction: 'up',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrPPvymdR7oQtqFlqsDSGgVq1__kTBBYz38OoKB8y4cS_hAhZw1bpkqO68ZPCNJejMmAKnfTN0pICy4uv9USX_UleCFVG3nLcQRwHIbLfzQs52QBTM3J6vyDCW--9kxcVx-5qhTQsFS2yElQvrs4JMP7-lhPYDrXfLugBpFs4UK-sadwQiB1Rlu8nNOItIeepY_ZDjtdz05NXdsJyQwc5SPdMNhSwmi6G-N9c8V2STB64Bv3--BQzQh6UcAeW3GKZkLCSj2cQpexA'
    },
    {
      id: 'ETH',
      symbol: 'ETH',
      name: 'Ethereum',
      price: '$3,560.99',
      change: '-2.11%',
      direction: 'down',
      icon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBTVjJv2ITu-j5PNdPa4bwElv5TyDPYkAzXwaXLWne-pRhmAuIgKKIawrnWIsnIs-29SMGUtdEA3-mjRCIUj2SPKx-HsI2DE-aG5QmD5poqwTbBvBdsSY2ComeIgF3g9ZV8lSb9K_HVHVEAKE4za9QMC0WmlOZu267uGNuHCaWDZpcTaZE86cCVjG-SMW0ytI4XXqhaQJY8JLW3sZoKwg90H2V_DB4mgCG4SlnKahLcmmuO0As13vf6hMruObXMms27NNNsrH888vo'
    }
  ];

  const filters = [
    { id: 'all', label: 'All' },
    { id: 'coinbase', label: 'Coinbase' },
    { id: 'robinhood', label: 'Robinhood' },
    { id: 'stocks', label: 'Stocks' },
    { id: 'crypto', label: 'Crypto' }
  ];

  const handleBack = () => {
    // Handle back navigation
    console.log('Back button clicked');
  };

  const handleNext = () => {
    if (!selectedAsset) {
      alert('Please select an asset to lock');
      return;
    }
    console.log('Selected asset:', selectedAsset);
    // Navigate to next step
  };

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
    // In a real app, you would filter assets based on search query
  };

  return (
    <div className="min-h-screen bg-background-light font-display flex flex-col">
      {/* Sticky Header - Full width with green background */}
      <div className="sticky top-0 z-50 bg-green-500 w-full">
        {/* Content container with max width matching asset cards */}
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="flex items-center p-4 pb-2 justify-between">
            <button 
              onClick={handleBack}
              className="text-white flex size-12 shrink-0 items-center justify-center cursor-pointer hover:opacity-80 transition-opacity"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
            <h2 className="text-white text-xl font-bold leading-tight flex-1 text-center">
              Select an Asset to Lock
            </h2>
            <div className="size-12 shrink-0"></div>
          </div>
          
          {/* Search Bar */}
          <div className="py-3">
            <div className="flex w-full items-stretch rounded-lg h-12 bg-white/20">
              <div className="text-white flex items-center justify-center pl-4">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input
                className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-r-lg text-white focus:outline-0 focus:ring-0 border-none bg-transparent h-full placeholder:text-white/70 px-4 pl-2 text-base font-normal leading-normal"
                placeholder="Search for a stock or crypto"
                value={searchQuery}
                onChange={handleSearch}
              />
            </div>
          </div>

          {/* Filter Tabs */}
          <div className="pb-3">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-white/80 text-sm">filter_alt</span>
              <p className="text-white/80 text-sm font-medium">Filter by:</p>
            </div>
            <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-4 transition-all ${
                    activeFilter === filter.id
                      ? 'bg-yellow-400 text-gray-900 shadow-md'
                      : 'bg-white/20 text-white hover:bg-white/30'
                  }`}
                  onClick={() => setActiveFilter(filter.id)}
                >
                  <span className="text-base font-medium leading-normal">
                    {filter.label}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Asset List - Aligned with header content */}
      <div className="flex-1 overflow-y-auto pb-24 bg-background-light">
        <div className="w-full max-w-4xl mx-auto px-4">
          <div className="flex flex-col gap-3 pt-4">
            {assets.map((asset) => (
              <div
                key={asset.id}
                className={`flex items-center gap-4 p-4 justify-between rounded-xl cursor-pointer transition-all ${
                  selectedAsset === asset.id
                    ? 'bg-yellow-400/20 ring-2 ring-yellow-400'
                    : 'bg-white hover:bg-gray-50'
                }`}
                onClick={() => setSelectedAsset(asset.id)}
              >
                <div className="flex items-center gap-4 flex-grow">
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-12"
                    style={{ backgroundImage: `url("${asset.icon}")` }}
                    alt={`${asset.name} logo`}
                  />
                  <div className="flex flex-col justify-center">
                    <p className="text-gray-900 text-lg font-bold leading-normal">
                      {asset.symbol}
                    </p>
                    <p className="text-gray-600 text-sm font-medium leading-normal">
                      {asset.name}
                    </p>
                  </div>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-gray-900 text-lg font-bold leading-normal">
                    {asset.price}
                  </p>
                  <div className={`flex items-center justify-end gap-1 ${
                    asset.direction === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    <span className="material-symbols-outlined text-base">
                      {asset.direction === 'up' ? 'arrow_upward' : 'arrow_downward'}
                    </span>
                    <p className="text-sm font-medium leading-normal">
                      {asset.change}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Selected Asset Summary - With proper spacing */}
          {selectedAsset && (
            <div className="mt-6 p-4 bg-blue-50 rounded-xl border border-blue-200 mb-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Selected Asset:</p>
                  <p className="text-lg font-bold text-gray-900">
                    {assets.find(a => a.id === selectedAsset)?.symbol} - {assets.find(a => a.id === selectedAsset)?.name}
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 font-medium">Current Price:</p>
                  <p className="text-lg font-bold text-gray-900">
                    {assets.find(a => a.id === selectedAsset)?.price}
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Fixed Bottom Button - Aligned with content */}
      <div className="fixed bottom-0 left-0 right-0 bg-background-light border-t border-gray-200">
        <div className="w-full max-w-4xl mx-auto px-4 py-4">
          <button
            onClick={handleNext}
            className={`w-full h-14 flex items-center justify-center rounded-xl font-bold text-lg leading-normal transition-all ${
              selectedAsset
                ? 'bg-yellow-400 text-gray-900 hover:bg-yellow-500 active:scale-[0.98]'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
            disabled={!selectedAsset}
          >
            {selectedAsset ? 'Lock Selected Asset' : 'Select an Asset to Continue'}
          </button>
          <p className="text-center text-xs text-gray-500 mt-2">
            You'll set lock duration and terms in the next step
          </p>
        </div>
      </div>
    </div>
  );
};

export default SelectAsset;