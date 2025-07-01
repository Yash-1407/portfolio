import { motion } from 'framer-motion';
import { useState } from 'react';

interface FlipCardProps {
  frontContent: React.ReactNode;
  backContent: React.ReactNode;
  className?: string;
  height?: string;
}

export default function FlipCard({ frontContent, backContent, className = '', height = 'h-80' }: FlipCardProps) {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className={`flip-card ${height} ${className}`}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <motion.div
        className="flip-card-inner w-full h-full relative"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.8, ease: 'easeInOut' }}
        style={{ transformStyle: 'preserve-3d' }}
      >
        <div className="flip-card-front absolute w-full h-full rounded-xl" style={{ backfaceVisibility: 'hidden' }}>
          {frontContent}
        </div>
        <div 
          className="flip-card-back absolute w-full h-full rounded-xl bg-white shadow-xl" 
          style={{ 
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}
        >
          {backContent}
        </div>
      </motion.div>
    </div>
  );
}
