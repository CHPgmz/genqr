// next-sitemap.config.js
module.exports = {
  siteUrl: "https://genqr.ja-dbmjr.workers.dev", // cambia esto por tu dominio real
  generateRobotsTxt: true, // genera automáticamente robots.txt
  sitemapSize: 5000, // divide en varios sitemaps si hay más de 5000 URLs
  changefreq: "weekly", // sugerencia para los bots
  priority: 0.7, // prioridad por defecto para las páginas
  exclude: [
    "/drafts/*", // rutas que NO quieres indexar
    "/admin/*",
  ],
  robotsTxtOptions: {
    additionalSitemaps: [],
    policies: [{ userAgent: "*", allow: "/" }],
  },
};
