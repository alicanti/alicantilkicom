# Deploying alicantilki.com on Plesk

This guide explains how to deploy and run this Next.js 14 application on Plesk with Node.js extension.

> 🇹🇷 **Türkçe rehber için**: [PLESK-KURULUM.md](./PLESK-KURULUM.md) dosyasına bakın.

## Prerequisites

- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 9.0.0 or higher
- **Plesk**: With Node.js extension installed
- **RAM**: Minimum 512MB (1GB+ recommended)

## Environment Variables

Create a `.env` file in the project root with the following variables:

```bash
NODE_ENV=production
SITE_URL=https://alicantilki.com
PORT=3000
```

**Note**: Plesk will automatically set the `PORT` environment variable. The application is configured to respect this.

## Deployment Steps

### 1. Upload Files

Upload all project files to your Plesk domain directory (e.g., `/httpdocs/`).

### 2. Install Dependencies

In the Plesk Node.js settings or via SSH:

```bash
npm ci
```

This installs production dependencies from `package-lock.json` for reproducible builds.

### 3. Build the Application

```bash
npm run build
```

This creates an optimized production build in the `.next` directory.

### 4. Configure Node.js in Plesk

1. Go to **Domains** → Select your domain → **Node.js**
2. Set the following:
   - **Node.js version**: 18.x or higher
   - **Application mode**: Production
   - **Application root**: `/httpdocs` (or your project directory)
   - **Application startup file**: Leave empty (we'll use npm scripts)
   - **Custom environment variables**: Add your `.env` variables

### 5. Configure Application Startup

In Plesk Node.js settings:
- **Application startup file**: `server.js`
- **Package.json**: Should auto-detect your `package.json`

The `server.js` file is a custom server that properly handles the Plesk PORT environment variable.

### 6. Start the Application

1. Click **Enable Node.js** in Plesk
2. Click **Restart App**

The application will start on the port assigned by Plesk (available via `$PORT` environment variable).

**Important**: The first start may take 30-60 seconds as Next.js initializes.

## Scripts Reference

- `npm run dev` - Development server (not for production)
- `npm run build` - Build production bundle
- `npm start` - Start production server (respects `$PORT` env var)
- `npm run lint` - Run ESLint

## Restarting the Application

### Via Plesk UI
1. Go to **Domains** → Your domain → **Node.js**
2. Click **Restart App**

### Via SSH
```bash
cd /var/www/vhosts/alicantilki.com/httpdocs
npm start
```

## Troubleshooting

### Application won't start
- Check Node.js version: `node --version` (should be 18+)
- Verify build completed: Check for `.next` directory
- Review error logs in Plesk → **Logs** → **Error Log**

### Port conflicts
- Ensure the application uses `process.env.PORT`
- Check `package.json` start script: `next start -p ${PORT:-3000}`

### Build failures
- Clear cache: `rm -rf .next node_modules`
- Reinstall: `npm ci`
- Rebuild: `npm run build`

### Environment variables not loading
- Verify `.env` file exists and has correct permissions
- Check Plesk Node.js custom environment variables
- Restart the application after changes

## Performance Optimization

1. **Enable compression** in Plesk Apache/nginx settings
2. **Enable caching** for static assets
3. **Use CDN** for `/_next/static/` files
4. **Monitor resources** via Plesk statistics

## Security

- Keep Node.js updated via Plesk
- Regularly update dependencies: `npm audit fix`
- Use HTTPS (configure SSL in Plesk)
- Set proper file permissions (644 for files, 755 for directories)

## Support

For issues specific to this application, contact: contact@alicantilki.com

For Plesk-related issues, consult [Plesk Documentation](https://docs.plesk.com/).

