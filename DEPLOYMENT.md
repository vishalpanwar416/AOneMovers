# Deployment Guide for A One Movers Website

This guide covers deploying the static Next.js website to various hosting platforms.

## 📦 Build Output

After running `npm run build`, the static files are generated in the `/out` directory. This directory contains everything needed for deployment.

## 🚀 Deployment Options

### Option 1: Vercel (Recommended)

1. **Via GitHub**:
   - Push your code to GitHub
   - Import the project on [vercel.com](https://vercel.com)
   - Deploy automatically

2. **Via CLI**:
   ```bash
   npm install -g vercel
   vercel
   ```

3. **Manual Upload**:
   - Build the project: `npm run build`
   - Deploy the `out` directory on Vercel dashboard

### Option 2: Netlify

1. **Via Netlify**:
   - Connect your GitHub repository to Netlify
   - Build command: `npm run build`
   - Publish directory: `out`
   - Deploy!

2. **Via CLI**:
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=out
   ```

### Option 3: GitHub Pages

1. Install gh-pages:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Add to `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d out"
   }
   ```

3. Deploy:
   ```bash
   npm run deploy
   ```

### Option 4: AWS S3 + CloudFront

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload to S3:
   ```bash
   aws s3 sync out/ s3://your-bucket-name --delete
   ```

3. Configure CloudFront for custom domain

### Option 5: Google Cloud Storage

1. Build the project:
   ```bash
   npm run build
   ```

2. Upload to GCS:
   ```bash
   gsutil -m rsync -r out gs://your-bucket-name
   ```

3. Configure static website hosting

## 🔧 Pre-Deployment Checklist

- [ ] Update business information in components
- [ ] Replace `YOUR_WIDGET_ID` with actual Elfsight widget ID
- [ ] Update Google Maps iframe URL with actual business location
- [ ] Update contact details (phone, email, address)
- [ ] Update domain name in sitemap.xml and metadata
- [ ] Test the website locally with `npm run dev`
- [ ] Run final build test: `npm run build`
- [ ] Test the static export in the `out` directory

## 📝 Configuration Updates

### Elfsight Google Reviews Widget

Replace `YOUR_WIDGET_ID` in `components/Reviews.tsx`:

```tsx
<div className="elfsight-app-YOUR_WIDGET_ID"></div>
```

Get your widget ID from [Elfsight.com](https://elfsight.com/google-reviews-widget/)

### Business Information

Update the following files:
- `components/Contact.tsx` - Contact form and business info
- `components/Footer.tsx` - Footer contact details
- `components/StructuredData.tsx` - Schema.org data
- `app/layout.tsx` - SEO metadata

### Google Maps Integration

Update the iframe URL in `components/Contact.tsx` with your actual business location coordinates.

### Domain Configuration

1. Update `public/sitemap.xml` with your actual domain
2. Update `public/robots.txt` with your actual sitemap URL
3. Update metadata URLs in `app/layout.tsx`

## 🌐 Custom Domain Setup

### Vercel
1. Go to Project Settings → Domains
2. Add your domain
3. Follow DNS configuration instructions

### Netlify
1. Go to Site Settings → Domain Management
2. Add custom domain
3. Configure DNS records

### AWS CloudFront
1. Create SSL certificate in ACM
2. Configure CloudFront distribution with certificate
3. Update DNS records

## ✅ Post-Deployment

- [ ] Test all pages load correctly
- [ ] Verify contact form functionality
- [ ] Check mobile responsiveness
- [ ] Test Google Reviews widget
- [ ] Verify SEO metadata
- [ ] Run Lighthouse audit (target 90+)
- [ ] Submit sitemap to Google Search Console

## 🔍 Performance Optimization

The website is optimized for:
- ✅ Code splitting
- ✅ Image optimization
- ✅ Lazy loading
- ✅ Static generation
- ✅ Minified CSS/JS
- ✅ Font optimization

Expected Lighthouse scores:
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

## 📞 Support

For deployment issues, contact your development team or refer to:
- [Next.js Deployment Docs](https://nextjs.org/docs/deployment)
- [Vercel Documentation](https://vercel.com/docs)
- [Netlify Documentation](https://docs.netlify.com)

