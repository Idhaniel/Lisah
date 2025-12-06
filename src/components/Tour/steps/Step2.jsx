// src/components/Tour/steps/Step2.jsx
const Step2 = ({ onNext, onSkip }) => {
  return (
    <div className="fixed inset-0 bg-background-dark font-display text-white overflow-hidden">
      <div className="flex flex-col h-full w-full">
        <header className="flex items-center justify-between p-4 pb-2">
          <button 
            onClick={onSkip}
            className="font-bold text-white/70"
          >
            Skip
          </button>
          <div></div>
        </header>
        
        <main className="flex flex-1 flex-col items-center justify-center px-4 text-center">
          <div className="flex w-full max-w-xs grow items-center justify-center py-8">
            <div className="w-full aspect-square rounded-full bg-background-light/5 flex items-center justify-center">
              <span 
                className="material-symbols-outlined text-primary" 
                style={{ fontSize: '120px' }}
              >
                monitoring
              </span>
            </div>
          </div>
          
          <h1 className="text-3xl font-bold leading-tight tracking-tight text-white">
            Track Your Growth Visually
          </h1>
          
          <p className="mt-2 max-w-sm text-base font-normal text-white/80">
            Monitor your locked asset's performance with intuitive graphs and metrics.
          </p>
        </main>
        
        <footer className="flex items-center justify-between p-6">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-white/70">2 of 3</span>
            <div className="flex gap-1.5">
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-primary"></div>
              <div className="h-2 w-2 rounded-full bg-white/30"></div>
            </div>
          </div>
          
          <button 
            onClick={onNext}
            className="rounded-lg bg-primary px-8 py-3 font-bold text-background-dark"
          >
            Next
          </button>
        </footer>
      </div>
    </div>
  );
};

export default Step2;