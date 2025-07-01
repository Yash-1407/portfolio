import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  label: string;
  percentage: number;
  color: string;
  icon?: React.ReactNode;
  delay?: number;
}

export default function ProgressBar({ label, percentage, color, icon, delay = 0 }: ProgressBarProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="skill-item">
      <div className="flex justify-between items-center mb-2">
        <span className="text-primary font-semibold flex items-center">
          {icon && <span className="mr-3 text-2xl" style={{ color }}>{icon}</span>}
          {label}
        </span>
        <span className="font-bold" style={{ color }}>{percentage}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <motion.div 
          className="h-3 rounded-full"
          style={{ 
            background: `linear-gradient(to right, ${color}, ${color}88)`
          }}
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${percentage}%` } : { width: 0 }}
          transition={{ 
            duration: 2, 
            delay: delay,
            ease: 'easeInOut' 
          }}
        />
      </div>
    </div>
  );
}
