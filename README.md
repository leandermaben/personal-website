# Leander M. Maben - Personal Portfolio

A modern, responsive portfolio website showcasing my research, projects, and experience.

## 🚀 Features

- **Modern Design**: Built with React and Tailwind CSS
- **Responsive**: Works seamlessly on all devices
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion
- **Fast Performance**: Optimized build with Vite

## 🛠️ Tech Stack

- React 19
- Vite 7
- Tailwind CSS 4
- Framer Motion
- React Icons

## 📦 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Deployment to GitHub Pages

### Option 1: Deploy WITHOUT Custom Domain (GitHub Pages URL)

**Your site will be at:** `https://leandermaben.github.io/personal-website/`

1. **Update the base path in `vite.config.js`:**
   ```javascript
   base: '/personal-website/',  // Change from '/' to '/personal-website/'
   ```

2. **Rebuild the site:**
   ```bash
   npm run build
   rm -rf docs && cp -r dist docs
   ```

3. **Commit and push:**
   ```bash
   git add -A
   git commit -m "Update base path for GitHub Pages"
   git push
   ```

4. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (left sidebar)
   - Under **Source**, select:
     - Branch: `main` (or your default branch)
     - Folder: `/docs`
   - Click **Save**

5. **Wait a few minutes**, then visit: `https://leandermaben.github.io/personal-website/`

---

### Option 2: Deploy WITH Custom Domain (www.leandermaben.com)

**Your site will be at:** `https://www.leandermaben.com`

1. **Keep the base path as `/` in `vite.config.js`:**
   ```javascript
   base: '/',  // Leave as '/' for custom domain
   ```

2. **The site is already built with this configuration!** Just need to set up GitHub Pages.

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages** (left sidebar)
   - Under **Source**, select:
     - Branch: `main` (or your default branch)
     - Folder: `/docs`
   - Click **Save**

4. **Configure Custom Domain:**
   - Still in **Pages** settings
   - Under **Custom domain**, enter: `www.leandermaben.com`
   - Click **Save**
   - Check **Enforce HTTPS** (after DNS propagates)

5. **Update DNS at your domain registrar:**
   ```
   Type: CNAME
   Name: www
   Value: leandermaben.github.io
   ```

6. **Wait for DNS propagation** (5-30 minutes), then visit: `https://www.leandermaben.com`

---

## 🔄 Updating Content

To update your portfolio content:

1. Edit `src/data/portfolio-data.js`
2. Rebuild: `npm run build`
3. Update docs: `rm -rf docs && cp -r dist docs`
4. Commit and push:
   ```bash
   git add -A
   git commit -m "Update portfolio content"
   git push
   ```

GitHub Pages will automatically update within a few minutes!

## 📝 License

© 2026 Leander M. Maben. All rights reserved.
