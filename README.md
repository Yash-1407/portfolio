# Pooja Rathod - Portfolio Website

A fully animated, responsive portfolio website with a girly-professional theme. Built with React, TypeScript, and Express.js for easy deployment on any device.

## ✨ Features

- **Fully Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Smooth Animations** - Framer Motion powered animations throughout
- **Optimized Performance** - Lazy loading, service worker, and mobile optimizations
- **No Database Required** - Simple static portfolio with contact form logging
- **Easy Deployment** - Single command setup on any device
- **PWA Ready** - Progressive Web App with offline capabilities

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone or download this repository**
   ```bash
   git clone <repository-url>
   cd pooja-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5000
   ```

That's it! The portfolio is now running locally.

## 📱 Device Compatibility

### Mobile Optimizations
- Reduced particle count for better performance
- Touch-friendly navigation with mobile menu
- Optimized animations for mobile devices
- Responsive font sizes and spacing
- Prevents horizontal scrolling

### Desktop Features
- Full particle background animation
- Hover effects and transitions
- Flip card interactions
- Advanced glass effects

### Tablet Support
- Adaptive layouts that work on any screen size
- Touch and mouse interaction support
- Optimized image loading

## 🛠️ Easy Customization

### Update Personal Information

1. **Edit portfolio data** in `client/src/pages/portfolio.tsx`:
   ```typescript
   // Update skills
   const skills = [
     { label: 'Your Skill', percentage: 90, color: '#f4a5d3', icon: '🚀' }
   ];

   // Update projects
   const projects = [
     {
       title: 'Your Project',
       description: 'Project description',
       image: 'project-image-url',
       tags: [{ name: 'React', color: '#f4a5d3' }]
     }
   ];
   ```

2. **Update contact information** in `client/src/components/ContactForm.tsx`:
   ```typescript
   const contactInfo = [
     { title: "Email", value: "your-email@gmail.com" },
     { title: "Phone", value: "+91 your-number" },
     { title: "Location", value: "Your City, State" }
   ];
   ```

3. **Replace images**:
   - Update image URLs in the projects and about sections
   - Use high-quality images (800x600 for projects, 800x800 for profile)

### Color Customization

Update colors in `client/src/index.css`:
```css
:root {
  --rose-pink: hsl(your-color);
  --lavender: hsl(your-color);
  --coral: hsl(your-color);
}
```

## 📦 Deployment Options

### Option 1: Vercel (Recommended)
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

### Option 2: Netlify
1. Build the project: `npm run build`
2. Upload `dist` folder to Netlify

### Option 3: Traditional Hosting
1. Build: `npm run build`
2. Upload `dist` folder to your web server

### Option 4: Replit Deployment
1. Click "Deploy" in Replit interface
2. Follow deployment prompts

## 🔧 Project Structure

```
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # Reusable UI components
│   │   ├── pages/         # Portfolio page
│   │   └── index.css      # Global styles and animations
│   ├── index.html         # Main HTML file
│   └── public/           # Static assets
├── server/                # Backend Express server
│   ├── index.ts          # Main server file
│   └── vite.ts           # Vite integration
└── README.md             # This file
```

## 🎨 Key Components

- **ParticleBackground**: Animated floating particles
- **TypingAnimation**: Typewriter effect for text
- **FlipCard**: 3D card flip animations
- **ProgressBar**: Animated skill indicators
- **LazyImage**: Optimized image loading
- **MobileNav**: Responsive navigation menu

## 📞 Contact Form

The contact form logs submissions to the server console. To add email functionality:

1. Add email service (like Nodemailer) to `server/index.ts`
2. Configure SMTP settings
3. Update the `/api/contact` endpoint

## 🚫 No Database Setup Required

This portfolio is designed to work without any database:
- All content is stored in React components
- Contact form logs to console
- Easy to customize and deploy
- No complex setup required

## 🌐 Browser Support

- Chrome 80+
- Firefox 75+
- Safari 13+
- Edge 80+
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📱 PWA Features

- Service worker for offline functionality
- Optimized caching strategy
- Fast loading on repeat visits
- Mobile app-like experience

## 🔒 Security

- No sensitive data exposure
- CORS configured properly
- Input validation on contact form
- Safe image loading with lazy loading

## 🎯 Performance Features

- Lazy loading for images
- Optimized animations for mobile
- Reduced particle count on small devices
- Efficient re-renders with React optimization
- Service worker caching

## 📸 Updating Images

Replace placeholder images with your own:
1. Use Unsplash, your own photos, or stock images
2. Recommended sizes: 800x600 for projects, 800x800 for profile
3. Optimize images for web (compress to reduce load time)

## 🎨 Animation Customization

Animations are built with Framer Motion and can be easily customized:
- Modify timing in component files
- Adjust easing functions
- Change animation directions
- Enable/disable specific animations

## 🤝 Support

For any issues or questions:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify Node.js version compatibility
4. Test on multiple browsers

---

**Made with 💖 for easy deployment on any device**