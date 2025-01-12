module.exports = {
  siteUrl: 'https://www.bytemeuh-zoo.fr/', // URL de base du site
  generateRobotsTxt: true, // Génère automatiquement un fichier robots.txt
  robotsTxtOptions: {
      policies: [
          { userAgent: '*', allow: '/' }, // Autorise tous les robots à explorer le site
      ],
      additionalSitemaps: [
          'https://www.bytemeuh-zoo.fr/sitemap-0.xml', // Ajoutez des sitemaps personnalisés si nécessaire
      ],
  },
  changefreq: 'daily', // Fréquence de changement estimée des pages
  priority: 0.7, // Priorité par défaut pour les pages
  sitemapSize: 5000, // Taille maximale des fichiers sitemap (par défaut : 5000 URLs par fichier)
  transform: async (config, path) => {
      // Transformer chaque URL avant de l'ajouter au sitemap
      return {
          loc: path, // URL
          changefreq: config.changefreq, // Fréquence de changement
          priority: path === '/' ? 1.0 : 0.7, // Donne une priorité élevée à la page d'accueil
          lastmod: new Date().toISOString(), // Date de dernière modification
      };
  },
};
