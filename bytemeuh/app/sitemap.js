export default function sitemap() {
    return [
      {
        url: 'https://bytemeuh-zoo.fr',
        lastModified: new Date(),
        changeFrequency: 'yearly',
        priority: 1,
      },
      {
        url: 'https://bytemeuh-zoo.fr/articles',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    ]
  }