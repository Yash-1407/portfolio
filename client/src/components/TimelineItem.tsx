import { motion } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

interface TimelineItemProps {
  title: string;
  institution: string;
  score: string;
  year: string;
  icon: React.ReactNode;
  position: 'left' | 'right';
  color: string;
  delay?: number;
}

export default function TimelineItem({ 
  title, 
  institution, 
  score, 
  year, 
  icon, 
  position, 
  color,
  delay = 0 
}: TimelineItemProps) {
  return (
    <div className="flex items-center">
      {position === 'left' && (
        <div className="w-1/2 pr-8 text-right">
          <AnimatedSection delay={delay} direction="right">
            <div className="glass-effect p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
              <p className="font-semibold mb-2" style={{ color }}>{institution}</p>
              <p className="text-gray-600 mb-2">{score}</p>
              <p className="text-sm text-gray-500">{year}</p>
            </div>
          </AnimatedSection>
        </div>
      )}
      
      <motion.div 
        className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold z-10 relative"
        style={{ background: `linear-gradient(135deg, ${color}, ${color}88)` }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.5, delay: delay + 0.2 }}
        whileHover={{ scale: 1.1 }}
      >
        {icon}
      </motion.div>
      
      {position === 'right' && (
        <div className="w-1/2 pl-8">
          <AnimatedSection delay={delay} direction="left">
            <div className="glass-effect p-6 rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
              <p className="font-semibold mb-2" style={{ color }}>{institution}</p>
              <p className="text-gray-600 mb-2">{score}</p>
              <p className="text-sm text-gray-500">{year}</p>
            </div>
          </AnimatedSection>
        </div>
      )}
    </div>
  );
}
