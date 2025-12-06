// src/components/Tour/TourStep.jsx
import TourIllustration from './TourIllustration';
import ProgressDots from './ProgressDots';
import NavigationButtons from './NavigationButtons';
import SkipButton from '../common/SkipButton';

const TourStep = ({ step, onNext, onPrev, onSkip, currentStepIndex, totalSteps }) => {
  const isDarkMode = currentStepIndex > 0; // Steps 1-3 are dark mode

  return (
    <div className={`min-h-screen flex flex-col ${isDarkMode ? 'dark bg-background-dark' : 'bg-background-light'}`}>
      {/* Header with Skip Button */}
      {(step.showSkipInHeader !== false && currentStepIndex > 0) && (
        <div className="flex justify-end p-4">
          <SkipButton onSkip={onSkip} isDarkMode={isDarkMode} />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-grow flex flex-col items-center justify-center px-6 py-8">
        {/* Illustration */}
        <TourIllustration illustration={step.illustration} />

        {/* Text Content */}
        <div className="text-center mt-8 max-w-md">
          <h1 className="text-3xl font-bold text-black dark:text-white mb-4 font-display">
            {step.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-300 text-base leading-relaxed font-display">
            {step.description}
          </p>
        </div>
      </div>

      {/* Progress and Navigation */}
      <div className="mt-auto pb-8">
        {/* Progress Dots */}
        <ProgressDots 
          progress={step.progress} 
          showStepCount={step.showStepCount}
          currentStep={step.currentStep}
          totalSteps={step.totalSteps}
          isDarkMode={isDarkMode}
        />

        {/* Navigation Buttons */}
        <NavigationButtons
          buttons={step.buttons}
          onNext={onNext}
          onPrev={onPrev}
          onSkip={onSkip}
          currentStepIndex={currentStepIndex}
          totalSteps={totalSteps}
        />
      </div>
    </div>
  );
};

export default TourStep;