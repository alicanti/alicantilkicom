import { MetadataRoute } from 'next';

const baseUrl = process.env.SITE_URL || 'https://alicantilki.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['en', 'tr'];
  const routes = [
    { path: '', priority: 1 },
    { path: '/instantpose', priority: 0.9 },
    { path: '/about', priority: 0.8 },
    { path: '/contact', priority: 0.8 },
    { path: '/privacy', priority: 0.5 },
    { path: '/terms', priority: 0.5 },
  ];

  const staticPages = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${baseUrl}/${locale}${route.path}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route.priority,
    }))
  );

  return staticPages;
}

