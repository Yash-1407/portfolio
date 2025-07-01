import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent! 💖",
        description: "Thank you for reaching out! I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      title: "Email",
      value: "poojarathod1892004@gmail.com",
      color: "from-rose-pink to-lavender"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      title: "Phone",
      value: "+91 9881608895",
      color: "from-lavender to-coral"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Location",
      value: "Solapur, Maharashtra, India",
      color: "from-coral to-rose-pink"
    }
  ];

  return (
    <div className="grid md:grid-cols-2 gap-12">
      {/* Contact Form */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-pink focus:border-transparent transition-all duration-300"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <Input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-pink focus:border-transparent transition-all duration-300"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Subject</label>
            <Input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Project Collaboration"
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-pink focus:border-transparent transition-all duration-300"
            />
          </div>
          
          <div>
            <label className="block text-gray-700 font-semibold mb-2">Message</label>
            <Textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder="Tell me about your project..."
              required
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-pink focus:border-transparent transition-all duration-300 resize-none"
            />
          </div>
          
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-rose-pink to-lavender text-white py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
            <Send className="ml-2 w-4 h-4" />
          </Button>
        </form>
      </motion.div>

      {/* Contact Info */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="space-y-8">
          {contactInfo.map((info, index) => (
            <motion.div
              key={index}
              className="flex items-center p-4 glass-effect rounded-xl hover:scale-105 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-full flex items-center justify-center text-white mr-4`}>
                {info.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">{info.title}</h3>
                <p className="text-gray-600">{info.value}</p>
              </div>
            </motion.div>
          ))}
          
          {/* Social Links */}
          <div className="pt-6">
            <h3 className="font-semibold text-gray-800 mb-4 text-center">Connect with me</h3>
            <div className="flex justify-center space-x-4">
              {[
                { name: 'LinkedIn', icon: '💼', color: 'from-rose-pink to-lavender' },
                { name: 'GitHub', icon: '💻', color: 'from-lavender to-coral' },
                { name: 'Twitter', icon: '🐦', color: 'from-coral to-rose-pink' },
                { name: 'Instagram', icon: '📷', color: 'from-rose-pink to-lavender' }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href="#"
                  className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-full flex items-center justify-center text-white text-lg hover:scale-110 transition-transform`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
