// app/articles/page.js

import Link from "next/link";

export default async function Articles() {
  const articles = await fetchArticles(); // Récupérez vos articles (par exemple, depuis une API ou une base de données)

  return (
    <main className="p-8">
      <h1 className="text-4xl font-bold mb-4">Articles</h1>
      <ul>
        {articles.map((article) => (
          <li key={article.id} className="mb-4">
            <Link href={`/articles/${article.slug}`} className="text-blue-500">
              {article.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}

// Exemple de fonction de récupération des articles (vous pouvez le remplacer par une API)
async function fetchArticles() {
  return [
    { id: 1, title: "Mon premier article", slug: "meuh" },
    { id: 2, title: "Un autre article", slug: "meuh2" },
    // Ajoutez d'autres articles ici
  ];
}
