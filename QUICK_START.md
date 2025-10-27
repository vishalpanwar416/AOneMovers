# Quick Start Guide

## 🚀 Get Up and Running in 3 Steps

### 1. Install Dependencies

```bash
npm install
```

### 2. Start Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
```

The static files will be in the `out/` directory.

---

## 📝 Before Deployment

### Required Updates

1. **Elfsight Google Reviews Widget**
   - Sign up at [Elfsight.com](https://elfsight.com/google-reviews-widget/)
   - Get your widget ID
   - Update `components/Reviews.tsx`:
     ```tsx
     // Replace YOUR_WIDGET_ID with your actual ID
     <div className="elfsight-app-YOUR_WIDGET_ID"></div>
     ```

2. **Contact Information**
   - Update phone, email, and address in:
     - `components/Contact.tsx`
     - `components/Footer.tsx`
     - `components/StructuredData.tsx`
     - `app/layout.tsx`

3. **Google Maps**
   - Get your business location coordinates
   - Update iframe URL in `components/Contact.tsx`

4. **Domain Name**
   - Update `public/sitemap.xml`
   - Update `public/robots.txt`
   - Update metadata URLs in `app/layout.tsx`

---

## 🌐 Deploy

### Option 1: Vercel (Easiest)

```bash
npm i -g vercel
vercel
```

### Option 2: Netlify

```bash
npm i -g netlify-cli
netlify deploy --prod --dir=out
```

### Option 3: Static Host

Upload the entire `out/` directory to any static hosting service.

---

## 📚 Documentation

- **README.md** - Full project documentation
- **DEPLOYMENT.md** - Detailed deployment guide
- **PROJECT_SUMMARY.md** - Complete feature overview

---

## 🎯 Features

✅ Fully responsive design  
✅ Modern animations with Framer Motion  
✅ SEO optimized  
✅ Fast loading (< 2s)  
✅ Static export ready  
✅ Contact form  
✅ Google Reviews integration  
✅ Google Maps  
✅ Mobile-friendly navigation  

---

## 🛠️ Customization

### Change Colors

Edit `tailwind.config.ts`:
```ts
colors: {
  primary: '#2563EB', // Your brand color
}
```

### Change Fonts

Edit `app/layout.tsx` for different fonts.

### Add Your Logo

1. Place logo in `public/` directory
2. Update logo in `components/Header.tsx` and `components/Footer.tsx`

---

## ✅ Checklist

Before going live:

- [ ] Update Elfsight widget ID
- [ ] Update all contact information
- [ ] Update Google Maps location
- [ ] Update domain name in sitemap and robots.txt
- [ ] Add actual business photos to gallery
- [ ] Test on mobile devices
- [ ] Run Lighthouse audit
- [ ] Configure contact form backend (optional)

---

## 🆘 Need Help?

- Check `README.md` for detailed documentation
- Check `DEPLOYMENT.md` for deployment help
- Review component code in `components/` folder

---

**Happy Building! 🎉**

