# ⚡ Quick Start Checklist (15 minutes)

Get your portfolio live in **15 minutes** using this checklist!

---

## ✅ Phase 1: Google Setup (5 mins)

- [ ] Create Google Sheet: `Ramanavasan Portfolio Contacts`
- [ ] Open Sheet → Extensions → Apps Script
- [ ] Copy code from `appscript-code.js` into Apps Script editor
- [ ] Save the script (Ctrl+S)
- [ ] Click Deploy → New Deployment → Web app
  - Execute as: Your Google Account
  - Who has access: Anyone
- [ ] Click Deploy
- [ ] **COPY the Deployment URL** (important!)
  ```
  https://script.google.com/macros/d/[LONG_ID]/usercontent
  ```
- [ ] Click "Authorize" and approve permissions

---

## ✅ Phase 2: Local Setup (5 mins)

- [ ] Open `app/page.js`
- [ ] Find line: `'YOUR_APPSCRIPT_DEPLOYMENT_URL'`
- [ ] Replace with your **Deployment URL** from Phase 1
- [ ] Open terminal in project folder
- [ ] Run:
  ```bash
  npm install
  npm run dev
  ```
- [ ] Open browser → `http://localhost:3000`
- [ ] ✅ Portfolio should load!

---

## ✅ Phase 3: Test Form (2 mins)

- [ ] Scroll to "Let's Build Something Together" section
- [ ] Fill out contact form with test data:
  - Name: "Test User"
  - Email: "test@example.com"
  - Phone: "9999999999"
- [ ] Click "Send Message"
- [ ] ✅ Should see success message
- [ ] Go to your Google Sheet
- [ ] ✅ New row should appear with your test data!

---

## ✅ Phase 4: Deploy to Vercel (3 mins)

- [ ] Create GitHub account (if not already done)
- [ ] Go to your project folder in terminal
- [ ] Run:
  ```bash
  git init
  git add .
  git commit -m "Portfolio launch"
  git branch -M main
  ```
- [ ] Create repo on GitHub
- [ ] Run:
  ```bash
  git remote add origin https://github.com/YOUR_USERNAME/ramanavasan-portfolio.git
  git push -u origin main
  ```
- [ ] Go to [vercel.com](https://vercel.com)
- [ ] Click "New Project"
- [ ] Select your GitHub repo
- [ ] Click "Deploy"
- [ ] Wait 2-3 minutes
- [ ] ✅ You get a live URL!

---

## 🎉 You're Done!

Your portfolio is now **live on the internet**! 

**Next steps:**
1. Share your Vercel URL with friends/family
2. Test the form from different devices
3. Check Google Sheet for submissions
4. Add your GitHub/LinkedIn links
5. Set up custom domain (optional)

---

## 🔧 If Something Goes Wrong

### Form not working?
```
1. Check: Did you replace YOUR_APPSCRIPT_DEPLOYMENT_URL?
2. Check: Is your AppScript deployment URL correct?
3. Test: Open browser console (F12) - any errors?
```

### Page not loading?
```
1. Check: npm install completed without errors?
2. Try: npm run dev again
3. Check: Browser showing at http://localhost:3000?
```

### Google Sheet not updating?
```
1. Check: Did AppScript deployment succeed?
2. Check: Are you filling the form correctly?
3. Try: Manual test in Apps Script → Run doPost()
```

---

## 📞 Support Links

- **Next.js Docs**: https://nextjs.org/docs
- **Google Apps Script**: https://script.google.com
- **Tailwind CSS**: https://tailwindcss.com
- **Vercel Docs**: https://vercel.com/docs

---

## ✨ You're Amazing!

You just built a full-stack web application! That's actually really cool. Most people talk about learning web development. You just **did it**. 🚀

Now go share it with the world!
