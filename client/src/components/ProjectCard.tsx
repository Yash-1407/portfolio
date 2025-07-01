import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: Array<{ name: string; color: string }>;
  delay?: number;
}

export default function ProjectCard({ title, description, image, tags, delay = 0 }: ProjectCardProps) {
  return (
    <motion.div
      className="glass-effect rounded-2xl overflow-hidden group cursor-pointer"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05, 
        y: -10,
        boxShadow: '0 20px 40px rgba(244, 165, 211, 0.3)'
      }}
    >
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-gradient transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-sm font-medium"
              style={{ 
                backgroundColor: `${tag.color}20`,
                color: tag.color
              }}
            >
              {tag.name}
            </span>
          ))}
        </div>
        
        <motion.button 
          className="flex items-center text-rose-pink hover:text-rose-light transition-colors font-semibold"
          whileHover={{ x: 5 }}
        >
          View Details <ExternalLink className="ml-1 w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
