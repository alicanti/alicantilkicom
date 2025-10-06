# alicantilki.com

Personal website for Alican Tilki - Systems & Infrastructure Engineer

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **i18n**: next-intl (English & Turkish)
- **Icons**: Lucide React
- **Deployment**: Plesk with Node.js extension

## Features

- 🌐 Internationalization (EN/TR)
- 🎨 Dark-first design with glassmorphism
- 📱 Fully responsive
- ⚡ Optimized for performance
- 🔍 SEO-friendly with sitemap and OG images
- 🚀 Single-page app showcase (InstantPose)

## Project Structure

```
├── app/
│   ├── [locale]/          # Localized routes
│   │   ├── page.tsx       # Home page
│   │   ├── instantpose/   # InstantPose app page
│   │   ├── about/         # About page
│   │   ├── contact/       # Contact page
│   │   ├── privacy/       # Privacy policy
│   │   └── terms/         # Terms of service
│   ├── api/og/            # OG image generation
│   ├── sitemap.ts         # Dynamic sitemap
│   └── robots.ts          # Robots.txt
├── components/            # React components
├── data/                  # Content data (apps.ts)
├── messages/              # i18n translations
└── lib/                   # Utilities
```

## Development

### Prerequisites

- Node.js 18+
- npm 9+

### Setup

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## Deployment

This application is designed to run on **Plesk with Node.js extension**.

- **English guide**: [README-PLESK.md](./README-PLESK.md)
- **Türkçe rehber**: [PLESK-KURULUM.md](./PLESK-KURULUM.md)

### Quick Start on Plesk

1. Upload files to your domain directory
2. In Plesk → Node.js settings:
   - Set **Application startup file**: `server.js`
   - Set **Node.js version**: 18.x or higher
   - Add environment variables
3. Run `npm ci` (via Plesk or SSH)
4. Run `npm run build`
5. Enable Node.js and restart

The application will automatically use the PORT assigned by Plesk.

## Environment Variables

```bash
NODE_ENV=production
SITE_URL=https://alicantilki.com
PORT=3000
```

## License

© 2025 Alican Tilki. All rights reserved.

