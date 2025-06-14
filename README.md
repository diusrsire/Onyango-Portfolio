# Clara Onyango - Virtual Assistant Portfolio

A modern, production-ready portfolio website for Clara Onyango, showcasing professional virtual assistant services with a focus on performance, security, and user experience.

![Clara Onyango Portfolio](https://img.shields.io/badge/Status-Production%20Ready-green?style=for-the-badge)
![React](https://img.shields.io/badge/React-18.3.1-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-blue?style=for-the-badge&logo=typescript)
![Vite](https://img.shields.io/badge/Vite-5.4.1-purple?style=for-the-badge&logo=vite)

## 🌟 Live Demo

Visit the live website: [claraonyango.com](https://claraonyango.com)

## 📸 Screenshots

![Hero Section](./public/Clara_about.jpeg)

## 🚀 Features

### ✨ **Modern Design**
- Responsive mobile-first design
- Professional UI with Tailwind CSS
- Glassmorphism effects and modern animations
- Custom SVG favicon and branding

### 🔒 **Security Hardened**
- Content Security Policy (CSP) headers
- XSS protection and frame options
- HTTPS enforcement (HSTS)
- Input validation and sanitization

### ⚡ **Performance Optimized**
- Core Web Vitals monitoring
- Lazy loading for images
- Code splitting and tree shaking
- Optimized bundle sizes (< 350KB total)
- Efficient caching strategies

### 📱 **Contact Integration**
- Smart mailto integration
- Pre-filled contact forms
- Multiple contact methods
- Professional contact cards

### 🎯 **SEO Ready**
- Complete meta tags optimization
- Structured data markup
- XML sitemap
- Robots.txt configuration
- Open Graph and Twitter Cards

### 🛠️ **Production Ready**
- Comprehensive error boundaries
- Environment configuration
- Security headers
- Cloudflare Pages optimized

## 🛠️ Tech Stack

| Technology | Version | Purpose |
|------------|---------|---------|
| **React** | 18.3.1 | Frontend framework |
| **TypeScript** | 5.5.3 | Type safety |
| **Vite** | 5.4.1 | Build tool |
| **Tailwind CSS** | 3.4.11 | Styling |
| **Radix UI** | Latest | UI components |
| **Lucide React** | 0.462.0 | Icons |
| **React Hook Form** | 7.53.0 | Form handling |
| **TanStack Query** | 5.56.2 | State management |

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- Git

### Quick Start

```bash
# Clone the repository
git clone https://github.com/diusrsire/Onyango-Portfolio.git

# Navigate to project directory
cd Onyango-Portfolio

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Development URLs
- **Development**: `http://localhost:8080`
- **Preview**: `http://localhost:4173`

## 🌐 Deployment

### Cloudflare Pages (Recommended)

1. **Connect Repository**:
   - Go to [Cloudflare Pages Dashboard](https://dash.cloudflare.com/pages)
   - Connect this GitHub repository
   - Select `main` branch

2. **Build Configuration**:
   ```yaml
   Build command: npm run build
   Build output directory: dist
   Node.js version: 18
   ```

3. **Environment Variables**:
   ```env
   VITE_SITE_URL=https://your-domain.com
   VITE_CONTACT_EMAIL=claraonyango8@gmail.com
   VITE_CONTACT_PHONE=+447440536885
   ```

4. **Custom Domain** (Optional):
   - Add your custom domain
   - Configure DNS settings
   - SSL certificates are automatically provisioned

### Alternative Deployment Options

- **Vercel**: `npm i -g vercel && vercel`
- **Netlify**: Drag and drop `dist` folder
- **GitHub Pages**: Enable in repository settings

## 📁 Project Structure

```
├── public/                 # Static assets
│   ├── Clara_about.jpeg   # Professional headshot
│   ├── Clara SVG.svg      # Custom SVG illustration
│   ├── favicon_io/        # Favicon files
│   ├── logos/            # Company logos
│   ├── _headers          # Security headers
│   ├── _redirects        # Redirect rules
│   ├── robots.txt        # SEO directives
│   └── sitemap.xml       # Site structure
├── src/
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ServicesSection.tsx
│   │   ├── ContactSection.tsx
│   │   └── ...
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   └── main.tsx          # App entry point
├── .env.example          # Environment template
├── .env.production       # Production variables
├── deploy.sh            # Deployment script
└── package.json         # Dependencies
```

## 🔧 Configuration

### Environment Variables

Create `.env.local` for development:

```env
# Site Configuration
VITE_SITE_URL=http://localhost:8080
VITE_CONTACT_EMAIL=claraonyango8@gmail.com
VITE_CONTACT_PHONE=+447440536885

# Analytics (Optional)
VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
```

### Security Headers

The website includes comprehensive security headers in `public/_headers`:

```
X-Frame-Options: DENY
X-Content-Type-Options: nosniff
X-XSS-Protection: 1; mode=block
Referrer-Policy: strict-origin-when-cross-origin
Content-Security-Policy: [Comprehensive CSP]
Strict-Transport-Security: max-age=31536000
```

## 📈 Performance Metrics

- **Lighthouse Score**: 95+ (All categories)
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Total Bundle Size**: < 350KB (gzipped)
- **Time to Interactive**: < 3s

## 🧪 Testing & Quality

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit

# Build test
npm run build
```

## 📱 Browser Support

| Browser | Version |
|---------|---------|
| Chrome | Latest |
| Firefox | Latest |
| Safari | Latest |
| Edge | Latest |
| iOS Safari | 12+ |
| Android Chrome | 80+ |

## 🎨 Design System

### Colors
- **Primary**: Blue (#2563EB)
- **Secondary**: Indigo (#4F46E5)
- **Accent**: Gray (#6B7280)
- **Background**: White (#FFFFFF)

### Typography
- **Font Family**: Inter
- **Headings**: 700 weight
- **Body**: 400 weight
- **Captions**: 500 weight

## 📞 Contact Information

### Professional Contact
- **Email**: [claraonyango8@gmail.com](mailto:claraonyango8@gmail.com)
- **Phone**: [+44 7440 536885](tel:+447440536885)
- **Website**: [claraonyango.com](https://claraonyango.com)

### Technical Support
For technical issues or questions about this portfolio:
- **Repository**: [GitHub Issues](https://github.com/diusrsire/Onyango-Portfolio/issues)
- **Email**: claraonyango8@gmail.com

## 📄 License

This project is privately owned by Clara Onyango. All rights reserved.

## 🙏 Acknowledgments

- **UI Components**: [Radix UI](https://radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Deployment**: [Cloudflare Pages](https://pages.cloudflare.com/)

## 🔄 Version History

### v2.0.0 (2025-06-14)
- ✨ Complete redesign with modern UI
- 🔒 Enhanced security implementation
- ⚡ Performance optimization
- 📱 Mobile-first responsive design
- 🌐 Production deployment ready

### v1.0.0 (2024)
- 🚀 Initial portfolio launch
- 📄 Basic contact information
- 🎨 Simple design implementation

---

**Built with ❤️ by Clara Onyango | Your Virtual Assistant Partner**

![Footer](https://img.shields.io/badge/Made%20with-React%20%2B%20TypeScript-blue?style=flat-square)
![Deployment](https://img.shields.io/badge/Deployed%20on-Cloudflare%20Pages-orange?style=flat-square)
![Status](https://img.shields.io/badge/Status-Live-green?style=flat-square)
