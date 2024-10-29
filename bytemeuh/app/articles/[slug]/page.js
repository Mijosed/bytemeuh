// app/articles/[slug]/page.js

import { notFound } from 'next/navigation';
import { fetchArticles, fetchArticleBySlug } from '../../../lib/articles';

export async function generateStaticParams() {
  const articles = await fetchArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }) {
  const article = await fetchArticleBySlug(params.slug);

  if (!article) {
    notFound();
  }

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
      <p>{article.content}</p>
    </main>
  );
}
