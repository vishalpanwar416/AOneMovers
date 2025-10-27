# A One Movers - Professional Moving Company Website

A modern, responsive Next.js 14 website for A One Movers, a Canadian moving company. Built with Next.js, Tailwind CSS, and Framer Motion for smooth animations.

## 🚀 Features

- **Modern Design**: Clean, professional, and conversion-focused layout
- **Fully Responsive**: Mobile-first design that works on all devices
- **Fast Performance**: Optimized for Lighthouse score 90+
- **Interactive Animations**: Smooth transitions powered by Framer Motion
- **SEO Optimized**: Complete metadata and structured data support
- **Static Export Ready**: Configured for easy deployment to Vercel or static hosting

## 📋 Tech Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion** - Animations
- **Lucide React** - Icons

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Export static site
npm run export
```

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with metadata
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/
│   ├── Header.tsx       # Sticky navigation
│   ├── Hero.tsx         # Hero section
│   ├── About.tsx        # About section
│   ├── Services.tsx     # Services grid
│   ├── Reviews.tsx      # Customer reviews
│   ├── Gallery.tsx      # Photo gallery
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer
└── public/              # Static assets
```

## 🎨 Customization

### Colors
Edit `tailwind.config.ts` to change the primary color:
```ts
colors: {
  primary: '#2563EB', // Change this to your brand color
}
```

### Elfsight Google Reviews Widget
Replace `YOUR_WIDGET_ID` in `components/Reviews.tsx` with your actual Elfsight widget ID:
```tsx
<div className="elfsight-app-YOUR_WIDGET_ID"></div>
```

### Business Information
Update contact details in:
- `components/Contact.tsx` - Contact form section
- `components/Footer.tsx` - Footer contact info
- `app/layout.tsx` - SEO metadata

### Google Maps
Update the iframe URL in `components/Contact.tsx` with your business location.

## 🚀 Deployment

### Quick Deploy to Vercel
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Static Export
The project is configured for static export:
```bash
npm run build
```
The static files will be in the `out` directory, ready for deployment to any static hosting service.

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📝 License

© 2025 A One Movers. All rights reserved.

## 📞 Contact

For questions or support, contact info@aonemovers.ca

