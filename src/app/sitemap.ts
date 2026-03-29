import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://astraen.dev';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/rainvu`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/stock-manager`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/terms`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/privacy`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/rainvu/terms`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/rainvu/privacy`,
            lastModified: new Date(),
        },
        {
            url: `${baseUrl}/rainvu/data-deletion`,
            lastModified: new Date(),
        },
    ];
}
