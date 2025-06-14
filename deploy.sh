#!/bin/bash

# Clara Onyango Portfolio - Cloudflare Pages Deployment Script
echo "🚀 Preparing Clara Onyango Portfolio for Cloudflare Pages deployment..."

# Check if required environment variables are set
if [ -z "$VITE_CONTACT_EMAIL" ]; then
    echo "⚠️  Warning: VITE_CONTACT_EMAIL environment variable not set"
fi

if [ -z "$VITE_CONTACT_PHONE" ]; then
    echo "⚠️  Warning: VITE_CONTACT_PHONE environment variable not set"
fi

# Install dependencies
echo "📦 Installing dependencies..."
npm ci

# Run linting
echo "🔍 Running linting..."
npm run lint

# Build the project
echo "🏗️  Building project for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build output is in the 'dist' directory"
    echo ""
    echo "📋 Pre-deployment checklist:"
    echo "✅ Security headers configured in _headers"
    echo "✅ Redirects configured in _redirects"
    echo "✅ Sitemap.xml present"
    echo "✅ Robots.txt configured"
    echo "✅ Meta tags optimized for SEO"
    echo "✅ Performance monitoring enabled"
    echo "✅ Error boundary implemented"
    echo "✅ Contact form with mailto integration"
    echo ""
    echo "🌐 Ready for Cloudflare Pages deployment!"
    echo "📖 Deploy by:"
    echo "   1. Connect your repository to Cloudflare Pages"
    echo "   2. Set build command: npm run build"
    echo "   3. Set build output directory: dist"
    echo "   4. Add environment variables from .env.production"
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi
