import { MetadataRoute } from 'next';

const baseUrl = process.env.SITE_URL || 'https://alicantilki.com';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}

