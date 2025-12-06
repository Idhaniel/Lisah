// src/components/Tour/ProgressDots.jsx
const ProgressDots = ({ progress, showStepCount, currentStep, totalSteps, isDarkMode }) => {
  if (showStepCount) {
    return (
      <div className="flex items-center justify-between p-6">
        <div className="flex items-center gap-2">
          <span className={`text-sm font-medium ${isDarkMode ? 'text-white/70' : 'text-gray-600'}`}>
            {currentStep} of {totalSteps}
          </span>
          <div className="flex gap-1.5">
            {Array.from({ length: totalSteps }).map((_, index) => (
              <div
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index < currentStep 
                    ? 'bg-primary' 
                    : isDarkMode ? 'bg-white/30' : 'bg-gray-300'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex justify-center py-5">
      <div className="flex gap-3">
        {progress.map((isActive, index) => (
          <div
            key={index}
            className={`h-2 w-2 rounded-full ${
              isActive 
                ? 'bg-primary' 
                : isDarkMode ? 'bg-white/20' : 'bg-gray-300'
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressDots;