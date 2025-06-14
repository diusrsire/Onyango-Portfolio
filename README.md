# Clara Onyango - Virtual Assistant Portfolio

A modern, production-ready portfolio website for Clara Onyango, showcasing professional virtual assistant services with a focus on performance, security, and user experience.

![Clara Onyango Portfolio](./public/Clara_about.jpeg)

## 🚀 Features

- **Modern React Architecture**: Built with React 18, TypeScript, and Vite
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Performance Optimized**: Core Web Vitals monitoring and optimization
- **SEO Ready**: Complete meta tags, sitemap, and robots.txt
- **Security Hardened**: CSP headers, XSS protection, and secure configurations
- **Professional Contact**: Email integration with default mail client
- **Error Boundaries**: Comprehensive error handling and logging
- **Accessibility**: WCAG 2.1 compliant design patterns

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **Build Tool**: Vite
- **UI Components**: Radix UI, Shadcn/ui
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Routing**: React Router DOM
- **State Management**: TanStack Query

## 📦 Installation

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

## 🌐 Deployment to Cloudflare Pages

### Quick Deploy

1. **Connect Repository**:
   - Go to Cloudflare Pages dashboard
   - Connect your Git repository: `diusrsire/Onyango-Portfolio`
   - Select this repository

2. **Build Configuration**:
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`
   - **Node.js version**: `18` or higher

3. **Environment Variables**:
   Add these environment variables in Cloudflare Pages:
   ```
   VITE_SITE_URL=https://your-domain.com
   VITE_CONTACT_EMAIL=claraonyango8@gmail.com
   VITE_CONTACT_PHONE=+447440536885
   ```

4. **Deploy**: Click "Save and Deploy"

### Advanced Configuration

The website includes production-ready configurations:

- **Security Headers** (`public/_headers`): CSP, HSTS, XSS protection
- **Redirects** (`public/_redirects`): SPA routing support
- **SEO** (`public/sitemap.xml`, `public/robots.txt`): Search engine optimization
- **Performance**: Core Web Vitals monitoring and optimization

## 📧 Contact Form

The contact form uses a mailto integration that:
- Opens the user's default email client
- Pre-fills recipient, subject, and message
- Provides fallback for users without email clients
- Tracks engagement via analytics (when configured)

## 🔒 Security Features

- Content Security Policy (CSP) headers
- XSS protection
- Frame options to prevent clickjacking
- Secure referrer policy
- HTTPS enforcement (HSTS)
- Input validation and sanitization

## ⚡ Performance Features

- Core Web Vitals monitoring
- Lazy loading for images
- Code splitting and tree shaking
- Optimized bundle sizes
- Efficient caching strategies
- Performance analytics integration

## 🧪 Testing & Quality

```bash
# Run linting
npm run lint

# Type checking
npx tsc --noEmit
```

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- iOS Safari 12+
- Android Chrome 80+

## 🔧 Development

### Project Structure

```
src/
├── components/     # React components
│   ├── ui/        # Reusable UI components
│   ├── HeroSection.tsx
│   ├── AboutSection.tsx
│   ├── ServicesSection.tsx
│   ├── ContactSection.tsx
│   └── ...
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── pages/         # Page components
└── main.tsx       # Application entry point

public/
├── _headers       # Cloudflare security headers
├── _redirects     # Cloudflare redirect rules
├── robots.txt     # Search engine directives
├── sitemap.xml    # Site structure for SEO
├── Clara SVG.svg  # Brand SVG logo
├── favicon_io/    # Favicon files
├── logos/         # Company logos
└── *.jpeg         # Profile images
```

### Key Components

- **HeroSection**: Landing area with professional image and CTA
- **AboutSection**: Personal introduction and key traits
- **ServicesSection**: Service offerings and specializations
- **ExperienceSection**: Professional background
- **ToolsSection**: Technical proficiencies with real logos
- **TestimonialsSection**: Client feedback
- **ContactSection**: Contact form with mailto integration
- **Footer**: Professional contact information

### Adding New Features

1. Create components in `src/components/`
2. Add new pages in `src/pages/`
3. Update routing in `src/App.tsx`
4. Add environment variables to `.env.production`

## 📈 Analytics (Optional)

To enable Google Analytics:

1. Get your GA4 Measurement ID
2. Add `VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX` to environment variables
3. Analytics will automatically initialize

## 🐛 Error Reporting

The application includes comprehensive error boundaries that:
- Catch and log JavaScript errors
- Provide fallback UI for broken components
- Log detailed error information for debugging
- Support integration with error tracking services

## 🎨 Branding

The website features consistent branding:
- **Tagline**: "Your Virtual Assistant Partner"
- **Colors**: Blue-focused palette with professional aesthetics
- **Typography**: Inter font family for modern, clean appearance
- **Logo**: Custom Clara SVG illustration

## 📞 Contact Information

- **Email**: claraonyango8@gmail.com
- **Phone**: +44 7440 536885
- **Website**: https://claraonyango.com

## 🚀 Recent Updates

- ✅ Updated branding to "Your Virtual Assistant Partner"
- ✅ Implemented Clara SVG favicon
- ✅ Added professional headshot images
- ✅ Enhanced security headers and CSP
- ✅ Optimized for Cloudflare Pages deployment
- ✅ Added company logos for tools section
- ✅ Implemented mailto contact integration
- ✅ Enhanced SEO and meta tags

## 📄 License

This project is privately owned by Clara Onyango. All rights reserved.

## 🤝 Contributing

This is a private portfolio project. For any inquiries or suggestions, please contact Clara directly.

---

**Built with ❤️ for Clara Onyango | Professional Virtual Assistant**

*Ready for production deployment on Cloudflare Pages*
