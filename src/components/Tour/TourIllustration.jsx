// src/components/Tour/TourIllustration.jsx
const TourIllustration = ({ illustration }) => {
  if (illustration.type === 'icon') {
    return (
      <div className="flex justify-center items-center my-8">
        <div className={`w-48 h-48 rounded-full flex items-center justify-center ${illustration.bgColor || 'bg-background-light/5'}`}>
          <span 
            className={`material-symbols-outlined text-primary ${illustration.size || 'text-8xl'}`}
          >
            {illustration.name}
          </span>
        </div>
      </div>
    );
  }

  if (illustration.type === 'image') {
    return (
      <div className="flex justify-center items-center my-8">
        <div 
          className="w-48 h-48 bg-center bg-no-repeat bg-contain"
          style={{ backgroundImage: `url("${illustration.url}")` }}
        ></div>
      </div>
    );
  }

  return null;
};

export default TourIllustration;