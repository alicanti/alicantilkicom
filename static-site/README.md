# Alican Tilki - Personal Website

Static HTML/CSS/JS website for alicantilki.com

## Structure

```
static-site/
├── index.html          # English home page
├── en/                 # English pages
│   ├── instantpose.html
│   ├── about.html
│   ├── contact.html
│   ├── privacy.html
│   └── terms.html
├── tr/                 # Turkish pages
│   ├── index.html
│   ├── instantpose.html
│   ├── about.html
│   ├── contact.html
│   ├── privacy.html
│   └── terms.html
├── assets/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── main.js
│   └── images/
│       └── instapose-icon.png
└── .htaccess
```

## Deployment

### Option 1: Upload to any web hosting
1. Upload all files from `static-site/` directory to your web server
2. Make sure `.htaccess` is uploaded (enable "Show hidden files" in your FTP client)
3. Done! Your site is live.

### Option 2: Plesk Hosting
1. Go to Plesk File Manager
2. Navigate to `httpdocs` or `public_html` directory
3. Upload all files from `static-site/` directory
4. Ensure `.htaccess` file is present
5. Your site should be live immediately

### Option 3: Test Locally
```bash
# Using Python 3
cd static-site
python3 -m http.server 8000

# Using PHP
cd static-site
php -S localhost:8000

# Then open http://localhost:8000 in your browser
```

## Features

- ✅ Fully static HTML/CSS/JS
- ✅ No build process required
- ✅ Works on any web server
- ✅ Bilingual (EN/TR)
- ✅ Mobile responsive
- ✅ Dark glassmorphism theme
- ✅ SEO optimized
- ✅ Fast loading
- ✅ Clean URLs with .htaccess

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers

## License

© 2025 Alican Tilki. All rights reserved.
