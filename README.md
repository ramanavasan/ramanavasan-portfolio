# 🎓 Ramanavasan's Portfolio

A modern, responsive portfolio website showcasing full-stack development, vibe coding, and AI/ML courses with automatic lead capture to Google Sheets.

![Next.js](https://img.shields.io/badge/Next.js-14.0-black)
![React](https://img.shields.io/badge/React-18.2-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.3-06B6D4)
![Google Apps Script](https://img.shields.io/badge/Google%20Apps%20Script-API-red)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-000000)

---

## 🌟 Features

- **Responsive Design** - Perfect on mobile, tablet, and desktop
- **SEO Optimized** - Meta tags, Open Graph, structured data
- **Contact Form** - Auto-saves submissions to Google Sheets
- **Email Notifications** - Get notified of new submissions
- **Modern UI** - Clean, minimalist design inspired by Dribbble
- **Human Copy** - Authentic, conversational content
- **Zero Backend** - Uses Google Apps Script (serverless)
- **Fast Deployment** - Deploy to Vercel in minutes

---

## 📂 Project Structure

```
ramanavasan-portfolio/
├── app/
│   ├── page.js              # Main landing page
│   ├── layout.js            # Global layout & meta tags
│   └── globals.css          # Tailwind styles
├── public/                  # Static assets
├── appscript-code.js        # Google Apps Script (form handler)
├── next.config.js           # Next.js configuration
├── tailwind.config.js       # Tailwind CSS config
├── postcss.config.js        # PostCSS config
├── package.json             # Dependencies
├── SETUP_GUIDE.md          # Detailed setup instructions
└── README.md               # This file
```

---

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Google account
- GitHub account (for Vercel deployment)

### Local Development

1. **Clone & Install**
```bash
git clone <your-repo-url>
cd ramanavasan-portfolio
npm install
```

2. **Setup Google Apps Script** (see SETUP_GUIDE.md)

3. **Update AppScript URL**
   - Open `app/page.js`
   - Replace `YOUR_APPSCRIPT_DEPLOYMENT_URL` with your deployment URL

4. **Run Development Server**
```bash
npm run dev
```
Visit `http://localhost:3000`

5. **Test Form**
   - Fill out the contact form
   - Check your Google Sheet for the entry

---

## 📝 Content Sections

### Hero Section
- Eye-catching headline
- Clear value proposition
- Two CTA buttons (Explore Courses, Get in Touch)

### About Section
- Personal introduction
- Current projects
- Tech stack
- Location

### Courses Section
Three main offerings:

1. **Full-Stack Development**
   - Frontend (React/Next.js)
   - Backend (Node.js/Express)
   - Databases & APIs
   - Deployment & DevOps

2. **Vibe Coding**
   - JavaScript Fundamentals
   - Creative Frontend Projects
   - CSS Art & Animations
   - Portfolio Building

3. **AI/ML Fundamentals**
   - Python & Data Science
   - ML Algorithms & Models
   - Deep Learning Basics
   - Real-World Applications

### Contact Section
- Contact form (Name, Email, Phone)
- Direct email & phone links
- Auto-submission to Google Sheets

---

## 🔧 Customization

### Colors
Edit `tailwind.config.js`:
```javascript
colors: {
  primary: '#2563eb',    // Change blue
  secondary: '#7c3aed',  // Change purple
}
```

### Contact Information
Update in `app/page.js`:
- Email address (line ~330)
- Phone number (line ~333)

### Social Links
Add to navigation or footer:
```javascript
<a href="https://github.com/ramanavasan">GitHub</a>
<a href="https://linkedin.com/in/ramanavasan">LinkedIn</a>
```

### Add More Content
Edit the corresponding sections in `app/page.js`

---

## 📊 Form Data

### Stored Information
- **Timestamp** - When submission occurred
- **Name** - Visitor's full name
- **Email** - Contact email
- **Phone Number** - Contact phone

### Where It's Stored
- Primary: Google Sheet ("Portfolio Contacts")
- Email: Notification sent to ramanavasanmanivannan@gmail.com

---

## 🌐 Deployment

### Deploy to Vercel

1. **Push to GitHub**
```bash
git add .
git commit -m "Initial commit"
git push -u origin main
```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Select GitHub repo
   - Click "Deploy"

3. **Get Your URL**
   - Vercel assigns you a live URL
   - Share with the world! 🎉

### Custom Domain
- Vercel Dashboard → Settings → Domains
- Add your custom domain
- Follow DNS setup instructions

---

## 📱 SEO Features

✅ **Meta Tags**
- Title & description
- Keywords
- Open Graph (social sharing)

✅ **Mobile Friendly**
- Responsive design
- Touch-friendly buttons
- Fast loading

✅ **Performance**
- Optimized images
- Minimal CSS
- Fast page load

✅ **Accessibility**
- Semantic HTML
- ARIA labels
- Keyboard navigation

✅ **Security**
- HTTPS (via Vercel)
- No sensitive data in frontend
- CORS headers

---

## 🛠️ Technologies Used

| Technology | Purpose |
|-----------|---------|
| Next.js 14 | React framework |
| React 18 | UI components |
| Tailwind CSS | Styling |
| Google Apps Script | Serverless backend |
| Google Sheets | Database |
| Vercel | Hosting |

---

## 📖 Environment Setup

### Development
```bash
npm run dev      # Start dev server on :3000
```

### Production Build
```bash
npm run build    # Create optimized build
npm run start    # Start production server
```

### Export Static
```bash
npm run export   # Export as static HTML
```

---

## 🐛 Troubleshooting

### Form Not Submitting?
1. Check AppScript URL in `page.js`
2. Verify Apps Script is deployed
3. Check browser console for errors

### AppScript Errors?
1. Open Apps Script project
2. Check "Executions" tab for error logs
3. Redeploy if needed

### Google Sheet Not Updating?
1. Verify Sheet permissions (not read-only)
2. Check Apps Script has Gmail permissions
3. Restart the deployment

See SETUP_GUIDE.md for detailed troubleshooting.

---

## 📈 Analytics

To add Google Analytics:

1. Create GA account at [analytics.google.com](https://analytics.google.com)
2. Get your measurement ID
3. Add to `layout.js`:

```javascript
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR_ID"></script>
```

---

## 🎯 Next Steps

- [ ] Deploy to Vercel
- [ ] Setup custom domain
- [ ] Add Google Analytics
- [ ] Submit to Google Search Console
- [ ] Add GitHub link in portfolio
- [ ] Share on social media
- [ ] Collect first 10 submissions
- [ ] Add testimonials section

---

## 📄 License

This project is open source and available for personal use.

---

## 🙏 Credits

**Builder**: Ramanavasan  
**Design Inspiration**: Dribbble  
**Powered By**: Next.js, Tailwind, Google Cloud

---

## 📞 Contact

- **Email**: ramanavasanmanivannan@gmail.com
- **Phone**: +91 8870804734
- **Location**: Dindigul, Tamil Nadu, India

---

**Happy coding!** 🚀

If you found this portfolio template helpful, consider sharing it with fellow developers. Let's build amazing things together!
