// src/components/Tour/TourContainer.jsx
import { useState } from 'react';
import Step0 from './steps/Step0';
import Step1 from './steps/Step1';
import Step2 from './steps/Step2';
import Step3 from './steps/Step3';

const TourContainer = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    } else {
      console.log('Tour completed!');
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const skipTour = () => {
    setCurrentStep(3); // Skip to last step
  };

  const steps = [
    <Step0 key={0} onNext={nextStep} onSkip={skipTour} />,
    <Step1 key={1} onNext={nextStep} onSkip={skipTour} />,
    <Step2 key={2} onNext={nextStep} onSkip={skipTour} />,
    <Step3 key={3} onNext={nextStep} onSkip={skipTour} />
  ];

  return steps[currentStep];
};

export default TourContainer;