# Clara Onyango Portfolio - Deployment Guide

## Production Deployment to Cloudflare Pages

### Prerequisites
- Cloudflare account
- Git repository with your code
- Domain (optional but recommended)

### Step 1: Build the Project
```bash
npm run build:prod
```

### Step 2: Deploy to Cloudflare Pages

#### Option A: Git Integration (Recommended)
1. Push your code to GitHub/GitLab/Bitbucket
2. Go to Cloudflare Dashboard > Pages
3. Click "Create a project" > "Connect to Git"
4. Select your repository
5. Configure build settings:
   - Framework preset: `Vite`
   - Build command: `npm run build:prod`
   - Build output directory: `dist`
   - Node.js version: `18` or `20`

#### Option B: Direct Upload
1. Run `npm run build:prod`
2. Go to Cloudflare Dashboard > Pages
3. Click "Create a project" > "Direct upload"
4. Upload the `dist` folder

### Step 3: Configure Custom Domain (Optional)
1. In Cloudflare Pages > Your project > Custom domains
2. Add your domain (e.g., claraonyango.com)
3. Update DNS records as instructed

### Step 4: Environment Variables
Add these in Cloudflare Pages > Settings > Environment variables:
```
VITE_APP_TITLE=Clara Onyango | Premium Virtual Assistant
VITE_APP_DESCRIPTION=Professional Virtual Assistant offering world-class support
VITE_APP_URL=https://claraonyango.com
VITE_CONTACT_EMAIL=claraonyango8@gmail.com
VITE_CONTACT_PHONE=+447440536885
```

For Google Analytics (optional):
```
VITE_GA_TRACKING_ID=G-XXXXXXXXXX
```

### Step 5: Security Headers (Already Configured)
The `_headers` file in the public folder will automatically apply:
- Content Security Policy
- X-Frame-Options
- X-Content-Type-Options
- Cache Control
- And more security headers

### Step 6: Performance Optimization Features Included
✅ Error Boundary for graceful error handling
✅ Performance monitoring (Core Web Vitals)
✅ Google Analytics integration (when configured)
✅ Optimized build with code splitting
✅ Image optimization
✅ SEO meta tags
✅ Sitemap.xml
✅ Robots.txt
✅ Security headers
✅ Cache control

### Step 7: Post-Deployment Checklist
- [ ] Test all pages load correctly
- [ ] Verify images display properly
- [ ] Check contact form functionality
- [ ] Test responsive design on mobile/tablet
- [ ] Validate security headers using securityheaders.com
- [ ] Test page speed using PageSpeed Insights
- [ ] Verify SEO with Google Search Console
- [ ] Set up Google Analytics (if using)

### Maintenance
- Update dependencies monthly: `npm update`
- Monitor performance in Cloudflare Analytics
- Check Core Web Vitals in Google Search Console
- Review and update content regularly

### Troubleshooting
1. **Images not loading**: Check file paths and extensions match exactly
2. **Build errors**: Run `npm run typecheck` to check for TypeScript errors
3. **Performance issues**: Use `npm run analyze` to check bundle size
4. **SEO issues**: Validate meta tags and structured data
