import { motion } from 'framer-motion';
import { ChevronDown, Download, GraduationCap, Award, Code, Users, Clock, Lightbulb, MessageCircle, Zap } from 'lucide-react';
import ParticleBackground from '@/components/ParticleBackground';
import AnimatedSection from '@/components/AnimatedSection';
import TypingAnimation from '@/components/TypingAnimation';
import ProgressBar from '@/components/ProgressBar';
import FlipCard from '@/components/FlipCard';
import TimelineItem from '@/components/TimelineItem';
import ProjectCard from '@/components/ProjectCard';
import ContactForm from '@/components/ContactForm';
import MobileNav from '@/components/MobileNav';
import LazyImage from '@/components/LazyImage';
import { Button } from '@/components/ui/button';

export default function Portfolio() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const skills = [
    { label: 'Python', percentage: 90, color: '#f4a5d3', icon: '🐍' },
    { label: 'Java', percentage: 85, color: '#c8b3e8', icon: '☕' },
    { label: 'Full Stack Development', percentage: 80, color: '#ffb3ba', icon: '🔧' },
    { label: 'MySQL', percentage: 75, color: '#f4a5d3', icon: '🗄️' }
  ];

  const softSkills = [
    { name: 'Problem Solving', icon: <Lightbulb className="w-8 h-8" />, color: '#f4a5d3' },
    { name: 'Team Collaboration', icon: <Users className="w-8 h-8" />, color: '#c8b3e8' },
    { name: 'Communication', icon: <MessageCircle className="w-8 h-8" />, color: '#ffb3ba' },
    { name: 'Time Management', icon: <Clock className="w-8 h-8" />, color: '#f4a5d3' },
    { name: 'Adaptability', icon: <Zap className="w-8 h-8" />, color: '#c8b3e8' },
    { name: 'Agile Methods', icon: <Code className="w-8 h-8" />, color: '#ffb3ba' }
  ];

  const projects = [
    {
      title: 'AI ChatBot',
      description: 'Developed an NLP-based chatbot using Python and ChatGPT API, enabling experimentation with cutting-edge AI technologies.',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
      tags: [
        { name: 'Python', color: '#f4a5d3' },
        { name: 'NLP', color: '#c8b3e8' },
        { name: 'API', color: '#ffb3ba' }
      ]
    },
    {
      title: 'Agrocraft E-commerce',
      description: 'Full-stack web application connecting farmers directly with buyers, featuring secure authentication and order tracking.',
      image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
      tags: [
        { name: 'Full Stack', color: '#f4a5d3' },
        { name: 'E-commerce', color: '#c8b3e8' },
        { name: 'MySQL', color: '#ffb3ba' }
      ]
    },
    {
      title: 'My Ayurveda App',
      description: 'AI-powered system providing comprehensive data on medicinal plants, combining traditional medicine with modern technology.',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=500',
      tags: [
        { name: 'AI/ML', color: '#f4a5d3' },
        { name: 'NLP', color: '#c8b3e8' },
        { name: 'Healthcare', color: '#ffb3ba' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-purple-50 to-pink-50 overflow-x-hidden">
      <ParticleBackground />
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass-effect transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <motion.div 
              className="text-2xl font-bold text-gradient"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              Pooja Rathod
            </motion.div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Education', 'Experience', 'Skills', 'Projects', 'Contact'].map((item, index) => (
                <motion.button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-primary hover:text-rose-pink transition duration-300"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {item}
                </motion.button>
              ))}
            </div>
            
            <MobileNav scrollToSection={scrollToSection} />
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative z-10 pt-20">
        <div className="text-center max-w-4xl mx-auto px-4">
          <AnimatedSection>
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
            >
              <span className="text-gradient">Pooja Rathod</span>
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-3xl text-primary mb-8 font-semibold"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Aspiring Software Developer
            </motion.h2>
            
            <div className="text-xl md:text-2xl text-secondary mb-12 h-16 flex items-center justify-center">
              <TypingAnimation 
                text="Java | Python | Fullstack | Android Developer"
                speed={100}
                className="font-medium"
              />
            </div>
            
            <motion.div 
              className="flex flex-wrap justify-center items-center gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <div className="flex items-center text-secondary hover:scale-105 transition-transform cursor-pointer">
                <span className="w-2 h-2 bg-rose-pink rounded-full mr-2"></span>
                <span>Solapur, Maharashtra</span>
              </div>
              <div className="flex items-center text-secondary hover:scale-105 transition-transform cursor-pointer">
                <span className="w-2 h-2 bg-lavender rounded-full mr-2"></span>
                <span>poojarathod1892004@gmail.com</span>
              </div>
              <div className="flex items-center text-secondary hover:scale-105 transition-transform cursor-pointer">
                <span className="w-2 h-2 bg-coral rounded-full mr-2"></span>
                <span>9881608895</span>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <Button
                onClick={() => scrollToSection('about')}
                className="bg-gradient-to-r from-rose-pink to-lavender text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce-soft"
              >
                Explore My Work
                <ChevronDown className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </AnimatedSection>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">About Me</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-pink to-lavender mx-auto rounded-full"></div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection direction="left">
              <LazyImage
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=800" 
                alt="Professional headshot" 
                className="rounded-2xl shadow-2xl hover:scale-105 hover:shadow-3xl transition-all duration-500 w-full max-w-md mx-auto" 
                placeholder="Loading profile image..."
              />
            </AnimatedSection>
            
            <AnimatedSection direction="right">
              <p className="text-lg text-primary mb-6 leading-relaxed">
                Hi! I'm Pooja Rathod, a passionate aspiring software developer with a strong foundation in computer science. Currently pursuing my B.Tech in Computer Science with an impressive 9.70 GPA, I'm dedicated to creating innovative solutions through code.
              </p>
              <p className="text-lg text-primary mb-8 leading-relaxed">
                With expertise in Java, Python, and full-stack development, I've worked on diverse projects ranging from AI chatbots to e-commerce platforms. I believe in combining technical excellence with creative problem-solving to build applications that make a difference.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <motion.div 
                  className="text-center p-4 glass-effect rounded-xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-rose-pink mb-2">7+</div>
                  <div className="text-primary">Projects Completed</div>
                </motion.div>
                <motion.div 
                  className="text-center p-4 glass-effect rounded-xl"
                  whileHover={{ scale: 1.05, y: -5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="text-3xl font-bold text-lavender mb-2">30+</div>
                  <div className="text-primary">Events Coordinated</div>
                </motion.div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Education Timeline */}
      <section id="education" className="py-20 bg-gradient-to-r from-rose-50 to-lavender-light relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Education Journey</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-pink to-lavender mx-auto rounded-full"></div>
          </AnimatedSection>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-rose-pink to-lavender h-full rounded-full"></div>
            
            {/* Education items */}
            <div className="space-y-12">
              <TimelineItem
                title="B.Tech in Computer Science"
                institution="N B Navale Sinhgad College of Engineering"
                score="GPA: 9.70"
                year="Present"
                icon={<GraduationCap className="w-6 h-6" />}
                position="left"
                color="#f4a5d3"
                delay={0.2}
              />
              
              <TimelineItem
                title="Diploma in Computer Science"
                institution="Shri Siddheswar Women's Polytechnic"
                score="Percentage: 84.90%"
                year="2023"
                icon={<Award className="w-6 h-6" />}
                position="right"
                color="#c8b3e8"
                delay={0.4}
              />
              
              <TimelineItem
                title="Secondary School Certificate"
                institution="J R Chandak School"
                score="Percentage: 83.40%"
                year="2020"
                icon={<Code className="w-6 h-6" />}
                position="left"
                color="#ffb3ba"
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Experience</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-pink to-lavender mx-auto rounded-full"></div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            <AnimatedSection delay={0.2}>
              <FlipCard
                frontContent={
                  <div className="bg-gradient-to-br from-rose-pink to-rose-light p-6 flex flex-col justify-center items-center text-on-gradient h-full">
                    <Users className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Technical Coordinator</h3>
                    <p className="text-center">NBNSCOE</p>
                    <p className="text-sm mt-4">Aug 2024 – Present</p>
                  </div>
                }
                backContent={
                  <div className="p-6 flex flex-col justify-center h-full">
                    <h3 className="text-lg font-bold text-primary mb-4">Responsibilities</h3>
                    <ul className="text-sm text-secondary space-y-2">
                      <li>• Handled technical & non-technical events</li>
                      <li>• Managed registrations & venue arrangements</li>
                      <li>• Provided mentorship for contests</li>
                      <li>• Coordinated participant communication</li>
                    </ul>
                  </div>
                }
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.4}>
              <FlipCard
                frontContent={
                  <div className="bg-gradient-to-br from-lavender to-lavender-light p-6 flex flex-col justify-center items-center text-on-gradient h-full">
                    <Award className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Women's Representative</h3>
                    <p className="text-center">ISTE</p>
                    <p className="text-sm mt-4">June 2024 – Present</p>
                  </div>
                }
                backContent={
                  <div className="p-6 flex flex-col justify-center h-full">
                    <h3 className="text-lg font-bold text-primary mb-4">Responsibilities</h3>
                    <ul className="text-sm text-secondary space-y-2">
                      <li>• Represented girl students' concerns</li>
                      <li>• Participated in policy decisions</li>
                      <li>• Advocated for gender-sensitive policies</li>
                      <li>• Promoted inclusive opportunities</li>
                    </ul>
                  </div>
                }
              />
            </AnimatedSection>
            
            <AnimatedSection delay={0.6}>
              <FlipCard
                frontContent={
                  <div className="bg-gradient-to-br from-coral to-rose-light p-6 flex flex-col justify-center items-center text-on-gradient h-full">
                    <Code className="w-12 h-12 mb-4" />
                    <h3 className="text-xl font-bold mb-2">Software Intern</h3>
                    <p className="text-center">WisdomSprouts</p>
                    <p className="text-sm mt-4">Dec 2024 – Feb 2025</p>
                  </div>
                }
                backContent={
                  <div className="p-6 flex flex-col justify-center h-full">
                    <h3 className="text-lg font-bold text-primary mb-4">Responsibilities</h3>
                    <ul className="text-sm text-secondary space-y-2">
                      <li>• Worked on weekly projects & tasks</li>
                      <li>• Full scholarship based internship</li>
                      <li>• Applied programming skills</li>
                      <li>• Collaborated with development team</li>
                    </ul>
                  </div>
                }
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-r from-lavender-light to-rose-50 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Skills & Expertise</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-pink to-lavender mx-auto rounded-full"></div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <AnimatedSection direction="left">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">Technical Skills</h3>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <ProgressBar
                    key={skill.label}
                    label={skill.label}
                    percentage={skill.percentage}
                    color={skill.color}
                    icon={skill.icon}
                    delay={index * 0.2}
                  />
                ))}
              </div>
            </AnimatedSection>
            
            {/* Soft Skills */}
            <AnimatedSection direction="right">
              <h3 className="text-2xl font-bold text-primary mb-8 text-center">Soft Skills</h3>
              <div className="grid grid-cols-2 gap-4">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="glass-effect p-4 rounded-xl text-center cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -5,
                      boxShadow: `0 10px 30px ${skill.color}30`
                    }}
                  >
                    <div style={{ color: skill.color }} className="mb-3">
                      {skill.icon}
                    </div>
                    <h4 className="font-semibold text-primary">{skill.name}</h4>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Featured Projects</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-pink to-lavender mx-auto rounded-full"></div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-gradient-to-r from-rose-50 to-lavender-light relative z-10">
        <div className="max-w-6xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Achievements & Recognition</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-pink to-lavender mx-auto rounded-full"></div>
          </AnimatedSection>
          
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {[
              { icon: '🏆', title: 'College Fest Winner', desc: 'Outstanding performance in college competitions', color: '#f4a5d3' },
              { icon: '🏅', title: 'MIT Hackathon Honor', desc: 'Project of Honor recognition', color: '#c8b3e8' },
              { icon: '👑', title: 'Leadership Roles', desc: 'Multiple coordinator positions', color: '#ffb3ba' },
              { icon: '⭐', title: 'Full Scholarship', desc: 'Merit-based internship program', color: '#f4a5d3' }
            ].map((achievement, index) => (
              <AnimatedSection key={achievement.title} delay={index * 0.1}>
                <motion.div
                  className="glass-effect p-6 rounded-xl text-center cursor-pointer group"
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: `0 20px 40px ${achievement.color}30`
                  }}
                >
                  <div className="text-4xl mb-4 group-hover:animate-bounce-soft">
                    {achievement.icon}
                  </div>
                  <h3 className="font-bold text-primary mb-2">{achievement.title}</h3>
                  <p className="text-sm text-secondary">{achievement.desc}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
          
          {/* Publications */}
          <AnimatedSection>
            <h3 className="text-2xl font-bold text-center text-primary mb-8">Publications</h3>
            <div className="max-w-2xl mx-auto">
              <motion.div 
                className="glass-effect p-6 rounded-xl cursor-pointer group"
                whileHover={{ 
                  scale: 1.02, 
                  y: -5,
                  boxShadow: '0 10px 30px rgba(244, 165, 211, 0.3)'
                }}
              >
                <h4 className="text-lg font-bold text-primary mb-2 group-hover:text-gradient transition-colors">
                  "Modern Ethical Considerations in AI"
                </h4>
                <p className="text-secondary mb-3">Co-authored with Vaishnavi Patil and Yash W</p>
                <p className="text-sm text-secondary">Research paper exploring ethical implications of artificial intelligence in modern applications</p>
                <motion.div 
                  className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <span className="text-rose-pink font-semibold">Click to view details</span>
                </motion.div>
              </motion.div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 relative z-10">
        <div className="max-w-4xl mx-auto px-4">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">Let's Connect</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-rose-pink to-lavender mx-auto rounded-full"></div>
            <p className="text-lg text-secondary mt-6">Ready to collaborate? Let's create something amazing together!</p>
          </AnimatedSection>
          
          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gradient-to-r from-rose-pink to-lavender text-white relative z-10">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-lg mb-2">Designed & Developed with 💖 by Pooja Rathod</p>
          <p className="text-sm opacity-80">© 2024 All rights reserved</p>
        </div>
      </footer>
    </div>
  );
}
