const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
const blogSlugs = require('./data/blogSlugs.json');
const projectIds = require('./data/projectIds.json');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  exclude: ['/api/*', '/admin/*'],
  changefreq: 'weekly',
  priority: 0.7,
  transform: async (config, path) => {
    let priority = config.priority;
    if (path === '/') priority = 1;
    else if (['/services', '/formations'].includes(path)) priority = 0.8;
    else if (path === '/contact') priority = 0.5;
    return {
      loc: path,
      changefreq: config.changefreq,
      priority,
      lastmod: new Date().toISOString(),
    };
  },
  additionalPaths: async (config) => {
    const paths = [];
    for (const slug of blogSlugs) {
      paths.push({ loc: `/blog/${slug}`, changefreq: 'weekly', priority: 0.7 });
    }
    for (const id of projectIds) {
      paths.push({ loc: `/projects/${id}`, changefreq: 'monthly', priority: 0.7 });
    }
    return paths;
  },
  robotsTxtOptions: {
    policies: [{ userAgent: '*', allow: '/' }],
  },
};
