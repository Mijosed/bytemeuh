import articlesData from '../data/articles.json';

export async function fetchArticles() {
  return articlesData;
}

export async function fetchArticleBySlug(slug) {
  const articles = await fetchArticles();
  return articles.find((article) => article.slug === slug);
}