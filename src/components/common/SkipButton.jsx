// src/components/common/SkipButton.jsx
const SkipButton = ({ onSkip, isDarkMode = false }) => {
  return (
    <button
      onClick={onSkip}
      className={`flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-transparent ${
        isDarkMode ? 'text-white' : 'text-gray-500'
      } text-sm font-bold leading-normal tracking-[0.015em] hover:opacity-80 transition-opacity`}
    >
      <span className="truncate">Skip</span>
    </button>
  );
};

export default SkipButton;