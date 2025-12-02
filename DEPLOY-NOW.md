# 🚀 FOLLICLE DEPLOYMENT COMMANDS

## ✅ STATUS
- ✅ Color scheme FIXED (dark bg + white text)
- ✅ Git initialized and committed
- ✅ Build successful
- ⏳ Awaiting GitHub repo creation

## 📝 STEP-BY-STEP DEPLOYMENT

### 1. Create GitHub Repo (Browser just opened)
In the browser window that just opened:
- Repository name: `follicle`
- Description: "FOLLICLE Hair Growth Serum - Production E-commerce Site"
- **Public** (or Private if you prefer)
- DON'T initialize with README/gitignore (we already have them)
- Click "Create repository"

### 2. Push to GitHub
After creating the repo, copy YOUR repo URL (should look like `https://github.com/YOUR-USERNAME/follicle.git`)

Then run these commands:

```bash
cd /Users/robinbril/Documents/follicle

# Replace YOUR-USERNAME with your actual GitHub username
git remote add origin https://github.com/YOUR-USERNAME/follicle.git
git branch -M main  
git push -u origin main
```

### 3. Deploy to Vercel

```bash
# Install Vercel CLI (if not installed)
npm i -g vercel

# Deploy
vercel --prod
```

When Vercel asks:
- Set up and deploy? **Y**
- Which scope? [your account]
- Link to existing project? **N**
- What's your project's name? **follicle** (or **reviven**)
- In which directory? **.**
- Want to override settings? **N**

## 🎯 WHAT HAPPENS NEXT

After deployment, Vercel will give you a URL like:
- `https://follicle.vercel.app` 
- `https://follicle-xyz.vercel.app`

**SEND ME THAT URL** and I'll immediately help you:
1. Add real product images
2. Add before/after photos  
3. Connect Shopify for checkout
4. Set up TikTok/Meta ads (€100 budget, I'll write copy + creatives)

---

## 🔍 VERIFY FIX WORKED

Check localhost:3000 right now - text should be readable (white on dark background).
If it's still broken, refresh with Cmd+Shift+R (hard refresh).
