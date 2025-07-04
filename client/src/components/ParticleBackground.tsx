import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  color: string;
  speedX: number;
  speedY: number;
  opacity: number;
}

export default function ParticleBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const particles: HTMLDivElement[] = [];
    const colors = ['#f4a5d3', '#c8b3e8', '#ffb3ba', '#e8d5ff'];
    
    // Reduce particle count on mobile devices for better performance
    const isMobile = window.innerWidth < 768;
    const particleCount = isMobile ? 25 : 50;

    // Create particles
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.className = 'particle animate-float';
      particle.style.position = 'absolute';
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.width = Math.random() * 6 + 4 + 'px';
      particle.style.height = particle.style.width;
      particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
      particle.style.animationDelay = Math.random() * 6 + 's';
      particle.style.animationDuration = Math.random() * 4 + 4 + 's';
      particle.style.borderRadius = '50%';
      particle.style.pointerEvents = 'none';
      particle.style.willChange = 'transform';
      
      if (containerRef.current) {
        containerRef.current.appendChild(particle);
        particles.push(particle);
      }
    }

    // Handle window resize for responsive particle count
    const handleResize = () => {
      const newIsMobile = window.innerWidth < 768;
      if (newIsMobile !== isMobile) {
        // Re-create particles with new count if device type changed
        particles.forEach(particle => {
          if (particle.parentNode) {
            particle.parentNode.removeChild(particle);
          }
        });
        particles.length = 0;
        
        const newParticleCount = newIsMobile ? 25 : 50;
        for (let i = 0; i < newParticleCount; i++) {
          const particle = document.createElement('div');
          particle.className = 'particle animate-float';
          particle.style.position = 'absolute';
          particle.style.left = Math.random() * 100 + '%';
          particle.style.top = Math.random() * 100 + '%';
          particle.style.width = Math.random() * 6 + 4 + 'px';
          particle.style.height = particle.style.width;
          particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
          particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
          particle.style.animationDelay = Math.random() * 6 + 's';
          particle.style.animationDuration = Math.random() * 4 + 4 + 's';
          particle.style.borderRadius = '50%';
          particle.style.pointerEvents = 'none';
          particle.style.willChange = 'transform';
          
          if (containerRef.current) {
            containerRef.current.appendChild(particle);
            particles.push(particle);
          }
        }
      }
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
      particles.forEach(particle => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-0 overflow-hidden"
      style={{ pointerEvents: 'none' }}
    />
  );
}
