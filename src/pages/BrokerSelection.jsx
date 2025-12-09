import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const BrokerSelection = () => {
  const [selectedBroker, setSelectedBroker] = useState(null);
  const navigate = useNavigate();

  const brokers = [
    {
      id: 1,
      name: 'Bamaboo Finance',
      description: 'Seamlessly invest in a wide range of assets.',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB_0UjuZ5j-j-WjQ1LuYGm9FZ70KaPnjDof3PbyTiYf7SzcsAtzhCSbT94HGC0sEpieKzzIsS1XNv158p_OjjPLGVunhADo5F2VNb8bRDzGK82pKvp-G-_dUhg9jE2k_z4bMAwGAqg-NFpdSnmZmoyu16EgWi0DpDjz25iuysPrC5VMywRwD-1kXuBBNeIlfeQULQ7Kip_bMcfC7FnBaap-za3_edYShRQ4qnYCJ6vm4n3rZo8GmE-T5JJOrA4VXKsIOF3JQLehBwA',
      regulated: true
    },
    {
      id: 2,
      name: 'Trove Finance',
      description: 'Your gateway to global investment opportunities.',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBlznCB7ZjADWf97mKBi8-SVxQp2rj3X9FHlogXaMnb9dIKYCAt7aEsUj9xBSFPNLRGNdQ0ypnuJgXfc7ez229s1ijts-7zu_64WYpdADDLPDXV3qbBsXgyv537nIh41l7Wjy60rZXfi9gttct--ouGJ0NOmtwO4HU1vlaCh39n_oGYlT4AhtqlB-DHVzn51eQw6Li17cn7vW2rzsZE3GXKZ-XXGZ2aTt9Y9sw6NFcfz2-bw4xGKxN2mPplB5-1VuU6cM1v-dJqHNs',
      regulated: true
    },
    {
      id: 3,
      name: 'Chaka',
      description: 'Invest in stocks from around the world.',
      logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTVkHK5urrzEM-S7PyDDQ7xDajYiRwQqC0puIOq7srpy2n882cK8_0wZIidHF50BtSPkHUx6x8WqqKauFeZYeSFoNyke0d7aisMuVv8AdVjXSPYdYw5CaRv5kGsGonkhtmkd3gy4M-CkEOZigEcbxfBqOjIlcgs6qujN4ol_G8aQZlszKyzm_jHPpd3WeTKfGqpVjcVldA_OS8KOd5T_50eVzUsrj5wYmlTz-KyiBZQCRq1Nijl7ACJYMHhJ4TTkKbHBDhzplOXRY',
      regulated: true
    }
  ];

  const handleBrokerSelect = (brokerId) => {
    setSelectedBroker(brokerId);
  };

  const handleConnectBroker = () => {
    if (selectedBroker) {
      navigate('/identity-verification');
    }
  };

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] font-display text-[#1A1A1A]">
      <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
        {/* Header */}
        <div className="flex flex-col gap-2 p-4 pb-2 bg-[#F7F7F7]">
          <div className="flex items-center h-12 justify-between">
            <button 
              onClick={handleBack}
              className="text-[#1A1A1A] flex size-12 shrink-0 items-center justify-center cursor-pointer hover:bg-gray-200 rounded-lg transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
            </button>
          </div>
          <p className="text-[#1A1A1A] tracking-tight text-[28px] font-bold leading-tight">
            Choose Your Financial Partner
          </p>
        </div>

        {/* Subtitle */}
        <p className="text-[#6B7280] text-base font-normal leading-normal pb-3 pt-1 px-4">
          Select a broker to securely integrate with Lisah.
        </p>

        {/* Broker List */}
        <div className="flex-grow px-4 pb-28">
          <div className="space-y-4">
            {brokers.map((broker) => (
              <label key={broker.id} className="group block cursor-pointer">
                <input
                  className="hidden"
                  name="broker"
                  type="radio"
                  checked={selectedBroker === broker.id}
                  onChange={() => handleBrokerSelect(broker.id)}
                />
                <div className={`
                  relative flex items-center gap-4 
                  bg-white p-4 rounded-xl 
                  border-2 border-transparent transition-all duration-300
                  ${selectedBroker === broker.id 
                    ? 'border-primary shadow-lg shadow-primary/20' 
                    : 'border-gray-200'
                  }
                  hover:border-primary/50 hover:shadow-md
                `}>
                  {/* Check indicator */}
                  <div className={`
                    absolute top-3 right-3 h-6 w-6 rounded-full border-2 
                    flex items-center justify-center transition-all duration-300
                    ${selectedBroker === broker.id 
                      ? 'border-primary bg-primary' 
                      : 'border-gray-300 bg-white'
                    }
                  `}>
                    <span className={`
                      material-symbols-outlined text-white transform transition-all duration-300 text-sm
                      ${selectedBroker === broker.id ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}
                    `}>
                      check
                    </span>
                  </div>

                  {/* Broker Logo */}
                  <div 
                    className="bg-center bg-no-repeat aspect-square bg-cover rounded-full size-14 border border-gray-200"
                    style={{ backgroundImage: `url("${broker.logo}")` }}
                    alt={`${broker.name} logo`}
                  />

                  {/* Broker Info */}
                  <div className="flex flex-col justify-center flex-1 min-w-0">
                    <p className="text-[#1A1A1A] text-base font-medium leading-normal line-clamp-1">
                      {broker.name}
                    </p>
                    <div className="flex items-center gap-1.5 mt-1">
                      <div className="w-2 h-2 rounded-full bg-[#4CAF50]"></div>
                      <p className="text-[#4CAF50] text-xs font-normal leading-normal">
                        Regulated & Licensed
                      </p>
                    </div>
                    <p className="text-[#6B7280] text-sm font-normal leading-normal line-clamp-2 mt-1">
                      {broker.description}
                    </p>
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Fixed Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm border-t border-gray-200 shadow-lg">
          <button
            onClick={handleConnectBroker}
            disabled={!selectedBroker}
            className={`
              w-full h-14 font-bold rounded-xl text-lg transition-all duration-300
              ${selectedBroker
                ? 'bg-primary text-white cursor-pointer hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }
            `}
          >
            Connect Selected Broker
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrokerSelection;