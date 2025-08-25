import { useState } from "react";

const RotatingCircle = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 z-50">
      <div 
        className={`relative w-16 h-16 sm:w-24 sm:h-24 cursor-pointer transition-transform duration-300 ${
          isHovered ? 'scale-110' : 'scale-100'
        }`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background circle */}
        <div className="absolute inset-0 bg-primary rounded-full shadow-lg"></div>
        
        {/* Rotating text */}
        <div className="absolute inset-0 animate-spin" style={{ animationDuration: '10s' }}>
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <defs>
              <path
                id="circle-path"
                d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
              />
            </defs>
            <text className="text-xs fill-primary-foreground font-medium uppercase tracking-wider">
              <textPath href="#circle-path" startOffset="0%">
                GET IN TOUCH • GET IN TOUCH • 
              </textPath>
            </text>
          </svg>
        </div>
        
        {/* Center letter */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-2xl font-bold text-primary-foreground">T</span>
        </div>
      </div>
    </div>
  );
};

export default RotatingCircle;