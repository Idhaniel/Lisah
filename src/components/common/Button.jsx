// src/components/common/Button.jsx
const Button = ({ 
  children, 
  onClick, 
  variant = 'primary', 
  disabled = false, 
  className = '',
  type = 'button'
}) => {
  const baseStyles = "flex cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 text-base font-bold leading-normal tracking-[0.015em] font-display transition-all duration-200";
  
  const variants = {
    primary: "bg-primary text-background-dark hover:bg-primary/90 active:scale-95",
    secondary: "bg-transparent text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 border border-gray-300 dark:border-gray-600"
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant]} ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      <span className="truncate">{children}</span>
    </button>
  );
};

export default Button;