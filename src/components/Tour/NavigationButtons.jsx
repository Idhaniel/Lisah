// src/components/Tour/NavigationButtons.jsx
import Button from '../common/Button';

const NavigationButtons = ({ buttons, onNext, onPrev, currentStepIndex, totalSteps, onSkip}) => {

  if (!buttons) {
    return (
      <div className="flex justify-center w-full px-4 py-3">
        <Button onClick={onNext} variant="primary" className="w-full max-w-sm">
          {currentStepIndex === totalSteps - 1 ? 'Get Started' : 'Next'}
        </Button>
      </div>
    );
  }

  return (
    <div className="flex justify-stretch w-full">
      <div className="flex flex-1 gap-3 flex-wrap px-4 py-3 justify-between">
        {/* Left Button (Skip/Previous) */}
        {buttons.left && (
          <Button 
            onClick={buttons.left.text === 'Skip' ? onSkip : onPrev}
            variant={buttons.left.variant}
            className="min-w-[84px]"
          >
            {buttons.left.text}
          </Button>
        )}
        
        {/* Right Button (Next/Done) */}
        {buttons.right && (
          <Button 
            onClick={onNext}
            variant={buttons.right.variant}
            className="min-w-[84px]"
          >
            {buttons.right.text}
          </Button>
        )}
      </div>
    </div>
  );
  // return "Hey"
};

export default NavigationButtons;