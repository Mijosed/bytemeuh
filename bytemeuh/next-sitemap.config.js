module.exports = {
  siteUrl: 'https://www.bytemeuh-zoo.fr/', 
  generateRobotsTxt: true, 
  robotsTxtOptions: {
      policies: [
          { userAgent: '*', allow: '/' }, 
      ],
      additionalSitemaps: [
          'https://www.bytemeuh-zoo.fr/sitemap-0.xml', 
      ],
  },
  changefreq: 'daily', 
  priority: 0.7, 
  transform: async (config, path) => {
      return {
          loc: path, 
          changefreq: config.changefreq, 
          priority: path === '/' ? 1.0 : 0.7, 
          lastmod: new Date().toISOString(), 
      };
  },
};
