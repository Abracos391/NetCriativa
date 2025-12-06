const Logo = ({ className = "", variant = "default" }: { className?: string; variant?: "default" | "footer" }) => {
  const textColor = variant === "footer" ? "text-background" : "text-foreground";
  
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="relative">
        <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="100%" stopColor="#00E082" />
            </linearGradient>
          </defs>
          <path 
            d="M8 40V8L24 16L40 8V40L24 32L8 40Z" 
            fill="url(#logoGradient)"
            opacity="0.2"
          />
          <path 
            d="M8 8L24 16L40 8M8 40L24 32L40 40M24 16V32" 
            stroke="url(#logoGradient)" 
            strokeWidth="3" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          />
          <circle cx="24" cy="24" r="3" fill="url(#logoGradient)" />
        </svg>
      </div>
      <div className="flex flex-col">
        <span className={`text-2xl font-bold ${textColor} leading-none`}>
          Net<span className="gradient-text">Criativa</span>
        </span>
        <span className={`text-xs ${textColor} opacity-70 leading-none mt-1`}>
          Soluções Digitais
        </span>
      </div>
    </div>
  );
};

export default Logo;
